import Reveal from "@/components/Reveal";
import SectionShell from "@/components/SectionShell";
import TechIcon from "@/components/TechIcon";
import { sections, skills } from "@/lib/content";

const section = sections.find((s) => s.id === "skills")!;

export default function Skills({ standalone = false }: { standalone?: boolean }) {
  return (
    <SectionShell section={section} standalone={standalone}>
      <div className="space-y-12">
        {skills.map((group, gi) => (
          <Reveal key={group.label} step={gi}>
            <h3 className="meta mb-4 flex items-center gap-3 text-charcoal">
              <span className="dot" />
              {group.label}
            </h3>

            {/* Borders live on the container's top and left and on each cell's
                right and bottom, so adjacent cells share one 1px rule rather
                than stacking two. */}
            <div className="grid grid-cols-3 border-l border-t border-charcoal/25 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex aspect-square flex-col items-center justify-center gap-3 border-b border-r border-charcoal/25 px-2 py-4 transition-colors duration-200 ease-editorial hover:bg-terracotta"
                >
                  <TechIcon icon={tech.icon} glyph={group.glyph} />
                  <span className="text-center font-mono text-[0.625rem] uppercase leading-tight tracking-[0.12em] text-charcoal-soft transition-colors duration-200 ease-editorial group-hover:text-cream">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
