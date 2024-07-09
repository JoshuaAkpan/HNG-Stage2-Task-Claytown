import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import minus from "../assets/img/minus.png";
import plus from "../assets/img/plus.png";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { id, image, title, price, amount, label } = item;

  return (
    <div className="border-b-[1px]  my-9 box-border">
      <div className="w-full min-h[290px] flex items-center justify-between px-[15px] py-[10px] gap-x-4  ">

        <div className="flex justify-center items-center gap-2">
          {/* dot icon */}
          <img className="rounded-full bg-red-300 w-5 h-5" src="" alt="" />

          {/* product image  and remove icon*/}
          <div onClick={() => removeFromCart(id)} className="cursor-pointer">
            <img className="max-w-[80px] rounded-lg" src={image} alt={title} />
            {/* remove icon  */}
            <div className="hidden lg:block xl:block">Remove</div>
          </div>
        </div>

        {/* title and label  */}
        <div className=" md:-ml-72">
          <h1>{title}</h1>
          <p className="text-[#FF7810]">{label}</p>
        </div>

        {/* price and increments */}
        <div className="flex flex-col justify-end items-end">
          {/* item price  */}
          <div className="text-[14px]">{`NGN${price}`}</div>

          <div className=" flex gap-x-2 h-[36px] md:w-[100px] lg:w-[150px]  text-sm items-end justify-end">
            {/* decrement */}
            <div
              onClick={() => {
                decreaseAmount(id);
              }}
              className="cursor-pointer"
            >
              <img src={minus} alt="minus" />
            </div>

            {/* quantity */}
            <div>{amount}</div>

            {/* increment */}
            <div
              onClick={() => {
                increaseAmount(id);
              }}
              className="cursor-pointer"
            >
              <img src={plus} alt="plus" />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
