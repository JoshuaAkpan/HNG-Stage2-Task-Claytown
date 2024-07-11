import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import minus from "../assets/img/minus.png";
import plus from "../assets/img/plus.png";
import orderBullet from "../assets/img/orderBullet.png";
import trash from "../assets/img/trash.png";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { id, image, title, price, amount, label } = item;

  return (
    <div className="border-b-[1px]  my-9 box-border md:text-[20px]">
      <div className="w-full min-h[290px] flex items-center justify-between py-[10px] gap-x-4 ">
        <div className="flex justify-center items-center gap-10 ">
          <div className="flex justify-start items-center gap-2 ">
            {/* dot icon */}
            <img className="" src={orderBullet} alt="orderBullet" />

            {/* product image  and remove icon*/}
            <div onClick={() => removeFromCart(id)} className="cursor-pointer ">
              <img
                className="max-w-[80px] rounded-lg"
                src={image}
                alt={title}
              />
              {/* remove icon  */}

              <div className="flex justify-between">
                <div className="hidden lg:block xl:block text-[#FF7810]">
                  <img src={trash} alt="trash" />
                </div>
                <div className="hidden lg:block mt-1 xl:block text-[15px] text-[#FF7810]">
                  Remove
                </div>
              </div>
            </div>
          </div>

          {/* title and label  */}
          <div className="   flex flex-col justify-start float-left ml-auto">
            <h1 className="mb-10">{title}</h1>
            <p className="text-[#FF7810]">{label}</p>
          </div>
        </div>

        {/* price and increments */}
        <div className="flex flex-col justify-end items-end">
          {/* item price  */}
          <div className="text-[14px] md:text-[20px] mb-9">{`NGN${price}`}</div>

          <div className="flex gap-x-2 h-[36px] md:w-[100px] lg:w-[150px]  text-sm items-end justify-end">
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
            <div className="text-xl">{amount}</div>

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
