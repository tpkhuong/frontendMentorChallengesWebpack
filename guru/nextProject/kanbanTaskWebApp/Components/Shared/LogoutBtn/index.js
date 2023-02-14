import React from "react";
import LogoutBtnStyles from "./Logout.module.css";
import { useMediaQuery } from "../../../utils/sharedHelpers";

export default function LogoutBtn({ children }) {
  const isScreenLargerThanMobile = useMediaQuery("min", 768);
  return (
    <React.Fragment>
      {isScreenLargerThanMobile ? (
        <button
          role="button"
          className={LogoutBtnStyles[`tablet-desktop-logout-btn`]}
        >
          <span>Log Out</span>
        </button>
      ) : (
        <button role="button" className={LogoutBtnStyles[`mobile-logout-btn`]}>
          <span>Log Out</span>
        </button>
      )}
    </React.Fragment>
  );
}
