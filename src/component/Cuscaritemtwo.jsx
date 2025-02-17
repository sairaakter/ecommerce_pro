import "../style/Carascard.css";
import ColorPicker from "./Colorpicker";
import Explocascard from "./Explocascard.jsx";
export default function Cuscaraitemtwo({
  Discountbtn,
  Cartbtn,
  carhf,
  carhfto,
  carhfthe,
  carhffor,
  carhfton,
  carhftto,
  carhftthe,
  carhftfor,
  price,
  priceto,
  pricethe,
  pricefor,
  delprice,
  delpriceto,
  delpricethe,
  delpricefor,
  reviews,
  reviewsto,
  reviewsthe,
  reviewsfor,
  rimg,
  sorcon,
  sorcto,
  sorcthe,
  sorcfor,
  sorctonon,
  sorctto,
  sorctthe,
  sorctfor,
}) {
  return (
    <>
      <div className="carousel-item active">
        <div className="row ex_marg">
          {/* <!-- full crd 1--> */}
          <Explocascard
            className={`pad col-lg-3 col-md-4 col-sm-6 col-6 active`}
            sorc={sorcon}
            carhf={carhf}
            price={price}
            delprice={delprice}
            reviews={reviews}
            Cartbtn={Cartbtn}
            rimg={rimg}
          />
          <Explocascard
            className={`pad col-lg-3 col-md-4 col-sm-6 col-6 active`}
            sorc={sorcto}
            carhf={carhfto}
            price={priceto}
            delprice={delpriceto}
            reviews={reviewsto}
            Cartbtn={Cartbtn}
            rimg={rimg}
          />
          <Explocascard
            className={`pad col-lg-3 col-md-4 d-sm-none d-col-flex d-md-block active`}
            sorc={sorcthe}
            carhf={carhfthe}
            price={pricethe}
            delprice={delpricethe}
            reviews={reviewsthe}
            Cartbtn={Cartbtn}
            rimg={rimg}
          />
          <Explocascard
            className={`pad col-lg-3 col-md-6 d-sm-none d-col-flex d-lg-block active`}
            sorc={sorcfor}
            carhf={carhffor}
            price={pricefor}
            delprice={delpricefor}
            reviews={reviewsfor}
            Cartbtn={Cartbtn}
            rimg={rimg}
          />
        </div>
        <div className="row">
          {/* <!-- full crd 1--> */}
          <Explocascard
            className={`pad col-lg-3 col-md-4 col-sm-6 col-6 active`}
            sorc={sorctonon}
            carhf={carhfton}
            price={price}
            delprice={delprice}
            reviews={reviews}
            Discountbtn={Discountbtn}
            Cartbtn={Cartbtn}
            rimg={rimg}
            Colorpicker={<ColorPicker defaultColor="#FB1314" />}
          />
          <Explocascard
            className={`pad col-lg-3 col-md-4 col-sm-6 col-6 active`}
            sorc={sorctto}
            carhf={carhftto}
            price={priceto}
            delprice={delpriceto}
            reviews={reviewsto}
            Cartbtn={Cartbtn}
            rimg={rimg}
            Colorpicker={<ColorPicker defaultColor="#EEFF61" />}
          />
          <Explocascard
            className={`pad col-lg-3 col-md-4 d-sm-none d-col-flex d-md-block active`}
            sorc={sorctthe}
            carhf={carhftthe}
            price={pricethe}
            delprice={delpricethe}
            reviews={reviewsthe}
            Discountbtn={Discountbtn}
            Cartbtn={Cartbtn}
            rimg={rimg}
            Colorpicker={<ColorPicker defaultColor="#000000" />}
          />
          <Explocascard
            className={`pad col-lg-3 col-md-6 d-sm-none d-col-flex d-lg-block active`}
            sorc={sorctfor}
            carhf={carhftfor}
            price={pricefor}
            delprice={delpricefor}
            reviews={reviewsfor}
            Cartbtn={Cartbtn}
            rimg={rimg}
            Colorpicker={<ColorPicker defaultColor="#184A48" />}
          />
        </div>
      </div>
      <div className="carousel-item">
        <div className="row">
          {/* <!-- full crd 1--> */}
          <Explocascard
            className={`pad col-lg-3 col-md-4 col-sm-6 col-6 active`}
            sorc={sorcfor}
            btntext="-40%"
            carhf="HAVIT HV-G92 Gamepad"
            price="$120"
            delprice="$160"
            reviews="(88)"
            rimg={rimg}
          />
          <Explocascard
            className={`pad col-lg-3 col-md-4 col-sm-6 col-6 active`}
            sorc={sorcfor}
            btntext="-40%"
            carhf="HAVIT HV-G92 Gamepad"
            price="$120"
            delprice="$160"
            reviews="(88)"
            rimg={rimg}
          />
          <Explocascard
            className={`pad col-lg-3 col-md-4 d-sm-none d-col-flex d-md-block active`}
            sorc={sorcfor}
            btntext="-40%"
            carhf="HAVIT HV-G92 Gamepad"
            price="$120"
            delprice="$160"
            reviews="(88)"
            rimg={rimg}
          />
        </div>
      </div>
    </>
  );
}
