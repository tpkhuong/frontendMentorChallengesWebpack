import React from "react";
import ConnectStyles from "../../../styles/Contact/ConnectSection.module.css";

function ConnectSection({ children, ...props }) {
  return (
    <article className={ConnectStyles[`connect-section`]}>
      {/* title */}
      <h2 className={ConnectStyles[`title`]}>Connect with us</h2>
      {/* form */}
      <form className={ConnectStyles[`form`]} role="form" action="" noValidate>
        {/* label and input: name */}
        <div className={ConnectStyles[`name-container`]}>
          <label
            className={ConnectStyles[`visually-hidden`]}
            htmlFor="full-name"
          >
            Name
          </label>
          <input
            className={ConnectStyles[`input-name`]}
            type="text"
            id="full-name"
            placeholder="Name"
            data-isempty="false"
          />
          <span className={ConnectStyles[`error-message`]}>Can't be empty</span>
        </div>
        {/* label and input: email */}
        <div className={ConnectStyles[`email-container`]}>
          <label className={ConnectStyles[`visually-hidden`]} htmlFor="email">
            email
          </label>
          <input
            className={ConnectStyles[`input-email`]}
            type="email"
            id="email"
            placeholder="Email"
            data-isempty="false"
          />
          <span className={ConnectStyles[`error-message`]}>Can't be empty</span>
        </div>
        {/* label and input: textarea */}
        <div className={ConnectStyles[`message-container`]}>
          <label className={ConnectStyles[`visually-hidden`]} htmlFor="message">
            message
          </label>
          <textarea
            className={ConnectStyles[`input-message`]}
            id="message"
            placeholder="Message"
            data-isempty="false"
          />
          <span className={ConnectStyles[`error-message`]}>Can't be empty</span>
        </div>
        {/* button */}
        <button
          onClick={handleErrorMessage}
          aria-label="submit message"
          type="button"
          className={ConnectStyles[`submit-btn`]}
        >
          <svg
            className={ConnectStyles[`btn-arrow`]}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="20"
          >
            <g
              className={ConnectStyles[`arrow`]}
              fill="none"
              fillRule="evenodd"
              stroke="#1B1D23"
              strokeWidth="2"
            >
              <path d="M15 1l9 9-9 9M0 10h24" />
            </g>
          </svg>
        </button>
      </form>
    </article>
  );
}

function handleErrorMessage(event) {
  //   use reduce return an array with two subarrays
  //  one find input/textarea with empty values
  //  one find input/textarea with values
  const [arrayEmptyValueElements, arrayValueElements] = [
    ...document.querySelectorAll("[data-isempty]"),
  ].reduce(
    function findEmptyElement(buildingUp, currentElement) {
      if (currentElement.value === "") {
        buildingUp[0] = [...buildingUp[0], currentElement];
      } else {
        buildingUp[1] = [...buildingUp[1], currentElement];
      }
      return buildingUp;
    },
    [[], []]
  );
  console.log(arrayEmptyValueElements, arrayValueElements);
  // loop through arrayOfEmptyInputs and change data-isempty value to true
  for (let element of arrayEmptyValueElements) {
    element.getAttribute("data-isempty") == "false"
      ? element.setAttribute("data-isempty", "true")
      : null;
  }
  // loop through arrayOfInputs and change data-isempty value to false
  arrayValueElements.forEach(function removeErrorMessage(element) {
    element.getAttribute("data-isempty") == "true"
      ? element.setAttribute("data-isempty", "false")
      : null;
  });
}

export default ConnectSection;
