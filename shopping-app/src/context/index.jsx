import { createContext, useEffect, useState } from "react";
import products from "../backend/products.json";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

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

  function handleAddToCart(getProductDetails) {
    // console.log(getProductDetails);

    let copyExistingCartItems = [...cartItems];

    const findProductIndex = copyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );
    // console.log(findProductIndex);

    if (findProductIndex === -1) {
      copyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPriceCents: getProductDetails?.priceCents,
      });
    } else {
      copyExistingCartItems[findProductIndex] = {
        ...copyExistingCartItems[findProductIndex],
        quantity: copyExistingCartItems[findProductIndex].quantity + 1,
        totalPriceCents:
          (copyExistingCartItems[findProductIndex].quantity + 1) *
          copyExistingCartItems[findProductIndex].priceCents,
      };
    }
    console.log(copyExistingCartItems);
    
    setCartItems(copyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItems));
    navigate("/cart");
  }

  function formatCurrency(priceCents) {
    return (Math.round(priceCents) / 100).toFixed(2);
  }

  function handleRemoveFromCart(getProductDetails, isFullyRemoved) {
    let copyExistingCartItems = [...cartItems];
    const findProductIndex = copyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );

    if (isFullyRemoved) {
      copyExistingCartItems.splice(findProductIndex, 1);
    } else {
      copyExistingCartItems[findProductIndex] = {
        ...copyExistingCartItems[findProductIndex],
        quantity: copyExistingCartItems[findProductIndex].quantity - 1,
        totalPriceCents:
          (copyExistingCartItems[findProductIndex].quantity - 1) *
          copyExistingCartItems[findProductIndex].priceCents,
      };
    }

    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItems));
    setCartItems(copyExistingCartItems);
  }
  useEffect(() => {
    fetchListOfProducts();
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
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
        handleAddToCart,
        cartItems,
        formatCurrency,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
