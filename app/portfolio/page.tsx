import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Portfolio from "@/components/sections/Portfolio";
import { sections } from "@/lib/content";

const section = sections.find((s) => s.id === "portfolio")!;

export const metadata: Metadata = {
  title: section.title,
  alternates: { canonical: section.href },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader section={section} />
      <Portfolio standalone />
    </>
  );
}
