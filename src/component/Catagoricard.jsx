import CellPhone from "../assets/Category-CellPhone.png";
import Category_Camera from "../assets/Category_Camera.png";
import Category_Computer from "../assets/Category_Computer.png";
import Category_Gamepad from "../assets/Category_Gamepad.png";
import Category_Headphone from "../assets/Category_Headphone.png";
import Category_SmartWatch from "../assets/Category_SmartWatch.png";
import Catgcuscard from "./Cagcuscard";

export default function Catagoricard() {
  return (
    <>
      <div className="carousel-item active">
        <div className="row">
          {/* <!-- full crd 1--> */}
          <Catgcuscard
            className={`pad col-lg-2 col-md-4 col-sm-4 col-6 active`}
            sorc={CellPhone}
            text="Phones"
          />
          <Catgcuscard
            className={`pad col-lg-2 col-md-4 col-sm-4 col-6 active`}
            sorc={Category_Computer}
            text="Computers"
          />
          <Catgcuscard
            className={`pad col-lg-2 col-md-4 col-sm-4 d-col-flex d-md-block active`}
            sorc={Category_SmartWatch}
            text="SmartWatch"
          />
          <Catgcuscard
            className={`pad col-lg-2 d-md-none d-sm-none d-col-flex d-lg-block active`}
            sorc={Category_Camera}
            text="Camera"
          />
          <Catgcuscard
            className={`pad col-lg-2 d-md-none d-sm-none d-col-flex d-lg-block active`}
            sorc={Category_Headphone}
            text="HeadPhones"
          />
          <Catgcuscard
            className={`pad col-lg-2 d-md-none d-sm-none d-col-flex d-lg-block active`}
            sorc={Category_Gamepad}
            text="Gaming"
          />
        </div>
      </div>
      <div className="carousel-item">
        <div className="row">
          {/* <!-- full crd 1--> */}
          <Catgcuscard
            className={`pad col-lg-2 col-md-4 col-sm-4 col-6 active`}
            sorc={CellPhone}
            text="Phones"
          />
          <Catgcuscard
            className={`pad col-lg-2 col-md-4 col-sm-4 col-6 active`}
            sorc={CellPhone}
            text="Phones"
          />
          <Catgcuscard
            className={`pad col-lg-2 col-md-4 col-sm-4 col-6 active`}
            sorc={CellPhone}
            text="Phones"
          />
        </div>
      </div>
    </>
  );
}
