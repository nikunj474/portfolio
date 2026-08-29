import Image from "next/image";
import Reveal from "@/components/Reveal";
import RotatingBuilds from "@/components/RotatingBuilds";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="index" className="scroll-mt-nav">
      <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-24">
        {/* Left: the name at display scale, then the rotating list. */}
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
            <RotatingBuilds />
          </Reveal>
        </div>

        {/* Right: portrait in a thin rule. */}
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
