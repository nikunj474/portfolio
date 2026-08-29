import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/sections/Contact";
import { sections } from "@/lib/content";

const section = sections.find((s) => s.id === "contact")!;

export const metadata: Metadata = {
  title: section.title,
  alternates: { canonical: section.href },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader section={section} />
      <Contact standalone />
    </>
  );
}
