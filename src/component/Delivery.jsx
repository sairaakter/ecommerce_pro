import first_delivery from "../assets/first_delivery.png";
import seco_delivery from "../assets/seco_delivery.png";
import third_delivery from "../assets/third_delivery.png";
import topup from "../assets/topup.png";
import "../style/Delivery.css";

export default function Delivery() {
  return (
    <>
      <section className="delivery">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="firs_deliv">
                <img src={first_delivery} className="img-fluid f_deliimg" />
                <div className="firs_deliv_con">
                  <h2>FREE AND FAST DELIVERY</h2>
                  <p>Free delivery for all orders over $140</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="firs_deliv">
                <img src={seco_delivery} className="img-fluid f_deliimg" />
                <div className="firs_deliv_con">
                  <h2>24/7 CUSTOMER SERVICE</h2>
                  <p>Friendly 24/7 customer support</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="firs_deliv">
                <img src={third_delivery} className="img-fluid f_deliimg" />
                <div className="firs_deliv_con">
                  <h2>MONEY BACK GUARANTEE</h2>
                  <p>We reurn money within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="toppp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-flex">
                <a href="#top" id="backToTop" className="back-to-top">
                  <img src={topup} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
