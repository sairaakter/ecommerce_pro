import { Link } from "react-router-dom";
import cart from "../assets/cart.png";
import searchbtn from "../assets/searchbtn.png";
import togle from "../assets/togle.png";
import Wishlist from "../assets/Wishlist.png";

import "../style/navsec.css";

export default function Navsec({
  cus_noti,
  i_tooo,
  account,
  claassName,
  crtt,
  activ,
  activh,
  aboutactiv,
  contactactiv,
  // cartt,
  size,
  wishItems,
  homenoti,
}) {
  // console.log("Cart count received in Navsec:", );
  return (
    <>
      {/* <!-- navbar start --> */}
      <div className="nav_sectn">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid p-0 cntr">
                {/* <!-- logo img --> */}
                <Link className="navbar-brand logo" to="/">
                  Exclusive
                </Link>
                {/* <!-- this is visible for md screen --> */}
                {/* <!-- search button with icon --> */}
                <form className="d-lg-none d-col-flex search-bar" role="search">
                  <input
                    className="me-2 search-input"
                    type="search"
                    placeholder="What are you looking for?"
                    aria-label="Search"
                  />
                  <button className="btn search-btn" type="submit">
                    <img
                      src={searchbtn}
                      alt="Search Icon"
                      className="search-icon"
                    />
                  </button>
                </form>

                {/* <!-- icon section --> */}
                <div className="d-lg-none d-col-flex focol icons">
                  <div className="position-relative">
                    <Link to="/Whilist">
                      <img src={Wishlist} className={`i_on ${claassName}`} />
                    </Link>{" "}
                    <span
                      className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cus_noti ${homenoti}`}
                    >
                      {wishItems}
                    </span>
                  </div>
                  <div className="position-relative">
                    <Link to="/Cart">
                      <img
                        src={cart}
                        className={`i_to ${claassName} ${i_tooo}`}
                      />
                    </Link>
                    <span
                      className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cus_carr ${cus_noti} `}
                    >
                      {size}
                    </span>
                  </div>
                  {account}
                </div>
                {/* <!-- this is visible for md screen --> */}
                {/* <!-- toggle btn --> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#nav_cus"
                  aria-controls="nav_cus"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <img
                    src={togle}
                    alt="Toggle navigation"
                    className="img-fluid custom-toggler-icon"
                  />
                </button>
                {/* <!-- nav item --> */}
                <div className="collapse navbar-collapse nav" id="nav_cus">
                  <ul className="navbar-nav m-lg-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${activh}`}
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${contactactiv}`}
                        to="/Contact"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${aboutactiv}`} to="/About">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${activ}`} to="/Signup">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- search button with icon --> */}
                  <form
                    className={`${crtt} d-none d-lg-flex search-bar`}
                    role="search"
                  >
                    <input
                      className="me-2 search-input"
                      type="search"
                      placeholder="What are you looking for?"
                      aria-label="Search"
                    />
                    <button className="btn search-btn" type="submit">
                      <img
                        src={searchbtn}
                        alt="Search Icon"
                        className="search-icon"
                      />
                    </button>
                  </form>

                  {/* <!-- icon section --> */}
                  <div className="d-none d-lg-flex fornone icons">
                    <div className="position-relative">
                      <Link to="/Whilist">
                        <img src={Wishlist} className={`i_on ${claassName}`} />
                      </Link>{" "}
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cus_noti">
                        {wishItems}
                      </span>
                    </div>
                    <div className="position-relative">
                      <Link to="/Cart">
                        <img src={cart} className={`i_to ${claassName}`} />
                      </Link>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cus_carr">
                        {size}
                      </span>
                    </div>
                    {account}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
