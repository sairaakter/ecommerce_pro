import stlss from "../style/Signcon.module.css";
import Leftsign from "./Leftsign";
import Siginput from "./sign_input";
export default function Logcon({ textone, texttwo }) {
  return (
    <>
      <div className={stlss.sign}>
        <div className={stlss.cus_container}>
          <div className="row">
            <Leftsign left="left_sign" />
            <div
              className={`${stlss.cus_dis} col-lg-5 col-md-5 col-12 d-flex justify-content-end`}
            >
              <div className={stlss.form_container}>
                <h1>{textone}</h1>
                <p>{texttwo}</p>
                <form className={`${stlss.sig_form} ${stlss.log_form}`}>
                  <Siginput
                    name="user[email]"
                    type="email"
                    className={stlss.inputcss}
                    id="email"
                    placeholder="Email or Phone Number"
                  />
                  <Siginput
                    name="user[password]"
                    type="password"
                    className={stlss.inputcss}
                    id="password"
                    placeholder="Password"
                  />
                  <div className={stlss.foatin}>
                    <button
                      type="submit"
                      className={`${stlss.log_btn} ${stlss.hov_btn}`}
                    >
                      Log In
                    </button>
                    <p>Forget Password?</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
