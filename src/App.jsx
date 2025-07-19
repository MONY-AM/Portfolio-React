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

  //[0D1117,1E1E2F,000000,FFFFFF ,F0EBF8 ,FAF3E0 ,00D1B2,6C63FF,FF6B6B,1E1E2F ]
  return (
    <main className="bg-[#0D1117] text-white min-h-screen">
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
