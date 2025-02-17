import "../style/Carascard.css";
import "../style/Today.css";
import ColorPicker from "./Colorpicker";

export default function Cxaraslcard({
  isDone,
  className,
  sorc,
  carhf,
  price,
  delprice,
  reviews,
  rimg,
  Distbtn,
  Cartbtn,
  Eyebtn,
  Wishbtn,
}) {
  return (
    <div className={className}>
      <div className="card custom-card">
        {/* <!-- Image Section --> */}
        <div className="position-relative image-container">
          <img src={sorc} className="card-img-top" alt="Profile Image" />
          {/* <!-- Hover Items --> */}
          <div className="hover-items">
            {/* <!-- t_butun Badge --> */}
            {Distbtn}
            {/* <!-- Top Star --> */}
            <div className="star-badge">
              {Wishbtn}
              {Eyebtn}
            </div>
            {/* <!-- add to cart --> */}
            {Cartbtn}
          </div>
        </div>
        {/* <!-- Card Body --> */}
        <div className="card-body crd_body">
          <h5 className="card-title mb-0">{carhf}</h5>
          {isDone ? (
            <Expolbody price={price} reviews={reviews} rimg={rimg} />
          ) : (
            <Carbody
              price={price}
              delprice={delprice}
              reviews={reviews}
              rimg={rimg}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function Carbody({ price, delprice, rimg, reviews }) {
  return (
    <>
      <div>
        <p>
          {price}
          <span className="p_colo">
            <del>{delprice}</del>
          </span>
        </p>
        <div className="t_reviws">
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <span className="r_lef">{reviews}</span>
        </div>
      </div>
    </>
  );
}
function Expolbody({ price, rimg, reviews }) {
  return (
    <>
      <div className="flex">
        <p className="me_rght">{price}</p>
        <div className="t_reviws">
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <img src={rimg} className="img-fluid" />
          <span className="r_lef">{reviews}</span>
        </div>
      </div>
      {/* color picker */}
      <ColorPicker />
    </>
  );
}
