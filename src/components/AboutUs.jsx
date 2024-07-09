import React from "react";

import aboutImage1 from "../assets/img/aboutImage1.png";
import aboutImage2 from "../assets/img/aboutImage2.png";
import aboutImage3 from "../assets/img/aboutImage3.png";

const AboutUs = () => {
  return (
    <div className="mt-10 p-4" id="about-us">
      <h1 className="text-center font-semibold text-3xl mb-5">AboutUs</h1>

      <div className="text-center bg-red-400 md:flex md:">
        <div>
          <p className="md:w-[20%] md:h-[25%]">
            <span>Claytown</span> is where tradition meets modern craftsmanship.
            We are passionate artisans dedicated to bringing you the finest
            handmade clay and wooden products from around the world
          </p>
        </div>

        <div className="flex flex-col mx-auto md:mx-auto items-center mt-8 relative max-w-[400px] md:max-w-[400px] mb-16">
          <img className="w-[250px] " src={aboutImage1} alt="about Image1" />
          <img
            className="absolute w-[100px] right-3 top-6 "
            src={aboutImage2}
            alt="about Image2"
          />
          <img
            className="absolute w-[120px] -bottom-11 left-2"
            src={aboutImage3}
            alt="about Image3"
          />
        </div>

        <p>
          Our curated collection celebrates the artistry and cultural heritage
          of skilled craftsmen, ensuring every piece tells a unique story.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
