import React from "react";
import "../../styles.css";

export default function App({ children, ...props }) {
  return (
    <React.Fragment>
      <div>
        <h1>Hello React!!</h1>
      </div>
    </React.Fragment>
  );
}
