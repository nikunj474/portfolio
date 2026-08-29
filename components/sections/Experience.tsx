import Pill from "@/components/Pill";
import Reveal from "@/components/Reveal";
import SectionShell from "@/components/SectionShell";
import { experience, sections } from "@/lib/content";

const section = sections.find((s) => s.id === "experience")!;

export default function Experience({ standalone = false }: { standalone?: boolean }) {
  return (
    <SectionShell section={section} standalone={standalone} tint>
      <ul className="divide-y divide-charcoal/20 border-y border-charcoal/20">
        {experience.map((role, i) => (
          <Reveal as="li" key={role.company} step={i} className="block">
            <article className="grid gap-5 py-9 lg:grid-cols-12 lg:gap-10">
              {/* Dates rail: left-aligned on desktop, above the role on mobile. */}
              <div className="lg:col-span-3">
                <p className="meta">{role.dates}</p>
                <p className="meta mt-1 text-charcoal-mute/80">{role.note}</p>
              </div>

              <div className="lg:col-span-9">
                <h3 className="font-serif text-2xl leading-tight text-charcoal sm:text-[1.75rem]">
                  {role.company}
                </h3>
                <p className="mt-1.5 flex items-center gap-2 font-sans text-[0.95rem] font-medium text-charcoal">
                  <span className="dot" />
                  {role.title}
                </p>

                <ul className="mt-5 space-y-3">
                  {role.bullets.map((b) => (
                    <li
                      key={b}
                      className="max-w-[62ch] border-l border-charcoal/20 pl-4 font-sans text-[0.9rem] leading-[1.7] text-charcoal-soft"
                    >
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {role.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
