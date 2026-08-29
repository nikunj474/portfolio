"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { sections } from "@/lib/content";

/**
 * Sticky nav. Two modes, because the site is both a single scrolling page and
 * a set of standalone routes:
 *
 *  - on "/", the active link follows the section currently in view
 *  - on any other route, the active link is simply the current path
 */
export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [visible, setVisible] = useState<string>("index");

  useEffect(() => {
    if (!isHome) return;

    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => n !== null);

    if (nodes.length === 0) return;

    // rootMargin pulls the detection band to the upper third of the viewport so
    // a section counts as "current" once its heading clears the nav, not when
    // its last pixel finally scrolls in.
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (inView[0]) setVisible(inView[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [isHome]);

  // trailingSlash is on, so usePathname() returns "/about/" while hrefs are
  // written "/about". Compare both sides stripped.
  const strip = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
  const activeId = isHome
    ? visible
    : sections.find((s) => strip(s.href) === strip(pathname))?.id;

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal bg-cream/92 backdrop-blur-sm">
      <div className="shell flex h-nav items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-xl leading-none tracking-tight text-charcoal sm:text-2xl"
        >
          Nikunj Agrawal
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8">
            {sections.map((s) => {
              const active = s.id === activeId;
              return (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "block border-b-2 pb-1 font-mono text-meta uppercase transition-colors duration-200 ease-editorial",
                      active
                        ? "border-terracotta text-charcoal"
                        : "border-transparent text-charcoal-mute hover:text-charcoal",
                    ].join(" ")}
                  >
                    {s.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile: the same links as a single scrollable rail rather than a
          hamburger, which keeps every destination one tap away. */}
      <nav aria-label="Primary" className="border-t border-charcoal/25 md:hidden">
        <ul className="shell flex snap-x gap-5 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((s) => {
            const active = s.id === activeId;
            return (
              <li key={s.id} className="snap-start">
                <Link
                  href={s.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "block whitespace-nowrap border-b-2 pb-0.5 font-mono text-meta uppercase",
                    active ? "border-terracotta text-charcoal" : "border-transparent text-charcoal-mute",
                  ].join(" ")}
                >
                  {s.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
