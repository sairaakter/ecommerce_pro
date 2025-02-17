import t_img from "../assets/t_img.png";
import classes from "../style/Dates.module.css";

export default function Dates() {
  return (
    <>
      <div className={`col-xl-4 col-lg-5 col-md-4 col-12 ${classes.t_dbotom}`}>
        <div className={`${classes.t_dates}`}>
          <div className={`${classes.t_day}`}>
            <p>Days</p>
            <h3>03</h3>
          </div>
          <div className={`${classes.t_img}`}>
            <img src={t_img} />
          </div>
          <div className={`${classes.t_day}`}>
            <p>Hours</p>
            <h3>23</h3>
          </div>
          <div className={`${classes.t_img}`}>
            <img src={t_img} />
          </div>
          <div className={`${classes.t_day}`}>
            <p>Minutes</p>
            <h3>19</h3>
          </div>
          <div className={`${classes.t_img}`}>
            <img src={t_img} />
          </div>
          <div className={`${classes.t_day}`}>
            <p>Seconds</p>
            <h3>56</h3>
          </div>
        </div>
      </div>
    </>
  );
}
