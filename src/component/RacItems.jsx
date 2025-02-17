import { useContext } from "react";
import { Link } from "react-router-dom";
import heart_small from "../assets/heart_small.png";
import Quick_View from "../assets/Quick_View.png";
import { CartContext } from "../cartContext/cart";
import Cartbtn from "../component/Cartbtn";
import Discountbtn from "../component/Discountbtn";
import Wibtn from "../component/WIbtn";

import ColorPicker from "./ColorPicker";
export default function RacItems({ item, isDone, clasnam, clasnamto }) {
  const { addToCart, WishToCart } = useContext(CartContext);
  //discountbtn
  const getButtons = (item) => {
    let buttons = [];

    if (item.showDiscount) {
      buttons.push(
        <Discountbtn key="discount" className={`t_butun ${clasnam} `}>
          {item.Distbtn}
        </Discountbtn>
      );
    }
    return buttons;
  };
  //showcart
  const showCart = (item) => {
    let buttons = [];

    if (item.showCart) {
      buttons.push(
        <Cartbtn key="cart" className="cart">
          {item.Cartbtn}
        </Cartbtn>
      );
    }
    return buttons;
  };
  //Wibtn
  const showWibtn = (item) => {
    let buttons = [];

    if (item.showWibtn) {
      buttons.push(<Wibtn key="wish" src={heart_small} clsbtm="s_botom" />);
    }
    return buttons;
  };
  //Eyebtn
  const showEyebtn = (item) => {
    let buttons = [];

    if (item.showEyebtn) {
      buttons.push(<Wibtn key="eybtn" src={Quick_View} />);
    }
    return buttons;
  };
  return (
    <>
      <div className={`card custom-card ${clasnamto}`}>
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
              alt="Product Image"
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
              <img src={heart_small} className="img-fluid imgcolochang" />
            </div> */}
                {/* <div className="favrat">
              <img src={Quick_View} className="img-fluid imgcolochang" />
            </div> */}
                <div
                  onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault(); // Prevent navigation
                    WishToCart(item);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {showWibtn(item)}
                </div>
                {showEyebtn(item)}
              </div>
              {/* <!-- add to cart --> */}
              {/* <div className="cart">
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
                {showCart(item)}
              </div>
            </div>
          </div>
        </Link>
        {/* <!-- Card Body --> */}
        <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
          <div className="card-body crd_body">
            <h5 className="card-title mb-0">{item.carhf}</h5>
            {isDone ? (
              <Expolbody
                price={item.price}
                reviews={item.reviews}
                rimg={item.rimg}
                ColorPicker={
                  item.isss ? <ColorPicker colorr={item.color} /> : ""
                }
              />
            ) : (
              <Carbody
                price={item.price}
                delprice={item.delprice}
                reviews={item.reviews}
                rimg={item.rimg}
              />
            )}
          </div>
        </Link>
      </div>
    </>
  );
}
function Carbody({ price, delprice, rimg, reviews }) {
  return (
    <>
      <div>
        <p>
          {price}
          <span className="p_colo">
            <del>{delprice}</del>
          </span>
        </p>
        <div className="t_reviws">
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <span className="r_lef">{reviews}</span>
        </div>
      </div>
    </>
  );
}
function Expolbody({ price, rimg, reviews, ColorPicker }) {
  return (
    <>
      <div className="flex">
        <p className="me_rght">{price}</p>
        <div className="t_reviws">
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <span className="r_lef">{reviews}</span>
        </div>
      </div>
      {/* color picker */}
      {/* <ColorPicker /> */}
      {ColorPicker}
    </>
  );
}
