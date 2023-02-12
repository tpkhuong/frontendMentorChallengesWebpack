import React from "react";
import BoardTitleStyles from "./BoardTitle.module.css";
import { useMediaQuery } from "../../../../utils/sharedHelpers";

export default function BoardTitle({ children }) {
  const isLargerThanMobile = useMediaQuery("min", 768);
  return (
    <React.Fragment>
      {isLargerThanMobile ? (
        <h2>Platform Launch</h2>
      ) : (
        <button>
          <h2></h2>
          <span>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="#635FC7"
                strokeWidth="2"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </span>
        </button>
      )}
      {/* {stateObj.screenSize == "mobile" ? (
          <span>mobile</span>
        ) : null} */}
    </React.Fragment>
  );
}
