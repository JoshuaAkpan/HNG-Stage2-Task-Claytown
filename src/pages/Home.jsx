import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { AboutUs, Product, Hero } from "../components";

import bestSellerProduct from "../data/bestSellerProductData"
import homeProductData from "../data/homeProductData"



const Home = () => {

  //linking about section in nav
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about-us') {
      document.getElementById('#about-us').scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      
      <section id='#about-us'>
      <AboutUs />
      </section>
      
      <section className="py-16">
        <div className="w-fit mx-auto">
            <h1 className="text-center font-semibold text-3xl mb-5">Our best sellers</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto sm:gap-2 md:gap-1 lg:gap-1 xl:gap1 md:mx-0 overflow-hidden">
            {bestSellerProduct.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="w-fit mx-auto">
            <h1 className="text-center font-semibold text-3xl mb-5">Our Products</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto sm:gap-1 md:gap-2 lg:gap-2 xl:gap2 md:mx-0 overflow-hidden">
            {homeProductData.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>

      <section className=".bg-sub-image">
        <h1>Subscribe to our newsletter</h1>
        <p>Be the first to know about our latest arrivals, exclusive offers</p>
        <p>Join us now and get 10% discount off your first purchase</p>

      </section>


    </div>
  );
};

export default Home;
