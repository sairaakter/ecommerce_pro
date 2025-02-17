// import call from "../assets/call.png";
// import email from "../assets/email.png";

export default function RightContac({ contac }) {
  return (
    <>
      <div className={`${contac.content}`}>
        <form>
          <div className={`row ${contac.co_magn}`}>
            <div className="col-md-4 col-sm-4 col-6">
              <input
                type="text"
                className={`form-control ${contac.content_styl}`}
                id="firstName"
                placeholder="Your Name*"
              />
            </div>
            <div className="col-md-4 col-sm-4 col-6">
              <input
                type="text"
                className={`form-control ${contac.content_styl}`}
                id="lastName"
                placeholder="Your Email*"
              />
            </div>
            <div className="col-md-4 col-sm-4 col-12">
              <input
                type="text"
                className={`form-control ${contac.content_styl}`}
                id="lastName"
                placeholder="Your Phone*"
              />
            </div>
          </div>
          <textarea
            name="message"
            placeholder="Your Massage"
            className={`${contac.texareaa} ${contac.content_styl}`}
          ></textarea>
          <div className={`${contac.cancel_parent}`}>
            <button
              type="submit"
              className={`${contac.whish_btn} ${contac.cuscopsnbtn}`}
            >
              Send Massage
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
