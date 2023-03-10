import React from "react";
import StatusMenuStyles from "./StatusMenu.module.css";

export default function StatusMenu({ children, statusValueFromEditModal }) {
  // const [valueOfStatusBtn, setStatusBtn] = React.useState("Todo");
  // const [isStatusMenuShown, setStatusMenu] = React.useState(false);
  const [initialStatusValues, setStatusMenu] = React.useState({
    valueOfStatusBtn: !statusValueFromEditModal
      ? "Todo"
      : statusValueFromEditModal,
    isStatusMenuShown: false,
  });
  return (
    <div className={StatusMenuStyles[`statusbar-container`]}>
      <span className={StatusMenuStyles[`label`]}>{children}</span>
      <button
        aria-label="open status menu"
        id="current-status"
        className={StatusMenuStyles[`current-status-btn`]}
        data-showmodal={`${initialStatusValues.isStatusMenuShown}`}
        type="button"
        onClick={(event) => {
          // show modal
          if (!initialStatusValues.isStatusMenuShown) {
            setStatusMenu((previousValues) => {
              return {
                ...previousValues,
                isStatusMenuShown: true,
              };
            });
            return;
          }
          // hide modal
          if (initialStatusValues.isStatusMenuShown) {
            setStatusMenu((previousValues) => {
              return {
                ...previousValues,
                isStatusMenuShown: false,
              };
            });
            return;
          }
        }}
      >
        <span>{initialStatusValues.valueOfStatusBtn}</span>
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {/* drop down menu modal*/}
      {initialStatusValues.isStatusMenuShown ? (
        <ul
          role="menubar"
          className={StatusMenuStyles[`status-menu-container`]}
          onClick={(event) => {
            const statusBtnClicked = event.target.closest("BUTTON");

            if (statusBtnClicked) {
              // assign content of btn clicked to current status btn
              // hide modal
              const btnContent = statusBtnClicked.innerText;
              // focus current status btn
              document.getElementById("current-status").focus();

              setStatusMenu((prevValues) => {
                return {
                  ...prevValues,
                  valueOfStatusBtn: btnContent,
                  isStatusMenuShown: false,
                };
              });
            }
          }}
        >
          <li role="none">
            <button role="menuitem" type="button">
              Todo
            </button>
          </li>
          <li role="none">
            <button role="menuitem" type="button">
              Doing
            </button>
          </li>
          <li role="none">
            <button role="menuitem" type="button">
              Done
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
