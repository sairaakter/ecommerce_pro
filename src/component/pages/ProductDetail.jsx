import { useContext, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import user from "../../assets/user.png";
import { CartContext } from "../../cartContext/cart.jsx";
import prdetail from "../../style/ProDetail.module.css";
import CTitle from "../CTitle";
import { cards } from "../data/cardsData";
import { Expcards } from "../data/explorData";
import procards from "../data/productData";
import Navsec from "../nav_sec.jsx";
import Navigated from "../navigatecus.jsx";
import RacItems from "../RacItems.jsx";
import RigDetail from "../RightDetail";
export default function ProductDetail() {
  const { id } = useParams();

  const { cartLength, wishlistItems } = useContext(CartContext);

  const account = (
    <Link to="/Account">
      <img src={user} className="meend" />
    </Link>
  );

  const product =
    cards.find((item) => item.id.toString() === id) ||
    procards.find((item) => item.id.toString() === id) ||
    Expcards.find((item) => item.id.toString() === id);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  // ✅ Set default selected image to the last image (mainthumb)
  const [selectedImage, setSelectedImage] = useState(
    product.sorc[product.sorc.length - 1]
  );

  const breadcrumbLinks = [
    { name: "Account", path: "/Account", active: false },
    { name: product.pdetailcont, path: "/", active: false },
    { name: product.carhf, path: "/ProductDetail", active: true },
  ];

  const isDone = false;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 400 },
      items: 2,
    },
    smmm: {
      breakpoint: { max: 399, min: 0 },
      items: 1,
    },
  };
  const Rac = cards.map((item, index) => (
    <RacItems key={index} item={item} isDone={isDone} />
  ));
  return (
    <>
      <Navsec
        wishItems={wishlistItems.length}
        size={cartLength}
        account={account}
        i_tooo="i_tooo"
        cus_noti="cus_noti"
        homenoti="homenoti"
      />
      <div className={`${prdetail.erorr}`}>
        <div className="container">
          <Navigated links={breadcrumbLinks} />
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className={`row ${prdetail.smartcals}`}>
                <div className="col-3">
                  <div className={`${prdetail.smal_img}`}>
                    {product.sorc.slice(1, 5).map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index}`}
                        className={`${prdetail.product_image}`}
                        onClick={() => setSelectedImage(img)}
                        style={{
                          width: "100%",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-9">
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={selectedImage}
                    alt="Main Product"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <RigDetail prdetail={prdetail} product={product} />
          </div>
        </div>
      </div>
      <section className={`${prdetail.whis}`}>
        <div className="container">
          <div className={`${prdetail.mbotom} ${prdetail.whlis_botom}`}>
            <CTitle ptex="Related Item" />
          </div>
          <div className="carousel-container" style={{ position: "relative" }}>
            <Carousel
              responsive={responsive}
              arrows={false}
              renderButtonGroupOutside={true}
            >
              {Rac}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
