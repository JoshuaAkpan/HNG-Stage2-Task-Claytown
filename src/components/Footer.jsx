import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const locationPath = location.pathname;

  if (locationPath === "/" || locationPath === "/products") {
    return (
      <footer className="bg-[#fef8e6] px-12 pt-12 pb-6">
        <div className=" mx-auto flex justify-between mb-20 gap-10 bg-red-400">
          <div className="bg-blue-400 w-fit">
            <h2 className="font-semibold mb-2 ">Explore</h2>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="bg-blue-400 w-fit">
            <h2 className="font-semibold mb-2">Customer Service</h2>
            <ul>
              <li>Shipping & Returns</li>
              <li>Order Tracking</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="bg-blue-400 w-fit">
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
