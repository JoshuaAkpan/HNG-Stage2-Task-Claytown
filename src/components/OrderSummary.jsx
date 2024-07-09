import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = ({link, text}) => {

  return (
    <div className="md:max-w-sm lg:max-w-sm xl:max-w-sm ">
      <h1>Order Summary</h1>
      <div className="flex justify-between">
        <p>Price</p>
        <p>NGN 61,600</p>
      </div>
      <div className="flex justify-between">
        <p>Discount </p>
        <p>0</p>
      </div>
      <div className="flex justify-between">
        <p>Shipping </p>
        <p>NGN700</p>
      </div>

      <div className="flex justify-between">
        <p className="">Coupon Applied </p>
        <p>0</p>
      </div>
      <div className="flex justify-between">
        <p>TOTAL </p>
        <p>NGN 61,600</p>
      </div>
      <div className="flex justify-between">
        <p>Estimated Delivery by </p>
        <p>01 Sep, 2024</p>
      </div>

      <input
        className="bg-[#fef8e6]"
        type="text"
        id="coupon"
        placeholder="Coupon Code"
      />
      

      <Link to={link}>
      
      <button>{text}</button>
      </Link>
    </div>
  );
};

export default OrderSummary;
