import "../style/Today.css";
import Comonbtn from "./Comonbtn";
// import Controls from "./Controls";
import CTitle from "./CTitle";
import Dates from "./Dates";
// import AApp from "./Nokol";
// import ButtonGroup from "./ButtonGroup";
import RacCarousal from "./RacCarousal";

export default function Today() {
  // const groupbtn = <ButtonGroup />;
  return (
    <>
      {/* <!-- today start --> */}
      <section className="today">
        <div className="container">
          {/* this is comon title */}
          <div className="row mbotom">
            {/* {ctitle} */}
            <div className="col-lg-3 col-md-4 col-12">
              <CTitle ptex="Today’s" htex="Flash Sales" />
            </div>

            {/* {dates} */}
            <Dates />
            <div className="col-xl-2 col-lg-1 col-md-1 d-col-none"></div>
            {/* {controls} */}
            {/* <div className="col-md-3 col-12">
              <ButtonGroup />
            </div> */}
          </div>
          {/* <!-- full product carousal start--> */}
          <div id="c_axmam" className="">
            {/* <!-- Wrapper for slides --> */}
            <div className="">
              <RacCarousal />
            </div>
          </div>
          {/* <!-- full product carousal end--> */}
          {/* <!-- comon buton  --> */}
          <div className="row">
            <div className="col-lg-12">
              <Comonbtn
                classone="comon_button"
                classtwo="wcomon_btn"
                cmntex="View All Products"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
