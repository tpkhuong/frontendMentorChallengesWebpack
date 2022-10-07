import React from "react";
// import "../../styles.css";
import TestStyles from "./App.module.css";
// import { bindToClick } from "./funcs";

export default function App({ children, ...props }) {
  return (
    <React.Fragment>
      {/* option 1 */}
      {/* rotate the parent for fun =) */}
      <button
        onClick={(event) => {
          // element inside button or element we attached event listener to
          // will trigger event
          console.log(
            event.target.closest("BUTTON").getAttribute("data-clicked")
          );
          event.target.closest("BUTTON").getAttribute("data-clicked") ==
            "false" ||
          event.target.closest("BUTTON").getAttribute("data-clicked") === ""
            ? event.target
                .closest("BUTTON")
                .setAttribute("data-clicked", "true")
            : event.target
                .closest("BUTTON")
                .setAttribute("data-clicked", "false");
        }}
        data-clicked=""
        id="mobile-btn"
        className={TestStyles[`mobile-menu-icon`]}
      >
        <span className={TestStyles[`line`]}></span>
        <span className={TestStyles[`line`]}></span>
        <span className={TestStyles[`line`]}></span>
      </button>
      {/* option 1 */}
    </React.Fragment>
  );
}
