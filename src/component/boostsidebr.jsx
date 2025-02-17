import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/main.css";
import Main from "./maiin";

export default function Bsidbar() {
  return (
    <>
      {/* <!-- bootsnipp sidebar --> */}
      <section className="bootstnipp">
        <div className="container">
          <div className="page-wrapper chiller-theme toggled">
            <div className="both">
              <a
                id="show-sidebar"
                className="btn btn-sm btn-dark cus_hovr"
                href="#"
              >
                <FontAwesomeIcon icon={faBars} />
              </a>
              <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                  <div className="sidebar-brand">
                    <a href="#"></a>
                    <div id="close-sidebar">
                      <FontAwesomeIcon icon={faTimes} />
                    </div>
                  </div>

                  <div className="sidebar-menu">
                    <ul>
                      <li className="sidebar-dropdown">
                        <a href="#">
                          <span>Woman’s Fashion</span>
                        </a>
                        <div className="sidebar-submenu">
                          <ul>
                            <li>
                              <a href="#">
                                Kamiz and pant
                                <span className="badge badge-pill badge-success">
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">Tops and jense</a>
                            </li>
                            <li>
                              <a href="#">New kurti collection</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="sidebar-dropdown">
                        <a href="#">
                          <span>Men’s Fashion</span>
                        </a>
                        <div className="sidebar-submenu">
                          <ul>
                            <li>
                              <a href="#">Pant and Shirt </a>
                            </li>
                            <li>
                              <a href="#">Latest Panjabi</a>
                            </li>
                            <li>
                              <a href="#">New Products</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="">
                        <a href="#">
                          <span>Electronics</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span>Home & Lifestyle</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span>Medicine</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span>Sports & Outdoor</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span>Baby’s & Toys</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span>Groceries & Pets</span>
                        </a>
                      </li>
                      <li className="">
                        <a href="#">
                          <span>Health & Beauty</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- sidebar-menu  --> */}
                </div>
                {/* <!-- sidebar-content  --> */}
              </nav>
            </div>
            <Main />
          </div>
        </div>
      </section>
    </>
  );
}
