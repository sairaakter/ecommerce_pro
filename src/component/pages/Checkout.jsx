import { useContext } from "react";
import { Link } from "react-router-dom";
import Bkash from "../../assets/Bkash.png";
import visas from "../../assets/visas.png";
import Text from "../../style/Textinput.module.css";

import Mastercard from "../../assets/Mastercard.png";
import Nagad from "../../assets/Nagad.png";

import user from "../../assets/user.png"; // Adjust the path as
import { CartContext } from "../../cartContext/cart.jsx";
import check from "../../style/Checkout.module.css";
import Form from "../Form";
import Navsec from "../nav_sec";
import Navigated from "../navigatecus";
import TextInput from "../TextInput";

export default function Checkout() {
  const {
    cartLength,
    cartItems,
    shippingFee,
    grandTotal,
    discountAmount,
    applyCoupon,
    couponCode,
    setCouponCode,
    wishlistItems,
  } = useContext(CartContext);

  const breadcrumbLinks = [
    { name: "Account", path: "/Account", active: false },
    { name: "My Account", path: "/Account", active: false },
    { name: "Product", path: "/", active: false },
    { name: "View Cart", path: "/Cart", active: false },
    { name: "Checkout", path: "/Checkout", active: true },
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
      <div className={`${check.checkouty}`}>
        <div className="container">
          <Navigated links={breadcrumbLinks} />
          <div className="row">
            <div className={`col-md-6 ${check.billing_details}`}>
              <h2>Billing Details</h2>
              <Form>
                <TextInput
                  htmlFor="firstName"
                  type="text"
                  id="firstName"
                  sppn="*"
                  labal="First Name"
                  lab_styl={`${Text.lab_styl}`}
                  chekinpu_styl={`${Text.chekinpu_styl}`}
                />
                <TextInput
                  htmlFor="companyName"
                  type="text"
                  id="companyName"
                  labal="Company Name"
                  lab_styl={`${Text.lab_styl}`}
                  chekinpu_styl={`${Text.chekinpu_styl}`}
                />
                <TextInput
                  htmlFor="streetAddress"
                  type="text"
                  sppn="*"
                  id="streetAddress"
                  labal="Street Address"
                  lab_styl={`${Text.lab_styl}`}
                  chekinpu_styl={`${Text.chekinpu_styl}`}
                />
                <TextInput
                  htmlFor="apartment"
                  type="text"
                  id="apartment"
                  labal="Apartment, floor, etc. (optional)"
                  lab_styl={`${Text.lab_styl}`}
                  chekinpu_styl={`${Text.chekinpu_styl}`}
                />
                <TextInput
                  htmlFor="city"
                  type="text"
                  id="city"
                  sppn="*"
                  labal="Town/City"
                  lab_styl={`${Text.lab_styl}`}
                  chekinpu_styl={`${Text.chekinpu_styl}`}
                />
                <TextInput
                  htmlFor="phone"
                  type="text"
                  id="phone"
                  sppn="*"
                  labal="Phone Number"
                  lab_styl={`${Text.lab_styl}`}
                  chekinpu_styl={`${Text.chekinpu_styl}`}
                />
                <TextInput
                  htmlFor="email"
                  type="text"
                  id="email"
                  sppn="*"
                  labal="Email Address"
                  lab_styl={`${Text.lab_styl}`}
                  chekinpu_styl={`${Text.chekinpu_styl}`}
                />
                <div className={`${check.form_check}`}>
                  <input
                    className={`form-check-input ${check.form_cusm}`}
                    type="checkbox"
                    id="saveInfo"
                  />
                  <label
                    className={`form-check-label ${check.lab_styl} ${check.mod_lbl}`}
                    htmlFor="saveInfo"
                  >
                    Save this information for faster check-out next time
                  </label>
                </div>
              </Form>
            </div>
            {/* <!-- Order Summary --> */}
            <div className={`col-md-6 ${check.cart_total}`}>
              <div className={`${check.order_summary}`}>
                {cartItems?.map((items) => (
                  <div
                    key={items.id}
                    className={`d-flex justify-content-between ${check.ord_prici}`}
                  >
                    <div>
                      <img
                        src={items.sorc[0]}
                        className={`${check.mon_marg}`}
                        alt="LCD Monitor"
                      />
                      <span style={{ fontSize: "16px" }}>
                        {items.cartcontent}
                      </span>
                    </div>
                    <div>
                      <p>
                        $
                        {parseFloat(items.price.replace("$", "")) *
                          items.amount}
                      </p>
                    </div>
                  </div>
                ))}
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

                <div className={`${check.payment_options}`}>
                  <div className={`${check.form_check} ${check.bank_chek}`}>
                    <div>
                      <input
                        className={`form-check-input ${check.radi_inpt}`}
                        type="radio"
                        name="paymentMethod"
                        id="bank"
                        value="bank"
                      />
                      <label className="form-check-label" htmlFor="bank">
                        <p>Bank</p>
                      </label>
                    </div>

                    <div className={`${check.bnklogo_img}`}>
                      <img
                        src={Bkash}
                        className={`img-fluid ${check.spacin}`}
                      />
                      <img
                        src={visas}
                        className={`img-fluid ${check.spacin}`}
                      />
                      <img
                        src={Mastercard}
                        className={`img-fluid ${check.spacin}`}
                      />
                      <img
                        src={Nagad}
                        className={`img-fluid ${check.spacin}`}
                      />
                    </div>
                  </div>
                  <div className={`${check.form_check} ${check.deliv_chek}`}>
                    <input
                      className={`form-check-input ${check.radi_inpt}`}
                      type="radio"
                      name="paymentMethod"
                      id="cashOnDelivery"
                      value="cash"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="cashOnDelivery"
                    >
                      <p>Cash on delivery</p>
                    </label>
                  </div>
                </div>

                <div className={`${check.coupon_section}`}>
                  <input
                    type="text"
                    className={`form-control ${check.copaninput}`}
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    onClick={() => applyCoupon(couponCode)}
                    className={`${check.whish_btn} ${check.cuscopsnbtn}`}
                  >
                    Apply Coupon
                  </button>
                </div>

                <button className={`${check.whish_btn} ${check.cuscopsnbtn}`}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
