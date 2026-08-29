import Pill from "@/components/Pill";
import Reveal from "@/components/Reveal";
import SectionShell from "@/components/SectionShell";
import { sections, skills } from "@/lib/content";

const section = sections.find((s) => s.id === "skills")!;

export default function Skills({ standalone = false }: { standalone?: boolean }) {
  return (
    <SectionShell section={section} standalone={standalone}>
      <ul className="divide-y divide-charcoal/20 border-y border-charcoal/20">
        {skills.map((group, i) => (
          <Reveal as="li" key={group.label} step={i} className="block">
            <div className="grid gap-4 py-7 lg:grid-cols-12 lg:gap-10">
              <h3 className="meta text-charcoal lg:col-span-3">{group.label}</h3>
              <div className="flex flex-wrap gap-2 lg:col-span-9">
                {group.items.map((item) => (
                  <Pill key={item} glyph={group.glyph}>
                    {item}
                  </Pill>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
