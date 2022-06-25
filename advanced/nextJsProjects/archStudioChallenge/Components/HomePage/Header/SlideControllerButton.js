import React from "react";
import SlideButtonStyles from "../../../styles/Home/SlideControllerButton.module.css";

function SlideControllerButton({ children, ...props }) {
  return (
    <React.Fragment>
      <button
        className={SlideButtonStyles[`slide-controller-btn`]}
        aria-label={props.labelAttr}
        aria-controls="carousel-items"
        data-controlindex={props.datacontrol}
        data-activebutton={props.isActive}
      >
        {children}
      </button>
    </React.Fragment>
  );
}

// our algorithm for slide button will be applied to its parent element. which is located
// in home page index.js
/**
 * when user click on button, look for element with data-activeslide="true" and element with
 * data-activebutton="true", remove those attr from those elemnts.
 * get the value of data-controlindex of the button clicked, use that value to look for
 * element with matching value for attr data-slideindex
 * **/

export default SlideControllerButton;
