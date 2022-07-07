import React from "react";
import ConnectStyles from "../../../styles/Contact/ConnectSection.module.css";
import LinkButton from "../../LinkButton";

function ConnectSection({ children, ...props }) {
  return (
    <article className={ConnectStyles[`connet-section`]}>
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
          <span></span>
        </div>
        {/* label and input: email */}
        <div className={ConnectStyles[`email-container`]}>
          <label className={ConnectStyles[`visually-hidden`]} htmlFor="email">
            email
          </label>
          <input
            className={ConnectStyles[`input-email`]}
            type="email"
            id="full-name"
            placeholder="Email"
            data-isempty="false"
          />
          <span></span>
        </div>
        {/* label and input: textarea */}
        <div className={ConnectStyles[`message-container`]}>
          <label className={ConnectStyles[`visually-hidden`]} htmlFor="message">
            message
          </label>
          <textarea
            className={ConnectStyles[`input-message`]}
            name="message"
            id="full-name"
            placeholder="Message"
            data-isempty="false"
          />
          <span></span>
        </div>
        {/* button */}
        <button
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

export default ConnectSection;
