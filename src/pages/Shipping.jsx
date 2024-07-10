import React from "react";
import radio_selected from "../assets/img/radio_selected.png";
import radio_off from "../assets/img/radio_off.png";

const Shipping = () => {
  return (
    <div className="pt-2 w-full mb-5">
      <h2 className="mb-4 md:text-[24px]">Shipping</h2>
      {/* shipping form goes here */}

      <div className="flex justify-between mb-4 items-center w-full text-[12px] md:text-[16px]">
        <div className=" w-[175px] md:w-[205px] flex items-center justify-between">
          <img src={radio_selected} alt="" />
          {/* card icon */}
          <div>Basic</div>
          <div>Regular Shipment</div>
        </div>

        <div className="">01 Sept, 2024</div>
      </div>

      <div className="flex justify-between mb-4 items-center w-full text-[12px] md:text-[16px]">
        <div className=" w-[195px] md:w-[230px] items-center flex justify-between">
          <img src={radio_off} alt="" />
          {/* card icon */}
          <div>NGN2000</div>
          <div>Priority Shipping</div>
        </div>

        <div className="">28 Aug, 2024</div>
      </div>

      <div className="flex justify-between mb-4 items-center w-full text-[12px] md:text-[16px]">
        <div className=" w-[165px] md:w-[208px] items-center  flex justify-between">
          <img src={radio_off} alt="" />
          {/* card icon */}
          <div>Schedule</div>
          <div>Choose a date</div>
        </div>

        <div className="">
          <select name="cards" id="cards" className="bg-[#FCF9F1]">
            <option value="date" selected>
              Select date
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
