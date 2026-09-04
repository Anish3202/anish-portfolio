import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechMarquee } from "./components/TechMarquee";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Philosophy } from "./components/Philosophy";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#080808] text-[#F5F5F5] selection:bg-indigo-500/30 selection:text-white overflow-x-hidden tech-grid">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Desktop customized pointer interaction */}
      <CustomCursor />

      {/* Sticky top navigation */}
      <Navbar />

      {/* Page Content */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Philosophy />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
