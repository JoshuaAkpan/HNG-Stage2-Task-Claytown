import React from "react";
import { Link } from "react-router-dom";
import trailing from '../assets/img/trailing.png'

const OrderSummary = ({link, text}) => {

  return (
    <div className="md:max-w-sm lg:max-w-sm xl:max-w-sm ">
      <h1 className="font-semibold text-[24px]">Order Summary</h1>
      <div className="flex justify-between pb-[6px]">
        <p>Price</p>
        <p>NGN 61,600</p>
      </div>
      <div className="flex justify-between pb-[6px]">
        <p>Discount </p>
        <p>0</p>
      </div>
      <div className="flex justify-between pb-[6px]">
        <p>Shipping </p>
        <p>NGN700</p>
      </div>

      <div className="flex justify-between pb-[6px]">
        <p className="">Coupon Applied </p>
        <p>0</p>
      </div>
      <div className="flex justify-between pb-[13px]">
        <p>TOTAL </p>
        <p>NGN 61,600</p>
      </div>
      <div className="flex justify-between pb-[8px]">
        <p>Estimated Delivery by </p>
        <p>01 Sep, 2024</p>
      </div>


      <div className="relative">
      <input
        className="h-[56px] w-full  border-0 border-[#D1D1D8] rounded-[50px]"
        type="text"
        id="coupon"
        placeholder="Coupon Code"
      />

      <img className="absolute top-4 left-[260px]" src={trailing} alt="trailing" />
        
      </div>
      

      <Link to={link}>
        <button className="text-[white] w-full h-[56px]  mt-6 rounded-[50px] py-2 px-10 mb-5 bg-[#DFAE72]">{text}</button>
      </Link>
    </div>
  );
};

export default OrderSummary;
