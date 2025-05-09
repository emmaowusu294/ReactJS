import styles from "./product-tile.module.css";

function ProductTile({ singleProductTile }) {
  return (
    <div className={styles.productTile}>
      <div className={styles.imgCont}>
        <img
          className={styles.image}
          src={singleProductTile?.image}
          alt={singleProductTile.name}
        />
      </div>
      <div className={styles.about}>
        <p className={styles.name}>{singleProductTile?.name}</p>
        <p className={styles.price}>
          ${(singleProductTile?.priceCents / 100).toFixed(2)}
        </p>
      </div>
      <button className={styles.detailsButton}>View Details</button>
    </div>
  );
}

export default ProductTile;
