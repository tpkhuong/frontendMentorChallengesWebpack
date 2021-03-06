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

export function upperCaseFirstChar(array) {
  // pass in array with items ["Headphone unit", "Replacement earcups", "User manual", "3.5mm 5m audio cable"] etc
  // make an array with same length
  // call split on each item in array
  const arrayOfStringWithFirstCharUppercased = array.map(
    function algorithmToUppercaseFirstChar(element) {
      // each item in the array returned by using split method
      const splitStrAtSpace = element.split(" ");
      // use map method
      const strWithUppercasedFirstChar = splitStrAtSpace.map(
        function uppercaseFirstChar(eachStr) {
          // each element in map method
          // get first char
          const firstChar = eachStr[0];
          // convert firstChar to number
          const convertFirstCharToNumType = Number(firstChar);
          // our conditionals
          // first char Number() is typeof "number" && Number.isNaN(first char) is false
          // return that element
          if (
            typeof convertFirstCharToNumType == "number" &&
            !Number.isNaN(convertFirstCharToNumType)
          ) {
            return eachStr;
          }
          // if first char Number(first char) is typeof "number" && Number.isNaN(first char) is true
          if (
            typeof convertFirstCharToNumType == "number" &&
            Number.isNaN(convertFirstCharToNumType)
          ) {
            // uppercase the first char
            const firstCharUpperCased = firstChar.toUpperCase();
            // copy str starting at index 1 using String.slice(1)
            const restOfStr = eachStr.slice(1);
            // then concat first char with copied string starting at index 1
            return firstCharUpperCased.concat(restOfStr);
          }
        }
      );
      // join the string in array with space operator
      return strWithUppercasedFirstChar.join(" ");
    }
  );
  return arrayOfStringWithFirstCharUppercased;
}

/********
 * Cart functionality
 * Add to cart
 * cart modal: calculate total
 * ********/

export function addToCartAlgorithm(event) {
  // we want price with comma for display
  // without comma for total calculation
  // name for display, slug for building img src
  // quantity ref for cart quantity control
  // create obj push into an array then save it to local storage/session storage
  // each obj will have img src, name, price with comma and without, quantity
  // nameForImgSrc
  // priceInStrForm
  // price
  // name
  // this.quantityInputRef.current.value
  const arrayFromLocalStorage =
    localStorage.getItem("arrayOfObj") == null
      ? []
      : JSON.parse(localStorage.getItem("arrayOfObj"));
  // destructure this obj
  const { quantityInputRef, propsForCart } = this;
  const { nameForImgSrc, priceInStrForm, price, name } = propsForCart;
  // make obj
  // /cart/image-xx59-headphones.jpg
  // before we push obj into array check if array does not have
  // obj with name already in the array
  // length 0 push obj into array
  // length 1 access obj at 0 index array[0]
  // length greater than 1 loop through array
  // check if array has obj with same name/title
  arrayFromLocalStorage.push({
    priceStr: priceInStrForm,
    priceNum: price,
    strImgSrc: `/cart/image-${nameForImgSrc}.jpg`,
    title: name,
    quantityForInput: quantityInputRef.current.value,
  });
  console.log(arrayFromLocalStorage);
  localStorage.setItem("arrayOfObj", JSON.stringify(arrayFromLocalStorage));
  // console.log(this.quantityInputRef.current.value);
}

export function cartBtnAlgorithm(event) {}
