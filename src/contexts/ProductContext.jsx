import React, { createContext, useState, useEffect } from "react";
// import axiosInstance from "../api/axios";
import axios from 'axios'



// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `?organization_id=${process.env.REACT_APP_ORGANIZATION_ID}&Appid=${process.env.REACT_APP_APP_ID}&Apikey=${process.env.REACT_APP_API_KEY}`
        );
  
        setProducts(response.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

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
