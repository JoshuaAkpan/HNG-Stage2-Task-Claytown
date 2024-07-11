import React from "react";
import { OrderSummary } from "../components";
import { Link } from "react-router-dom";

import navArrow from "../assets/img/navArrow.png";
import checked from "../assets/img/checked.png";

const PaymentDetailsPage = () => {
  return (
    <div className="px-10 pt-32 w-full lg:flex lg:justify-between">
      <div className="bg-[#FCF9F1] mb-7 rounded-2xl p-7 h-fit lg:w-[895px]">
        <Link to={"/checkout/shipping-details"}>
          <img className="mb-[42px]" src={navArrow} alt="navArrow" />
        </Link>

        <h2 className="mt-12 mb-4">Payment Details</h2>

        <form className="w-[90%] ">
          <div className="flex justify-between items-center mb-[33px]">
            <label htmlFor="cards" className="text-[#FBC47CB2]">
              Use saved card
            </label>
            <select
              name="card"
              id="card"
              className="h-[56px] w-[60%]  border-[#D1D1D8] rounded-[50px] bg-[#FBC47C24] border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a]"
            >
              <option value="address" selected>
                Card ending 234
              </option>
            </select>
          </div>

          <label htmlFor="name">Name on card</label>

          <div className="relative w-full">
            <input
              className="h-[56px] w-full  border-[#D1D1D8] rounded-[50px] bg-[#FBC47C24] border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a] mt-[15px] mb-[30px]"
              type="text"
              id="name"
              placeholder="Ayo Deji"
            />

            <img
              className="absolute top-[45%]  right-3 transform -translate-y-1/2 w-5 h-5"
              src={checked}
              alt="checked"
            />
          </div>

          <label htmlFor="card_num">Card number</label>
          <input
            className="h-[56px] w-full  border-[#D1D1D8] rounded-[50px] bg-[#FBC47C24] border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a] mt-[15px] mb-[30px]"
            type="text"
            id="card_num"
            placeholder=""
          />

          <div>
            <div className="flex justify-between ">
              <label htmlFor="card_exp">Expiration</label>

              <label htmlFor="card_exp">CVV</label>
            </div>

            <div className="flex justify-between mt-[15px] mb-[50px]">
              <div className="flex justify-center">
                <input
                  className="h-[56px] w-[40%]  border-[#D1D1D8] rounded-[50px] bg-[#FBC47C24] border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a]"
                  type="text"
                  id="card_exp"
                  placeholder="03"
                />
                <p className="text-[40px] text-[#4A5568]">/</p>
                <input
                  className="h-[56px] w-[40%]  border-[#D1D1D8] rounded-[50px] bg-[#FBC47C24] border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a]"
                  type="text"
                  id="card_exp"
                  placeholder="24"
                />
              </div>

              <input
                className="h-[56px] w-[40%]  border-[#D1D1D8] rounded-[50px] bg-[#FBC47C24] border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a]"
                type="text"
                id="card_exp"
                placeholder="123"
              />
            </div>
          </div>

          <hr />

          <div className="mt-[33px] flex justify-center items-center  mb-[200px]">
            <Link to={"/checkout"}>
              <p>Cancel Order</p>
            </Link>

            <Link to={"/checkout/order-complete"}>
              <button className="text-[white] w-full h-[56px]  mt-6 rounded-[50px] py-2 px-10 mb-5 ml-5 bg-[#DFAE72]">
                Complete Order
              </button>
            </Link>
          </div>
        </form>

        <div className="block lg:hidden">
          <OrderSummary
            link="/checkout/shipping-details"
            text="Continue to Shipping"
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <OrderSummary
          link="/checkout/shipping-details"
          text="Continue to Shipping now"
        />
      </div>
    </div>
  );
};

export default PaymentDetailsPage;
