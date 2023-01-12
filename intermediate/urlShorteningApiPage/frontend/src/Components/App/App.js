import React from "react";
// import "../../styles.css";
import TestStyles from "./App.module.css";
import TestContainer from "./TestContainer";
import PortfolioStyles from "./PortfolioComponent.module.css";
import { FaChevronRight, FaChevronLeft, FaArrowLeft } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { CgFormatSlash } from "react-icons/cg";
// import { bindToClick } from "./funcs";

export default function App({ children, ...props }) {
  return (
    <React.Fragment>
      <TestApp />
      {/* <PortfolioComponent /> */}
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
      <HtmlItem tagContent="Title">
        <h2>This is h2</h2>
        {/* {() => {
          return (
            <React.Fragment>
              <h2>This is h2.</h2>
            </React.Fragment>
          );
        }} */}
      </HtmlItem>
      <HtmlItem tagContent="Paragraph">
        <p>
          Making the sites/applications, the most inclusive as I can with my
          current skills/knowledge.
        </p>
        {/* {() => {
          return (
            <p>
              Making the sites/applications, the most inclusive as I can with my
              current skills/knowledge.
            </p>
          );
        }} */}
      </HtmlItem>
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

function HtmlItem({ children, tagContent }) {
  return (
    <React.Fragment>
      {/* font-size 1.2rem */}
      {/* font-weight 600 */}
      {/* <MdChevronLeft /> */}
      {/* <CgFormatSlash /> */}
      <div>
        <div className={`${TestStyles["opening"]} ${TestStyles[`tag`]}`}>
          <span>&lt;</span>
          <span>{tagContent}</span>
          <span>&gt;</span>
        </div>
        {/* <MdChevronRight /> */}
        {children}
        <div className={`${TestStyles["closing"]} ${TestStyles[`tag`]}`}>
          {/* <MdChevronLeft /> */}
          {/* <CgFormatSlash /> */}
          <span>&lt;</span>
          <span>/</span>
          <span>{tagContent}</span>
          <span>&gt;</span>
          {/* <MdChevronRight /> */}
        </div>
      </div>
      {/* curly bracket */}
      <span>&#123;</span>
      <span>&#125;</span>
      {/* [bracket] */}
      <span>&#91;</span>
      <span>&#93;</span>
      <CSSRule
        selector="College"
        property="University"
        propertyValue="California State University of Northridge"
      />
      <ProfessionalExp
        profVariable="professionalExperienceOne"
        company="48in48"
        city="Atlanta"
        state="Georgia"
        position="Accessibility Auditor"
        date="October 2020 - Present"
      >
        <span>Provides accessibility reviews to project/design teams.</span>
        <span>
          Using Chrome Developer tools and the assistive technology (NVDA) to
          provide recommendations to build teams to develop more screen reader
          and keyboard accessible websites.
        </span>
        <span>
          Checked for these main accessibility issues: Alternative Texts, Design
          and Layouts, Semantic HTML, Written transcripts and Closed Captions
          for video and audio content, Keyboard-only navigation, Keyboard Traps.
        </span>
        <span>
          Loved building JavaScript algorithms that will traverse team’s website
          looking for heading, label, img, link, button and input elements.
        </span>
      </ProfessionalExp>
    </React.Fragment>
  );
}

function CSSRule({ children, selector, property, propertyValue }) {
  return (
    <React.Fragment>
      <div className={TestStyles[`rule-container`]}>
        {/* selector */}
        <p>
          <span>&#91;</span>
          {selector}
          <span>&#93;</span>
          <span>&#123;</span>
        </p>
        {/* property and property value */}
        <p>
          <span>{property}</span> <span>:</span> <span>{propertyValue}</span>
        </p>
        {/* closing bracket */}
        <span>&#125;</span>
      </div>
    </React.Fragment>
  );
}

function ProfessionalExp({
  children,
  profVariable,
  company,
  city,
  state,
  position,
  date,
}) {
  const [first, second, third, fourth] = children;
  return (
    <React.Fragment>
      <div className={TestStyles[`exp-container`]}>
        {/* const variable = { */}
        <p>
          <span>const</span>
          <span className={TestStyles[`spacer-inline`]}>{profVariable}</span>
          <span className={TestStyles[`spacer-end`]}>=</span>
          <span>&#123;</span>
        </p>
        {/* company */}
        <p>
          <span>company</span>
          <span className={TestStyles[`spacer-end`]}>:</span>
          <span>"</span>
          <span>{company}</span>
          <span>"</span>
          <span>,</span>
        </p>
        {/* city */}
        <p>
          <span>city</span>
          <span className={TestStyles[`spacer-end`]}>:</span>
          <span>"</span>
          <span>{city}</span>
          <span>"</span>
          <span>,</span>
        </p>
        {/* state */}
        <p>
          <span>state</span>
          <span className={TestStyles[`spacer-end`]}>:</span>
          <span>"</span>
          <span>{state}</span>
          <span>"</span>
          <span>,</span>
        </p>
        {/* position */}
        <p>
          <span>position</span>
          <span className={TestStyles[`spacer-end`]}>:</span>
          <span>"</span>
          <span>{position}</span>
          <span>"</span>
          <span>,</span>
        </p>
        {/* date */}
        <p>
          <span>date</span>
          <span className={TestStyles[`spacer-end`]}>:</span>
          <span>"</span>
          <span>{date}</span>
          <span>"</span>
          <span>,</span>
        </p>
        {/* responsibilities */}
        <p>
          <span>responsibilities</span>
          <span className={TestStyles[`spacer-end`]}>:</span>
          <span>&#91;</span>
        </p>
        {/* responsibilities content */}
        <p>
          <span>"</span>
          <span>{first}</span>
          <span>"</span>
          <span>,</span>
        </p>
        <p>
          <span>"</span>
          <span>{second}</span>
          <span>"</span>
          <span>,</span>
        </p>
        <p>
          <span>"</span>
          <span>{third}</span>
          <span>"</span>
          <span>,</span>
        </p>
        <p>
          <span>"</span>
          <span>{fourth}</span>
          <span>"</span>
          <span>,</span>
        </p>
        {/* responsibilities content */}
        <p>
          <span>&#93;</span>
          <span>,</span>
        </p>
        <p>
          <span>&#125;</span>
          <span>;</span>
        </p>
      </div>
    </React.Fragment>
  );
}
