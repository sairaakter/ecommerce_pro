import icons_arrow_left from "../assets/icons_arrow-left.png";
import icons_arrow_right from "../assets/icons_arrow-right.png";
import classes from "../style/Controls.module.css";

export default function Controls({ target, slide, href, next }) {
  return (
    <>
      {/* <!-- Controls --> */}
      <div className={`${classes.controls}  ${classes.t_control}`}>
        <a
          className={`${classes.left} btn btn-success ${classes.t_custyle}`}
          data-bs-target={target}
          data-bs-slide={slide}
          href={href}
        >
          <img src={icons_arrow_left} className={`${classes.imgcolochang}`} />
        </a>
        <a
          className={`${classes.right} btn btn-success ${classes.t_custyle}`}
          href={href}
          data-bs-target={target}
          data-bs-slide={next}
        >
          <img src={icons_arrow_right} className={`${classes.imgcolochang}`} />
        </a>
      </div>
    </>
  );
}
