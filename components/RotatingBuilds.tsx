"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import BuildMark from "@/components/BuildMark";
import { hero } from "@/lib/content";

const INTERVAL_MS = 2000;

export default function RotatingBuilds() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((n) => (n + 1) % hero.builds.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduced]);

  // No motion: show the whole list at once rather than swapping text under
  // someone who has asked the OS for stillness.
  if (reduced) {
    return (
      <ul className="mt-8 max-w-prose space-y-2">
        {hero.builds.map((b) => (
          <li key={b.label} className="flex items-center gap-3">
            <span className="h-6 w-6 shrink-0">
              <BuildMark name={b.mark} />
            </span>
            <span className="font-serif text-xl italic leading-snug text-charcoal">
              {b.label}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  const current = hero.builds[i];

  return (
    <div className="mt-10">
      <p className="meta mb-4">I build</p>

      {/* The row is height-reserved for two lines of the largest phrase, so
          swapping a short label for a long one cannot shift the page. */}
      <div className="flex min-h-[4.6em] items-start gap-4 sm:min-h-[3.1em] sm:gap-5">
        <div className="relative mt-1 h-10 w-10 shrink-0 sm:h-12 sm:w-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.mark}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <BuildMark name={current.mark} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative min-w-0 flex-1">
          <AnimatePresence mode="wait">
            <motion.p
              key={current.label}
              className="font-serif italic leading-[1.08] text-charcoal"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3.15rem)" }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {current.label}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Only one phrase is on screen at a time, so the full list is exposed
          to assistive tech and to anything reading the page as text. */}
      <p className="sr-only">
        I build {hero.builds.map((b) => b.label).join(", ")}.
      </p>
    </div>
  );
}
