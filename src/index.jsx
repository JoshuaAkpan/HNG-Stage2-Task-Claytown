import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from 'axios'

import { BrowserRouter } from "react-router-dom";

// product provider
import ProductProvider from "./contexts/ProductContext";
// cart provider
import CartProvider from "./contexts/CartContext";

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <ProductProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ProductProvider>
  </CartProvider>
);
