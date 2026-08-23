import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TARGET_SELECTOR = "a, button, [role='button'], input, textarea, select, [data-cursor='magnetic']";
const IGNORE_SELECTOR = "[data-cursor='plain']";
const BASE_SIZE = 14;

type StuckBox = { left: number; top: number; width: number; height: number; radius: string };

export function MagneticCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [box, setBox] = useState<StuckBox | null>(null);
  const targetRef = useRef<HTMLElement | null>(null);

  const outerX = useMotionValue(-100);
  const outerY = useMotionValue(-100);
  const springX = useSpring(outerX, { stiffness: 400, damping: 32, mass: 0.4 });
  const springY = useSpring(outerY, { stiffness: 400, damping: 32, mass: 0.4 });

  const innerX = useMotionValue(-100);
  const innerY = useMotionValue(-100);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    setEnabled(fine.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    fine.addEventListener("change", onChange);
    return () => fine.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      innerX.set(e.clientX);
      innerY.set(e.clientY);
      if (!targetRef.current) {
        outerX.set(e.clientX - BASE_SIZE / 2);
        outerY.set(e.clientY - BASE_SIZE / 2);
      }
    };

    const onOver = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(TARGET_SELECTOR);
      const el = target?.closest(IGNORE_SELECTOR) ? null : target;
      if (el === targetRef.current) return;
      targetRef.current = el;

      if (el) {
        const rect = el.getBoundingClientRect();
        outerX.set(rect.left);
        outerY.set(rect.top);
        setBox({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
          radius: getComputedStyle(el).borderRadius,
        });
      } else {
        setBox(null);
      }
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [enabled, outerX, outerY, innerX, innerY]);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("cursor-none-fine");
    return () => document.documentElement.classList.remove("cursor-none-fine");
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[999] border border-[var(--brand-green)]/40"
        style={{ x: springX, y: springY }}
        animate={{
          width: box?.width ?? BASE_SIZE,
          height: box?.height ?? BASE_SIZE,
          borderRadius: box?.radius ?? "9999px",
          backgroundColor: box ? "rgba(30, 58, 95, 0.14)" : "rgba(30, 58, 95, 0)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[999] h-2 w-2 rounded-full bg-[var(--brand-green)]"
        style={{ x: innerX, y: innerY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: pressed ? 2 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
