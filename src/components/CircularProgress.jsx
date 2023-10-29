
import './CircularProgress.css';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({skill, percentage}) => {
  return (
    <div className="circularProgress">
      <h4>{skill}</h4>
      <div style={{ width: "70%" }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={2}
          styles={buildStyles({
            // This is in units relative to the 100x100px
            // SVG viewbox.
            textColor: "black",
            textSize: "14px",
          })}
        />
      </div>
    </div>
  );
};


export default CircularProgress;
