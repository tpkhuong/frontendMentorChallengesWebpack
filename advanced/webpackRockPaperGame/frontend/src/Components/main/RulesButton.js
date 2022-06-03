import React from "react";
import "../../styles.css";
import rulesImg from "../../images/image-rules.svg";
function RulesButton(props) {
  const { children } = props;
  return (
    <div onKeyDown={tabLockedToCloseModalBtn} className="rules-btn-container">
      <button
        onClick={openModal}
        aria-label="open rules modal"
        className="rules-btn"
        data-launch-modal="false"
      >
        {children}
      </button>
      <div className="modal-wrapper">
        <div
          tabIndex="-1"
          className="rules-modal"
          aria-modal="true"
          role="dialog"
        >
          {/* title */}
          <h2>RULES</h2>
          {/* img */}
          <div className="rules-img-wrapper">
            <img
              src={rulesImg}
              alt="paper beats hand, rock beats scissors, scissors beat paper"
            />
          </div>
          {/* close modal btn */}
          <button
            onClick={closeModal}
            className="close-modal-btn"
            aria-label="close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                fill="#3B4262"
                fillRule="evenodd"
                d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                opacity=".25"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function openModal(event) {
  event.target.getAttribute("data-launch-modal") == "false"
    ? event.target.setAttribute("data-launch-modal", "true")
    : null;
  document.querySelector(".rules-modal").focus();
}

function closeModal(event) {
  const rulesBtnElement = document.querySelector(".rules-btn");
  // target rules btn and change data-launch-modal attr to false
  rulesBtnElement.getAttribute("data-launch-modal") == "true"
    ? rulesBtnElement.setAttribute("data-launch-modal", "false")
    : null;
  // focus rules button
  rulesBtnElement.focus();
}

function tabLockedToCloseModalBtn(event) {
  const closeModalBtnElement = document.querySelector(".close-modal-btn");
  if (event.shiftkey) {
    event.code == "Tab" && document.activeElement == closeModalBtnElement
      ? (closeModalBtnElement.focus(), event.preventDefault())
      : null;
  } else {
    event.code == "Tab" && document.activeElement == closeModalBtnElement
      ? (closeModalBtnElement.focus(), event.preventDefault())
      : null;
  }
}

export default RulesButton;
