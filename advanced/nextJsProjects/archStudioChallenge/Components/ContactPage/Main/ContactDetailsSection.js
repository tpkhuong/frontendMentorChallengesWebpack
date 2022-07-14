import React from "react";
import DetailStyles from "../../../styles/Contact/ContactDetailsSection.module.css";
import { detailsAddressContent } from "../../../src/storage";
import InfoDetails from "./InfoDetails";
import Address from "./Address";
import LinkButton from "../../LinkButton";

function DetailsSection({ childre, ...props }) {
  const { firstOffice, secondOffice } = detailsAddressContent;
  return (
    <article className={DetailStyles[`contact-details`]}>
      {/* section title */}
      <h2 className={DetailStyles[`title`]}>Contact Details</h2>
      {/* address content container */}
      <div className={DetailStyles[`address-content-container`]}>
        {/* main office */}
        {/* pass InfoDetails and LinkButton components to Address */}
        {/* pass value from objs in detailsAddressContent into InfoDetails */}
        <Address>
          {"Main Office"}
          <InfoDetails>
            {/* email */}
            {firstOffice.email}
            {/* home address */}
            {firstOffice.address}
            {/* telephone */}
            {firstOffice.phone}
          </InfoDetails>
          {/* contect btn */}
          <LinkButton linkRef="/contact" btnStyle="contact-btn">
            View on Map
          </LinkButton>
        </Address>
        {/* second office */}
        <Address>
          {"Office II"}
          <InfoDetails>
            {/* email */}
            {secondOffice.email}
            {/* home address */}
            {secondOffice.address}
            {/* telephone */}
            {secondOffice.phone}
          </InfoDetails>
          {/* contect btn */}
          <LinkButton linkRef="/contact" btnStyle="contact-btn">
            View on Map
          </LinkButton>
        </Address>
      </div>
    </article>
  );
}

export default DetailsSection;
