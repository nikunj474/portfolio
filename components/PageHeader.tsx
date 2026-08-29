import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Section } from "@/lib/content";

/**
 * Masthead for a section's standalone route. The same content also appears
 * inline on "/", so this exists purely to give the dedicated page a title and
 * a way back.
 */
export default function PageHeader({ section }: { section: Section }) {
  return (
    <div className="rule-b bg-cream-deep/50">
      <div className="shell py-14 sm:py-20">
        <Reveal>
          <p className="meta mb-6 flex items-center gap-3">
            <Link href="/" className="link-underline">
              Index
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-charcoal">{section.label}</span>
          </p>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-meta-lg text-terracotta">{section.index}</span>
            <h1 className="font-serif text-display-sm text-charcoal">{section.title}</h1>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
