import React from "react";
import LogoutBtnStyles from "./Logout.module.css";

export default function LogoutBtn({ children }) {
  return (
    <React.Fragment>
      <button role="button" className={LogoutBtnStyles[`logout-btn`]}>
        <span>Log Out</span>
      </button>
    </React.Fragment>
  );
}
