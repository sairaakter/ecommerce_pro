import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/main.css"; // Import your CSS file
import Main from "./maiin.jsx";

const Sidebar = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(true); // Sidebar default open
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <section className="bootstnipp">
      <div className="container">
        <div
          className={`page-wrapper chiller-theme ${
            isSidebarToggled ? "toggled" : ""
          }`}
        >
          <div className="both">
            <button
              id="show-sidebar"
              className="btn btn-sm btn-dark cus_hovr"
              onClick={toggleSidebar}
            >
              <i className="fas fa-bars"></i>
            </button>
            <nav id="sidebar" className="sidebar-wrapper">
              <div className="sidebar-content">
                <div className="sidebar-brand">
                  <a href="#"></a>
                  <button id="close-sidebar" onClick={toggleSidebar}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                <div className="sidebar-menu">
                  <ul>
                    {sidebarItems.map((item, index) => (
                      <li
                        className={`sidebar-dropdown ${
                          activeDropdown === index ? "active" : ""
                        }`}
                        key={index}
                      >
                        <a href="#" onClick={() => toggleDropdown(index)}>
                          <span>{item.label}</span>
                        </a>
                        {item.submenu && (
                          <div
                            className="sidebar-submenu"
                            style={{
                              display:
                                activeDropdown === index ? "block" : "none",
                            }}
                          >
                            <ul>
                              {item.submenu.map((subitem, subIndex) => (
                                <li key={subIndex}>
                                  <a href={subitem.link}>{subitem.label}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                    <li className="">
                      <Link to="/Erorr">
                        <span>Electronics</span>
                      </Link>
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
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <Main />
        </div>
      </div>
    </section>
  );
};

const sidebarItems = [
  {
    label: "Woman’s Fashion",
    submenu: [
      { label: "Kamiz and Pant", link: "#" },
      { label: "Tops and Jeans", link: "#" },
      { label: "New Kurti Collection", link: "#" },
    ],
  },
  {
    label: "Men’s Fashion",
    submenu: [
      { label: "Pant and Shirt", link: "#" },
      { label: "Latest Panjabi", link: "#" },
      { label: "New Products", link: "#" },
    ],
  },
];

export default Sidebar;
