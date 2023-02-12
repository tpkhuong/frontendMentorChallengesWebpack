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
