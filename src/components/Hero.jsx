import React from "react";
import Navbar from "./Navbar";
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h[550px] sm:min-h[600px] flex flex-col items-center">
      <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] vai-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl"></div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4
      md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10 sm:pt-32"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header className="sm:ml-3 md:ml-0">
            <h1 className="text-4xl sm:text-4xl md:text-4xl font-bold text-white mb-4 ">
              Hi, I'm ROTHMONY
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#c744ec] md:text-[#c744ec] mb-2">
              I'm currently graduated from Computer Science.
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
              <img src={github} alt="github" className="w-10 h-10" />
            </a>
            <a href="https://facebook.com/rothmony" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" className="w-8 h-8" />
            </a>
            <a href="https://instagram.com/rothmony" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" className="w-8 h-8" />
            </a>
            <a href="https://telegram.org/rothmony" target="_blank" rel="noopener noreferrer">
              <img src={telegram} alt="telegram" className="w-11 h-11" />
            </a>
          </div>
          <a href="/MyResume.pdf" download className=" border-2 rounded-full px-3 py-2 text-white text-xl lg:text-xl bg-gradient-to-r from-fuchsia-700 to-indigo-500 ">
            Download CV
          </a>
        </section>
      </main>
    </div>
  );
}
