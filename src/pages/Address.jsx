import React from "react";
import { OrderSummary } from "../components";
import { Shipping, Payment } from "../pages";
import { Link } from "react-router-dom";
import navArrow from "../assets/img/navArrow.png";
import radio_selected from "../assets/img/radio_selected.png";
import radio_off from "../assets/img/radio_off.png";

const Address = () => {
  // bg-[#fef8e6]

  return (
    <div className="px-10 pt-32 w-full lg:flex lg:justify-between">
      <div className="bg-[#FCF9F1] mb-5 rounded-lg p-7 h-fit lg:w-[65%]">
        <div className="">
          <Link to={"/checkout"}>
            <img className="mb-[30px]" src={navArrow} alt="navArrow" />
          </Link>

          <h1>Address</h1>

          <div className="mt-[38px] flex justify-between">
            <div className="flex w-[195px] justify-between items-start">
              <img src={radio_selected} alt="" />

              <div className="text-sm ">
                <label htmlFor="" className="">
                  <h1 className="">Lagos, Nigeria</h1>
                  <p className="">Ojuelegba</p>
                  <p>Contact - (936) 361-0310</p>
                </label>
              </div>
            </div>

            <div className="border-[#FBC47CB2] text-[#FBC47CB2]">Edit</div>
          </div>

          <div className="flex justify-between mt-5">
            <div className="flex w-[195px] justify-between items-start ">
              <img src={radio_off} alt="" />

              <div className="text-sm ">
                <label htmlFor="">
                  <h1>University of Lagos</h1>
                  <p>Akoka</p>
                  <p>Contact - (936) 361-0310</p>
                </label>
              </div>
            </div>

            <div className="border-[#FBC47CB2] text-[#FBC47CB2]">Edit</div>
          </div>

          <hr className="mt-7" />

          <Link to={"/checkout"}>
            <div className="text-[#FBC47CB2] mt-[26px] mb-[45px]">
              <span className="text-[24]">+</span>
              <span className="text-sm"> Add New Address</span>
            </div>
          </Link>
        </div>

        {/*SHIPPING*/}
        <Shipping />

        {/*PAYMENT METHOD*/}
        <Payment />

      </div>
        {/* Order Summary  */}

        <OrderSummary
          link="/checkout/payment/shipping-details"
          text="Continue to Shipping"
        />
    </div>
  );
};

export default Address;
