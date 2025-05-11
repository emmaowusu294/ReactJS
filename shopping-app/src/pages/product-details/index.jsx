import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import styles from "./product-details.module.css";

function ProductsDetailsPage() {
  const {
    loading,
    fetchCurrentProduct,
    productDetails,
    listOfProducts,
    handleAddToCart,
    cartItems,
  } = useContext(ShoppingCartContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log("🛒 ProductDetailsPage - Params ID:", id);

  useEffect(() => {
    if (listOfProducts.length > 0) {
      // console.log("✅ Fetching current product...");
      fetchCurrentProduct(id);
    }
  }, [listOfProducts, id]);

  if (loading) return <h1>Loading...</h1>;

  console.log("🔍 Product Details to Render:", productDetails);

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
        <div className={styles.about}>
          <h2>{productDetails?.name}</h2>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>
              <span>Ratings: </span>
              <img
                src={`../images/ratings/rating-${
                  productDetails?.rating?.stars * 10
                }.png`}
                alt="rating"
              />
            </div>

            <p>Reviews: {productDetails?.rating?.count}</p>
          </div>
          <div className={styles.priceAndButt}>
            <p>${(productDetails?.priceCents / 100).toFixed(2)}</p>
            <button
              disabled={
                cartItems.findIndex((item) => item.id === productDetails.id) >
                -1
              }
              onClick={() => handleAddToCart(productDetails)}
              className={styles.button}
            >
              {cartItems.findIndex((item) => item.id === productDetails.id) > -1
                ? "Item In Cart"
                : "Add to Cart"}
            </button>
            {cartItems.findIndex((item) => item.id === productDetails.id) >
            -1 ? (
              <button
                className={styles.button}
                onClick={() => navigate("/cart")}
              >
                Go To Cart
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetailsPage;
