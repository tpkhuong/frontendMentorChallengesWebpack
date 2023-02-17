import React from "react";
import CloseModalStyles from "./CloseModalBtn.module.css";

export default function CloseModalBtn({ children }) {
  return (
    <button
      type="button"
      className={CloseModalStyles[`close-btn`]}
      aria-label={children}
    >
      <svg
        className={CloseModalStyles[`close-btn-icon`]}
        width="15"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#828FA3" fillRule="evenodd">
          <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
          <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
        </g>
      </svg>
    </button>
  );
}
