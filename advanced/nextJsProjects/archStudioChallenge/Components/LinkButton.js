import React from "react";
import Link from "next/link";
import LinkStyle from "../styles/LinkButton.module.css";

function LinkButton({ children, ...props }) {
  console.log(props);

  return (
    <Link href={props.linkRef}>
      <a className={`${LinkStyle[`${props.btnStyle}`]} ${LinkStyle.general}`}>
        {/* if children is null render nothing */}
        {children != null ? (
          <span className={LinkStyle[`icon-text`]}>{children}</span>
        ) : null}
        <svg
          className={LinkStyle[`arrow-icon`]}
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="20"
        >
          <g
            className={LinkStyle[`element`]}
            fill="none"
            fillRule="evenodd"
            stroke="#1B1D23"
            strokeWidth="2"
          >
            <path d="M15 1l9 9-9 9M0 10h24" />
          </g>
        </svg>
      </a>
    </Link>
  );
}

export default LinkButton;
