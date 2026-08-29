import type { Project } from "@/lib/content";

/**
 * Abstract compositions that sit beside a featured project card. Drawn in the
 * site palette rather than sourced, so there is nothing to license and the
 * artwork cannot drift out of the design system.
 */

function Mesh() {
  // Concentric arcs radiating from a single origin, crossed by a grid: a node
  // reaching outward through structure.
  const rings = [26, 44, 62, 80, 98];
  return (
    <svg viewBox="0 0 200 260" className="h-full w-full" aria-hidden="true">
      <defs>
        <clipPath id="mesh-clip">
          <rect x="0" y="0" width="200" height="260" />
        </clipPath>
      </defs>
      <g clipPath="url(#mesh-clip)">
        <rect width="200" height="260" className="fill-cream-pale" />

        {Array.from({ length: 13 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            x2="200"
            y1={i * 20}
            y2={i * 20}
            className="stroke-charcoal/10"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 11 }, (_, i) => (
          <line
            key={`v${i}`}
            y1="0"
            y2="260"
            x1={i * 20}
            x2={i * 20}
            className="stroke-charcoal/10"
            strokeWidth="1"
          />
        ))}

        {rings.map((r, i) => (
          <circle
            key={r}
            cx="40"
            cy="200"
            r={r}
            fill="none"
            className={i % 2 === 0 ? "stroke-charcoal/45" : "stroke-terracotta/60"}
            strokeWidth="1"
          />
        ))}

        <line x1="40" y1="200" x2="176" y2="64" className="stroke-charcoal/60" strokeWidth="1" />
        <line x1="40" y1="200" x2="160" y2="180" className="stroke-charcoal/35" strokeWidth="1" />
        <line x1="40" y1="200" x2="60" y2="40" className="stroke-charcoal/35" strokeWidth="1" />

        <circle cx="40" cy="200" r="5" className="fill-terracotta" />
        <circle cx="176" cy="64" r="3.5" className="fill-charcoal" />
        <circle cx="160" cy="180" r="3.5" className="fill-charcoal" />
        <circle cx="60" cy="40" r="3.5" className="fill-charcoal" />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="199"
        height="259"
        fill="none"
        className="stroke-charcoal/30"
      />
    </svg>
  );
}

function Cluster() {
  // A stack of horizontal bands, one broken and one filled: replicas in a row,
  // one of them gone, one promoted.
  const bands = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <svg viewBox="0 0 200 260" className="h-full w-full" aria-hidden="true">
      <rect width="200" height="260" className="fill-cream-pale" />

      {bands.map((b) => {
        const y = 18 + b * 29;
        const broken = b === 4;
        const primary = b === 2;
        return (
          <g key={b}>
            <rect
              x="24"
              y={y}
              width={broken ? 70 : 152}
              height="18"
              fill="none"
              className={primary ? "stroke-terracotta" : "stroke-charcoal/45"}
              strokeWidth="1"
              strokeDasharray={broken ? "3 4" : undefined}
            />
            {primary ? <rect x="24" y={y} width="152" height="18" className="fill-terracotta/15" /> : null}
            {!broken
              ? Array.from({ length: 6 }, (_, i) => (
                  <line
                    key={i}
                    x1={24 + 22 + i * 22}
                    x2={24 + 22 + i * 22}
                    y1={y}
                    y2={y + 18}
                    className="stroke-charcoal/20"
                    strokeWidth="1"
                  />
                ))
              : null}
            <circle
              cx="14"
              cy={y + 9}
              r="3.5"
              className={broken ? "fill-cream stroke-charcoal/40" : primary ? "fill-terracotta" : "fill-charcoal/60"}
              strokeWidth="1"
            />
          </g>
        );
      })}

      <rect x="0.5" y="0.5" width="199" height="259" fill="none" className="stroke-charcoal/30" />
    </svg>
  );
}

export default function ProjectArt({ variant }: { variant: NonNullable<Project["art"]> }) {
  return variant === "mesh" ? <Mesh /> : <Cluster />;
}
