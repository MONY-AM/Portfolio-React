import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import PHP from "../assets/php.png";
import Laravel from "../assets/laravel.png";
import Reactjs from "../assets/reactjs.png";
import Tailwindcss from "../assets/tailwindcss.png";

export const Skills = () => {
  const skillsData = [
    {
      id: 1,
      image: HTML,
      title: "HTML",
      description: "I have a strong understanding of HTML and its semantic elements. I can create well-structured and accessible web pages using HTML.",
    },
    {
      id: 2,
      image: CSS,
      title: "CSS",
      description: "I am proficient in CSS and can style web pages to create visually appealing designs. I am familiar with responsive design techniques and can create layouts that work on different screen sizes.",
    },
    {
      id: 3,
      image: JavaScript,
      title: "JavaScript",
      description: "I have a strong understanding of JavaScript and its core concepts. I can create dynamic and interactive web applications using JavaScript. I am familiar with modern JavaScript frameworks and libraries such as React.",
    },
    {
      id: 4,
      image: PHP,
      title: "PHP",
      description: "I have a solid understanding of PHP and its core concepts. I can create server-side applications using PHP. I am familiar with PHP frameworks such as Laravel.",
    },
    {
      id: 5,
      image: Laravel,
      title: "Laravel",
      description: "I have experience with Laravel, a popular PHP framework. I can create robust and scalable web applications using Laravel. I am familiar with Laravel's features such as routing, middleware, and Eloquent ORM.",
    },
    {
      id: 6,
      image: Reactjs,
      title: "React JS",
      description: "I have a strong understanding of React and its core concepts. I can create dynamic and interactive user interfaces using React. I am familiar with React hooks, state management, and component-based architecture.",
    },
    {
      id: 7,
      image: Tailwindcss,
      title: "Tailwindcss",
      description: "I have a strong understanding of Tailwind CSS and its utility-first approach. I can create responsive and visually appealing designs using Tailwind CSS. I am familiar with Tailwind's configuration and customization options.",
    },
  ];

  const SkillBox = ({ image, title, description }) => (
    <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
      <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20 " />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      </header>
      <p className=" text-gray-400 text-sm sm:text-base break-words p-1 text-start">
        {description}
      </p>
    </article>
  );
  return (
    // <div>
    //   <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 flex flex-col text-center justify-center text-white">
    //     Skills
    //   </h1>
    //   <div className="text-center p-10 gap-24 m-1 grid grid-cols-6 mt-5">
    //     <div className="">
    //       <img src={HTML} alt="HTML" className=" w-40 h-40 rounded-full" />
    //     </div>
    //     <div className="">
    //       <img src={CSS} alt="CSS" className="rounded-full" />
    //     </div>
    //     <div className="">
    //       <img src={JavaScript} alt="JavaScript" className="rounded-full" />
    //     </div>
    //     <div className="">
    //       <img src={PHP} alt="PHP" className="rounded-full" />
    //     </div>
    //     <div className="">
    //       <img src={Laravel} alt="Laravel" className="rounded-full" />
    //     </div>
    //     <div className="">
    //       <img src={Reactjs} alt="Reactjs" className="rounded-full" />
    //     </div>
    //     <div className="">
    //       <img src={Tailwindcss} alt="tailwindcss" className="rounded-full" />
    //     </div>
    //     <div className="">
    //       <img
    //         src="{}"
    //         alt="tailwindcss"
    //         className="rounded-full"
    //       />
    //     </div>
    //   </div>
    // </div>
    <section id='skills' className=" relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10">
      <div
        className=" absolute z-0 w-72 h-72 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28
      left-1/2 transform -translate-x-1/2"
      ></div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold lg:text-4xl">
            My <span className="text-purple-400">Experise</span> <br /> and
            <span className="text-purple-400"> Skills</span>
          </h1>
          <p className="text-gray-400 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            I have a diverse set of skills in web development, including
            proficiency in HTML, CSS, JavaScript, PHP, Laravel, React JS, and
            Tailwind CSS. I am passionate about creating dynamic and responsive
            web applications that provide a great user experience.
          </p>
        </header>
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 sm:p-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4"
        >
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
    </section>
  );
};
