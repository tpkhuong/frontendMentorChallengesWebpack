import React from "react";

/**
 * All Helper funcs go here.
 * **/

export const useMediaQuery = (minMax, width) => {
  const [targetReached, setTargetReached] = React.useState(false);

  const updateTarget = React.useCallback((event) => {
    if (event.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  React.useEffect(() => {
    const media = window.matchMedia(`(${minMax}-width: ${width}px)`);
    // media.addListener(updateTarget);
    media.addEventListener("change", (event) => updateTarget(event));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    // return () => media.removeListener(updateTarget);
    return () =>
      media.removeEventListener("change", (event) => updateTarget(event));
  }, []);

  return targetReached;
};

export function showMobileNav(event) {
  // select our elements
  const hamburgerBtn = document.querySelector("[data-ismenuopen]");
  const mobileNavContainer = document.querySelector("[data-showmenu]");

  const clickedBtn = event.target.closest("BUTTON").getAttribute("aria-label");
  // obj of methods
  const actionObj = {
    "open mobile navigation": () => {
      // change value of data-ismenuopen to true
      hamburgerBtn.getAttribute("data-ismenuopen") == "false"
        ? hamburgerBtn.setAttribute("data-ismenuopen", "true")
        : null;
      // change value of data-showmenu to true
      mobileNavContainer.getAttribute("data-showmenu") == "false"
        ? mobileNavContainer.setAttribute("data-showmenu", "true")
        : null;
    },
    "close mobile navigation": () => {
      // change value of data-ismenuopen to false
      hamburgerBtn.getAttribute("data-ismenuopen") == "true"
        ? hamburgerBtn.setAttribute("data-ismenuopen", "false")
        : null;
      // change value of data-showmenu to false
      mobileNavContainer.getAttribute("data-showmenu") == "true"
        ? mobileNavContainer.setAttribute("data-showmenu", "false")
        : null;
    },
  };

  // call our methods
  actionObj[clickedBtn]();
}

export function targetLastMobileNavElement(event) {
  // last element
  const lastElement = document.querySelector("[id='last-element']");
  // clicked element
  const closeBtnElement = document.querySelector(
    "[aria-label='close mobile navigation']"
  );
  if (event.shiftKey) {
    if (event.code == "Tab" && event.target == closeBtnElement) {
      event.preventDefault();
      lastElement.focus();
    }
  }
}

export function focusFirstModalElement(event) {
  // target element
  const closeBtnElement = document.querySelector(
    "[aria-label='close mobile navigation']"
  );
  // clicked element
  const lastElement = document.querySelector("[id='last-element']");
  if (!event.shiftKey && event.code == "Tab" && event.target == lastElement) {
    event.preventDefault();
    closeBtnElement.focus();
  }
}
