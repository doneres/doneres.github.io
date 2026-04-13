import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About/";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Scanlines retro */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,135,0.015) 2px, rgba(0,255,135,0.015) 4px)",
        }}
      />

      <Header />

      <main className="pt-16">
        <Hero />

        <div className="border-t border-border mx-16" />
        <About />

        <div className="border-t border-border mx-16" />
        <Skills />

        <div className="border-t border-border mx-16" />
        <Projects />

        <div className="border-t border-border mx-16" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
