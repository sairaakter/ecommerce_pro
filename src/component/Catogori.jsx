import "../style/Catgcuscard.css";
import Catdatacard from "./Catdatacard";
// import Controls from "./Controls";
import CTitle from "./CTitle";

export default function Catogori() {
  return (
    <section className="catogory">
      <div className="container">
        <div className="">
          <div className="row mbotom">
            <div className="col-lg-6 col-md-8 col-sm-8 col-12">
              <CTitle ptex="Categories" htex="Browse By Category" />
            </div>

            <div className="col-lg-6 col-md-4 col-sm-4 col-12">
              {/* <!-- Controls --> */}
              {/* <Controls
                target="#catago_exm"
                slide="prev"
                next="next"
                href="#catago_exm"
              /> */}
            </div>
          </div>
          {/* <!-- full product carousal start--> */}
          <div id="catago_exm" className="">
            {/* <!-- Wrapper for slides --> */}
            <div className="">
              {/* <Catagoricard /> */}
              <Catdatacard />
            </div>
          </div>
          {/* <!-- full product carousal end--> */}
        </div>

        <div className="bot_bdr"></div>
      </div>
    </section>
  );
}
