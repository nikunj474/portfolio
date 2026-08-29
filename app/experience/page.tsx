import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Experience from "@/components/sections/Experience";
import { sections } from "@/lib/content";

const section = sections.find((s) => s.id === "experience")!;

export const metadata: Metadata = {
  title: section.title,
  alternates: { canonical: section.href },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader section={section} />
      <Experience standalone />
    </>
  );
}
