import React from "react";
import "../../styles.css";
import Title from "../Title";

export default function App({ children, ...props }) {
  return (
    <React.Fragment>
      <h1>Hello React!!!</h1>
      <Title name="This is another title" />
    </React.Fragment>
  );
}
