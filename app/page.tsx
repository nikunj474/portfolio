import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";

/**
 * The index stacks every section in order. Each one also has its own route
 * under app/<section>/, rendering the identical component, so the nav works as
 * both an in-page jump and a page link.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}
