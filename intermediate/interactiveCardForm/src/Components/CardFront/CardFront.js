import React from "react";
import CardFrontStyles from "./CardFront.module.css";

export default function CardFront({ children, ...props }) {
  return (
    <React.Fragment>
      <div className={CardFrontStyles[`front-wrapper`]}>
        {/* bg-img */}
        {/* logo */}
        <div className={CardFrontStyles[`logo-img-container`]}>
          <svg
            viewBox="0 0 100 45"
            width="84"
            height="47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
        </div>
        {/* text-content */}
        <div className={CardFrontStyles[`text-content`]}>
          <span className={CardFrontStyles[`credit-card-number-display`]}>
            0000 0000 0000 0000
          </span>
          {/* name and exp date */}
          <div className={CardFrontStyles[`name-expdate-wrapper`]}>
            <span className={CardFrontStyles[`name-display`]}>
              jane appleseed
            </span>
            <span className={CardFrontStyles[`expdate-display`]}>12/26</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
