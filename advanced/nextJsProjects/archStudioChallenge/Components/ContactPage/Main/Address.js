import React from "react";
import AddressStyles from "../../../styles/Contact/Address.module.css";

function Address({ children, ...props }) {
  const [addressTitle, infoComponent, linkBtnComponent] = children;
  // passing in component as children to Address component
  return (
    <div className={AddressStyles[`address-container`]}>
      {/* office name */}
      <h3 className={AddressStyles[`title`]}>{addressTitle}</h3>
      {/* info details and view map container */}
      <div className={AddressStyles[`info-map-container`]}>
        {/* info details */}
        {infoComponent}
        {/* view map btn */}
        {linkBtnComponent}
      </div>
    </div>
  );
}

export default Address;
