import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function Counter({
  to,
  prefix = "",
  suffix = "",
  format = "number",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  format?: "number" | "inr";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => spring.on("change", (v) => setVal(v)), [spring]);

  const formatted =
    format === "inr"
      ? new Intl.NumberFormat("en-IN").format(Math.round(val))
      : new Intl.NumberFormat("en-US").format(Math.round(val));

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
