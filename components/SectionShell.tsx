import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import type { Section } from "@/lib/content";

/**
 * Every section opens with the same architectural rule: a full-bleed 1px line,
 * then a monospace row carrying the two-digit index, a terracotta dot, and the
 * all-caps kicker. `standalone` drops the top rule for the section's own page,
 * where the nav border already supplies it.
 */
export default function SectionShell({
  section,
  children,
  standalone = false,
  tint = false,
}: {
  section: Section;
  children: ReactNode;
  standalone?: boolean;
  tint?: boolean;
}) {
  return (
    <section
      id={section.id}
      className={[
        "scroll-mt-nav",
        standalone ? "" : "rule-t",
        tint ? "bg-cream-deep/60" : "",
      ].join(" ")}
    >
      <div className="shell py-16 sm:py-20 lg:py-28">
        <Reveal>
          <div className="mb-10 flex items-baseline gap-4 sm:mb-14">
            <span className="font-mono text-meta text-charcoal">{section.index}</span>
            <span className="dot translate-y-[-2px]" />
            <h2 className="meta text-charcoal">{section.kicker}</h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
