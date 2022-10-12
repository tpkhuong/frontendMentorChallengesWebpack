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
  /**
   * use scrollheight on scroll-conttainer element
   * which will give us 2896
   * **/
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
        // want to focus second to first child of scroll container
        element.parentElement.scrollBy(0, 100);
        return;
      }
      element.nextElementSibling.setAttribute("tabindex", "0");
      element.nextElementSibling.focus();
      // keep reference of current focused element so we can target
      // its prev sibling to assign "-1" to prev sibling tabindex
      const currentElement = document.activeElement;
      // call scrollBy of current focused element/vertically center element
      currentElement.parentElement.scrollBy(0, 50);
      // currentElement.parentElement.scrollTo(0, currElementTop);
      // currentElement.getBoundingClientRect();
      // sibling element of parent element(scroll container)
      // top: 275, bottom: 625
      // console.log(
      //   currentElement.parentElement.previousElementSibling.getBoundingClientRect()
      // );
      // const top =
      //   currentElement.parentElement.previousElementSibling.getBoundingClientRect()
      //     .top;
      // currentElement.scrollTo(0, top);
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
        // want to focus second to last child of scroll container
        element.parentElement.scrollBy(0, -100);
        return;
      }
      element.previousElementSibling.setAttribute("tabindex", "0");
      element.previousElementSibling.focus();
      // keep reference of current focused element so we can target
      // its next sibling to assign "-1" to next sibling tabindex
      const currentElement = document.activeElement;
      // call scrollBy of current focused element/vertically center element
      currentElement.parentElement.scrollBy(0, -50);
      // currentElement.parentElement.scrollTo(0, currElementTop);
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
      // scroll and arrow keys. 600,249.60000610351562 is the (x,y) of scroll container element
      // const top =
      //   currentElement.parentElement.previousElementSibling.getBoundingClientRect()
      //     .top;
      // currentElement.scrollTo(0, top);
      currentElement.nextElementSibling.setAttribute("tabindex", "-1");
    },
  };
  React.useEffect(() => {
    const snapChildren = document.querySelectorAll(
      "#scroll-container div[tabindex]"
    );
    const observerRootElement = document.getElementById("scroll-container");
    // scroll second element/child of scroll-container to 275 of scroll-container(its parent);
    // when user visit our site or on reload, tabindex "0" will be on second element
    // left content element and right element(of scroll container) will be centered vertically
    observerRootElement.scrollTo(0, 275);
    testIntersectionObserver(observerRootElement, [...snapChildren]);
  }, []);
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
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="0" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
          <div tabIndex="-1" className={PortfolioStyles[`snap-item`]}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

function testIntersectionObserver(rootElement, elements) {
  /**
   * using intersection observer and scrollTo(on scroll container[parent element of snap items])
   * on key down(up,right,down,left) arrow key.
   * we could assign "0" to tabindex to element that has isIntersecting true then assign
   * "-1" to tabindex to previousElementSibling and nextElementSibling of isIntersecting true
   * element which will work for both mouse wheel scroll and keydown events
   * **/
  // options
  const options = {
    root: rootElement,
    threshold: 1,
    rootMargin: "-218px 0px -218px 0px",
  };
  // callback
  function changeTabindexOnMouseScroll(entries, observer) {
    entries.forEach(function observeEachSnapItem(entry, index) {
      if (!entry.isIntersecting) {
        return;
      }
      // when isIntersecting is true the element we want to assign string value "0"
      // to attr tabindex will be the target element of entry
      // first load or reload element that has isIntersecting true will have "0" string value
      // assigned to tabindex
      const targetTabindex = entry.target.getAttribute("tabindex");
      if (targetTabindex === "0") {
        return;
      }
      // entry.target
      const beforeElement = entry.target.previousElementSibling;
      const afterElement = entry.target.nextElementSibling;
      console.log(entry.target);
      console.log(entry.target.offsetTop);
      // with our algorithm, there will always be an element before and after
      // the element with tabindex = "0"
      // get previous and next sibling element of target assign tabindex "-1" to those elements
      entry.target.getAttribute("tabindex") == "-1"
        ? entry.target.setAttribute("tabindex", "0")
        : null;
      // if before or after element tabindex === "0" then we assign "-1" to element tabindex attr
      beforeElement.getAttribute("tabindex") === "0"
        ? beforeElement.setAttribute("tabindex", "-1")
        : null;
      afterElement.getAttribute("tabindex") === "0"
        ? afterElement.setAttribute("tabindex", "-1")
        : null;
      console.log(entry.target.getBoundingClientRect());
    });
  }

  const observer = new IntersectionObserver(
    changeTabindexOnMouseScroll,
    options
  );

  // loop through elements in array(elements parameter)
  elements.forEach(function addObserverToEachItem(element) {
    observer.observe(element);
  });

  // attempt one
  // function closureOverPrevOffset() {
  //   // cached offsetTop
  //   const cachedObj = {
  //     prevOffset: 416,
  //     prevElement: null,
  //   };
  //   return function innerFunc(entries, observer) {
  //     console.log("before", cachedObj);
  //     entries.forEach(function observeEachSnapItem(entry) {
  //       if (!entry.isIntersecting) {
  //         return;
  //       }
  //       // when isIntersecting is true the element we want to assign string value "0"
  //       // to attr tabindex will be the target element of entry
  //       // entry.target
  //       console.log(entry.target.offsetTop);
  //       const targetOffset = entry.target.offsetTop;
  //       // first load or reload element that has isIntersecting true will have "0" string value
  //       // assigned to tabindex
  //       const targetTabindex = entry.target.getAttribute("tabindex");
  //       if (targetTabindex === "0") {
  //         return;
  //       }
  //       cachedObj.prevElement = entry.target;
  //       entry.target.setAttribute("tabindex", "0");
  //       entry.target.focus();
  //       // if targetOffset is greater than cachedObj prevOffset
  //       // get prevelementsiblin and assign "-1" to tabindex
  //       if (targetOffset > cachedObj.prevOffset) {
  //         entry.target.previousElementSibling.setAttribute("tabindex", "-1");
  //       }
  //       // if targetOffset is less than cachedObj prevOffset
  //       // get nextelementsiblin and assign "-1" to tabindex
  //       if (targetOffset < cachedObj.prevOffset) {
  //         entry.target.nextElementSibling.setAttribute("tabindex", "-1");
  //       }

  //       // get previous and next sibling element of target
  //     });
  //     console.log("after", cachedObj);
  //   };
  // }

  // const changeTabindexOnMouseScroll = closureOverPrevOffset();
}
