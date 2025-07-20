import React from "react";
import Navbar from "./Navbar";
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
export default function Hero() {
  return (
    <div className="relative overflow-hidden w-full h-auto min-h-[700px] flex flex-col md:items-start sm:items-start sm:justify-start md:justify-start">
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-col items-center md:items-start md:justify-center w-full h-auto px-4
      z-10 text-white pt-20 md:pt-32 m-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative md:justify-start items-center md:items-start "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <header className="sm:ml-3 md:ml-0">
            <h1 className="text-4xl sm:text-4xl md:text-4xl font-bold text-white mb-4 ">
              Hi, I'm ROTHMONY
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#c744ec] md:text-[#c744ec] mb-2">
              I'm currently graduated with a degree in Computer Science at RUPP.
            </h2>
          </header>
          <p className="sm:ml-3 md:ml-0 text-base sm:text-lg md:text-lg text-gray-200 mb-6">
            I'm from Kampong Cham province. I have a passion for web development
            and design. I love to create beautiful and functional websites that
            provide a great user experience. I am always eager to learn new
            technologies and improve my skills. I am currently looking for a job
            to chase my dream career.
          </p>
          <div className="flex items-center space-x-4 mb-6 sm:ml-3 md:ml-0">
            <a href="https://github.com/rothmony" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="w-9 h-9 hover:scale-[1.5] transition-transform duration-200" />
            </a>
            <a href="https://facebook.com/#" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" className="w-11 h-11 hover:scale-[1.5] transition-transform duration-200" />
            </a>
            <a href="https://instagram.com/rothmony" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" className="w-12 h-12 hover:scale-[1.5] transition-transform duration-200" />
            </a>
            <a href="https://telegram.org/rothmony" target="_blank" rel="noopener noreferrer">
              <img src={telegram} alt="telegram" className="w-11 h-11 hover:scale-[1.5] transition-transform duration-200" />
            </a>
          </div>
          <a href="/MyResume.pdf" download className=" border-2 rounded-full px-3 py-2 text-white text-xl lg:text-xl bg-gradient-to-r from-fuchsia-700 to-indigo-500">
            Download CV
          </a>
        </section>
      </main>
    </div>
  );
}
