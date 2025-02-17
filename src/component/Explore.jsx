import "../style/Explore.css";
import Comonbtn from "./Comonbtn";
import CTitle from "./CTitle";
import Excard from "./Explcard";

export default function Explore() {
  return (
    <section className="explore">
      <div className="container">
        {/* <!-- full product carousal start--> */}
        <div className="">
          <div className="row mbotom">
            <div className="col-lg-6 col-md-8 col-sm-8 col-12">
              <CTitle ptex="Our Products" htex="Explore Our Products" />
            </div>

            {/* <div className="col-lg-6 col-md-4 col-sm-4 col-12">
              
              <Controls
                target="#explor_exm"
                slide="prev"
                next="next"
                href="#explor_exm"
              />
            </div> */}
          </div>
          {/* <!-- full product carousal start--> */}
          <div id="explor_exm" className="">
            {/* <!-- Wrapper for slides --> */}
            <div className="">
              <Excard />
            </div>
          </div>
          {/* <!-- full product carousal end--> */}
          {/* <!-- comon buton  --> */}
          <div className="row">
            <div className="col-lg-12">
              <Comonbtn
                classone="comon_button expl-como-btn"
                classtwo="wcomon_btn"
                cmntex="View All Products"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
