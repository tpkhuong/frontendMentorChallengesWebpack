import React from "react";
// import "../../styles.css";
import TestStyles from "./App.module.css";
import TestContainer from "./TestContainer";
import PortfolioStyles from "./PortfolioComponent.module.css";
// import { bindToClick } from "./funcs";

export default function App({ children, ...props }) {
  return (
    <React.Fragment>
      {/* <TestApp /> */}
      <PortfolioComponent />
    </React.Fragment>
  );
}

function TestApp({ children, ...props }) {
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
      {/* button */}
      <button className={TestStyles[`save-btn`]}>
        <span className={TestStyles[`inner-btn`]}>Save Changes</span>
      </button>
      <div className={TestStyles[`wrapper`]}>
        <div className={TestStyles[`container`]}>
          <div className={TestStyles[`one`]}></div>
          <div className={TestStyles[`two`]}></div>
          <div className={TestStyles[`three`]}></div>
          <div className={TestStyles[`four`]}></div>
          <div className={TestStyles[`five`]}></div>
        </div>
        <div className={TestStyles[`container`]}>
          <div className={TestStyles[`one`]}></div>
          <div className={TestStyles[`two`]}></div>
          <div className={TestStyles[`three`]}></div>
          <div className={TestStyles[`four`]}></div>
          <div className={TestStyles[`five`]}></div>
        </div>
      </div>
      <span className={TestStyles[`triangle`]}></span>
      <span>
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#635FC7" strokeWidth="2" fill="none" d="M9 6 5 2 1 6" />
        </svg>
      </span>
      {/* dark/light menu btn */}
      <button
        onClick={(event) => {
          event.target.closest("BUTTON").getAttribute("data-theme") === "" ||
          event.target.closest("BUTTON").getAttribute("data-theme") == "dark"
            ? event.target.closest("BUTTON").setAttribute("data-theme", "light")
            : event.target.closest("BUTTON").setAttribute("data-theme", "dark");
        }}
        data-theme=""
      >
        <div className={TestStyles[`lines-container`]}>
          <span className={TestStyles[`front`]}></span>
          <span className={TestStyles[`back`]}></span>
        </div>
        <div className={TestStyles[`lines-container`]}>
          <span className={TestStyles[`front`]}></span>
          <span className={TestStyles[`back`]}></span>
        </div>
        <div className={TestStyles[`lines-container`]}>
          <span className={TestStyles[`front`]}></span>
          <span className={TestStyles[`back`]}></span>
        </div>
      </button>
      <span className={TestStyles[`blinking`]}>_hello</span>
    </React.Fragment>
  );
}

function PortfolioComponent({ children, ...props }) {
  return (
    <React.Fragment>
      <div className={PortfolioStyles[`wrapper`]}>
        <div className={PortfolioStyles[`text-content`]}></div>
        <TestContainer />
        {/* <div
          id="scroll-container"
          onKeyDown={(event) => {
            event.preventDefault();
            const currentElement = document.activeElement;
            console.log(event);
            objOfMethods[event.code](event, currentElement);
            event.target.getBoundingClientRect();
          }}
          className={PortfolioStyles[`container`]}
        >
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="0" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
        </div> */}
      </div>
    </React.Fragment>
  );
}
