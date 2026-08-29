import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { about, hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="index" className="scroll-mt-nav">
      <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
        {/* Left: the name at display scale, then the sub-headline and bio. */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="meta mb-8">Portfolio · v2 · 2026</p>
          </Reveal>

          <Reveal step={1}>
            <h1 className="font-serif text-display text-charcoal">
              <span className="block">{hero.first}</span>
              <span className="block italic">{hero.last}</span>
            </h1>
          </Reveal>

          <Reveal step={2}>
            <p className="mt-8 max-w-prose border-l-2 border-terracotta pl-4 font-sans text-base font-medium leading-snug text-charcoal sm:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal step={3}>
            <p className="mt-6 max-w-prose font-serif text-lg italic leading-relaxed text-charcoal-soft sm:text-xl">
              {hero.bio}
            </p>
          </Reveal>

          <Reveal step={4}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="border border-charcoal bg-charcoal px-5 py-2.5 font-mono text-meta uppercase text-cream transition-colors duration-200 ease-editorial hover:bg-terracotta hover:border-terracotta"
              >
                See the work
              </Link>
              <a
                href={about.resume.href}
                className="border border-charcoal px-5 py-2.5 font-mono text-meta uppercase text-charcoal transition-colors duration-200 ease-editorial hover:bg-charcoal hover:text-cream"
              >
                Resume ↓
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: portrait in a thin rule, with the metadata block beneath. */}
        <div className="lg:col-span-5">
          <Reveal step={2}>
            <div className="border border-charcoal bg-cream-pale p-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-charcoal/30">
                <Image
                  src={hero.portrait.src}
                  alt={hero.portrait.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top grayscale-[15%]"
                />
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
