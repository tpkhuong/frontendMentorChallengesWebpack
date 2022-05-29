import React from "react";

function Header(props) {
  const { children, ariaLabel } = props;

  return <header aria-label={ariaLabel}>{children}</header>;
}

export default Header;
