import { createContext, useEffect, useState } from "react";
import products from "../backend/products.json";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({});

  async function fetchListOfProducts() {
    setTimeout(() => {
      try {
        setListOfProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load products:", error);
        setLoading(false);
      }
    }, 1000); // Simulate a delay
  }

  // ✅ Updated fetchCurrentProduct to wait for the list to load
  function fetchCurrentProduct(getProductId) {
    setLoading(true);
    if (listOfProducts.length > 0) {
      const foundProduct = listOfProducts.find(
        (product) => product.id === getProductId
      );
      if (foundProduct) {
        // console.log("🔍 Found product:", foundProduct);
        setProductDetails(foundProduct);
        setLoading(false);
      } else {
        console.warn("⚠️ Product not found!");
      }
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        fetchCurrentProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
