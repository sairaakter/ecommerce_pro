import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/Carascard.css";
import "../style/Today.css";
import ButtonGroup from "./ButtonGroup";
import RacItems from "./RacItems";
import { Expcards } from "./data/explorData";

const Excard = () => {
  const isDone = true;

  const responsive = {
    superLargeDesktop: {
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

  // Split items into two rows
  const groupedItems = [];
  for (let i = 0; i < Expcards.length; i += 2) {
    groupedItems.push(
      <div key={i} className="carousel-item-row">
        {/* this is first row */}
        <RacItems
          key={i}
          item={Expcards[i]}
          isDone={isDone}
          clasnam="ex_btn"
          clasnamto="ex_marg"
        />
        {/* this is 2nd row */}
        {Expcards[i + 1] && (
          <RacItems
            key={i + 1}
            item={Expcards[i + 1]}
            isDone={isDone}
            clasnam="ex_btn"
            clasnamto="mbb"
          />
        )}
      </div>
    );
  }

  return (
    <>
      <div className="carousel-container" style={{ position: "relative" }}>
        <Carousel
          customButtonGroup={<ButtonGroup exclassas="extopup" />}
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
        >
          {groupedItems}
        </Carousel>
      </div>
    </>
  );
};

export default Excard;
