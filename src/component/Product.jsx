import classes from "../style/Controls.module.css";
import "../style/Product.css";
import CTitle from "./CTitle";
import Procard from "./Procuscard";

export default function Product() {
  return (
    <section className="product">
      <div className="container">
        {/* <!-- full product carousal start--> */}
        <div className="">
          <div className="row mbotom">
            <div className="col-lg-6 col-md-8 col-sm-8 col-12">
              <CTitle ptex="This Month" htex="Best Selling Products" />
            </div>

            <div className="col-lg-6 col-md-4 col-sm-4 col-12">
              <div
                className={`pull-right hidden-xs ${classes.t_control} pro_control`}
              >
                <div className="product_button">
                  <button
                    type="button"
                    className="wcomon_btn widcamabo"
                    data-bs-target="#p_axmam"
                    data-bs-slide="next"
                  >
                    View All
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- full product carousal start--> */}
          <div id="p_axmam" className="carousel slide hidden-xs">
            {/* <!-- Wrapper for slides --> */}
            <div className="carousel-inner">
              <Procard />
            </div>
          </div>
          {/* <!-- full product carousal end--> */}
        </div>
      </div>
    </section>
  );
}
