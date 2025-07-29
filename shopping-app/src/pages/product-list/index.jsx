import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import styles from "./product-list.module.css";
import ProductTile from "../../components/product-tile";

function ProductsListPage() {
  const { listOfProducts, loading } = useContext(ShoppingCartContext);
  // console.log(listOfProducts);
  

  if (loading) return <h3>Loading Data Please Wait!!</h3>;

  return (
    <section className={styles.section}>
      <div>
        <h2 className={styles.title}>Our Featured Products</h2>
      </div>
      <div className={styles.productsGrid}>
        {listOfProducts && listOfProducts.length > 0 ? (
          listOfProducts.map((singleProductTile) => (
            <ProductTile
              key={singleProductTile.id}
              singleProductTile={singleProductTile}
            />
          ))
        ) : (
          <h3>No Products Found</h3>
        )}
      </div>
    </section>
  );
}

export default ProductsListPage;
