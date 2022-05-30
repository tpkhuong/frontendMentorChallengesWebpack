import React from "react";
import "../../styles.css";
import rockImg from "../../images/icon-rock.svg";
import paperImg from "../../images/icon-paper.svg";
import scissorImg from "../../images/icon-scissors.svg";

function Signs(props) {
  const { picSrc, stepAttr } = props;
  /**
   * size of sign: width of img, padding of img wrapper/container, border size
   * **/
  return (
    <div className={`${picSrc} ${stepAttr}`}>
      <div className="bottom">
        {/* import img to Component where this Signs component will render */}
        <img
          src={
            picSrc == "rock"
              ? rockImg
              : picSrc == "paper"
              ? paperImg
              : picSrc == "scissor"
              ? scissorImg
              : null
          }
          alt={`${picSrc}`}
        />
      </div>
      {/* we don't want to show top half */}
      <div className="circle bottom-half"></div>
      {/* we don't want to show bottom half */}
      <div className="circle top-half"></div>
      <div className="circle top"></div>
    </div>
  );
}

export default Signs;
