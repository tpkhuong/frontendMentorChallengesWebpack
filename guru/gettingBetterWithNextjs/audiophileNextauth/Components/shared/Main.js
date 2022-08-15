import React from "react";
import MainStyles from "../../styles/Components/shared/Main.module.css";

function Main({ children, ...props }) {
  return (
    <main
      data-checkoutpage={props.ischeckoutpage}
      id="main-content"
      role="main"
      className={MainStyles[`main`]}
    >
      {children}
    </main>
  );
}

export default Main;
