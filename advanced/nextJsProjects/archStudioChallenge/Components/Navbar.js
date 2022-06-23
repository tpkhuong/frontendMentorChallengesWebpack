import React from "react";
import FullMenu from "./FullMenu";
import MobileNav from "./MobileNav";
import Link from "next/link";
import NavbarStyles from "../styles/Navbar.module.css";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = React.useState(false);

  const updateTarget = React.useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  React.useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    // media.addListener(updateTarget);
    media.addEventListener("change", (e) => updateTarget(e));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    // return () => media.removeListener(updateTarget);
    return () => media.removeEventListener("change", (e) => updateTarget(e));
  }, []);

  return targetReached;
};

function Navbar({ children, ...props }) {
  const isBreakpoint = useMediaQuery(768);
  return (
    <React.Fragment>
      {isBreakpoint ? <FullMenu /> : <MobileNav />}
    </React.Fragment>
  );
}

export default Navbar;
