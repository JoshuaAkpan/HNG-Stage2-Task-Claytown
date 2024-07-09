import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Product } from "../components";

const ProductListPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="">
      <section className="py-32 w-fit mx-auto">
        <div>
          <div className="text-center mb-20">
            <h1 className="text-center font-semibold text-3xl mb-5">
              Categories
            </h1>

            <ul className="flex flex-row justify-center gap-5 mb-3">
              <li className="cursor-pointer">All</li>
              <li className="cursor-pointer">Decorative</li>
              <li className="cursor-pointer">Kitchenware</li>
              <li className="cursor-pointer">Tableware</li>
            </ul>

            <div className="bg-[#1C1C1C] h-[5px] w-[350px] mx-auto">
              <div className="bg-[#FFAE34] h-[3px] w-[45px] border-l-[#1C1C1C]"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto sm:gap-1 md:gap-2 lg:gap-2 xl:gap2 md:mx-0 overflow-hidden">
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>

        <div>
          
        </div>
      </section>
    </div>
  );
};

export default ProductListPage;
