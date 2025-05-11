import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import styles from "./cart-list.module.css";
import { useNavigate } from "react-router-dom";
import CartTile from "../../components/cart-tile";

function CartListPage() {
  const { cartItems, formatCurrency } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <div className={styles.cartItemsCont}>
      <p className={styles.title}>Cart Page</p>
      <div>
        <div>
          {cartItems?.length ? (
            cartItems.map((singleCartItem) => (
              <CartTile
                key={singleCartItem?.id}
                singleCartItem={singleCartItem}
              />
            ))
          ) : (
            <h3>No items available in cart!!</h3>
          )}
        </div>
        <div></div>
      </div>
      <div className={styles.orderSummCont}>
        <p className={styles.ordersummtitle}>Order Summary</p>
        <p className={styles.total}>
          Total: <span>${formatCurrency(cartItems.reduce((acc, curr) => acc + curr.totalPriceCents, 0))}</span>
        </p>
        <div className={styles.buttons}>
          <button disabled = {cartItems?.length === 0}>Checkout</button>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}

export default CartListPage;
