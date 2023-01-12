import React, { useEffect } from "react";
import "../../styles.css";
import rockImg from "../../images/icon-rock.svg";
import paperImg from "../../images/icon-paper.svg";
import scissorImg from "../../images/icon-scissors.svg";
import PickedSign from "./PickedSign";
import { cachedData } from "../../api/dataStorage";

function Signs(props) {
  const { picSrc, stepAttr } = props;
  /**
   * size of sign: width of img, padding of img wrapper/container, border size
   * **/
  // useEffect(() => {
  //   document
  //     .querySelector(".testing")
  //     .addEventListener("click", cachedComponent);
  // });

  return (
    <button className={`${picSrc} ${stepAttr}`} data-selector={picSrc}>
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
    </button>
  );
}

function cachedComponent(event) {
  // cachedData.playerPicked = PickedSign;
  console.log(event.target.closest("BUTTON"));
  const passProp = event.target.closest("BUTTON").getAttribute("data-selector");
  console.log(passProp);
  /**
   * testing out algorithm
   * **/
  // document.querySelector(".battle-testing").childElementCount > 0
  //   ? document.querySelector(".battle-testing").replaceChildren()
  //   : null;
  // [
  //   <PickedSign signSelector="player" passedSrc={passProp} />,
  //   <PickedSign signSelector="player" passedSrc={passProp} />,
  // ].forEach(function appendElement(eachElement) {
  //   console.log(eachElement);
  //   document.querySelector(".battle-testing").append(eachElement);
  // });
}

export default Signs;
