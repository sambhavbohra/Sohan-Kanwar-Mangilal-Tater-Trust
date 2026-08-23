import { useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, type MotionValue } from "framer-motion";
import { STATES, CITY_COORDS } from "./indiaStatesData";

export const INDIA_MAP_VIEWBOX_W = 460;
export const INDIA_MAP_VIEWBOX_H = 520;
export const INDIA_MAP_VIEWBOX = `0 0 ${INDIA_MAP_VIEWBOX_W} ${INDIA_MAP_VIEWBOX_H}`;

export { CITY_COORDS };

export const places: Record<string, string[]> = {
  "Tamil Nadu": ["Chennai", "Pammal", "Uttukottai", "Coimbatore"],
  Rajasthan: ["Merta City", "Merta Road", "Nagaur", "Mandoli", "Khwaspura", "Lambiya", "Kapeda", "Khajwana", "Ostra", "Jaipur"],
  Karnataka: ["Bangalore", "Chikkaballapur"],
  Gujarat: ["Palitana"],
};

const CITY_TO_STATE: Record<string, string> = Object.fromEntries(
  Object.entries(places).flatMap(([state, cities]) => cities.map((c) => [c, state]))
);

const MAX_ZOOM = 6;

function boundsFor(cities: string[], pad: number) {
  const xs = cities.map((c) => CITY_COORDS[c][0]);
  const ys = cities.map((c) => CITY_COORDS[c][1]);
  const minX = Math.min(...xs) - pad;
  const maxX = Math.max(...xs) + pad;
  const minY = Math.min(...ys) - pad;
  const maxY = Math.max(...ys) + pad;
  const scale = Math.min(MAX_ZOOM, INDIA_MAP_VIEWBOX_W / (maxX - minX), INDIA_MAP_VIEWBOX_H / (maxY - minY));
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  return {
    scale,
    tx: INDIA_MAP_VIEWBOX_W / 2 - scale * cx,
    ty: INDIA_MAP_VIEWBOX_H / 2 - scale * cy,
  };
}

const stateBounds = (state: string) => boundsFor(places[state] ?? [], 30);
const cityBounds = (city: string) => boundsFor([city], 22);

const FULL_VIEW = { scale: 1, tx: 0, ty: 0 };

function CityLabel({
  name,
  scaleMV,
  txMV,
  tyMV,
  emphasize,
}: {
  name: string;
  scaleMV: MotionValue<number>;
  txMV: MotionValue<number>;
  tyMV: MotionValue<number>;
  emphasize: boolean;
}) {
  const [cx, cy] = CITY_COORDS[name];
  const x = useTransform([scaleMV, txMV], ([s, t]: number[]) => s * cx + t);
  const y = useTransform([scaleMV, tyMV], ([s, t]: number[]) => s * cy + t - 9);

  return (
    <motion.text
      style={{ x, y }}
      textAnchor="middle"
      fontSize={emphasize ? 11 : 9}
      fontWeight={emphasize ? 700 : 500}
      fill={emphasize ? "var(--brand-brown)" : "#33413f"}
      opacity={emphasize ? 1 : 0.75}
    >
      {name}
    </motion.text>
  );
}

