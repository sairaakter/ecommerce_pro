// import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Drop_down from "../assets/Drop_down.png";
import Drop_up from "../assets/drop_up.png";
import Removed from "../assets/Removed.png";
import { CartContext } from "../cartContext/cart";
import styles from "../style/Cart.module.css";
import CartCoupan from "./Coupan";
import Navigated from "./navigatecus";
import Shopbtn from "./Shopbtn";
const Breadcrumb = ({ links }) => {
  const { cartItems, addFromCart, removeFromCart, deleteItemFromCart } =
    useContext(CartContext);

  // const handleprice = () => {
  //   let ans = 0;
  //   cart.forEach((item) => {
  //     const itemPrice = parseFloat(item.price.replace("$", ""));
  //     ans += itemPrice * item.amount;
  //   });
  //   setPrices(ans);
  // };
  // const handleRemove = (id) => {
  //   const newCart = cart.filter((item) => item.id !== id);
  //   setCart(newCart);

  //   const storedCart = getStoredcart();
  //   const updatedStoredCart = storedCart.filter((itemId) => itemId !== id);
  //   localStorage.setItem("cart", JSON.stringify(updatedStoredCart));
  // };

  // useEffect(() => {
  //   handleprice();
  // });

  // if (!cart || cart.length === 0) {
  //   return <div>No items in the cart</div>;
  // }

  return (
    <div className={styles.cart}>
      <div className="container">
        <Navigated links={links} />
        <div className="row">
          <div className={`col-12 ${styles.car_pad}`}>
            <table className={`table ${styles.cart_table}`}>
              <thead>
                <tr>
                  <th className={`${styles.wdfs}`}>Product</th>
                  <th className={`${styles.wdfs} ${styles.res_wid}`}>Price</th>
                  <th className={`${styles.wdfs} ${styles.res_wid}`}>
                    Quantity
                  </th>
                  <th className={`${styles.wdfs}`}>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((items) => (
                  <tr className="align-middle" key={items.id}>
                    <td>
                      <span
                        onClick={() => {
                          deleteItemFromCart(items.id);
                        }}
                        className={`${styles.remove}`}
                      >
                        <img src={Removed} />
                      </span>
                      <img
                        src={items.sorc[0]}
                        className={`${styles.mon_marg}`}
                        alt={items.carhf}
                      />
                      {items.cartcontent}
                    </td>
                    <td>{items.price}</td>
                    <td className={`${styles.aboebtn}`}>
                      <div className={`${styles.abovebtn}`}>
                        <button className={`${styles.defaultbtn}`}>
                          {items.amount}
                        </button>
                        <div className={`${styles.fexinf}`}>
                          <button
                            onClick={() => addFromCart(items)}
                            className={`${styles.defaultbtn}`}
                          >
                            <img src={Drop_up} />
                          </button>

                          <button
                            onClick={() => removeFromCart(items)}
                            className={`${styles.defaultbtn}`}
                          >
                            <img src={Drop_down} />
                          </button>
                        </div>
                      </div>

                      {/* <input
                        type="number"
                        className={`form-control ${styles.num_input}`}
                        value={items.quantity}
                        min="1"
                        onClick={(e) => handlchange(e, items)}
                      /> */}
                    </td>
                    <td>
                      ${parseFloat(items.price.replace("$", "")) * items.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <!-- Buttons --> */}
        <div className="row">
          <div className="col-6">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Shopbtn className={styles.whish_btn}>Return To Shop</Shopbtn>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <Shopbtn className={styles.whish_btn}>Update Cart</Shopbtn>
          </div>
        </div>
        {/* CartCoupan */}
        <CartCoupan styles={styles} />
      </div>
    </div>
  );
};

export default Breadcrumb;
