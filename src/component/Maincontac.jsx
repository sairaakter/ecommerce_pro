import call from "../assets/call.png";
import email from "../assets/email.png";

export default function Maincontac({ contac }) {
  return (
    <>
      <div className={`${contac.main_contac}`}>
        <div className={`${contac.contac_left}`}>
          <div className={`${contac.call}`}>
            <img src={call} className="img-fluid" />
            <p>Call To Us</p>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>
            Phone: <a href="#">+8801611112222</a>
          </p>
        </div>
        <hr className={`${contac.rul_marg}`} />
        <div className={`${contac.contac_left}`}>
          <div className={`${contac.call}`}>
            <img src={email} className="img-fluid" />
            <p>Write To US</p>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>
            Emails: <a href="#">customer@exclusive.com</a>
          </p>
          <p>
            Emails: <a href="#">support@exclusive.com</a>
          </p>
        </div>
      </div>
    </>
  );
}
