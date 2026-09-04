import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Particles from "../src/components/Particles";
import About from "../src/sections/About";
import Projects from "../src/sections/Projects";
import Contact from "../src/sections/Contact";
import Experience from "../src/sections/Experience";
import Counters from "../src/components/Counters";
import Footer from "../src/components/Footer";
import Cursor from "../src/components/Cursor";

export default function Home() {
  return (
    <div id="home" className="min-h-screen flex flex-col overflow-x-clip">
      <Cursor />
      <Navbar />
      <div className="relative">
        <Particles />
        <div className="content-root">
          <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="absolute inset-0 jarvis-grid opacity-50" />
            <div className="absolute inset-0 jarvis-scanline opacity-60" />
            <div className="absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-cyan-500/10 blur-[110px]" />
            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Hero />
            </div>
          </section>
        </div>
      </div>

      <section className="py-10 px-6 border-y border-white/[.06] bg-white/[.015]">
        <div className="max-w-6xl mx-auto">
          <Counters />
        </div>
      </section>

      <About />

      <Experience />

      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}
