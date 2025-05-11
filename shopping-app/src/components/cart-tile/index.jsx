import { useContext } from "react";
import styles from "./cart-tile.module.css";
import { ShoppingCartContext } from "../../context";

function CartTile({ singleCartItem }) {
  const { formatCurrency, handleRemoveFromCart,handleAddToCart } =
    useContext(ShoppingCartContext);
  return (
    <>
      <div className={styles.cartTileCont}>
        <div className={styles.imgCont}>
          <img
            className={styles.image}
            src={singleCartItem.image}
            alt="image"
          />
        </div>
        <div className={styles.nameAndButt}>
          <p className={styles.name}>{singleCartItem?.name}</p>
          <button onClick={() => handleRemoveFromCart(singleCartItem, true)}>
            Remove
          </button>
        </div>
        <div className={styles.priceAndButt}>
          <p className={styles.quantity}>{singleCartItem?.quantity} item(s)</p>
          <p>${formatCurrency(singleCartItem?.totalPriceCents)}</p>
          <div className={styles.buttons}>
            <button onClick={() => handleAddToCart(singleCartItem)}>+</button>
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, false)}
              disabled={singleCartItem?.quantity === 1}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartTile;
