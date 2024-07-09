import React from "react";

import aboutGroup from "../assets/img/aboutGroup.svg";

const AboutUs = () => {
  return (
    <div className="mt-10 p-4" id="about-us">
      <h1 className="text-center font-semibold text-3xl mb-5">AboutUs</h1>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-10">
          <p className=" ">
            <span>Claytown</span> is where tradition meets modern craftsmanship.
            We are passionate artisans dedicated to bringing you the finest
            handmade clay and wooden products from around the world
          </p>
        </div>

        <div className="pb-11">
          <img src={aboutGroup} alt="aboutGroup" />
        </div>

        <div>
          <p>
            Our curated collection celebrates the artistry and cultural heritage
            of skilled craftsmen, ensuring every piece tells a unique story.
          </p>
        </div>

        <button className="text-[24px] mt-10 border border-[#1C1C1C61] rounded-[50px] py-2 px-14 mb-0 bg-[#FBC47CC2]">
          Read more
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
