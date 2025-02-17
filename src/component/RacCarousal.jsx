import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/Carascard.css";
import "../style/Today.css";
// import ButtonGroup from "./ButtonGroup";
// import { useContext } from "react";
// import { CartContext } from "../cartContext/cart";
import ButtonGroup from "./ButtonGroup";
import RacItems from "./RacItems";
import { cards } from "./data/cardsData";
// Define ButtonGroup component

export default function RacCarousal() {
  // const[showModal, setShowModal] = useState(false);
  // const { addToCart, WishToCart } = useContext(CartContext);

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
    <div className="carousel-container" style={{ position: "relative" }}>
      <Carousel
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
      >
        {Rac}
      </Carousel>
    </div>
  );
}
