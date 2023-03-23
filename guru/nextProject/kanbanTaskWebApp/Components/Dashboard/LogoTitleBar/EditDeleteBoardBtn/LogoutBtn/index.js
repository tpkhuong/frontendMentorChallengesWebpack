import React from "react";
import LogoutBtnStyles from "./Logout.module.css";

export default function LogoutBtn({ children }) {
  return (
    <React.Fragment>
      <button
        data-btntype="logoutButton"
        id="logout-btn"
        role="button"
        className={LogoutBtnStyles[`logout-btn`]}
      >
        <span>Log Out</span>
      </button>
    </React.Fragment>
  );
}
