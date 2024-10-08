import React, {useContext} from "react";
import { Link } from "react-router-dom";
import trailing from '../assets/img/trailing.png'
import { CartContext } from "../contexts/CartContext";




const OrderSummary = ({link, text}) => {
    const { total } = useContext(CartContext);


  //calculating shipping fee
  const shippingPercentage = 1.14;
  const shippingFee = (shippingPercentage / 100) * total;
  const roundedShippingFee = Math.round(shippingFee);

  return (
    <div className="md:max-w-sm lg:max-w-sm xl:max-w-sm bg-[#FCF9F1] lg:p-[32px] lg:w-[380px] lg:h-[589px] lg:ml-4 lg:border lg:border-[#D1D1D8] lg:rounded-[15px]">
      <h1 className="font-semibold text-[24px]">Order Summary</h1>
      <div className="flex justify-between pb-[6px]">
        <p>Price</p>
        <p>NGN {parseFloat(total).toLocaleString()}</p>
      </div>
      <div className="flex justify-between pb-[6px]">
        <p>Discount </p>
        <p>0</p>
      </div>
      <div className="flex justify-between pb-[6px]">
        <p>Shipping </p>
        <p>NGN {roundedShippingFee.toLocaleString()}</p>
      </div>

      <div className="flex justify-between pb-[6px]">
        <p className="">Coupon Applied </p>
        <p>0</p>
      </div>
      <div className="flex justify-between pb-[13px]">
        <p>TOTAL </p>
        <p>NGN{" "}
        {parseFloat(total + roundedShippingFee).toLocaleString()}</p>
      </div>
      <div className="flex justify-between pb-[8px]">
        <p>Estimated Delivery by </p>
        <p>01 Sep, 2024</p>
      </div>


      <div className="relative w-full">
      <input
        className="h-[56px] w-full  border-[#D1D1D8] rounded-[50px] bg-transparent border  py-2 pl-3 pr-10 focus:outline-none focus:border-[#59595a]"

        type="text"
        id="coupon"
        placeholder="Voucher Code"
      />

      <img className="absolute top-1/2  right-3 transform -translate-y-1/2 w-5 h-5" 
      src={trailing} alt="trailing" />
        
      </div>
      

      <Link to={link}>
        <button className="text-[white] w-full h-[56px]  mt-6 rounded-[50px] py-2 px-10 mb-5 bg-[#DFAE72]">{text}</button>
      </Link>
    </div>
  );
};

export default OrderSummary;
