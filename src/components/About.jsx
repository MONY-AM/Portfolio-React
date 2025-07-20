import mony from "../assets/ammony.jpg";

export const About = () => {
  return (
    <section
      id="about"
      className="w-full h-auto overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center justify-center text-white place-items-center p-4 mb-10"
    >
      <article
        data-aos="fade-right"
        data-aos-delay="500"
        className="flex flex-wrap justify-center relative items-center w-full"
      >
        <img
            src={mony}
            alt="about picture 1"
            className="w-80 h-80 object-fill rounded-[10px]"
          />
        {/* <div
          className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px]
             absolute transform z-0 right-8 md:right-36 sm:right-24 lg:right-24 lg:-mx-40 lg:pt-7
             -top-2 lg:-mt-48 md:top-10 md:mr-16 mr-[10px] pr-9"
        >
          <img
            src={mony}
            alt="about picture 1"
            className="w-80 h-80 ml-9 object-fill rounded-[10px]"
          />
        </div> */}
      </article>
      
      <article
        data-aos="fade-left"
        data-aos-delay="500"
        className="text-center lg:text-left relative md:mt-12 mt-20 lg:mr-20"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-4 sm:mb-6">
            About Me
          </h1>
        </header>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
          I am a passionate web developer with a keen interest in creating
          dynamic and responsive web applications. I have a strong foundation in
          HTML, CSS, and JavaScript, and I am always eager to learn new
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
      {/* <div className="w-full h-auto min-h-[900px] p-5 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5">
        <article
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-col justify-center items-center"
        >
          <header>
            <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-4xl">
              My Skills
            </h1>
          </header>
          <p className="text-gray-300 text-base md:text-lg lg:text-lg">
            I have experience with a variety of web development technologies,
            including React, Node.js, and more.
          </p>
        </article>
      </div> */}
    </section>
  );
};

export default About;
