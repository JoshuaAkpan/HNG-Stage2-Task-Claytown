import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  CheckOutProcess,
  Home,
  ProductListPage,
  CheckOutPage,
  PaymentDetailsPage,
  ShippingDetails,
  Completed,
} from "./pages";
import {  PageNotFound } from "./components";

import { Footer, NavBar } from "./components";

const App = () => {
  return (
    <div className="overflow-hidden font-futura">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/checkout/processing" element={<CheckOutProcess />} />
        <Route path="/checkout/shipping-details" element={<ShippingDetails />} />
        <Route path="/checkout/payment-details" element={<PaymentDetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/checkout/order-complete" element={<Completed />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
