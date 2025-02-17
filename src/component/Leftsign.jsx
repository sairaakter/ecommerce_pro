import Side from "../assets/Side_Image.png";

export default function Leftsign({ left }) {
  return (
    <>
      <div className={`col-lg-7 col-md-7 col-12 ${left}`}>
        <div className={left}>
          <img src={Side} className="img-fluid w-100" />
        </div>
      </div>
    </>
  );
}
