import first from "../assets/first_delivery.png";
import seco from "../assets/seco_delivery.png";
import third from "../assets/third_delivery.png";
import DeliItem from "./DeliItem";
export default function Delivry({ abostye }) {
  return (
    <>
      <section className={`${abostye.delivery}`}>
        <div className="container">
          <div className="row">
            <DeliItem
              abostye={abostye}
              guranty="FREE AND FAST DELIVERY"
              free="Free delivery for all orders over $140"
              src={first}
            />
            <DeliItem
              abostye={abostye}
              guranty="24/7 CUSTOMER SERVICE"
              free="Friendly 24/7 customer support"
              src={seco}
            />
            <DeliItem
              abostye={abostye}
              guranty="MONEY BACK GUARANTEE"
              free="We reurn money within 30 days"
              src={third}
            />
          </div>
        </div>
      </section>
    </>
  );
}
