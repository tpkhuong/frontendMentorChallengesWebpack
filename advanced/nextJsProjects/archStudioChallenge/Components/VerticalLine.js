import React from "react";
import LineStyles from "../styles/VerticalLine.module.css";
import Link from "next/link";

function VerticalLine({ children, ...props }) {
  return (
    <Link href={props.pageRef}>
      <a className={LineStyles[`wrapper`]}>
        <span className={LineStyles[`vertical-line`]}></span>
        <span className={LineStyles[`vertical-text`]}>{children}</span>
      </a>
    </Link>
  );
}

export default VerticalLine;
