import CloudFoundation from "../assets/AWS_Cloud_Foundation.png";
import MachineLearning from "../assets/AWS_Machine_Learning_Foundation.png";
import DataEngineering from "../assets/AWS_Data_Engineering.png";
import CloudArchitecture from "../assets/AWS_Cloud_Architecting.png";
export const Certificate = () => {
  return (
    <section id="certificate" className=" min-h-screen flex flex-col items-center justify-center">
      <header>
        <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-4xl mt-10">
          My <span className="text-purple-400">Certificates</span>
        </h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-5 m-10 p-10">
        <img
          src={CloudFoundation}
          alt="Cloud Foundation"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={MachineLearning}
          alt="Machine Learning"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={DataEngineering}
          alt="Data Engineering"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={CloudArchitecture}
          alt="Cloud Architecture"
          className="w-auto h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default Certificate;
