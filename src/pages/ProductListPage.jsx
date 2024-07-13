import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Product, Pagination } from "../components";

const ProductListPage = () => {
  const { products } = useContext(ProductContext);


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);


  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const totalPosts = products.length
  const currentPosts = products.slice(firstPostIndex, lastPostIndex)


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

          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 mx-auto gap-4 md:mx-0 overflow-hidden auto-rows-fr pb-5">
            {currentPosts.map((currentPost) => {
              return <Product product={currentPost} key={currentPost.id} />;
            })}
          </div>
        </div>

        <div className="">
          <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
      </section>
    </div>
  );
};

export default ProductListPage;
