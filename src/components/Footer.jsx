import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const locationPath = location.pathname;

  if (locationPath === "/" || locationPath === "/products") {
    return (
      <footer className="bg-[#fef8e6] pt-12 pb-6 px-3">
        <div className="mx-auto flex justify-evenly mb-20 gap-5">
          <div className="w-fit">
            <h2 className="font-semibold mb-2 ">Explore</h2>
            <ul>
              <li className="sm:text-[16px]">Home</li>
              <li className="sm:text-[16px]">Shop</li>
              <li className="sm:text-[16px]">About Us</li>
              <li className="sm:text-[16px]">Blog</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className=" w-fit">
            <h2 className="font-semibold mb-2">Customer Service</h2>
            <ul>
              <li>Shipping & Returns</li>
              <li>Order Tracking</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="w-fit">
            <h2 className="font-semibold mb-2">Get in Touch</h2>
            <ul className="leading-10">
              <li>Email: support@craftytown.com</li>
              <li>Phone: 1-800-123-4567</li>
              <li>Address: 123 Craft Lane, Artisan City, AC 12345</li>
            </ul>
          </div>
        </div>

        <p className="text-center">
          ClayTown &copy; 2024. All rights reserved.
        </p>
      </footer>
    );
  } else {
    return null;
  }
};

export default Footer;
