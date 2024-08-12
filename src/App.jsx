import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased
    selection:bg-gray-400 selection:text-black">
      <div className="fixed w-full h-full top-0 -z-50">
        <div className="absolute top-0 z-20 h-screen w-screen
        bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,
        rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}