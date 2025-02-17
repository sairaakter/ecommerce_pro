import classes from "../style/CTitle.module.css";

export default function CTitle({ ptex, htex }) {
  return (
    <>
      <div className={`${classes.coom_title}`}>
        <span className={`${classes.t_alig}`}>
          <div className={`${classes.img}`}></div>
          <p>{ptex}</p>
        </span>
        <h1>{htex}</h1>
      </div>
    </>
  );
}
