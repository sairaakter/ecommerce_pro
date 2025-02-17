import dropdown from "../assets/dropdown.png";
import classes from "../style/Header.module.css";
export default function Header() {
  return (
    <>
      <header className="bg-black">
        <div className={`container ${classes.cntr}`}>
          <div className="row align-items-center justify-content-center">
            {/* <!-- Left Placeholder (Empty for Center Alignment) --> */}
            <div className="col-12 col-sm-0 col-md-2 col-lg-2 col-xxl-3"></div>

            {/* <!-- Center Content --> */}
            <div
              className={`col-12 col-sm-10 col-md-8 col-lg-8 col-xxl-6 ${classes.cen_content}`}
            >
              <span className="d-b">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!{" "}
              </span>
              <a
                href="#"
                className={`${classes.shop} fw-semibold text-decoration-underline ms-2`}
              >
                ShopNow
              </a>
            </div>

            {/* <!-- Right Content --> */}
            <div
              className={`col-12 col-sm-2 col-md-2 col-lg-2 col-xxl-3  ${classes.end_content}`}
            >
              <span>English</span>
              <img src={dropdown} alt="Dropdown" className="ms-lg-2 ms-md-0" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
