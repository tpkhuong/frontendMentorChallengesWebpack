import React from "react";
import "../../styles.css";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

export default function App({ children, ...props }) {
  return (
    <React.Fragment>
      <SectionWrapper />
    </React.Fragment>
  );
}
