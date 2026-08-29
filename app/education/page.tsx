import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Education from "@/components/sections/Education";
import { sections } from "@/lib/content";

const section = sections.find((s) => s.id === "education")!;

export const metadata: Metadata = {
  title: section.title,
  alternates: { canonical: section.href },
};

export default function EducationPage() {
  return (
    <>
      <PageHeader section={section} />
      <Education standalone />
    </>
  );
}
