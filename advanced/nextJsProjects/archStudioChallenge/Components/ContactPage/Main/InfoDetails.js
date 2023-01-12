import React from "react";
import InfoStyles from "../../../styles/Contact/InfoDetails.module.css";

function InfoDetails({ children, ...props }) {
  const [emailAddress, officeAddress, telephone] = children;
  return (
    <div className={InfoStyles[`info-container`]}>
      {/* email */}
      <div>
        <span className={InfoStyles[`info-name`]}>Email :</span>
        <span className={InfoStyles[`info-content`]}>{emailAddress}</span>
      </div>
      {/* address */}
      <div>
        <span className={InfoStyles[`info-name`]}>Address :</span>
        <span className={InfoStyles[`info-content`]}>{officeAddress}</span>
      </div>
      {/* phone */}
      <div>
        <span className={InfoStyles[`info-name`]}>Phone :</span>
        <span className={InfoStyles[`info-content`]}>{telephone}</span>
      </div>
    </div>
  );
}

export default InfoDetails;
