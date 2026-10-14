import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Work from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}