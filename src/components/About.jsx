import React from "react";
import mony from "../assets/ammony.jpg";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full h-[550px] lg:w-full lg:gap-36 lg:p-5 grid grid-cols-1 lg:grid-cols-2 gap-60 sm:gap-80 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div
            className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px]
             absolute transform z-0 right-8 md:right-36 sm:right-24 lg:right-24 lg:-mx-40 lg:pt-7
             -top-2 lg:-mt-48 md:top-10 md:mr-16 mr-[10px] pr-9"
          >
            <img
              src={mony}
              alt="about picture 1"
              className="w-80 h-80 ml-3 object-fill rounded-[10px]"
            />
          </div>
        </figure> 

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative md:mt-12 mt-20 lg:mr-20"
        >
          <div
            className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5]
            rounded-full blur-3xl opacity-50 -top-5 left-10"
          ></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            I am a passionate web developer with a keen interest in creating
            dynamic and responsive web applications. I have a strong foundation
            in HTML, CSS, and JavaScript, and I am always eager to learn new
            technologies and frameworks.
          </p>
          <footer>
            <button
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none
                hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgb(128,0,128,0,7)] rounded-full text-sm sm:text-lg"
            >
              Learn More
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default About;
