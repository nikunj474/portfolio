"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger index: each step adds 60ms so items in a list cascade. */
  step?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Reveal-on-scroll wrapper. Fires once, 15% into the viewport, and collapses to
 * a no-op when the OS asks for reduced motion.
 */
export default function Reveal({ children, step = 0, className, as = "div" }: Props) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: step * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  );
}
