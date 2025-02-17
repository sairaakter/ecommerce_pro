import { useContext } from "react";
import { Link } from "react-router-dom";
import whit_cart from "../assets/whit_cart.png";
import { CartContext } from "../cartContext/cart";
import "../style/Carascard.css";

import "../style/Today.css";
import Cartbtn from "./Cartbtn.jsx";
// import Discountbtn from "../component/Discountbtn";

export default function WishItem({
  item,
  getButtons,
  showCart,
  showWibtn,
  is,
  showEyebtn,
}) {
  const { addToCart, removeFromWish } = useContext(CartContext);
  //cartbtn
  const showCarttt = (item) => {
    let buttons = [];

    if (item.common) {
      buttons.push(
        <Cartbtn key="cart" className="cart">
          <img className="me-2 whcar" src={whit_cart} />
          {item.Cartbtn}
        </Cartbtn>
      );
    }
    return buttons;
  };
  return (
    <>
      <div className="card custom-card">
        {/* <!-- Image Section --> */}
        <Link
          to={`/product/${item.id}`}
          style={{ textDecoration: "none" }}
          onClick={(event) => event.stopPropagation()} // Ensuring only this click works
        >
          <div className="position-relative image-container">
            <img
              src={item.sorc[0]}
              className="card-img-top"
              alt="Profile Image"
            />
            {/* <!-- Hover Items --> */}
            <div className="hover-items">
              {/* <!-- t_butun Badge --> */}

              {/* <button type="button" className="t_butun">
              -40%
            </button> */}
              {getButtons(item)}
              {/* <!-- Top Star --> */}
              <div className="star-badge">
                {/* <div className="favrat s_botom">
                <img
                  src="./image/delete.png"
                  className="img-fluid imgcolochang"
                />
              </div> */}
                {is ? (
                  <div
                    onClick={(event) => {
                      event.stopPropagation();
                      event.preventDefault();
                      removeFromWish(item);
                    }}
                  >
                    {showWibtn(item)}
                  </div>
                ) : (
                  <div>{showEyebtn(item)}</div>
                )}
                {/* <div onClick={() => removeFromWish(item)}>{showWibtn(item)}</div> */}
              </div>
              {/* <!-- add to cart --> */}
              {/* <div className="cart">
              <img className="me-2 whcar" src="./image/whit_cart.png" />
              <p>Add To Cart</p>
            </div> */}
              <div
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  addToCart(item);
                }}
                style={{ cursor: "pointer" }}
              >
                {showCart?.(item)}
              </div>
              <div
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  addToCart(item);
                }}
                style={{ cursor: "pointer" }}
              >
                {showCarttt?.(item)}
              </div>
              {/* <div onClick={() => addToCart(item)}>{showCart?.(item)}</div> */}
              {/* <div onClick={() => addToCart(item)}>{showCarttt?.(item)}</div> */}
            </div>
          </div>
        </Link>
        {/* <!-- Card Body --> */}
        <div className="card-body crd_body">
          <h5 className="card-title mb-0">{item.carhf}</h5>
          <p>
            $120{" "}
            <span className="p_colo">
              <del>$160</del>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
