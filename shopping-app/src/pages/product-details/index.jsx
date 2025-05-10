import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import styles from "./product-details.module.css";

function ProductsDetailsPage() {
  const { loading, fetchCurrentProduct, productDetails, listOfProducts } =
    useContext(ShoppingCartContext);
  const { id } = useParams();

  // console.log("🛒 ProductDetailsPage - Params ID:", id);

  useEffect(() => {
    if (listOfProducts.length > 0) {
      // console.log("✅ Fetching current product...");
      fetchCurrentProduct(id);
    }
  }, [listOfProducts, id]);

  if (loading) return <h1>Loading...</h1>;

  // console.log("🔍 Product Details to Render:", productDetails);

  return (
    <div className={styles.detailsCont}>
      <div className={styles.detailsFlex}>
        <div className={styles.imgCont}>
          {productDetails && productDetails.image ? (
            <img
              className={styles.image}
              src={`../${productDetails.image}`}
              alt={productDetails.name}
            />
          ) : (
            <h2>No Image Available</h2>
          )}
        </div>
        <div>
          <h2>{productDetails?.name}</h2>
          <p>${productDetails?.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetailsPage;
