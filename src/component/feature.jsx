import f_rigtop from "../assets/f_rigtop.png";
import featurfirst from "../assets/featurfirst.png";
import sub_lef from "../assets/sub_lef.png";
import sub_rigt from "../assets/sub_rigt.png";
import "../style/feature.css";
import CTitle from "./CTitle";
export default function Feature() {
  return (
    <>
      <section className="feature">
        <div className="container">
          <div className="row mbotom">
            <div className="col-lg-6 col-md-8 col-sm-8 col-12">
              <CTitle ptex="Featured" htex="New Arrival" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="f_left">
                <div className="pos">
                  <img src={featurfirst} className="d-block w-100" />
                  <div className="feature-coption d-col-block d-md-block">
                    <div className="featur_flex smallfe">
                      <h2>PlayStation 5</h2>
                      <p>
                        Black and White version of the PS5 coming out on sale.
                      </p>
                      <a href="#" className="bot">
                        <span className="bop">Shop Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="f_right">
                <div className="pos">
                  <img src={f_rigtop} className="d-block w-100" />
                  <div className="feature-coption f_other d-col-block d-md-block">
                    <div className="featur_flex fle_second">
                      <h2>Women’s Collections</h2>
                      <p>
                        Featured woman collections that give you another vibe.
                      </p>
                      <a href="#" className="bot">
                        <span className="bop">Shop Now</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="pos cus_pos">
                      <img src={sub_lef} className="d-block w-100" />
                      <div className="feature-coption f_other d-col-block d-md-block">
                        <div className="featur_flex fle_third">
                          <h2>Speakers</h2>
                          <p>Amazon wireless speakers</p>
                          <a href="#" className="bot">
                            <span className="bop">Shop Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="pos cus_pos">
                      <img src={sub_rigt} className="d-block w-100" />
                      <div className="feature-coption f_other d-col-block d-md-block">
                        <div className="featur_flex fle_third">
                          <h2>Perfume</h2>
                          <p>GUCCI INTENSE OUD EDP</p>
                          <a href="#" className="bot">
                            <span className="bop">Shop Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
