import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Particles from "../src/components/Particles";
import About from "../src/sections/About";
import Projects from "../src/sections/Projects";
import Contact from "../src/sections/Contact";
import Experience from "../src/sections/Experience";
import Counters from "../src/components/Counters";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative">
        <Particles />
        <div className="content-root">
          {/* Hero Section with Side-by-Side Layout */}
          <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
            <div className="absolute inset-0 gradient-mesh opacity-40" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: Hero Text */}
              <Hero />

              {/* Right column removed as requested (3D avatar removed) */}
              <div className="w-full h-[500px] lg:h-[600px] hidden lg:block" />
            </div>
          </section>
        </div>
      </div>

      <section className="py-12 px-6">
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
