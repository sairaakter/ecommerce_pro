import "../style/Carascard.css";
import Caraslcard from "./Caraslcard";
export default function Carasaitem({
  Discountbtn,
  Cartbtn,
  carhf,
  carhfto,
  carhfthe,
  carhffor,
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
}) {
  return (
    <>
      <div className="carousel-item active">
        <div className="row">
          {/* <!-- full crd 1--> */}
          <Caraslcard
            className={`pad col-lg-3 col-md-4 col-sm-6 col-6 active`}
            sorc={sorcon}
            carhf={carhf}
            price={price}
            delprice={delprice}
            reviews={reviews}
            Discountbtn={Discountbtn}
            Cartbtn={Cartbtn}
            rimg={rimg}
          />
          <Caraslcard
            className={`pad col-lg-3 col-md-4 col-sm-6 col-6 active`}
            sorc={sorcto}
            carhf={carhfto}
            price={priceto}
            delprice={delpriceto}
            reviews={reviewsto}
            Discountbtn={Discountbtn}
            Cartbtn={Cartbtn}
            rimg={rimg}
          />
          <Caraslcard
            className={`pad col-lg-3 col-md-4 d-sm-none d-col-flex d-md-block active`}
            sorc={sorcthe}
            carhf={carhfthe}
            price={pricethe}
            delprice={delpricethe}
            reviews={reviewsthe}
            Discountbtn={Discountbtn}
            Cartbtn={Cartbtn}
            rimg={rimg}
          />
          <Caraslcard
            className={`pad col-lg-3 col-md-6 d-sm-none d-col-flex d-lg-block active`}
            sorc={sorcfor}
            carhf={carhffor}
            price={pricefor}
            delprice={delpricefor}
            reviews={reviewsfor}
            Discountbtn={Discountbtn}
            Cartbtn={Cartbtn}
            rimg={rimg}
          />
        </div>
      </div>
      <div className="carousel-item">
        <div className="row">
          {/* <!-- full crd 1--> */}
          <Caraslcard
            className={`pad col-lg-3 col-md-4 col-sm-6 col-6 active`}
            sorc={sorcfor}
            btntext="-40%"
            carhf="HAVIT HV-G92 Gamepad"
            price="$120"
            delprice="$160"
            reviews="(88)"
            rimg={rimg}
          />
          <Caraslcard
            className={`pad col-lg-3 col-md-4 col-sm-6 col-6 active`}
            sorc={sorcfor}
            btntext="-40%"
            carhf="HAVIT HV-G92 Gamepad"
            price="$120"
            delprice="$160"
            reviews="(88)"
            rimg={rimg}
          />
          <Caraslcard
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
