import React, { useEffect, useState, useCallback } from "react";
import TechStyles from "../styles/Technology.module.css";
import { storageObj } from "../src/storage";
import { horizontalVerticalTabpanel } from "../src/helperFunc";
import Image from "next/image";
/**
 * landscape
 * **/
// import VehicleLandscape from "../starter-code/assets/technology/image-launch-vehicle-landscape.jpg";
// import SpaceportLandscape from "../starter-code/assets/technology/image-spaceport-landscape.jpg";
// import CapsuleLandscape from "../starter-code/assets/technology/image-space-capsule-landscape.jpg";
/**
 * portrait
 * **/
// import VehiclePortrait from "../starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
// import SpaceportPortrait from "../starter-code/assets/technology/image-spaceport-portrait.jpg";
// import CapsulePortrait from "../starter-code/assets/technology/image-space-capsule-portrait.jpg";
// import Vehicle from "../starter-code/assets/technology/";
import Head from "next/head";
import favicon from "../public/favicon-32x32.png";
import Link from "next/link";
import data from "../src/data.json";
import Header from "../Components/Header";
import SectionWrapper from "../Components/SectionWrapper";
// import Navbar from "../Components/Navbar";

// const useMediaQuery = (width) => {
//   const [targetReached, setTargetReached] = useState(false);

//   const updateTarget = useCallback((e) => {
//     if (e.matches) {
//       setTargetReached(true);
//     } else {
//       setTargetReached(false);
//     }
//   }, []);

//   useEffect(() => {
//     const media = window.matchMedia(`(max-width: ${width}px)`);
//     media.addEventListener("change", updateTarget);

//     // Check on mount (callback is not called until a change occurs)
//     if (media.matches) {
//       setTargetReached(true);
//     }

//     return () => media.removeEventListener("change", updateTarget);
//   }, []);

//   return targetReached;
// };

// {
//   isBreakpoint ? (
//     <Image src={landscapeImgSrc[0]} />
//   ) : (
//     <Image src={portraitImgSrc[0]} />
//   );
// }

function TechPage(props) {
  /**
   * landscape
   * **/
  const vehicleLandscape = "/technology/image-launch-vehicle-landscape.jpg";
  const spaceportLandscape = "/technology/image-spaceport-landscape.jpg";
  const capsuleLandscape = "/technology/image-space-capsule-landscape.jpg";
  /**
   * portrait
   * **/

  const vehiclePortrait = "/technology/image-launch-vehicle-portrait.jpg";
  const spaceportPortrait = "/technology/image-spaceport-portrait.jpg";
  const capsulePortrait = "/technology/image-space-capsule-portrait.jpg";
  // const rootElementWidth = document.querySelector("html").clientWidth;
  // landscape img src component
  const landscapeImgSrc = [
    vehicleLandscape,
    spaceportLandscape,
    capsuleLandscape,
  ];
  // portrait img src component
  const portraitImgSrc = [vehiclePortrait, spaceportPortrait, capsulePortrait];
  /**
   * for the initial vale of techImg we can leave it empty/null/empty string etc
   * **/
  // useEffect runs after this components render
  // if we dont reset storageObj.count in our func/callback assigned to onClick event
  // and reset it whem techpage renders
  // the code in useEffect will run once on load and when user click on tech navlink
  // after going to other pages in our app
  // storageObj.count = storageObj.count > 0 ? 0 : storageObj.count;
  /**
   * we can check in the other pages: home,destination and crew if storageObj.count is greater than 0
   * if it is we can reset it to 0 so code/algorithm in our if state in useEffect will run once
   * **/
  useEffect(() => {
    // reason img element was not loading the img we wanted
    // because everything call useState it will render this component
    // which will run useEffect(). we were always setting img src to
    // the first value of landscapeImgSrc or portraitImgSrc
    if (storageObj.count === 0) {
      // run once
      window.screen.width < 815
        ? document
            .querySelector("#imgSelector")
            .setAttribute("src", landscapeImgSrc[0])
        : (document
            .querySelector("#imgSelector")
            .setAttribute("src", portraitImgSrc[0]),
          document
            .querySelector("[role='tablist']")
            .setAttribute("aria-orientation", "vertical"));
      storageObj.count++;
    }
    console.log(storageObj.count);
    /**
     * keyboard functionality
     * **/
    // const arrFirstBtnAndLastBtn = getTabButtons(
    //   Array.from(document.querySelectorAll("[data-index]"))
    // );
    // const keyboardMovementForTabpanel = horizontalVerticalTabpanel.bind(
    //   arrFirstBtnAndLastBtn
    // );
    // // save reference to event listener
    // storageObj.removeCallback = keyboardMovementForTabpanel;
    // document
    //   .querySelector("[role='tablist']")
    //   .addEventListener("keydown", keyboardMovementForTabpanel);
  });
  // not using array of img component because we will use background image in css instead
  const techInitialData = props.techData[0];
  const techData = {
    techIndex: 0,
    techImg: "",
    techName: techInitialData.name,
    techDescription: techInitialData.description,
  };
  const [techStateData, useTechState] = useState(techData);

  return (
    <React.Fragment>
      {/* <div
        onClick={techDataChange.bind({
          pageData: props.techData,
          arraysOfTechImgSrc: {landscapeImgSrc,portraitImgSrc},
          stateObj: { techStateData, useTechState },
        })}
      ></div> */}
      <Head>
        <title>Space Launch</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />;
      </Head>
      <SectionWrapper idAttr="technology">
        <Header activeEffect="TECHNOLOGY"></Header>
        {/* title-content-img-wrapper */}
        <section className={TechStyles[`title-content-img-wrapper`]}>
          {/* title wrapper */}
          <div className={TechStyles[`title-wrapper`]}>
            <h1 className={TechStyles[`page-title`]} id="tablist-3">
              <span className={TechStyles[`page-title-digit`]}>03</span> SPACE
              LAUNCH 101
            </h1>
          </div>
          {/* content-img wrapper */}
          <div className={TechStyles[`content-img-wrapper`]}>
            {/* check window screen size/width and load img based on screen width */}
            <div className={TechStyles[`img-wrapper`]}>
              {/* serve empty img first load */}
              {/* we always forgot to change img src to use the property of techStateDate.techImg */}
              {/* which will update when we call useState in our click func */}
              <img
                id="imgSelector"
                className={TechStyles[`imgElement`]}
                src={techStateData.techImg}
                alt="Rocket Ship Launching."
              />
            </div>
            {/* img wrapper */}
            {/* content tablist/tab/tapanel */}
            <div className={TechStyles[`content-wrapper`]}>
              {/* tablist */}
              <div
                onClick={techDataChange.bind({
                  pageData: props.techData,
                  arraysOfTechImgSrc: { landscapeImgSrc, portraitImgSrc },
                  stateObj: { techStateData, useTechState },
                })}
                aria-labelledby="tablist-3"
                role="tablist"
                onKeyDown={horizontalVerticalTabpanel}
                className={TechStyles[`tablist`]}
              >
                {/* tabs */}
                {/* launch vehicle */}
                <button
                  className={TechStyles[`techTab-btn`]}
                  data-index="0"
                  aria-label="launch vehicle"
                  role="tab"
                  aria-controls="tabpanel-0"
                  aria-selected="true"
                  id="tab-0"
                >
                  <span className={TechStyles[`tab-digit`]}>1</span>
                </button>
                {/* spaceport */}
                <button
                  className={TechStyles[`techTab-btn`]}
                  data-index="1"
                  aria-label="space port"
                  role="tab"
                  aria-controls="tabpanel-1"
                  aria-selected="false"
                  id="tab-1"
                >
                  <span className={TechStyles[`tab-digit`]}>2</span>
                </button>
                {/* space capsule */}
                <button
                  className={TechStyles[`techTab-btn`]}
                  data-index="2"
                  aria-label="space capsule"
                  role="tab"
                  aria-controls="tabpanel-2"
                  aria-selected="false"
                  id="tab-2"
                >
                  <span className={TechStyles[`tab-digit`]}>3</span>
                </button>
              </div>
              {/* tabpanel */}
              <div
                role="tabpanel"
                aria-labelledby={`tab-${techStateData.techIndex}`}
                id={`tabpanel-${techStateData.techIndex}`}
                className={TechStyles[`tabpanel`]}
              >
                {/* span */}
                <span className={TechStyles[`tabpanel-subheading`]}>
                  THE TERMINOLOGY ...
                </span>
                {/* title */}
                <h2 tabIndex="-1" className={TechStyles[`title`]}>
                  {techStateData.techName}
                </h2>
                {/* description */}
                <p className={TechStyles[`description`]}>
                  {techStateData.techDescription}
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      techData: data.technology,
    },
  };
}

