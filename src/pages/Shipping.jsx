import React from "react";
import { CheckoutNav } from "../components";

const Shipping = () => {
  return (
    <div className="px-10 pt-32 w-full ">
      <div className="bg-[#fef8e6] mb-5 rounded-lg p-7 h-[80vh]">
        <CheckoutNav />

        <h2 className="mt-12 mb-4">Shipping</h2>
        {/* shipping form goes here */}

        <div className="flex p-4 border border-gray-400 items-center">
          <img className="rounded-full bg-red-300 w-5 h-5" src="" alt="" />
          {/* card icon */}
          <div className="flex items-center">
            <div>Free</div>
            <div>Regular Shipment</div>
          </div>
          <div>01 Sept, 2024</div>
        </div> 

        <div className="flex p-4 border border-gray-400 items-center">
          <img className="rounded-full bg-red-300 w-5 h-5" src="" alt="" />
          <div className="flex items-center">
            <div>NGN2000</div>
            <div>Priority Shipping</div>
          </div>
          <div>28 Aug, 2024</div>
        </div>

        <div className="flex p-4 items-center justify-between">
          <img className="rounded-full bg-red-300 w-5 h-5" src="" alt="" />
          <div   className="flex items-center">
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
