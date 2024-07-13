import React from "react";

import aboutGroup from "../assets/img/aboutGroup.svg";

const AboutUs = () => {
  return (
    <div className="mt-24 p-4" id="about-us">
      <h1 className="text-center font-semibold lg:text-[66px] text-[30px] mb-5 ">AboutUs</h1>

      <div className="text-center flex flex-col items-center sm:mx-5 md:mx-14  w-fit">
        <div className="mb-10">
          <p className="lg:text-[28px] text-[18px]">
            <span className="font-gloria">Claytown</span> is where tradition meets modern craftsmanship.
            We are passionate artisans dedicated to bringing you the finest
            handmade clay and wooden products from around the world
          </p>
        </div>

        <div className="pb-11">
          <img className="lg:w-[500px] " src={aboutGroup} alt="aboutGroup" />
        </div>

        <div className="">
          <div className="lg:text-[28px] text-[18px]">
            <p className="">
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
