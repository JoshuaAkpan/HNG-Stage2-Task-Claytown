import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Address,
  Home,
  Payment,
  ProductListPage,
  Shipping,
  CheckOutPage,
  PaymentDetailsPage,
  ShippingDetails,
} from "./pages";
import {  PageNotFound } from "./components";

import { Footer, NavBar } from "./components";

const App = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListPage />} />
        {/* <Route path="#about-us" element={<AboutUs />} /> */}
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/checkout/address" element={<Address />} />
        <Route path="/checkout/shipping" element={<Shipping />} />
        <Route path="/checkout/payment/shipping-details" element={<ShippingDetails />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/checkout/payment/payment-details" element={<PaymentDetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
