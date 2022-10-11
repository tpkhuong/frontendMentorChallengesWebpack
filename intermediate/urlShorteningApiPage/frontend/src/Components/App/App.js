import React from "react";
// import "../../styles.css";
import TestStyles from "./App.module.css";
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
  const objOfMethods = {
    ArrowDown: (event, element) => {
      // next element tabIndex 0
      // prev element tabIndex -1

      if (!element.nextElementSibling) {
        // first child tabindex 0
        element.parentElement.firstElementChild.setAttribute("tabindex", "0");
        element.parentElement.firstElementChild.focus();
        // last child tabindex -1
        element.parentElement.lastElementChild.setAttribute("tabindex", "-1");
        return;
      }
      element.nextElementSibling.setAttribute("tabindex", "0");
      element.nextElementSibling.focus();
      const currentElement = document.activeElement;
      // call scrollTo
      // currentElement.getBoundingClientRect();
      // sibling element of parent element(scroll container)
      // top: 275, bottom: 625
      console.log(currentElement.getBoundingClientRect());
      // console.log(
      //   currentElement.parentElement.previousElementSibling.getBoundingClientRect()
      // );
      const top =
        currentElement.parentElement.previousElementSibling.getBoundingClientRect()
          .top;
      currentElement.scrollTo(0, top);
      currentElement.previousElementSibling.setAttribute("tabindex", "-1");
      // console.log(element.parentElement.firstElementChild);
    },
    ArrowUp: (event, element) => {
      // prev element tabIndex 0
      // next element tabIndex -1
      // console.log(element.parentElement.lastElementChild);
      if (!element.previousElementSibling) {
        // last child tabindex 0
        element.parentElement.lastElementChild.setAttribute("tabindex", "0");
        element.parentElement.lastElementChild.focus();
        // first child tabindex -1
        element.parentElement.firstElementChild.setAttribute("tabindex", "-1");
        return;
      }
      element.previousElementSibling.setAttribute("tabindex", "0");
      element.previousElementSibling.focus();
      const currentElement = document.activeElement;
      // call scrollTo
      // currentElement.getBoundingClientRect();
      // sibling element of parent element(scroll container)
      // top: 275, bottom: 625
      // console.log(
      //   currentElement.parentElement.previousElementSibling.getBoundingClientRect()
      // );
      /**
       * using scrollTo on parent element with overflow-y: auto
       * and scroll-snap-type works. scrollTo(0,275)
       * **/
      // document.elementFromPoint(600,249.60000610351562) focusing element working with
      // scroll and arrow keys
      const top =
        currentElement.parentElement.previousElementSibling.getBoundingClientRect()
          .top;
      currentElement.scrollTo(0, top);
      currentElement.nextElementSibling.setAttribute("tabindex", "-1");
    },
  };
  return (
    <React.Fragment>
      <div className={PortfolioStyles[`wrapper`]}>
        <div className={PortfolioStyles[`text-content`]}></div>
        <div
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
          <div tabIndex="0" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
        </div>
      </div>
    </React.Fragment>
  );
}
