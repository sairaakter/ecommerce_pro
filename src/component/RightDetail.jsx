import { useContext, useEffect, useState } from "react";
import decres from "../assets/decres.png";
import free_deli from "../assets/free_deli.png";
import ret_deli from "../assets/ret_deli.png";
import { CartContext } from "../cartContext/cart";

export default function RigDetail({ prdetail, product }) {
  const { cartItems } = useContext(CartContext);
  const [cartIts, setCartIts] = useState(cartItems);

  const addCart = (product) => {
    setCartIts((prevCart) => {
      const existingItem = cartIts.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
  };
  const removCart = (product) => {
    setCartIts((prevCart) => {
      const existingItem = cartIts.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount - 1 } : item
        );
      } else {
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
  };
  console.log(cartItems);
  console.log(product);
  // 🟢 Local State to Track `amount`
  const [quantity, setQuantity] = useState(product.amount || 1);

  // 🔄 Sync with Cart State
  useEffect(() => {
    const foundItem = cartItems.find((item) => item.id === product.id);
    if (foundItem) {
      setQuantity(foundItem.amount);
    }
  }, [cartItems, product.id]);

  return (
    <>
      <div className={`col-lg-5 col-md-12 ${prdetail.d_right}`}>
        <h2>{product.carhf}</h2>
        <div className={`d-flex align-items-center ${prdetail.main_ration}`}>
          <span className="text-warning me-2">
            &#9733;&#9733;&#9733;&#9733;&#9734;
          </span>
          <p className={`${prdetail.rating}`}>
            <span>({product.reviews} Reviews )</span> |
            <span className={`${prdetail.stok}`}> In Stock</span>
          </p>
        </div>
        <h4 className={`${prdetail.pric}`}>{product.price}.00</h4>
        <p>
          PlayStation 5 Controller Skin: High-quality vinyl with air channel
          adhesive for easy bubble-free install & mess-free removal. Pressure
          sensitive.
        </p>
        <hr className={`${prdetail.equal_marg}`} />
        <div className={`${prdetail.color}`}>
          <p>Colours:</p>
          <span className={`${prdetail.color_swatch} ${prdetail.red}`}></span>
          <span className={`${prdetail.color_swatch} ${prdetail.black}`}></span>
        </div>
        <div className={`${prdetail.scren_size}`}>
          <strong className={`${prdetail.siz_txt}`}>Size:</strong>
          <span className={`${prdetail.size_option}`}>XS</span>
          <span className={`${prdetail.size_option}`}>S</span>
          <span className={`${prdetail.size_option} ${prdetail.active}`}>
            M
          </span>
          <span className={`${prdetail.size_option}`}>L</span>
          <span className={`${prdetail.size_option}`}>XL</span>
        </div>
        <div className={`${prdetail.btn_section}`}>
          <div
            className={`btn-group ${prdetail.grop_btn}`}
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                  removCart(product);
                }
              }}
              type="button"
              className={`${prdetail.decres}`}
            >
              <img src={decres} className={`${prdetail.d_img}`} />
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => {
                setQuantity(quantity + 1);
                addCart(product);
              }}
              type="button"
              className={`${prdetail.incres}`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className={`${prdetail.i_img}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17V9M9 9V1M9 9H17M9 9H1"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <button className={`${prdetail.buy_btn}`}>Buy Now</button>
          <button className={`${prdetail.lvv_btn}`}>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${prdetail.lov_img}`}
            >
              <path
                d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={`${prdetail.wrap_deli}`}>
          <div className={`${prdetail.free_deli}`}>
            <img src={free_deli} className="img-fluid" />
            <div className={`${prdetail.f_conte}`}>
              <h5>Free Delivery</h5>
              <p>Enter your postal code for Delivery Availability</p>
            </div>
          </div>
          <hr className={`${prdetail.deli_hr}`} />
          <div className={`${prdetail.free_deli}  ${prdetail.ret_del}`}>
            <img src={ret_deli} className="img-fluid" />
            <div className={`${prdetail.f_conte}`}>
              <h5>Return Delivery</h5>
              <p>Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
