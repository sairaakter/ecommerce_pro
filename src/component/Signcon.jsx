import { Link } from "react-router-dom";
import Google from "../assets/Icon-Google.png";
import stlss from "../style/Signcon.module.css";
import Leftsign from "./Leftsign";
import Siginput from "./sign_input";

export default function Signcon({ textone, texttwo }) {
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
                <form className={stlss.sig_form}>
                  <Siginput
                    name="user[name]"
                    type="text"
                    className={stlss.inputcss}
                    id="name"
                    placeholder="Name"
                  />
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
                  {/* the famouse create button */}
                  <button
                    type="submit"
                    className={`${stlss.c_acbtn} ${stlss.hov_btn} w-100`}
                  >
                    Create Account
                  </button>
                  {/* google icon with button */}
                  <button
                    type="button"
                    className={`btn ${stlss.hov_btn} ${stlss.btn_google} w-100`}
                  >
                    <img
                      src={Google}
                      alt="Google Logo"
                      className={stlss.gogl}
                    />
                    Sign up with Google
                  </button>
                </form>
                <div className={stlss.already_account}>
                  Already have an account?{" "}
                  <Link to="/Login" className={stlss.loglink}>
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
