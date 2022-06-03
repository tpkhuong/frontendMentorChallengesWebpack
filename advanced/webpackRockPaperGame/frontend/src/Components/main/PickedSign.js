import React from "react";
import "../../styles.css";
import Signs from "../main/SignChoices";

function PickedSign(props) {
  const { signSelector, passedSrc, fadeBoolead } = props;
  const textContent =
    signSelector == "player" ? "YOU PICKED" : "THE HOUSE PICKED";
  return (
    //   div below will have its width based on min-content
    <div data-fade={fadeBoolead} className={`${signSelector}-picked`}>
      <span className="picked-text">{textContent}</span>
      {/*  */}
      <div className="picked-wrapper">
        {signSelector == "player" ? (
          <Signs stepAttr="picked" picSrc={passedSrc} />
        ) : (
          <React.Fragment>
            <div className="dark-circle"></div>
            <Signs stepAttr="picked" picSrc={passedSrc} />
          </React.Fragment>
        )}
        {/* pass in SignChoice button as children */}
      </div>
    </div>
  );
}

export default PickedSign;
