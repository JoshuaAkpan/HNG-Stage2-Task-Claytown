import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import { AboutUs, Product, Hero } from "../components";

import { ProductContext } from "../contexts/ProductContext";



// import bestSellerProduct from "../data/bestSellerProductData";
// import homeProductData from "../data/homeProductData";



const Home = () => {

  const { products } = useContext(ProductContext);
  const bestSellerProduct = products.slice(0, 6)
  const homeProductData = products.slice(7, 13)

  //linking about section in nav
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#about-us") {
      document
        .getElementById("#about-us")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="w-full overflow-hidden">
      <Hero />

      <section id="#about-us">
        <AboutUs />
      </section>

      <section className="py-16 px-3">
        <div className="mx-auto">
          <h1 className="text-center font-semibold text-[30px] lg:text-[66px]  mb-5">
            Our best sellers
          </h1>
          <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 mx-auto gap-4 md:mx-0 overflow-hidden auto-rows-fr">
            {bestSellerProduct.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-3">
        <div className="mx-auto">
          <h1 className="text-center font-semibold lg:text-[66px] text-[30px]  mb-5">
            Our Products
          </h1>
          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 mx-auto gap-4 md:mx-0 overflow-hidden auto-rows-fr">
            {homeProductData.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sub-image px-10 text-center h-fit ext-sm sm:text-[16px] lg:text-[20px]">
        <h1 className="text-center font-semibold lg:text-[66px] text-[30px] mb-5 text-white">
          Subscribe to our newsletter
        </h1>
        <p className="text-white lg:text-[30px] text-[14px]">Be the first to know about our latest arrivals, exclusive offers</p>
        <p className="text-white lg:text-[40px] text-[18px]">Join us now and get 10% discount off your first purchase</p>

        <button className="text-[24px] mt-10 border border-[#1C1C1C61] rounded-[50px] py-2 px-14 mb-0 bg-[#FBC47CC2]">
          Subscribe
        </button>
      </section>
    </div>
  );
};

export default Home;
