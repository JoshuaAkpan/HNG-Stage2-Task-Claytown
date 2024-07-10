import React from "react";
import { Link } from "react-router-dom";
import { OrderSummary } from "../components";
import navArrow from "../assets/img/navArrow.png";

const ShippingDetails = () => {
  return (
    <div className="px-10 pt-32 w-full lg:flex lg:justify-between">
      <div className="bg-[#FCF9F1] mb-7 rounded-2xl p-7 h-fit lg:w-[895px]">
        <div>
          <Link to={"/checkout/processing"}>
            <img className="mb-[42px]" src={navArrow} alt="navArrow" />
          </Link>

          <h2 className="mt-12 mb-4">Add Address</h2>

          <form className="w-[90%] ">
            <div className="flex justify-between items-center mb-[33px]">
              <label htmlFor="cards" className="text-[#FBC47CB2]">
                Use saved address
              </label>
              <select
                name="address"
                id="address"
                className="h-[56px] w-[60%]  border-[#D1D1D8] rounded-[50px] bg-[#FBC47C24] border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a]"
              >
                <option value="address" selected>
                  123, Allen avenue
                </option>
              </select>
            </div>

            <label htmlFor="name">Address</label>
            <input
              className="h-[56px] w-full  border-[#D1D1D8] rounded-[50px] bg-[#FBC47C24] border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a] mt-[15px] mb-[30px]"
              type="text"
              id="name"
              placeholder="123"
            />

            <label htmlFor="card_num">Street name</label>
            <input
              className="h-[56px] w-full  border-[#D1D1D8] rounded-[50px] bg-[#FBC47C24] border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a] mt-[15px] mb-[30px]"
              type="text"
              id="card_num"
              placeholder="Allen avenue"
            />

            <div>
              <div className="flex justify-between">
                <label htmlFor="card_exp">Postcode</label>

                <label htmlFor="card_exp">Select shipping</label>
              </div>

              <div className="flex justify-between mt-[15px] mb-[50px]">
                <input
                  className="h-[56px] w-[40%]  border-[#D1D1D8] rounded-[50px] bg-[#FBC47C24] border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a]"
                  type="text"
                  id="card_exp"
                  placeholder="ABC-123"
                />

                <select
                  name="cards"
                  id="cards"
                  className="h-[56px] w-[50%]  border-[#D1D1D8] rounded-[50px] bg-[#FBC47C24] border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a]"
                >
                  <option value="free" selected>
                    Free delivery
                  </option>
                </select>
              </div>
            </div>

            <hr />

            <div className="mt-[33px] flex justify-center items-center  mb-[200px]">
              <Link to={"/checkout"}>
                <p>Cancel Order</p>
              </Link>

              <Link to={"/checkout/payment-details"}>
                <button className="text-[white] w-full h-[56px]  mt-6 rounded-[50px] py-2 px-10 mb-5 ml-5 bg-[#DFAE72]">
                  Payment
                </button>
              </Link>
            </div>


          </form>

          {/* <div className="block lg:hidden">
            <OrderSummary
              link="/checkout/payment-details"
              text="Continue to Shipping"
            />
          </div> */}
        </div>
      </div>
      {/* <div className="hidden lg:block">
        <OrderSummary
          link="/checkout/payment-details"
          text="Continue to Shipping"
        />
      </div> */}
    </div>
  );
};

export default ShippingDetails;
