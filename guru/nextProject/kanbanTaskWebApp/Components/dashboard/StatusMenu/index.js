import React from "react";
import StatusMenuStyles from "./StatusMenu.module.css";

export default function StatusMenu({ children }) {
  const [valueOfStatusBtn, setStatusBtn] = React.useState("Todo");
  const [isStatusMenuShown, setStatusMenu] = React.useState(false);
  return (
    <div className={StatusMenuStyles[`statusbar-container`]}>
      <span className={StatusMenuStyles[`label`]}>{children}</span>
      <button
        aria-label="open status menu"
        className={StatusMenuStyles[`current-status-btn`]}
        data-showmodal={`${isStatusMenuShown}`}
        type="button"
        onClick={(event) => {
          // show modal
          if (!isStatusMenuShown) {
            setStatusMenu(true);
            return;
          }
          // hide modal
          if (isStatusMenuShown) {
            setStatusMenu(false);
            return;
          }
        }}
      >
        <span>{valueOfStatusBtn}</span>
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {/* drop down menu modal*/}
      {isStatusMenuShown ? (
        <ul
          role="menubar"
          className={StatusMenuStyles[`status-menu-container`]}
          onClick={(event) => {}}
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
