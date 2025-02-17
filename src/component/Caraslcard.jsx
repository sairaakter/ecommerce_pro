import Quick_View from "../assets/Quick_View.png";
import heart_small from "../assets/heart_small.png";

export default function Caraslcard({
  className,
  sorc,
  // btntext,
  carhf,
  price,
  delprice,
  reviews,
  rimg,
  Discountbtn,
  Cartbtn,
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
            {Discountbtn}
            {/* <!-- Top Star --> */}
            <div className="star-badge">
              <div className="favrat s_botom">
                <img src={heart_small} className="img-fluid imgcolochang" />
              </div>
              <div className="favrat">
                <img src={Quick_View} className="img-fluid imgcolochang" />
              </div>
            </div>
            {/* <!-- add to cart --> */}
            {Cartbtn}
          </div>
        </div>
        {/* <!-- Card Body --> */}
        <div className="card-body crd_body">
          <h5 className="card-title mb-0">{carhf}</h5>
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
      </div>
    </div>
  );
}
