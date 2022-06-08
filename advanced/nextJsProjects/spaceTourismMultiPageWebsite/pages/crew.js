import React, { useState } from "react";
import Image from "next/image";
import { storageObj } from "./api/storage";
import CrewStyles from "../styles/Crew.module.css";
import Head from "next/head";
import Hurley from "../starter-code/assets/crew/image-douglas-hurley.png";
import Shuttleworth from "../starter-code/assets/crew/image-mark-shuttleworth.png";
import Glover from "../starter-code/assets/crew/image-victor-glover.png";
import Ansari from "../starter-code/assets/crew/image-anousheh-ansari.png";
import favicon from "../public/favicon-32x32.png";
import data from "./api/data.json";
import Link from "next/link";
import Header from "../Components/Header";
import SectionWrapper from "../Components/SectionWrapper";
// import Navbar from "../Components/Navbar";

function Crew(props) {
  /**
   * reset storage.count to 0 when user click to home, destinations, or crew page
   * **/
  storageObj.count = storageObj.count > 0 ? 0 : storageObj.count;

  const arrOfCrewImg = [Hurley, Shuttleworth, Glover, Ansari];
  const crewInitialData = props.dataCrew[0];
  const crewData = {
    crewImg: arrOfCrewImg[0],
    crewIndex: 0,
    crewPosition: crewInitialData.role,
    crewName: crewInitialData.name,
    crewDescription: crewInitialData.bio,
  };
  const [crewStateData, useCrewState] = useState(crewData);
  console.log(crewStateData.crewImg);
  return (
    <React.Fragment>
      <Head>
        <title>Crew</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />;
      </Head>
      <SectionWrapper idAttr="crew">
        <Header activeEffect="CREW"></Header>
        {/* title-content-img-wrapper */}
        {/* use display: grid */}
        <section className={CrewStyles[`title-content-img-wrapper`]}>
          {/* title-wrapper */}
          <div className={CrewStyles[`title-wrapper`]}>
            <h1 className={CrewStyles[`page-title`]} id="tablist-2">
              <span className={CrewStyles[`page-title-digit`]}>02</span> MEET
              YOUR CREW
            </h1>
          </div>
          {/* content, tab and tabpanel */}
          {/* use display: grid */}
          <div className={CrewStyles[`content-wrapper`]}>
            {/* tablist */}
            <div
              onClick={crewDataPanelChnage.bind({
                pageData: props.dataCrew,
                arrOfImgSrc: arrOfCrewImg,
                stateObj: { crewStateData, useCrewState },
              })}
              role="tablist"
              aria-labelledby="tablist-2"
              className={CrewStyles[`tablist`]}
            >
              {/* Hurley */}
              <button
                data-index="0"
                className={CrewStyles[`crewTab-btn`]}
                role="tab"
                aria-controls="tabpanel-0"
                aria-selected="true"
                id="tab-0"
                aria-label="Douglas Hurley"
              ></button>
              {/* Shuttleworth*/}
              <button
                data-index="1"
                className={CrewStyles[`crewTab-btn`]}
                role="tab"
                aria-controls="tabpanel-1"
                aria-selected="false"
                aria-label="Mark Shuttleworth"
                id="tab-1"
              ></button>
              {/* Glover */}
              <button
                data-index="2"
                className={CrewStyles[`crewTab-btn`]}
                role="tab"
                aria-controls="tabpanel-2"
                aria-selected="false"
                aria-label="Victor Glover"
                id="tab-2"
              ></button>
              <button
                data-index="3"
                className={CrewStyles[`crewTab-btn`]}
                role="tab"
                aria-controls="tabpanel-3"
                aria-selected="false"
                aria-label="Anousheh Ansari"
                id="tab-3"
              ></button>
              {/* Ansari */}
            </div>
            {/* tabpanel */}
            <div
              className={CrewStyles[`tabpanel`]}
              role="tabpanel"
              // aria-labelledby matches tab id
              aria-labelledby={`tab-${crewStateData.crewIndex}`}
              // id matches tab aria-controls
              id={`tabpanel-${crewStateData.crewIndex}`}
            >
              {/* position */}
              <span className={CrewStyles[`position`]}>
                {crewStateData.crewPosition}
              </span>
              {/* crewname */}
              <h2 className={CrewStyles[`title`]}>{crewStateData.crewName}</h2>
              {/* crew description */}
              <p className={CrewStyles[`description`]}>
                {crewStateData.crewDescription}
              </p>
            </div>
          </div>

          {/* tabpanel name will come from the button element with matching value of the button id attr and tabpanel aria-labelledby */}
          {/* img wrapper */}
          <div className={CrewStyles[`img-wrapper`]}>
            <Image layout="fill" src={crewStateData.crewImg} />
          </div>
          {/* <div className={CrewStyles[`bottom-line-container`]}>
          </div> */}
        </section>
      </SectionWrapper>
      {/* <Navbar currentPage="CREW"></Navbar> */}
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      dataCrew: data.crew,
    },
  };
}

function crewDataPanelChnage(event) {
  if (
    event.target.closest("BUTTON") &&
    event.target.closest("BUTTON").getAttribute("aria-selected") == "false"
  ) {
    // find button with aria-selected true
    const currentSelectedCrewMember = document.querySelector(
      "[aria-selected='true']"
    );
    // change value of aria-selected to false for currentSelectedCrewMember
    currentSelectedCrewMember.getAttribute("aria-selected") == "true"
      ? currentSelectedCrewMember.setAttribute("aria-selected", "false")
      : null;
    // change value of aria-selected of clicked button to true
    event.target.closest("BUTTON").getAttribute("aria-selected") == "false"
      ? event.target.closest("BUTTON").setAttribute("aria-selected", "true")
      : null;
    // get data index
    const index = Number(
      event.target.closest("BUTTON").getAttribute("data-index")
    );
    // get img src
    const imgComponent = this.arrOfImgSrc[index];
    // data from json file
    const currentData = this.pageData[index];
    // call useState to update data
    this.stateObj.useCrewState({
      ...this.stateObj.crewStateData,
      crewImg: imgComponent,
      crewIndex: index,
      crewPosition: currentData.role,
      crewName: currentData.name,
      crewDescription: currentData.bio,
    });
  }
}

export default Crew;
