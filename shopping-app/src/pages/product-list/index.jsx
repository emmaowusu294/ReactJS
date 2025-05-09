import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

function ProductsListPage() {
  const getContextValue = useContext(ShoppingCartContext);
  console.log(getContextValue);
  
  return <div>Product List Page</div>;
}

export default ProductsListPage;
