import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage,currentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center mt-[1rem]">
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)} className={`${page === currentPage ? 'bg-[#FBC47C24]  text-[#1C1C1C]' : ''} w-[40px] h-[40px] text-[16px] my-0 mx-[10px] cursor-pointer border border-[#53524E] transition-all duration-300 ease-in `}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
