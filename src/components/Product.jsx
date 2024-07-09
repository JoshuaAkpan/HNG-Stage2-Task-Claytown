import React, { useContext, useState } from "react";

import "../assets/styles/custom.css";

//import icons
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

//import cart conntext
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // destructure product
  const { id, image, title, price } = product;

  // set like state
  const [isLikeAction, setIsLikeAction] = useState(true);

  const handleLike = () => {
    setIsLikeAction(!isLikeAction);
  };

  const Star = () => (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0.25L11.0206 6.46885H17.5595L12.2694 10.3123L14.2901 16.5312L9 12.6877L3.70993 16.5312L5.73056 10.3123L0.440492 6.46885H6.97937L9 0.25Z"
        fill="#FFAE34"
      />
    </svg>
  );

  return (
    <div className=" mx-auto w-fit my-0 md:my-1 lg:my-1 xl:my-1">
      <div className="product-shadow sm:w-[151px] sm:h-[176px] md:w-[227px] md:h-[311px] relative  group overflow-hidden transition box-border ">
        <div className="w-full h-full flex flex-col justify-center items-left bg-white">
          {/* image */}
          <div className="mx-auto flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="h-[160px] w-[210px] group-hover:scale-[1.04] transition duration-300"
            />
          </div>

          <div className="p-2">
            <div className="w-full  flex justify-between items-center gap-5">
              <h1 className="text-[20px] w-fit mt- mt-2">{title}</h1>
              <button onClick={handleLike}>
                {isLikeAction ? (
                  <div className=" text-white z-10">
                    <CiHeart className="text-2xl" />
                  </div>
                ) : (
                  <div className="z-10">
                    <FaHeart className="text-lg" style={{ color: "red" }} />
                  </div>
                )}
              </button>
            </div>

            <p>NGN {price}</p>
            <p className="flex gap-[4px] mb-2">
             <Star/>
             <Star/>
             <Star/>
             <Star/>
             <Star/>
            </p>

            <button
              onClick={() => addToCart(product, id)}
              className="border border-black rounded-3xl py-1 px-3 mb-0 bg-[#F1CA92]"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
