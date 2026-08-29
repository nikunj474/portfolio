import Glyph from "@/components/Glyph";
import type { SkillGroup } from "@/lib/content";

export default function Pill({
  children,
  glyph,
}: {
  children: React.ReactNode;
  glyph?: SkillGroup["glyph"];
}) {
  return (
    <span className="pill">
      {glyph ? <Glyph name={glyph} /> : null}
      {children}
    </span>
  );
}
