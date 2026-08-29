import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/sections/About";
import { sections } from "@/lib/content";

const section = sections.find((s) => s.id === "about")!;

export const metadata: Metadata = {
  title: section.title,
  alternates: { canonical: section.href },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader section={section} />
      <About standalone />
    </>
  );
}
