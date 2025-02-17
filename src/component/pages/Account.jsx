import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import activuser from "../../assets/activuser.png";
import user from "../../assets/user.png";
import { CartContext } from "../../cartContext/cart.jsx";
import acstyle from "../../style/Account.module.css";
import Form from "../Form";
import TextInput from "../TextInput";

import Navsec from "../nav_sec";
import Navigated from "../navigatecus.jsx";
export default function Account() {
  const { cartLength, wishlistItems } = useContext(CartContext);
  const [firstName, setFirstName] = useState("");
  const activ = true;
  const breadcrumbLinks = [
    { name: "Home", path: "/", active: false },
    { name: "My Account", path: "/Account", active: true },
  ];
  const account = (
    <Link to="/Account">
      <img src={activ ? activuser : user} className="meend" />
    </Link>
  );
  const welcom = (
    <div>
      <p>
        Welcome! <span style={{ color: "#DB4444" }}>Md Rimel</span>{" "}
      </p>
    </div>
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
      <div className={`${acstyle.account}`}>
        <div className="container">
          <Navigated
            links={breadcrumbLinks}
            welcom={welcom}
            acstyle={`${acstyle.bred_flex}`}
          />
          <div className="row">
            <div className={`col-md-3 ${acstyle.sidbar}`}>
              <h5>Manage My Account</h5>
              <ul>
                <li>
                  <Link to="#" className={`${acstyle.active}`}>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="#">Address Book</Link>
                </li>
                <li>
                  <Link to="#">My Payment Options</Link>
                </li>
              </ul>
              <h5>My Orders</h5>
              <ul>
                <li>
                  <Link to="#">My Returns</Link>
                </li>
                <li>
                  <Link to="#">My Cancellations</Link>
                </li>
              </ul>
              <h5>My Wishlist</h5>
            </div>
            <div className="col-md-9">
              <div className={`${acstyle.content}`}>
                <h3>Edit Your Profile</h3>
                <Form>
                  <div className={`row ${acstyle.co_magn}`}>
                    <div className="col-md-6 col-sm-6 col-6">
                      <TextInput
                        htmlFor="firstName"
                        type="text"
                        id="firstName"
                        labal="First Name"
                        c_labal={`${acstyle.c_labal}`}
                        content_styl={`${acstyle.content_styl}`}
                        value={firstName} // ✅ `value` পাঠাচ্ছি
                        onChange={(e) => setFirstName(e.target.value)} // ✅ `onChange` পাঠাচ্ছি
                        placeholder="Md"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6 col-6">
                      <TextInput
                        htmlFor="lastName"
                        type="text"
                        id="lastName"
                        labal="Last Name"
                        c_labal={`${acstyle.c_labal}`}
                        content_styl={`${acstyle.content_styl}`}
                        placeholder="Rimel"
                      />
                    </div>
                  </div>
                  <div className={`row ${acstyle.co_magn}`}>
                    <div className="col-md-6 col-sm-6 col-6">
                      <TextInput
                        htmlFor="email"
                        type="text"
                        id="email"
                        labal="Email"
                        c_labal={`${acstyle.c_labal}`}
                        content_styl={`${acstyle.content_styl}`}
                        placeholder="rimel1111@gmail.com"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6 col-6">
                      <TextInput
                        htmlFor="address"
                        type="text"
                        id="address"
                        labal="Address"
                        c_labal={`${acstyle.c_labal}`}
                        content_styl={`${acstyle.content_styl}`}
                        placeholder="Kingston, 5236, United State"
                      />
                    </div>
                  </div>
                  <div className={`row ${acstyle.co_magn}`}>
                    <div className="col-md-12">
                      <TextInput
                        htmlFor="Password"
                        type="password"
                        id="currentPassword"
                        labal="Password Changes"
                        c_labal={`${acstyle.c_labal}`}
                        content_styl={`${acstyle.content_styl}`}
                        placeholder="Current Password"
                        m_botom="mb-3"
                      />
                      <TextInput
                        type="password"
                        id="newPassword"
                        content_styl={`${acstyle.content_styl}`}
                        placeholder="New Password"
                        m_botom="mb-3"
                      />
                      <TextInput
                        type="password"
                        id="confirmPassword"
                        content_styl={`${acstyle.content_styl}`}
                        placeholder="Confirm New Password"
                      />
                    </div>
                  </div>
                  <div className={`${acstyle.cancel_parent}`}>
                    <div className={`${acstyle.cancel_btn}`}>Cancel</div>
                    <button
                      type="submit"
                      className={`${acstyle.whish_btn} ${acstyle.cuscopsnbtn}`}
                    >
                      Save Changes
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
