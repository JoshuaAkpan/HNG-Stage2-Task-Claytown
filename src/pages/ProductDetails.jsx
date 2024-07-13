import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

import navArrow from "../assets/img/navArrow.png";

const ProductDetails = () => {
  // get product id from url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get single product
  const product = products.find((item) => {
    return item.id === id;
  });


  // if product is not found
  if (!product) {
    return (
      <section className="pt-32 pb-12 lg:py-32 h-screen flex justify-center">
        Loading ....
      </section>
    );
  }

  //   destructure product
  const { photos, name, current_price, description } = product;
  const price = current_price?.[0]?.NGN?.[0] || 1000;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* navivation  */}
        <Link to={"/products"}>
          <img className="border border-black -mt-10 py-4 px-4 mb-[80px] hover:bg-[#F1CA92]" src={navArrow} alt="navArrow" />
        </Link>

        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center ">
          {/* image  */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="w-[200px] max-w-[200px] lg:max-w-sm"
              src={`https://api.timbu.cloud/images/${photos[0].url}`}
              alt={name}
            />
          </div>

          {/* text  */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {name}
            </h1>

            <div className="mb-4 text-red-600">
              NGN {price.toLocaleString()}
            </div>

            <p>{description}</p>

            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-[#F1CA92] border border-black mt-4 py-4 px-8 hover:bg-[#554C42] hover:text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
