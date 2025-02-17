import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import Breadcrumb from "../Bredcumb.jsx";
// import { cards } from "../data/cardsData.jsx";
import { useContext } from "react";
import { CartContext } from "../../cartContext/cart.jsx";
import Navsec from "../nav_sec.jsx";
export default function Cart() {
  const { cartLength, wishlistItems, cartItems } = useContext(CartContext);

  const breadcrumbLinks = [
    { name: "Home", path: "/", active: false },
    { name: "Cart", path: "/Cart", active: true },
  ];
  const account = (
    <Link to="/Account">
      <img src={user} className="meend" />
    </Link>
  );
  return (
    <>
      <Navsec
        wishItems={wishlistItems.length}
        size={cartLength}
        account={account}
        i_tooo="i_tooo"
        cus_noti="cus_noti"
        homenoti="homenoti"
      />
      {cartItems.length > 0 ? (
        <Breadcrumb links={breadcrumbLinks} />
      ) : (
        <p className="empty_styl">CartItem is Empty !</p>
      )}
    </>
  );
}
