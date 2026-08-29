import type { SkillGroup } from "@/lib/content";

/**
 * Geometric marks for skill pills. Deliberately abstract rather than brand
 * logos: one visual language, no licensing questions, and it survives a
 * technology being renamed.
 */
const paths: Record<SkillGroup["glyph"], React.ReactNode> = {
  square: <rect x="1.5" y="1.5" width="7" height="7" />,
  circle: <circle cx="5" cy="5" r="3.5" />,
  diamond: <path d="M5 1.2 8.8 5 5 8.8 1.2 5Z" />,
  triangle: <path d="M5 1.4 9 8.6H1Z" />,
  arrow: <path d="M1.5 5h7M5.5 2l3 3-3 3" />,
  bars: <path d="M2 8.5V4M5 8.5V1.5M8 8.5V6" />,
  grid: <path d="M1.5 1.5h7v7h-7zM5 1.5v7M1.5 5h7" />,
};

export default function Glyph({ name }: { name: SkillGroup["glyph"] }) {
  return (
    <svg
      viewBox="0 0 10 10"
      className="h-2.5 w-2.5 shrink-0 fill-none stroke-terracotta"
      strokeWidth={1.2}
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
