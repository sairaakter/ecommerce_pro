import Carousel from "react-multi-carousel";
import "../style/Carascard.css";
import "../style/Today.css";
import ButtonGroup from "./ButtonGroup";
import Catgcuscard from "./Cagcuscard";
import catgdata from "./data/catagoriData";

import "react-multi-carousel/lib/styles.css";

const Catdatacard = () => {
  const responsives = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 576 },
      items: 3,
    },
    smmm: {
      breakpoint: { max: 575, min: 0 },
      items: 2,
    },
  };

  const caras = catgdata.map((item, index) => (
    <Catgcuscard key={index} item={item} />
  ));
  return (
    <>
      <div className="carousel-container" style={{ position: "relative" }}>
        <Carousel
          customButtonGroup={<ButtonGroup classas="topup" />}
          responsive={responsives}
          arrows={false}
          renderButtonGroupOutside={true}
        >
          {caras}
        </Carousel>
      </div>

      {/* <div className="carousel-item active">
        <div className="row">
          {catgdata.map((card) => (
            <Catgcuscard
              key={card.id}
              className={card.className}
              sorc={card.sorc}
              text={card.text}
            />
          ))}
        </div>
      </div>
      <div className="carousel-item">
        <div className="row">
          {catgdata.map((card) => (
            <Catgcuscard
              key={card.id}
              className={card.className} 
              text={card.text}
            />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Catdatacard;
