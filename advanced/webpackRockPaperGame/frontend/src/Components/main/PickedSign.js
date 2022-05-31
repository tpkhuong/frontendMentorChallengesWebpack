import React from "react";
import "../../styles.css";
import Signs from "../main/SignChoices";

function PickedSign(props) {
  const { signSelector, passedSrc } = props;
  const textContent =
    signSelector == "player" ? "YOU PICKED" : "THE HOUSE PICKED";
  return (
    <div className={`${signSelector}-picked`}>
      <span>{textContent}</span>
      {/*  */}
      <div className="picked-wrapper">
        {signSelector == "player" ? (
          <div>player div</div>
        ) : (
          <div>house div</div>
        )}
        {/* pass in SignChoice button as children */}
        <Signs stepAttr="picked" picSrc={passedSrc} />
        {}
      </div>
    </div>
  );
}

export default PickedSign;
