import React from "react";
import { CheckoutNav } from "../components";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="px-10 pt-32 w-full">
      <div className="bg-[#fef8e6] mb-5 rounded-lg p-7 h-[80vh]">
        <CheckoutNav />

        <h2 className="mt-12 mb-4">Payment Method</h2>

        {/* Payment form goes here */}
        <div>
          <div className="flex p-4 border border-gray-400 items-center">
            <img className="rounded-full bg-red-300 w-5 h-5" src="" alt="" />
            {/* card icon */}
            <div className="bg-red-300 h-[15px] w-[20px]"></div>
            <div> **** 6754</div>
            <div> Expires 06/2021</div>
          </div>

          <div className="flex p-4 border border-gray-400 items-center">
            <img className="rounded-full bg-red-300 w-5 h-5" src="" alt="" />
            {/* card icon */}
            <div className="bg-red-300 h-[15px] w-[20px]"></div>
            <div> **** 6754</div>
            <div> Expires 06/2021</div>
          </div>
        </div>

        <hr />

        <p>+ Add Payment method</p>

        <div  className="align-center">
          <Link to={'/checkout/payment/payment-details'} >
          
          <button>Place Your Order and Pay</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
