import { Link } from "react-router-dom";
import apstor from "../assets/apstor.png";
import GooglePlay from "../assets/GooglePlay.png";
import send from "../assets/icon-send.png";
import Twitter from "../assets/Icon-Twitter.png";
import scaner from "../assets/scaner.png";
import "../style/Footer.css";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <footer className="">
          <div className="container">
            <div className="row">
              {/* <!-- Exclusive Section --> */}
              <div className="col-lg-3 col-md-3 col-sm-4 col-6 exclusiv">
                <h5>Exclusive</h5>
                <p className="Subscribe">Subscribe</p>
                <p>Get 10% off your first order</p>
                {/* <!-- send icon with buton --> */}
                <form className="send-bar">
                  <input
                    className="form-control send-input"
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email"
                  />
                  <button className="btn send-btn" type="submit">
                    <img src={send} alt="Search Icon" className="send-icon" />
                  </button>
                </form>
              </div>

              {/* <!-- Support Section --> */}
              <div className="col-lg-3 col-md-3 col-sm-4 col-6 exclusiv">
                <h5>Support</h5>
                <address>
                  <p>
                    111 Bijoy sarani, Dhaka, <br />
                    DH 1515, Bangladesh. <br />
                  </p>
                </address>
                <p>
                  <Link to="mailto:exclusive@gmail.com">
                    {" "}
                    exclusive@gmail.com{" "}
                  </Link>
                </p>
                <p>
                  <Link to="tel:+8801588889999"> +88015-88888-9999 </Link>
                </p>
              </div>

              {/* <!-- Account Section --> */}
              <div className="col-lg-2 col-md-2 col-sm-4 col-6 exclusiv Account">
                <h5>Account</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/Account">
                      <p>My Account</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Login">
                      <p>Login / Register</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Cart">
                      <p>Cart</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Wish">
                      <p>Wishlist</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p>Shop</p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Quick Link Section --> */}
              <div className="col-lg-2 col-md-2 col-sm-6 col-6 exclusiv">
                <h5>Quick Link</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">
                      <p>Privacy Policy</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p>Terms Of Use</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p>FAQ</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact">
                      <p>Contact</p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Download App Section --> */}
              <div className="col-lg-2 col-md-2 col-sm-6 col-12 exclusiv">
                <h5>Download App</h5>
                <p className="dnld_p">Save $3 with App New User Only</p>
                <div className="imflex">
                  <div className="imgaping">
                    <img src={scaner} alt="QR Code" className="img-fluid" />
                  </div>
                  <div className="subimg_flex">
                    <img
                      src={GooglePlay}
                      alt="Google Play"
                      className="img-fluid Google"
                    />
                    <img src={apstor} alt="App Store" className="img-fluid" />
                  </div>
                </div>
                <div className="social-icons">
                  <Link to="https://www.facebook.com/" className="text-white">
                    <svg
                      className="s_imgg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <Link to="https://x.com/home?&" className="text-white">
                    <img src={Twitter} className="img-fluid s_imgg" />
                  </Link>
                  <Link to="https://www.instagram.com/" className="text-white">
                    <svg
                      className="s_imgg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <Link to="#https://www.instagram.com/" className="text-white">
                    <svg
                      className="s_imgg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
      <Copyright />
    </>
  );
}
