import React from "react";
import "../../styles.css";
import TestCall from "../TestCall/TestCall";

export default function App({ children, ...props }) {
  return (
    <React.Fragment>
      <h1>Hello React!!</h1>
      <TestCall />
    </React.Fragment>
  );
}
