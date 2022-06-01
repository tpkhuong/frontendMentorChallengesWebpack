import React from "react";
import "../../styles.css";
import Signs from "../main/SignChoices";

/**
 *
 * **/

function PlayerSelections(props) {
  const { hideProp, children } = props;
  return (
    <div data-hide={hideProp} className="selections-wrapper">
      {children}
    </div>
  );
}

export default PlayerSelections;