export function IndiaMap({
  activeCity,
  zoomedState,
}: {
  activeCity: string | null;
  zoomedState: string | null;
}) {
  const scaleMV = useMotionValue(1);
  const txMV = useMotionValue(0);
  const tyMV = useMotionValue(0);
  const groupRef = useRef<SVGGElement>(null);
  const prevKeyRef = useRef("full");

  // Hovering a city zooms in tight on just that point; once you leave, it
  // falls back to whatever state is pinned via click, then to the full map.
  const effectiveState = zoomedState ?? (activeCity ? CITY_TO_STATE[activeCity] : null);

  const target = useMemo(() => {
    if (activeCity) return { key: `city:${activeCity}`, ...cityBounds(activeCity) };
    if (zoomedState) return { key: `state:${zoomedState}`, ...stateBounds(zoomedState) };
    return { key: "full", ...FULL_VIEW };
  }, [activeCity, zoomedState]);

  // motion.g always computes its own transform (auto bbox-center origin) for
  // the x/y/scale shorthand, silently discarding any custom transform we pass
  // — so the pan/zoom matrix is written to the DOM by hand instead, pivoting
  // at (0,0) as the math here expects.
  useEffect(() => {
    const write = () => {
      groupRef.current?.setAttribute(
        "transform",
        `matrix(${scaleMV.get()},0,0,${scaleMV.get()},${txMV.get()},${tyMV.get()})`
      );
    };
    write();
    const unsubs = [scaleMV.on("change", write), txMV.on("change", write), tyMV.on("change", write)];
    return () => unsubs.forEach((u) => u());
  }, [scaleMV, txMV, tyMV]);

  useEffect(() => {
    let cancelled = false;
    const active: ReturnType<typeof animate>[] = [];
    const runTo = (dest: { scale: number; tx: number; ty: number }, duration: number) => {
      active.push(animate(scaleMV, dest.scale, { duration, ease: "easeInOut" }));
      active.push(animate(txMV, dest.tx, { duration, ease: "easeInOut" }));
      active.push(animate(tyMV, dest.ty, { duration, ease: "easeInOut" }));
    };

    const prevKey = prevKeyRef.current;
    const switchingBetweenTwoSpots = prevKey !== "full" && target.key !== "full" && prevKey !== target.key;

    if (switchingBetweenTwoSpots) {
      // Zoom out to the full map first, then into the new spot — instead of
      // sliding diagonally between two unrelated locations.
      Promise.all([
        animate(scaleMV, FULL_VIEW.scale, { duration: 0.25, ease: "easeInOut" }),
        animate(txMV, FULL_VIEW.tx, { duration: 0.25, ease: "easeInOut" }),
        animate(tyMV, FULL_VIEW.ty, { duration: 0.25, ease: "easeInOut" }),
      ]).then(() => {
        if (!cancelled) runTo(target, 0.45);
      });
    } else {
      runTo(target, 0.5);
    }

    prevKeyRef.current = target.key;
    return () => {
      cancelled = true;
      active.forEach((c) => c.stop());
    };
  }, [target, scaleMV, txMV, tyMV]);

  // Zoomed to one hovered city: show only that label, decluttered. Zoomed to
  // a pinned state (no hover): show the whole state's labels.
  const visibleCities = activeCity ? [activeCity] : effectiveState ? places[effectiveState] : Object.keys(CITY_COORDS);

  return (
    <svg viewBox={INDIA_MAP_VIEWBOX} className="h-full w-full" aria-hidden>
      <g ref={groupRef}>
        {STATES.map((s) => {
          const isRelevant = !effectiveState || s.name === effectiveState;
          return (
            <path
              key={s.name}
              d={s.d}
              fill={isRelevant ? "#8FADA8" : "#DCE3E2"}
              stroke="white"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
              style={{ transition: "fill 0.3s ease" }}
            />
          );
        })}
        {Object.entries(CITY_COORDS).map(([name, [x, y]]) => {
          if (activeCity && name !== activeCity) return null;
          const dim = effectiveState && CITY_TO_STATE[name] !== effectiveState;
          const isActive = name === activeCity;
          return (
            <circle
              key={name}
              cx={x}
              cy={y}
              r={isActive ? 4.5 : 2.5}
              fill={isActive ? "var(--brand-brown)" : "var(--brand-green)"}
              opacity={dim ? 0.2 : isActive ? 1 : 0.85}
              vectorEffect="non-scaling-stroke"
              style={{ transition: "opacity 0.3s ease, fill 0.2s ease" }}
            />
          );
        })}
        {activeCity && (
          <motion.circle
            key={activeCity}
            cx={CITY_COORDS[activeCity][0]}
            cy={CITY_COORDS[activeCity][1]}
            fill="none"
            stroke="var(--brand-brown)"
            vectorEffect="non-scaling-stroke"
            strokeWidth={1.5}
            initial={{ r: 4.5, opacity: 0.8 }}
            animate={{ r: 22, opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", repeat: Infinity }}
          />
        )}
      </g>
      {visibleCities.map((name) => (
        <CityLabel key={name} name={name} scaleMV={scaleMV} txMV={txMV} tyMV={tyMV} emphasize={name === activeCity} />
      ))}
    </svg>
  );
}
