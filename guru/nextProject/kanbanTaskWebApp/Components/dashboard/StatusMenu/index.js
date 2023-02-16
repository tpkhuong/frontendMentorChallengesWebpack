import React from "react";
import StatusMenuStyles from "./StatusMenu.module.css";

export default function StatusMenu({ children }) {
  const [valueOfStatusBtn, setStatusBtn] = React.useState("Todo");
  const [isStatusMenuShown, setStatusMenu] = React.useState(false);
  return (
    <div className={StatusMenuStyles[`statusbar-container`]}>
      <button
        aria-label="open status menu"
        className={StatusMenuStyles[`current-status-btn`]}
      >
        <span>{valueOfStatusBtn}</span>
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4" />
        </svg>
        {/* drop down menu modal*/}
        {isStatusMenuShown ? (
          <ul
            role="menubar"
            className={StatusMenuStyles[`status-menu-container`]}
            onClick={(event) => {}}
          >
            <li role="none">
              <button role="menuitem">Todo</button>
            </li>
            <li role="none">
              <button role="menuitem">Doing</button>
            </li>
            <li role="none">
              <button role="menuitem">Dont</button>
            </li>
          </ul>
        ) : null}
      </button>
    </div>
  );
}
