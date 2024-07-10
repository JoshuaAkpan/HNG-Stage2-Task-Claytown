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
      <div className="bg-[#FCF9F1] mb-7 rounded-2xl p-7 h-fit lg:w-[895px]">
        <div className="">
          <Link to={"/checkout"}>
            <img className="mb-[30px]" src={navArrow} alt="navArrow" />
          </Link>

          <h1 className="md:text-[24px]">Address</h1>

          <div className="mt-[38px] flex justify-between">
            <div className="flex w-[195px] justify-between items-start  md:w-[220px]">
              <img src={radio_selected} alt="" />

              <div className="text-sm md:text-[16px]">
                <label htmlFor="" className="">
                  <h1 className="">Lagos, Nigeria</h1>
                  <p className="">Ojuelegba</p>
                  <p>Contact - (936) 361-0310</p>
                </label>
              </div>
            </div>

            <div className="border-[#FBC47CB2] text-[#FBC47CB2] md:text-[16px]">
              Edit
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div className="flex w-[195px] md:w-[220px] justify-between items-start ">
              <img src={radio_off} alt="" />

              <div className="text-sm md:text-[16px]">
                <label htmlFor="">
                  <h1>University of Lagos</h1>
                  <p>Akoka</p>
                  <p>Contact - (936) 361-0310</p>
                </label>
              </div>
            </div>

            <div className="border-[#FBC47CB2] md:text-[16px] text-[#FBC47CB2]">
              Edit
            </div>
          </div>

          <hr className="mt-7" />

          <Link to={"/checkout"}>
            <div className="text-[#FBC47CB2] mt-[26px] mb-[45px]">
              <span className="text-[24]">+</span>
              <span className="text-sm md:text-[16px]"> Add New Address</span>
            </div>
          </Link>

          {/*SHIPPING*/}
          <Shipping />

          {/*PAYMENT METHOD*/}
          <Payment />

          {/* Order Summary  */}

          <div className="block lg:hidden">
            <OrderSummary
              link="/checkout/payment/shipping-details"
              text="Continue to Shipping"
            />
          </div>

        </div>
      </div>

      <div className="hidden lg:block">
        <OrderSummary
          link="/checkout/payment/shipping-details"
          text="Continue to Shipping"
        />
      </div>
    </div>
  );
};

export default Address;
