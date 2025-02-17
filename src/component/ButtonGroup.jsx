import icons_arrow_left from "../assets/icons_arrow-left.png";
import icons_arrow_right from "../assets/icons_arrow-right.png";
import classes from "../style/Controls.module.css";

const ButtonGroup = ({ next, previous, classas, exclassas }) => {
  return (
    <div
      className={`custom-button-group ${classas} ${exclassas} ${classes.React_courasall} ${classes.controls}  ${classes.t_control}`}
    >
      <button
        onClick={previous}
        className={`${classes.left} btn btn-success ${classes.t_custyle}`}
      >
        <img src={icons_arrow_left} className={`${classes.imgcolochang}`} />
      </button>
      <button
        onClick={next}
        className={`${classes.right} btn btn-success ${classes.t_custyle}`}
      >
        <img src={icons_arrow_right} className={`${classes.imgcolochang}`} />
      </button>
    </div>
  );
};
export default ButtonGroup;
