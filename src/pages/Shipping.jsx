import React from "react";
import { CheckoutNav } from "../components";
import navArrow from "../assets/img/navArrow.png";
import { Link } from "react-router-dom";
import radio_selected from "../assets/img/radio_selected.png";
import radio_off from "../assets/img/radio_off.png";

const Shipping = () => {
  return (
    <div className="px-10 pt-32 w-full ">
      <div className="bg-[#fef8e6] mb-5 rounded-lg p-7 h-[80vh]">
        <Link to={"/checkout"}>
          <img className="mb-[30px]" src={navArrow} alt="navArrow" />
        </Link>

        <CheckoutNav />

        <h2 className="mt-12 mb-4">Shipping Method</h2>
        {/* shipping form goes here */}

        <div className="flex p-4 border border-gray-400 items-center w-full">
        <img src={radio_selected} alt="" />
          {/* card icon */}
          <div className="flex items-center">
            <div>Free</div>
            <div>Regular Shipment</div>
          </div>
          <div>01 Sept, 2024</div>
        </div>

        <div className="flex p-4 border border-gray-400 items-center">
          <img src={radio_off} alt="" />
          <div className="flex items-center">
            <div>NGN2000</div>
            <div>Priority Shipping</div>
          </div>
          <div>28 Aug, 2024</div>
        </div>

        <div className="flex p-4 items-center justify-between">
          <img src={radio_off} alt="" />
          <div className="flex items-center">
            <div>Schedule</div>
            <div>Choose a date that works for you.</div>
          </div>
          <div>Select Date </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
