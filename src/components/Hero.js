import React from "react";
import Typed from "react-typed";
import hero from "../images/hero.svg";

const Hero = () => {
  return (
    <div className="w-full bg-slate-100 px-5 md:px-20">
      <div className="flex flex-col md:flex-row items-center space-y-10 space-x-4 py-4">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            new season{" "}
            <Typed
              strings={[
                "Here you can find anything",
                "Here you can find All products",
                "Here you can find All categories",
                "Here you can find All brands",
              ]}
              typeSpeed={60}
              loop
              backSpeed={40}
            />
          </h2>
          <p className="text-2xl font-semibold capitalize mt-5">
            Check out all the trends
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
