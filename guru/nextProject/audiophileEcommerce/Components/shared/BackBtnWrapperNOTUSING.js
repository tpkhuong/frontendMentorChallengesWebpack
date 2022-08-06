import React from "react";
import GoBackButton from "./GoBackButton";

function BackBtnWrapper({ children, ...props }) {
  // default url should be category page
  return (
    <React.Fragment>
      <GoBackButton urlFromBackBtnWrapper={props.baseCategoryUrl} />
    </React.Fragment>
  );
}

export default BackBtnWrapper;
