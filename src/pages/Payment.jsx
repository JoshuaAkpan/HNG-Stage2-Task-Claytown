import React from "react";
import radio_selected from "../assets/img/radio_selected.png";
import radio_off from "../assets/img/radio_off.png";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="pt-7 w-full mb-10 md:text-[16px] ">
      <h2 className="mb-4 md:text-[24px] ">Payment Method</h2>

      {/* Payment form goes here */}
      <div>
        <div className="flex justify-between mb-4 items-center w-full text-[12px] md:text-[16px]">
          <div className=" w-fit flex items-center justify-between">
            <img src={radio_selected} alt="" />
            {/* card icon */}
            <div className="">**** 6754</div>
            <div className="hidden lg:block">Expires 06/2021</div>
          </div>

          <div className="block lg:hidden">Expires 06/2021</div>
          <div className="text-red-600 hidden lg:block">Remove</div>
        </div>

        <div className="flex justify-between mb-4 items-center w-full text-[12px] md:text-[16px]">
          <div className=" w-fit flex items-center justify-between">
            <img src={radio_selected} alt="" />
            {/* card icon */}
            <div> **** 6754</div>
            <div className="hidden lg:block">Expires 11/2025</div>
          </div>

          <div className="block lg:hidden">Expires 11/2025</div>
          <div className="text-red-600 hidden lg:block">Remove</div>
        </div>
      </div>

      <hr />

      <Link to={"/checkout"}>
        <div className="text-[#FBC47CB2] mt-[26px] mb-[45px]">
          <span className="text-[24]">+</span>
          <span className="text-sm md:text-[16px] "> Add a card</span>
        </div>
      </Link>

      <Link to={"/checkout/payment/payment-details"}>
        <button className="text-[white] w-[250px] h-[50px]  mt-6 rounded-[50px] py-2 px-10 mb-5 bg-[#DFAE72]">Pay now</button>
      </Link>
    </div>
  );
};

export default Payment;
