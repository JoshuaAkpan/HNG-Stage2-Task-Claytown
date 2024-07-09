import React, { createContext, useState, useEffect } from "react";

// importing product data - STATIC DATA
import productsData from "../data/productsData";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);

  //fetch products from static data
  useEffect(() => {
    // Here, I simulate a delay to mimic an asynchronous operation
    setTimeout(() => {
      // Set products data after delay
      setProducts(productsData);
    }, 1000); // Simulate a 1 second delay
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
