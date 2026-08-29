import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Skills from "@/components/sections/Skills";
import { sections } from "@/lib/content";

const section = sections.find((s) => s.id === "skills")!;

export const metadata: Metadata = {
  title: section.title,
  alternates: { canonical: section.href },
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader section={section} />
      <Skills standalone />
    </>
  );
}
