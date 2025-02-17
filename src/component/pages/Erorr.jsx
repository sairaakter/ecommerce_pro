import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../assets/user.png";
import { CartContext } from "../../cartContext/cart.jsx";
import erorr from "../../style/Erorr.module.css";
import Navsec from "../nav_sec";
import Navigated from "../navigatecus";
export default function Erorr() {
  const navigate = useNavigate();

  const { wishlistItems, cartLength } = useContext(CartContext);
  const breadcrumbLinks = [
    { name: "Home", path: "/", active: false },
    { name: "404 Error", path: "/Erorr", active: true },
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
      <div className={`${erorr.erorr}`}>
        <div className="container">
          <Navigated links={breadcrumbLinks} />
          <div className="row">
            <div className="col-lg-12">
              <div className={`${erorr.eror_con}`}>
                <h1>404 Not Found</h1>
                <p>Your visited page not found. You may go home page.</p>
                <div className={`${erorr.cancel_parent}`}>
                  <button
                    type="submit"
                    className={`${erorr.whish_btn} ${erorr.cuscopsnbtn}`}
                    onClick={() => navigate("/")}
                  >
                    Back to home page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
