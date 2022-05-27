import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import MainSection from "./main/MainSection";
import rock from "../../../images/icon-rock.svg";

function App(props) {
  return (
    <React.Fragment>
      <MainSection>
        <div>Hello React World!!! Testing React!!! Hello</div>
        <img src={`${rock}`} alt="" />
      </MainSection>
    </React.Fragment>
  );
}

export default App;
