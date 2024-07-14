import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// importing product data - STATIC DATA
// import productsData from "../data/productsData";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(async () => {
    try {
      const response = await axios.get(
        `https://api.timbu.cloud/products?organization_id=${process.env.REACT_APP_ORGANIZATION_ID}&Appid=${process.env.REACT_APP_APP_ID}&Apikey=${process.env.REACT_APP_API_KEY}`
      );

      setProducts(response.data.items);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products) {
    return <div>Loading.........</div>;
  }

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
