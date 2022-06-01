import React, { useState, useEffect } from "react";
import "../../styles.css";

function Results(props) {
  const { children } = props;
  //   we will not show result component using opacity
  // rendered components have to be in a containing parent element.
  return (
    <div data-battle-results="false" className="results-wrapper">
      {children}
      <button className="reset-game">PLAY AGAIN</button>
    </div>
  );
}

export default Results;
