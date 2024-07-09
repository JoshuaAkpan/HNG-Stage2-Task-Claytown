import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/Logo.svg";

// importing icons
import SearchIcon from "../assets/img/SearchIcon.svg";
import CartIcon from "../assets/img/CartIcon.svg";
import UserIcon from "../assets/img/UserIcon.svg";

// import cart context
import { CartContext } from "../contexts/CartContext";

const Navbar = () => {
  //Navbar state
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { itemAmount } = useContext(CartContext);

  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  //for hamburger nav on small screens
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const locationPath = location.pathname;

  if (locationPath === "/") {
    return (
      <nav
        className={`${
          isActive ? "bg-[#554C42] shadow-md" : "bg-none py-6"
        }  h-20 fixed w-full z-10 transition-all flex justify-between items-center py-7`}
      >
        <div className="w-full mx-auto flex justify-between items-center pl-6 pr-10 md:pl-10 md:pr-[60px]  lg:pl-30 lg:pr-30 ">
          {/* Hamburger menu button - show only on small screens */}
          <div className="block lg:hidden sm:order-1 md:order-1 lg:order-2">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-[38px] w-[38px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navbar links - hide on small screens */}
          <div className="hidden lg:flex lg:items-center lg:justify-between lg:space-x-4 lg:w-[250px] sm:order-1 md:order-1 lg:order-2">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/products" className="text-white">
              Products
            </Link>
            <Link to="/#about-us" className="text-white">
              About Us
            </Link>
          </div>
          {/* Mobile menu */}
          {isOpen && (
            <div
              className={`lg:hidden absolute h-auto top-16 left-0 bg-[#554C42] p-6 shadow-lg flex flex-col pb-6 w-full pl-9 transition-all duration-500 ease-in ${
                isOpen ? "top-20" : "top-[-490px]"
              }`}
            >
              <p className=" text-white hover:underline mb-4 w-fit ">
                <Link to="/"> Home </Link>
              </p>

              <p className=" text-white hover:underline mb-4 w-fit">
                <Link to="/products">Products</Link>
              </p>

              <p className=" text-white hover:underline  w-fit">
                <Link to="/#about-us">About Us</Link>
              </p>
            </div>
          )}

          {/* Logo */}
          <div className="sm:order-2 md:order-2 lg:order-1 pb-2">
            <Link to={"/"} className="text-white text-lg font-semibold">
              <div>
                <img className="sm:w-[175px] w-[160px] -ml-3  " src={Logo} alt="ClayTown-Logo" />
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-between h-12 w-[110px] lg:w-[130px] sm:order-3 md:order-3 lg:order-3 ">
            {/* search icon  */}
            <Link to={"/products"}>
              <img className=" w-[30px]" src={SearchIcon} alt="SearchIcon" />
            </Link>

            {/* cart icon  */}
            <div className="cursor-pointer relative max-w-[50px] ">
              <Link to={"/checkout"}>
                <img className="w-[30px]" src={CartIcon} alt="CartIcon" />
              </Link>
              <div className="bg-red-500 absolute -right-2 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            </div>

            {/* user icon  */}
            <div className="cursor-pointer ">
              <Link to={"/"}>
                <img className="w-[30px]" src={UserIcon} alt="UserIcon" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      // black nav

      <nav
        className={`${
          isActive ? "bg-[#fef8e6] shadow-md" : "bg-none py-6"
        }  h-20 fixed w-full z-10 transition-all flex justify-between items-center py-7`}
      >
        <div className="w-full mx-auto flex justify-between items-center pl-6 pr-10 md:pl-10 md:pr-[60px]  lg:pl-30 lg:pr-30 ">
          {/* Hamburger menu button - show only on small screens */}
          <div className="block lg:hidden sm:order-1 md:order-1 lg:order-2">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-[38px] w-[38px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navbar links - hide on small screens */}
          <div className="hidden lg:flex lg:items-center lg:justify-between lg:space-x-4 lg:w-[250px] sm:order-1 md:order-1 lg:order-2">
            <Link to="/" className="text-black">
              Home
            </Link>
            <Link to="/products" className="text-black">
              Products
            </Link>
            <Link to="/#about-us" className="text-black">
              About Us
            </Link>
          </div>
          {/* Mobile menu */}
          {isOpen && (
            <div
              className={`lg:hidden absolute h-auto top-16 left-0 bg-[#554C42] p-6 shadow-lg flex flex-col pb-6 w-full pl-9 transition-all duration-500 ease-in ${
                isOpen ? "top-20" : "top-[-490px]"
              }`}
            >
              <p className=" text-white hover:underline mb-4 w-fit ">
                <Link to="/"> Home </Link>
              </p>

              <p className=" text-white hover:underline mb-4 w-fit">
                <Link to="/products">Products</Link>
              </p>

              <p className=" text-white hover:underline  w-fit">
                <Link to="/#about-us">About Us</Link>
              </p>
            </div>
          )}

          {/* Logo */}
          <div className="sm:order-2 md:order-2 lg:order-1 pb-2">
            <Link to={"/"} className="text-white text-lg font-semibold">
              <div className="filter">
                <img
                  className="w-[175px] invert"
                  src={Logo}
                  alt="ClayTown-Logo"
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-between h-12 w-[110px] lg:w-[130px] sm:order-3 md:order-3 lg:order-3 filter">
            {/* search icon  */}
            <Link to={"/products"}>
              <img className="w-[30px] invert" src={SearchIcon} alt="SearchIcon" />
            </Link>

            {/* cart icon  */}
            <div className="cursor-pointer relative max-w-[50px] filter">
              <Link to={"/checkout"}>
                <img className="w-[30px] invert" src={CartIcon} alt="CartIcon" />
              </Link>

              <div className="bg-red-500 absolute -right-2 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            </div>

            {/* user icon  */}
            <div className="cursor-pointer filter">
              <Link to={"/"}>
                <img className="w-[30px] invert" src={UserIcon} alt="UserIcon" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};
export default Navbar;
