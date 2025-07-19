import MONY from "../assets/monyam.jpg";
export const Contact = () => {
  return (
    <section
      id="contact"
      className="grid grid-cols-1 sm:grid-cols-2 sm:pr-20 sm:gap-3 md:grid-cols-2 lg:grid-cols-2 w-full h-[900px] p-4"
    >
      <article
        data-aos="fade-down"
        data-aos-delay="500"
        className="flex justify-center items-center w-full"
      >
        <img
          src={MONY}
          alt="mony am"
          className="w-80 h-80 object-fill rounded-lg lg:w-96 lg:h-96"
        />
      </article>
      <article
        data-aos="fade-up"
        data-aos-delay="500"
        className=" flex flex-col justify-center items-center "
      >
        <header>
          <h1 className=" font-bold text-white text-3xl md:text-4xl lg:text-4xl">
            Contact Me
          </h1>
        </header>
        <form
          action=""
          className="flex flex-col gap-2 bg-[#6C63FF] p-4 w-100% rounded-lg mt-1"
        >
          <section className="p-1 w-full lg:w-[500px] md:w-[400px] sm:w-[300px]">
            <label htmlFor="username" className="text-gray-300">
              Your Name
            </label>{" "}
            <br />
            <input
              type="text"
              name="username"
              id="username"
              className="rounded p-1 mt-1 w-full"
              placeholder="Your name"
            />{" "}
            <br />
            <label htmlFor="username" className="text-gray-300">
              Your Email
            </label>{" "}
            <br />
            <input
              type="text"
              name="email"
              id="email"
              className="rounded p-1 mt-1 w-full"
              placeholder="Your email"
            />{" "}
            <br />
            <label htmlFor="subject" className="text-gray-300">
              Subject
            </label>
            <br />
            <input
              type="text"
              name="subject"
              id="subject"
              className="rounded p-1 mt-1 w-full text-black"
              placeholder="Subject"
            />{" "}
            <br />
            <label htmlFor="username" className="text-gray-300">
              Description
            </label>{" "}
            <br />
            <textarea
              type="text"
              name="description"
              id="description"
              className="rounded mt-1 resize-none w-full h-[200px] px-1 pb-16 text-black"
              placeholder="Description"
            ></textarea>
          </section>
          <button className="bg-gradient-to-r from-fuchsia-700 to-indigo-500 w-full lg:w-[500px] md:w-[400px] sm:w-[300px] text-white rounded-full p-2">
            Send Message
          </button>
        </form>
      </article>
    </section>
  );
};
