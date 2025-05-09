import { Route, Routes } from "react-router-dom";
import ProductsListPage from "./pages/product-list";
import ProductsDetailsPage from "./pages/product-details";
import CartListPage from "./pages/cart-list";

function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<ProductsListPage />} />
        <Route path="/product-details/:id" element={<ProductsDetailsPage />} />
        <Route path="/cart" element = {<CartListPage />}/>
      </Routes>
    </>
  );
}

export default App;
