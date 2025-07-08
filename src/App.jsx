import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { Certificate } from "./components/Certificate";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificate />
        <Contact />
        <Footer />
        {/* Add other components like Skills, Projects, etc. here */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
    </main>
  );
}

export default App;
