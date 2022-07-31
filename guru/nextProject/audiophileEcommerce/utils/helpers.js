import React from "react";
import { previousURLs } from "../src/storage";

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

export function getCurrentUrl(event) {
  previousURLs.push(document.URL);
}

export function addCommasToPrice(number) {
  // convertNumToString is number without commas, ex: 4500 => "4500"
  const convertNumToString = String(number);
  const lengthOfNum = convertNumToString.length;
  const arrayOfChars = convertNumToString.split("");
  // return string type
  const conditionalObj = {
    4: (array) => {
      // left 0,1
      // right 1
      return [array[0], ",", ...rightSideOfComma(array, 1)].join("");
    },
    5: (array) => {
      // left 0, 2
      // right 2
      return [
        ...leftSideOfComma(array, 2),
        ",",
        ...rightSideOfComma(array, 2),
      ].join("");
    },
    6: (array) => {
      // left 0, 3
      // right 3
      return [
        ...leftSideOfComma(array, 3),
        ",",
        ...rightSideOfComma(array, 3),
      ].join("");
    },
    7: (array) => {
      // left 0, 4
      // right 4
      return [
        array[0],
        ",",
        ...middleOfNumber(array),
        ",",
        ...rightSideOfComma(array, 4),
      ].join("");
    },
  };

  if (lengthOfNum <= 3) {
    return convertNumToString;
  } else {
    const lengthToStringType = String(lengthOfNum);
    return conditionalObj[lengthToStringType](arrayOfChars);
  }
}

/**
 * helper func for adding commas to price
 * **/

function leftSideOfComma(array, end) {
  return array.slice(0, end);
}

function middleOfNumber(array) {
  // start at 1
  // end at 4
  return array.slice(1, 4);
}

function rightSideOfComma(array, start) {
  return array.slice(start);
}

export function removeCommasForCheckout(string) {
  // returns number type
  // use this regex /\d+/g
  const regex = /\d+/g;
  return Number(string.match(regex).join(""));
}

export function updateQuantity(event) {
  const updateMethods = {
    increment: () => {
      // arrow func will use this of parent func which is updateQuantity
      // convert input value to number type
      const numTypeInputValue = Number(this.quantityInputRef.current.value);
      // add 1 to that value
      const addOne = numTypeInputValue + 1;
      // convert update value to string
      this.quantityInputRef.current.value = String(addOne);
    },
    decrement: () => {
      // arrow func will use this of parent func which is updateQuantity
      // convert input value to number type
      const numTypeInputValue = Number(this.quantityInputRef.current.value);
      // add 1 to that value
      const minusOne = numTypeInputValue - 1;
      // convert update value to string
      this.quantityInputRef.current.value = String(minusOne);
    },
  };

  if (event.target.closest("BUTTON")) {
    const methodSelector = event.target.getAttribute("data-typeofupdate");
    updateMethods[methodSelector]();
  }

  // const methodSelector = document
  //   .querySelector("[data-typeofupdate]")
  //   .getAttribute("data-typeofupdate");

  // updateMethods[methodSelector]();
}
