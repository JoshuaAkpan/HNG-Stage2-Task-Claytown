import React from "react";

import aboutGroup from "../assets/img/aboutGroup.svg";

const AboutUs = () => {
  return (
    <div className="mt-24 p-4 lg:relative" id="about-us">
      <h1 className="text-center font-semibold text-3xl mb-5">AboutUs</h1>

      <div className="flex flex-col items-center justify-center text-center  sm:mx-5 md:mx-14 lg:flex-row lg:justify-evenly  w-fit lg:mx-auto lg:my-14 lg:w-full lg:h-[800px]">
        <div className="mb-10 lg:w-[20%] lg:absolute lg:top-[200px]  lg:left-[140px]">
          <p className="">
            <span>Claytown</span> is where tradition meets modern craftsmanship.
            We are passionate artisans dedicated to bringing you the finest
            handmade clay and wooden products from around the world
          </p>
        </div>

        <div className="pb-11 md:w-fit  lg:relative ">
          <img className="lg:w-[500px]" src={aboutGroup} alt="aboutGroup" />
        </div>

        <div className="md:flex md:flex-col justify-between items-center lg:absolute lg:top-[630px] lg:left-[650px]">
          <div className="lg:w-[50%]">
            <p>
              Our curated collection celebrates the artistry and cultural
              heritage of skilled craftsmen, ensuring every piece tells a unique
              story.
            </p>
          </div>

          <button className="text-[22px] mt-10 border border-[#1C1C1C61] rounded-[50px] py-2 px-7 md:px-7 md:text-[16px] mb-0 bg-[#FBC47CC2]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
