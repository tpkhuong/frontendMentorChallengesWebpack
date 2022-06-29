import React from "react";
import MemberStyles from "../../../styles/About/MemberCard.module.css";

function MemberCard({ children, ...props }) {
  return (
    <div className={MemberStyles[`team-member`]}>
      <div className={MemberStyles[`img-social-wrapper`]}>
        {/* img */}
        <img src={props.img} alt={props.text} />
        {/* social link */}
        <div className={MemberStyles[`social-link-wrapper`]}>
          <div className={MemberStyles[`social-icons-wrapper`]}>
            {/* linkedIn */}
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                <path
                  className={MemberStyles[`svg-path`]}
                  fill="#1B1D23"
                  d="M36 0H4C1.8 0 0 1.8 0 4v32c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM12 34H6V16h6v18zM9 12.6C7 12.6 5.4 11 5.4 9S7 5.4 9 5.4 12.6 7 12.6 9 11 12.6 9 12.6zM34 34h-6V23.4c0-1.6-1.4-3-3-3s-3 1.4-3 3V34h-6V16h6v2.4c1-1.6 3.2-2.8 5-2.8 3.8 0 7 3.2 7 7V34z"
                />
              </svg>
            </a>
            {/* twitter */}
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="33">
                <path
                  className={MemberStyles[`svg-path`]}
                  fill="#1B1D23"
                  d="M40 4.262a16.384 16.384 0 01-4.713 1.291 8.22 8.22 0 003.608-4.54 16.44 16.44 0 01-5.212 1.992 8.193 8.193 0 00-5.99-2.592c-5.298 0-9.191 4.944-7.995 10.075C12.88 10.147 6.833 6.88 2.785 1.915.635 5.603 1.67 10.428 5.323 12.872a8.172 8.172 0 01-3.715-1.027c-.09 3.802 2.635 7.358 6.582 8.15a8.225 8.225 0 01-3.707.14 8.213 8.213 0 007.667 5.698A16.5 16.5 0 010 29.233a23.232 23.232 0 0012.58 3.687c15.237 0 23.845-12.868 23.325-24.41A16.708 16.708 0 0040 4.262z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <h3 className={MemberStyles[`name`]}>{props.name}</h3>
      <span className={MemberStyles[`position`]}>{props.position}</span>
    </div>
  );
}

export default MemberCard;
