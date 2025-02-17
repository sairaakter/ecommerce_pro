import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Quick_View from "../../assets/Quick_View.png";
import user from "../../assets/user.png";

// import { cards } from "../data/cardsData.jsx";
import { useContext } from "react";
import { CartContext } from "../../cartContext/cart.jsx";
import wishes from "../../style/Wish.module.css";
import Navsec from "../nav_sec.jsx";
// import RacItems from "../RacItems";
import deleteIcon from "../../assets/delete.png";
import whit_cart from "../../assets/whit_cart.png";
import Cartbtn from "../Cartbtn.jsx";
import Discountbtn from "../Discountbtn.jsx";
import Wibtn from "../Wibtn.jsx";
import WishItem from "../WishItem";
import { cards } from "../data/cardsData";

export default function Whilist() {
  const { cartLength, wishlistItems, moveAllToCart } = useContext(CartContext);
  // const isDone = false;

  const account = (
    <Link to="/Account">
      <img src={user} className="meend" />
    </Link>
  );
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 400 },
      items: 2,
    },
    smmm: {
      breakpoint: { max: 399, min: 0 },
      items: 1,
    },
  };
  //discountbtn
  const getButtons = (item) => {
    let buttons = [];

    if (item.showDiscount) {
      buttons.push(
        <Discountbtn key="discount" className="t_butun">
          {item.Distbtn}
        </Discountbtn>
      );
    }
    return buttons;
  };
  //cartbtn
  const showCart = (item) => {
    let buttons = [];

    if (item.showCart) {
      buttons.push(
        <Cartbtn key="cart" className="cart">
          <img className="me-2 whcar" src={whit_cart} />
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
      buttons.push(<Wibtn key="wish" src={deleteIcon} clsbtm="s_botom" />);
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
  const Racc = wishlistItems.map((item) => (
    <WishItem
      key={item.id}
      item={item}
      getButtons={getButtons}
      showCart={showCart}
      showWibtn={showWibtn}
      is={true}
    />
  ));

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
      {wishlistItems.length > 0 ? (
        <section className={`${wishes.whis}`}>
          <div className="container">
            <div className={`${wishes.whi_marg}`}>
              <div className={`row ${wishes.mbotom} ${wishes.whlis_botom}`}>
                <div className="col-lg-6 col-md-8 col-sm-6 col-5">
                  <div className="">
                    <span className={`${wishes.whishlis_alig}`}>
                      {/* <!-- <div class="img"></div> --> */}
                      <p>
                        Wishlist <span>({wishlistItems.length})</span>
                      </p>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-6 col-7">
                  {/* <!-- Controls --> */}
                  <div
                    className={`pull-right hidden-xs ${wishes.t_control} ${wishes.pro_control}`}
                  >
                    <div className={`${wishes.wish_button}`}>
                      <button
                        onClick={moveAllToCart}
                        type="button"
                        className={`${wishes.whish_btn}`}
                      >
                        Move All To Bag
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  renderButtonGroupOutside={true}
                >
                  {Racc}
                </Carousel>
              </div>
            </div>
            <div className="container">
              <div className={`row ${wishes.mbotom} ${wishes.whlis_botom}`}>
                <div className="col-lg-6 col-md-8 col-sm-6 col-7">
                  <div className="">
                    <span className={`${wishes.whishlis_alig}`}>
                      <div className={`${wishes.img}`}></div>
                      <p>Just For You</p>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-6 col-5">
                  {/* <!-- Controls --> */}
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <div
                      className={`pull-right hidden-xs ${wishes.t_control} ${wishes.pro_control}`}
                    >
                      <div className={`${wishes.wish_button}`}>
                        <button type="button" className={`${wishes.whish_btn}`}>
                          See All
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Carousel
                responsive={responsive}
                arrows={false}
                renderButtonGroupOutside={true}
              >
                {cards.map((item) => (
                  <WishItem
                    key={item.id}
                    item={item}
                    getButtons={getButtons}
                    showCart={showCart}
                    showWibtn={showWibtn}
                    is={false}
                    showEyebtn={showEyebtn}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      ) : (
        <p className="empty_styl">WhisItem is Empty !</p>
      )}
    </>
  );
}
