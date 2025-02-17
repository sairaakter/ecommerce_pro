// import { useState } from "react";
import "../style/Carascard.css";
import "../style/Today.css";

import Cxaraslcard from "./cccardtwo";
// import cards from "./data/cardsData";
import { cards, cardstwo } from "./data/cardsData";

const AApp = ({ onhandel }) => {
  // const [cart, setcart] = useState([]);
  // const handl = (cards) => {
  //   const newcart = [...cart, cards];
  //   setcart(newcart);
  // };
  const isDone = false;
  return (
    <>
      {/* <h2> cart: {cards.length} </h2> */}
      <div className="carousel-item active">
        <div className="row">
          {cards.map((card) => (
            <Cxaraslcard
              isDone={isDone}
              key={card.id}
              className={card.className} // Pass the dynamic className
              sorc={card.sorc}
              carhf={card.carhf}
              price={card.price}
              delprice={card.delprice}
              reviews={card.reviews}
              rimg={card.rimg}
              Distbtn={card.Distbtn}
              Wishbtn={card.Wishbtn}
              Eyebtn={card.Eyebtn}
              Cartbtn={<div onClick={() => onhandel(card)}>{card.Cartbtn}</div>}
            />
          ))}
        </div>
      </div>
      <div className="carousel-item">
        <div className="row">
          {cardstwo.map((card) => (
            <Cxaraslcard
              key={card.id}
              className={card.className} // Pass the dynamic className
              carhf={card.carhf}
              price={card.price}
              delprice={card.delprice}
              reviews={card.reviews}
              rimg={card.rimg}
              Distbtn={card.Distbtn}
              Wishbtn={card.Wishbtn}
              Eyebtn={card.Eyebtn}
              Cartbtn={<div onClick={() => onhandel(card)}>{card.Cartbtn}</div>}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AApp;
