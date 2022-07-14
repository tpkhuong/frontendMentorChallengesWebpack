import React, { useState, useEffect } from "react";
import { storageObj } from "../src/storage";
import Head from "next/head";
import Image from "next/image";
import Moon from "../starter-code/assets/destination/image-moon.png";
import Mars from "../starter-code/assets/destination/image-mars.png";
import Europa from "../starter-code/assets/destination/image-europa.png";
import Titan from "../starter-code/assets/destination/image-titan.png";
import favicon from "../public/favicon-32x32.png";
import DestStyles from "../styles/Destination.module.css";
import Link from "next/link";
import data from "../src/data.json";
import Header from "../Components/Header";
import SectionWrapper from "../Components/SectionWrapper";
import { horizontalVerticalTabpanel } from "../src/helperFunc";
// import Navbar from "../Components/Navbar";

function Destinations(props) {
  // console.log(props.destinations);
  // console.log(props.stuff);
  /**
   * reset storage.count to 0 when user click to home, destinations, or crew page
   * **/

  storageObj.count = storageObj.count > 0 ? 0 : storageObj.count;
  const arratOfImgComponents = [Moon, Mars, Europa, Titan];
  const initialData = props.destinations[0];
  const dataObj = {
    imgSrc: arratOfImgComponents[0],
    tabIndex: 0,
    panelTitle: initialData.name,
    panelDescription: initialData.description,
    panelDistance: initialData.distance,
    panelTravel: initialData.travel,
  };

  const [stateData, useStateData] = useState(dataObj);
  /**
   * keyboard functionality
   * **/

  // useEffect(() => {
  //   const arrFirstBtnAndLastBtn = getTabButtons(
  //     Array.from(document.querySelectorAll("[data-index]"))
  //   );
  //   const keyboardMovementForTabpanel = horizontalVerticalTabpanel.bind(
  //     arrFirstBtnAndLastBtn
  //   );
  //   // save reference to event listener
  //   storageObj.removeCallback = keyboardMovementForTabpanel;
  //   document
  //     .querySelector("[role='tablist']")
  //     .addEventListener("keydown", keyboardMovementForTabpanel);
  // });

  return (
    <React.Fragment>
      <Head>
        <title>Pick Your Destination</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />;
      </Head>
      {/* <div className="app" id="destination">
      </div> */}
      <SectionWrapper idAttr="destination">
        <Header activeEffect="DESTINATION" />
        {/* title-content-img-wrapper */}
        <section className={DestStyles[`title-content-img-wrapper`]}>
          {/* title wrapper */}
          <div className={DestStyles[`title-wrapper`]}>
            <h1 className={DestStyles[`page-title`]}>
              <span className={DestStyles[`page-title-digit`]}>01</span> PICK
              YOUR DESTINATION
            </h1>
          </div>
          {/* content and img wrapper */}
          <div className={DestStyles[`content-img-wrapper`]}>
            {/* img wrapper */}
            <div className={DestStyles[`img-wrapper`]}>
              <Image src={stateData.imgSrc} />
            </div>
            {/* content, tab and tabpanel */}
            <div className={DestStyles[`content-wrapper`]}>
              {/* tablist */}
              <div
                onClick={changeTabpanelContent.bind({
                  appData: props.destinations,
                  arrOfImgComp: arratOfImgComponents,
                  ourState: {
                    stateData,
                    useStateData,
                  },
                })}
                role="tablist"
                onKeyDown={horizontalVerticalTabpanel}
                // aria-labelledby="tablist-1"
                className={DestStyles[`tablist-wrapper`]}
              >
                {/* moon */}
                {/* button aria-controls will match the value of the tabpanel id */}
                <button
                  className={DestStyles[`tab-wrapper`]}
                  data-index="0"
                  role="tab"
                  aria-selected="true"
                  aria-controls="tabpanel-0"
                  id="tab-0"
                >
                  <span className={DestStyles[`bottom-line`]}>MOON</span>
                </button>
                {/* mars */}
                <button
                  className={DestStyles[`tab-wrapper`]}
                  data-index="1"
                  role="tab"
                  aria-selected="false"
                  aria-controls="tabpanel-1"
                  id="tab-1"
                >
                  <span className={DestStyles[`bottom-line`]}>MARS</span>
                </button>
                {/* europa */}
                <button
                  className={DestStyles[`tab-wrapper`]}
                  data-index="2"
                  role="tab"
                  aria-selected="false"
                  aria-controls="tabpanel-2"
                  id="tab-2"
                >
                  <span className={DestStyles[`bottom-line`]}>EUROPA</span>
                </button>
                {/* titan */}
                <button
                  className={DestStyles[`tab-wrapper`]}
                  data-index="3"
                  role="tab"
                  aria-selected="false"
                  aria-controls="tabpanel-3"
                  id="tab-3"
                >
                  <span className={DestStyles[`bottom-line`]}>TITAN</span>
                </button>
              </div>
              {/* tabpanel */}
              {/* tabpanel name will come from the button element with matching value of the button id attr and tabpanel aria-labelledby */}
              <div
                role="tabpanel"
                aria-labelledby={`tab-${stateData.tabIndex}`}
                id={`tabpanel-${stateData.tabIndex}`}
                className={DestStyles[`tabpanel`]}
              >
                {/* title */}
                <h2 tabIndex="-1" className={DestStyles[`title`]}>
                  {stateData.panelTitle}
                </h2>
                {/* description */}
                <p className={DestStyles[`description`]}>
                  {stateData.panelDescription}
                </p>
                {/* distance and travel */}
                <div className={DestStyles[`distance-travel-wrapper`]}>
                  <div className={DestStyles[`distance`]}>
                    <span className={DestStyles[`text`]}>AVG. DISTANCE</span>
                    <span className={DestStyles[`digit`]}>
                      {stateData.panelDistance}
                    </span>
                  </div>
                  <div className={DestStyles[`travel`]}>
                    <span className={DestStyles[`text`]}>EST. TRAVEL TIME</span>
                    <span className={DestStyles[`digit`]}>
                      {stateData.panelTravel}
                    </span>
                  </div>
                </div>
              </div>
              {/* <div id="tabpanel-"></div>
              <div id="tabpanel-"></div>
              <div id="tabpanel-"></div> */}
            </div>
          </div>
        </section>
      </SectionWrapper>
      {/* <h1>Destinations Page</h1>
      <Link href="/">Go Back</Link>
      <div>Navbar</div> */}
      {/* <Navbar currentPage="DESTINATION"></Navbar> */}
      {/* <h2>Destinations</h2> */}
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {
      destinations: data.destinations,
    },
  };
}

