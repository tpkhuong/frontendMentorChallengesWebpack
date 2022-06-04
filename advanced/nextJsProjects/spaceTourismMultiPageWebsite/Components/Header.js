import React from "react";
import Navbar from "./Navbar";

function Header(props) {
  const { activeEffect } = props;
  return (
    <header>
      {/* svg logo */}
      {/* mobile icon/modal wrapper */}
      {/* desktop/tablet nav */}
      <Navbar currentPage={`${activeEffect}`} />
    </header>
  );
}

export default Header;
