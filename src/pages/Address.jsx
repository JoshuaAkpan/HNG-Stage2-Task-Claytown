import React from "react";
import { CheckoutNav, OrderSummary } from "../components";
import { Link } from "react-router-dom";

const Address = () => {
  // bg-[#fef8e6]

  return (
    <div className="px-10 pt-32 w-full">
      <div className="bg-white mb-5 rounded-lg p-7 h-[80vh] lg:flex xl:flex lg:justify-between xl:justify-between">
        <div>
          <Link to={"/checkout"}>Arrow</Link>

          <CheckoutNav />

          <div className="flex justify-center items-center bg-red-600" >
            <input type="radio" name="" id="" checked />

            <div>
              <label htmlFor="" className="lg:pl-20 xl:pl-20">
                <h1>Lagos, Nigeria</h1>
                <p>Ojuelegba</p>
                <p>Contact - (936) 361-0310</p>
              </label>
            </div>

            <div>HOME</div>

            <div className="sm:hidden lg:block xl:block">
              <div>
                Edit
                <span> |</span>
                <span className="text-red-600">Remove</span>
              </div>
            </div>
          </div>

          <div className="flex ">
            <input type="radio" name="" id="" className=""/>

            <div>
              <label htmlFor="">
                <h1>University of Lagos</h1>
                <p>Akoka</p>
                <p>Contact - (936) 361-0310</p>
              </label>
            </div>

            <div>OFFICE</div>

            <div className="sm:hidden lg:block xl:block">
              <div>
                Edit
                <span> |</span>
                <span className="text-red-600">Remove</span>
              </div>
            </div>
          </div>

          <hr />



          <Link to={"/checkout"}>+ Add New Address</Link>
        </div>

          {/* Order Summary  */}
          <OrderSummary link='/checkout/payment/shipping-details' text='Continue to Shipping' />
      </div>
    </div>
  );
};

export default Address;
