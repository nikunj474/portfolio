/**
 * Generates lib/tech-icons.ts from simple-icons.
 *
 * The generated file is committed, so the site has no runtime icon dependency
 * and the bundle carries only the ~55 paths actually used rather than the
 * three thousand in the package. Re-run with `npm run icons` after editing the
 * SLUGS list below or bumping simple-icons.
 */
import { writeFileSync } from "node:fs";
import * as si from "simple-icons";

// Every slug referenced by lib/content.ts. Keep sorted.
const SLUGS = [
  "angular", "apachekafka", "c", "cplusplus", "css", "databricks", "django",
  "docker", "dotnet", "express", "fastapi", "flask", "git", "githubactions",
  "graphql", "html5", "huggingface", "javascript", "jenkins", "jira",
  "langchain", "langgraph", "linux", "mlflow", "modelcontextprotocol",
  "mongodb", "nextdotjs", "nodedotjs", "numpy", "onnx", "openapiinitiative",
  "openjdk", "pandas", "postgresql", "prisma", "pytorch", "react", "redis",
  "scikitlearn", "snowflake", "spring", "sqlite", "storybook", "supabase",
  "tailwindcss", "tensorflow", "typescript", "vite", "vllm", "vuedotjs",
  "weightsandbiases", "nvidia",
];

const bySlug = new Map();
for (const key of Object.keys(si)) {
  const icon = si[key];
  if (icon && icon.slug) bySlug.set(icon.slug, icon);
}

const missing = SLUGS.filter((s) => !bySlug.has(s));
if (missing.length) {
  console.error("simple-icons has no entry for:", missing.join(", "));
  process.exit(1);
}

const entries = SLUGS.map((slug) => {
  const { title, hex, path } = bySlug.get(slug);
  return `  ${JSON.stringify(slug)}: { title: ${JSON.stringify(title)}, hex: "#${hex}", path: ${JSON.stringify(path)} },`;
}).join("\n");

const out = `// GENERATED FILE. Do not edit by hand.
// Run \`npm run icons\` to regenerate from simple-icons.
//
// Brand marks are reproduced under each holder's trademark policy to identify
// the technology, not to imply endorsement.

export type TechIcon = { title: string; hex: string; path: string };

export const techIcons: Record<string, TechIcon> = {
${entries}
};
`;

writeFileSync(new URL("../lib/tech-icons.ts", import.meta.url), out);
console.log(`wrote lib/tech-icons.ts with ${SLUGS.length} icons`);
