import Reveal from "@/components/Reveal";
import SectionShell from "@/components/SectionShell";
import { about, sections } from "@/lib/content";

const section = sections.find((s) => s.id === "about")!;

export default function About({ standalone = false }: { standalone?: boolean }) {
  return (
    <SectionShell section={section} standalone={standalone}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <h3 className="font-serif text-display-sm leading-[1.05] text-charcoal">
            {about.statement}
          </h3>
        </Reveal>

        <div className="lg:col-span-7">
          {/* Spacing lives on the Reveal wrappers, which are siblings. Putting
              last:mb-0 on the paragraph matched every one of them, since each
              paragraph is an only child of its own wrapper. */}
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} step={i + 1} className="mb-6 last:mb-0">
              <p className="font-sans text-[0.975rem] leading-[1.75] text-charcoal-soft">
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal step={about.paragraphs.length + 1}>
            <a
              href={about.resume.href}
              className="mt-8 inline-block border-b border-charcoal pb-1 font-mono text-meta uppercase text-charcoal transition-colors duration-200 ease-editorial hover:border-terracotta hover:text-terracotta"
            >
              {about.resume.label} ↓
            </a>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
