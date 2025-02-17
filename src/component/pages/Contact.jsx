import { useContext } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import { CartContext } from "../../cartContext/cart.jsx";
import contac from "../../style/Contact.module.css";
import Maincontac from "../Maincontac";
import Navsec from "../nav_sec";
import Navigated from "../navigatecus";
import RightContac from "../RightContac";
export default function Contact() {
  const { wishlistItems, cartLength } = useContext(CartContext);
  const breadcrumbLinks = [
    { name: "Home", path: "/", active: false },
    { name: "Contact", path: "/Contact", active: true },
  ];
  const account = (
    <Link to="/Account">
      <img src={user} className="meend" />
    </Link>
  );
  return (
    <>
      <Navsec
        contactactiv="active"
        wishItems={wishlistItems.length}
        size={cartLength}
        account={account}
        i_tooo="i_tooo"
        cus_noti="cus_noti"
        homenoti="homenoti"
      />
      <div className={`${contac.contactt}`}>
        <div className="container">
          <Navigated links={breadcrumbLinks} />
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <Maincontac contac={contac} />
            </div>
            <div className="col-lg-9 col-md-8">
              <RightContac contac={contac} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
