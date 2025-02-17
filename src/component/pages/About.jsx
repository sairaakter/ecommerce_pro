import { useContext } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import { CartContext } from "../../cartContext/cart.jsx";
import abostye from "../../style/About.module.css";
import AbDeveloper from "../AbDevelopr";
import AbtCatagory from "../AboutCatagory";
import CusContainer from "../CusContainer";
import Delivry from "../Delivry";
import Navsec from "../nav_sec";
import Navigated from "../navigatecus";
export default function About() {
  const { wishlistItems, cartLength } = useContext(CartContext);
  const breadcrumbLinks = [
    { name: "Home", path: "/", active: false },
    { name: "About", path: "/About", active: true },
  ];
  const account = (
    <Link to="/Account">
      <img src={user} className="meend" />
    </Link>
  );
  return (
    <>
      <Navsec
        aboutactiv="active"
        wishItems={wishlistItems.length}
        size={cartLength}
        account={account}
        i_tooo="i_tooo"
        cus_noti="cus_noti"
        homenoti="homenoti"
      />
      <div className={`${abostye.about}`}>
        <div className="container">
          <Navigated links={breadcrumbLinks} />
          <CusContainer abostye={abostye} />
        </div>
      </div>
      <AbtCatagory abostye={abostye} />
      <AbDeveloper abostye={abostye} />
      <Delivry abostye={abostye} />
    </>
  );
}