function changeTabpanelContent(event) {
  // add to div with role tablist
  // onClick={changeTabpanelContent.bind(props.destinations)}
  // <button id="0">moon</button>
  //         <button id="1">mars</button>
  //         <button id="2">euroa</button>
  //         <button id="3">titan</button>
  /* <h2>{`${props.destinations[0].name}`}</h2> */

  // if user click on current selected button do nothing
  console.log(storageObj);
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
    // find button with aria-selected true
    const currentSelectedPanel = document.querySelector(
      "[aria-selected='true']"
    );
    // change value of aria-selected to false for currentSelectedPanel
    currentSelectedPanel.getAttribute("aria-selected") == "true"
      ? currentSelectedPanel.setAttribute("aria-selected", "false")
      : null;
    // change value of aria-selected of clicked button to true
    event.target.closest("BUTTON").getAttribute("aria-selected") == "false"
      ? event.target.closest("BUTTON").setAttribute("aria-selected", "true")
      : null;

    const index = Number(
      event.target.closest("BUTTON").getAttribute("data-index")
    );
    const getOurDataFromProp = this.appData[index];
    const ourImgComponent = this.arrOfImgComp[index];
    // we will pass in an object
    // and call useState re-render once
    // this.ourState.useStateData({
    //   ...this.ourState.stateData,
    //   imgSrc: ourImgComponent,
    //   tabIndex: index,
    //   panelTitle: getOurDataFromProp.name,
    //   panelDescription: getOurDataFromProp.description,
    //   panelDistance: getOurDataFromProp.distance,
    //   panelTravel: getOurDataFromProp.travel,
    // });
    // console.log("this", this[index]);
    /**
     * using functional updates form of useState. the parameter is the previous state of the
     * variables that was set when we called useState
     * **/
    this.ourState.useStateData((prevValues) => {
      return {
        ...prevValues,
        imgSrc: ourImgComponent,
        tabIndex: index,
        panelTitle: getOurDataFromProp.name,
        panelDescription: getOurDataFromProp.description,
        panelDistance: getOurDataFromProp.distance,
        panelTravel: getOurDataFromProp.travel,
      };
    });
  }
}

export default Destinations;
