import About from "@/sections/About";
import Brands from "@/sections/Brands";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Brands />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
