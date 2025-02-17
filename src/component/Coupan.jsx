import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext/cart";
import Shopbtn from "./Shopbtn";
const CartCoupan = ({ styles }) => {
  const {
    shippingFee,
    grandTotal,
    discountAmount,
    applyCoupon,
    couponCode,
    setCouponCode,
  } = useContext(CartContext);

  return (
    <div className={`row ${styles.main_copan}`}>
      <div className={`col-md-8 ${styles.coupon_section}`}>
        <input
          type="text"
          className={`form-control ${styles.copaninput}`}
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <Shopbtn
          className={`${styles.whish_btn} ${styles.cuscopsnbtn}`}
          onClick={() => applyCoupon(couponCode)}
        >
          Apply Coupon
        </Shopbtn>
      </div>
      <div className={`col-md-4 ${styles.cart_total}`}>
        <h5>Cart Total</h5>
        <div className="d-flex justify-content-between">
          <p>Subtotal:</p>
          <p>${grandTotal - discountAmount - shippingFee}</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p>Shipping:</p>
          <p>{shippingFee}</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p>Total:</p>
          <p>${grandTotal - discountAmount}</p>
        </div>
        <div className={`${styles.wrap_prc}`}>
          <Link
            to="/Checkout"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Shopbtn
              className={`${styles.whish_btn} ${styles.cuscopsnbtn} ${styles.proced_btn}`}
            >
              Proceed to checkout
            </Shopbtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartCoupan;
