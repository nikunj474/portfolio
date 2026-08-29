import Glyph from "@/components/Glyph";
import type { SkillGroup } from "@/lib/content";
import { techIcons } from "@/lib/tech-icons";

/**
 * Brand mark for a technology, in the brand's own colour.
 *
 * The colour is passed as a CSS custom property rather than an inline fill, so
 * the group-hover rule can override it. An inline fill attribute would win the
 * cascade and the logo would stay coloured on the terracotta tile.
 *
 * Concepts with no brand mark (RAG, LoRA, CI/CD) fall back to the group's
 * geometric glyph, so every tile keeps the same rhythm.
 */
export default function TechIcon({
  icon,
  glyph,
}: {
  icon?: string;
  glyph: SkillGroup["glyph"];
}) {
  const brand = icon ? techIcons[icon] : undefined;

  if (!brand) {
    return (
      <span className="flex h-7 w-7 items-center justify-center [&_svg]:h-5 [&_svg]:w-5 [&_svg]:stroke-terracotta group-hover:[&_svg]:stroke-cream">
        <Glyph name={glyph} />
      </span>
    );
  }

  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      style={{ ["--brand" as string]: brand.hex }}
      className="h-7 w-7 fill-[var(--brand)] transition-colors duration-200 ease-editorial group-hover:fill-cream"
    >
      <path d={brand.path} />
    </svg>
  );
}
