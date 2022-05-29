import React from "react";
import Header from "../header/Header";
import ImgWrapper from "../general/imgWrapper";
import hand from "../../images/icon-paper.svg";

function App(props) {
  return (
    <React.Fragment>
      <Header ariaLabel="this is a greeting.">Hello React World!!</Header>
      <ImgWrapper imgSize="max-width-wrapper">
        <img src={hand} alt="" />
      </ImgWrapper>
    </React.Fragment>
  );
}

export default App;
