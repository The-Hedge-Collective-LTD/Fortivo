"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  compactRise,
  fadeIn,
  fadeInMount,
  floatLoop,
  riseIn,
} from "@/lib/motion-presets";

type Mode = "fade" | "rise" | "compact" | "mount-fade";

const presets = {
  fade: fadeIn,
  rise: riseIn,
  compact: compactRise,
  "mount-fade": fadeInMount,
} as const;

export function Reveal({
  children,
  mode = "compact",
  className,
  delay = 0,
}: {
  children: ReactNode;
  mode?: Mode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const preset = presets[mode];
  const transition =
    "transition" in preset
      ? { ...preset.transition, delay: (preset.transition.delay ?? 0) + delay }
      : undefined;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={preset.initial}
      whileInView={"whileInView" in preset ? preset.whileInView : undefined}
      viewport={"viewport" in preset ? preset.viewport : undefined}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export function CharHeadline({
  text,
  className,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const reduce = useReducedMotion();
  const chars = Array.from(text);

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4, margin: "0px 0px -12% 0px" }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 60,
            mass: 1,
            delay: i * 0.02,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}

export function WordReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="mr-[0.3em] inline-block"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35, margin: "0px 0px -12% 0px" }}
          transition={{
            duration: 1,
            delay: i * 0.05,
            ease: [0.25, 0, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

export function Float({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={floatLoop.animate}
      transition={floatLoop.transition}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCounter({
  to,
  suffix = "",
  className,
  speedMs = 30,
}: {
  to: number;
  suffix?: string;
  className?: string;
  speedMs?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let current = 0;
    const step = Math.max(1, Math.ceil(to / 60));
    const id = window.setInterval(() => {
      current = Math.min(to, current + step);
      setValue(current);
      if (current >= to) window.clearInterval(id);
    }, speedMs);
    return () => window.clearInterval(id);
  }, [inView, to, speedMs, reduce]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2 text-sm text-slate-300">
      <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
      <span>{children}</span>
    </div>
  );
}

