import React from "react";

export function useMediaQuery(minMax, width) {
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

    return () =>
      media.removeEventListener("change", (event) => updateTarget(event));
  }, []);

  return targetReached;
}

export function preventDefaultSpaceBar(event) {
  if (event.target.value.length === 0 && event.code == "Space") {
    event.preventDefault();
  }
}

export function keyboardModalTabbingAndSpaceKey(event) {
  if (event.shiftKey && event.code == "Tab") {
    event.target.getAttribute("data-firstitem") == "true"
      ? (document.querySelector("[data-lastitem='true']").focus(),
        event.preventDefault())
      : null;
    return;
  }

  if (
    event.code == "Tab" &&
    event.target.getAttribute("data-lastitem") == "true"
  ) {
    document.querySelector("[data-firstitem]").focus();
    event.preventDefault();
    return;
  }

  if (event.target.tagName == "INPUT" || event.target.tagName == "TEXTAREA") {
    if (event.target.value.length === 0 && event.code == "Space") {
      event.preventDefault();
      return;
    }
  }
}

export function tabThroughWarningMsgModal(event) {
  if (event.shiftKey && event.code == "Tab") {
    event.target.getAttribute("data-warningbtn") == "delete"
      ? (event.target.nextElementSibling.focus(), event.preventDefault())
      : null;
    return;
  }

  if (
    event.code == "Tab" &&
    event.target.getAttribute("data-warningbtn") == "cancel"
  ) {
    event.target.previousElementSibling.focus();
    event.preventDefault();
    return;
  }
}
