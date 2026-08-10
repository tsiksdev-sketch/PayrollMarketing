'use client';

import { motion, useReducedMotion } from "framer-motion";

/**
 * Decorative gold contour lines used behind dark hero sections.
 * Concentric arcs + drifting molecular nodes, drawn on-mount.
 */
export function OrbitLines({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  const rings = [180, 300, 430, 570, 720, 880];
  const nodes = [
    { cx: 300, cy: 120, r: 3 },
    { cx: 660, cy: 300, r: 2 },
    { cx: 120, cy: 420, r: 2.5 },
    { cx: 880, cy: 520, r: 3 },
    { cx: 480, cy: 620, r: 2 },
    { cx: 1040, cy: 180, r: 2.5 },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="absolute top-1/2 right-[-18%] h-[190%] w-[130%] -translate-y-1/2 text-gold"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="currentColor" strokeWidth="1" opacity="0.28">
          {rings.map((r, i) => (
            <motion.circle
              key={r}
              cx="980"
              cy="350"
              r={r}
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 - i * 0.11 }}
              transition={{ duration: 1.8, delay: i * 0.12, ease: "easeOut" }}
            />
          ))}
        </g>
        <g stroke="currentColor" strokeWidth="1" opacity="0.16">
          <motion.path
            d="M-60 640 C 240 520, 420 460, 760 470 S 1180 380, 1320 250"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M-60 210 C 260 250, 500 190, 780 90 S 1160 40, 1300 90"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, delay: 0.2, ease: "easeInOut" }}
          />
        </g>
        <g fill="currentColor">
          {nodes.map((n, i) => (
            <motion.circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              opacity={0.5}
              animate={reduce ? { opacity: 0.3 } : { opacity: [0.15, 0.6, 0.15], y: [0, -8, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
