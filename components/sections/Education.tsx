import Reveal from "@/components/Reveal";
import SectionShell from "@/components/SectionShell";
import { education, sections } from "@/lib/content";

const section = sections.find((s) => s.id === "education")!;

export default function Education({ standalone = false }: { standalone?: boolean }) {
  return (
    <SectionShell section={section} standalone={standalone} tint>
      <ul className="divide-y divide-charcoal/20 border-y border-charcoal/20">
        {education.map((e, i) => (
          <Reveal as="li" key={e.school} step={i} className="block">
            <div className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-10">
              <p className="meta lg:col-span-3">{e.dates}</p>

              <div className="lg:col-span-9">
                <h3 className="font-serif text-2xl leading-tight text-charcoal sm:text-3xl">
                  {e.school}
                </h3>
                <p className="mt-1.5 font-sans text-[0.95rem] font-medium text-charcoal">
                  {e.degree}
                </p>
                {e.meta ? <p className="meta mt-1.5">{e.meta}</p> : null}

                <div className="mt-4 space-y-2">
                  {e.detail.map((d) => (
                    <p
                      key={d}
                      className="max-w-prose font-sans text-[0.9rem] leading-relaxed text-charcoal-soft"
                    >
                      {d}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
