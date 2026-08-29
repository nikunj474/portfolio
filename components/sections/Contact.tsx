import Reveal from "@/components/Reveal";
import SectionShell from "@/components/SectionShell";
import { contact, sections } from "@/lib/content";

const section = sections.find((s) => s.id === "contact")!;

export default function Contact({ standalone = false }: { standalone?: boolean }) {
  return (
    <SectionShell section={section} standalone={standalone} tint>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <h3 className="font-serif text-display-sm leading-[1.05] text-charcoal">
            Let&rsquo;s build something
            <span className="italic"> that holds up.</span>
          </h3>
        </Reveal>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-charcoal/20 border-y border-charcoal/20">
            {contact.links.map((l, i) => (
              <Reveal as="li" key={l.label} step={i} className="block">
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-baseline justify-between gap-6 py-5 transition-colors duration-200 ease-editorial hover:text-terracotta"
                >
                  <span className="meta group-hover:text-terracotta">{l.label}</span>
                  <span className="font-serif text-lg text-charcoal transition-colors duration-200 group-hover:text-terracotta sm:text-xl">
                    {l.value} <span className="font-sans text-sm">↗</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
