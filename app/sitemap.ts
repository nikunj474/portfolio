import type { MetadataRoute } from "next";
import { sections, site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sections.map((s) => ({
    url: `${site.url}${s.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: s.href === "/" ? 1 : 0.7,
  }));
}
