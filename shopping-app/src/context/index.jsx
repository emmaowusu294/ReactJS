//create the context
//provide the state to the context
//wrap context in root element
//consume using use context

import { createContext, useEffect, useState } from "react";
import products from "../backend/products.json";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);

  async function fetchListOfProducts() {
    setTimeout(async () => {
      try {
        //   const response = products;
        //   const data = await response.json();
        setListOfProducts(products);
        setLoading(false);
        console.log(listOfProducts);
        
        
      } catch (error) {
        console.error("Failed to load products:", error);
        setLoading(false);
      }
    }, 2000); // Simulate a 2-second delay
  }

  useEffect(() => {
    fetchListOfProducts();
    // console.log(products);
  }, []);



  return (
    <ShoppingCartContext.Provider value={{listOfProducts}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
