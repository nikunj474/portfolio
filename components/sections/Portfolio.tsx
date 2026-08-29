import Pill from "@/components/Pill";
import ProjectArt from "@/components/ProjectArt";
import Reveal from "@/components/Reveal";
import SectionShell from "@/components/SectionShell";
import { projects, sections, type Project } from "@/lib/content";

const section = sections.find((s) => s.id === "portfolio")!;

function Links({ links }: { links: Project["links"] }) {
  if (links.length === 0) {
    return <p className="meta text-charcoal-mute/70">Private repository</p>;
  }
  return (
    <div className="flex flex-wrap gap-5">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="border-b border-charcoal pb-0.5 font-mono text-meta uppercase text-charcoal transition-colors duration-200 ease-editorial hover:border-terracotta hover:text-terracotta"
        >
          {l.label} ↗
        </a>
      ))}
    </div>
  );
}

function Card({ project, n }: { project: Project; n: number }) {
  const featured = project.featured === true;

  return (
    <article
      className={[
        "flex h-full flex-col border border-charcoal/25 bg-cream-pale/70 p-6 transition-colors duration-300 ease-editorial hover:border-charcoal sm:p-8",
        featured ? "lg:col-span-2" : "",
      ].join(" ")}
    >
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-meta text-terracotta">
          {String(n).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-charcoal/20" />
        {featured ? <span className="meta text-charcoal">Featured</span> : null}
      </div>

      <h3 className="font-serif text-[1.6rem] leading-tight text-charcoal sm:text-3xl">
        {project.name}
      </h3>

      <p className="mt-3 max-w-[60ch] font-serif text-lg italic leading-snug text-charcoal-soft">
        {project.blurb}
      </p>

      {/* Featured cards run three bullets down the left with the artwork
          holding the fourth slot on the right. */}
      <div className={featured ? "mt-6 grid gap-8 lg:grid-cols-3" : "mt-6"}>
        <ul className={featured ? "space-y-3 lg:col-span-2" : "space-y-3"}>
          {project.bullets.map((b) => (
            <li
              key={b}
              className="border-l border-charcoal/20 pl-4 font-sans text-[0.875rem] leading-[1.7] text-charcoal-soft"
            >
              {b}
            </li>
          ))}
        </ul>

        {featured && project.art ? (
          <div className="hidden lg:block">
            <ProjectArt variant={project.art} />
          </div>
        ) : null}
      </div>

      <div className="mt-auto pt-7">
        <div className="mb-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
        <Links links={project.links} />
      </div>
    </article>
  );
}

export default function Portfolio({ standalone = false }: { standalone?: boolean }) {
  return (
    <SectionShell section={section} standalone={standalone}>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            step={i % 2}
            className={p.featured ? "lg:col-span-2" : ""}
          >
            <Card project={p} n={i + 1} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