function techDataChange(event) {
  if (
    event.target.closest("BUTTON") &&
    event.target.closest("BUTTON").getAttribute("aria-selected") == "false"
  ) {
    /**
     * remove event listener
     * **/
    // document
    //   .querySelector("[role='tablist']")
    //   .removeEventListener("keyup", storageObj.removeCallback);
    const windowScreenSize = window.screen.width;
    // find button with aria-selected true
    const currentSelectTechPanel = document.querySelector(
      "[aria-selected='true']"
    );
    // change value of aria-selected to false for currentSelectTechPanel
    currentSelectTechPanel.setAttribute("aria-selected", "false");
    // change value of aria-selected of clicked button to true
    event.target.closest("BUTTON").getAttribute("aria-selected") == "false"
      ? event.target.closest("BUTTON").setAttribute("aria-selected", "true")
      : null;
    // get index
    const index = Number(
      event.target.closest("BUTTON").getAttribute("data-index")
    );
    // get img src based on html element screen width
    // if windowScreenSize is < 769 serve landscape img else serve portrait img
    const imgComponentSrc =
      windowScreenSize < 815
        ? this.arraysOfTechImgSrc.landscapeImgSrc[index]
        : this.arraysOfTechImgSrc.portraitImgSrc[index];
    // get data from json file
    // imgElement.setAttribute("src", imgComponentSrc);
    const currentTechData = this.pageData[index];
    // call usestate to update props
    // this.stateObj.useTechState({
    //   ...this.stateObj.techStateData,
    //   techIndex: index,
    //   techImg: imgComponentSrc,
    //   techName: currentTechData.name,
    //   techDescription: currentTechData.description,
    // });
    /**
     * using functional updates form of useState. the parameter is the previous state of the
     * variables that was set when we called useState
     * **/
    this.stateObj.useTechState((prevValues) => {
      return {
        ...prevValues,
        techIndex: index,
        techImg: imgComponentSrc,
        techName: currentTechData.name,
        techDescription: currentTechData.description,
      };
    });
  }
}

export default TechPage;
