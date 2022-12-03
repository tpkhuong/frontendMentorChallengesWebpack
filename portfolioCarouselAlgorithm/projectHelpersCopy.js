import {
  factoryFuncCreateArray,
  moveFirstItemToEndOfList,
  moveFirstTwoItemsToEnd,
  moveLastItemToBeginningOfList,
  moveLastTwoItemsToBeginning,
} from "../carouselHelpers";

/**
 * create func to create arrays for touch event
 * **/

// working with index 1 and 7 mobile

const touchEventCreateNewOrderedArrayIndexOne = factoryFuncCreateArray(1);

const touchEventCreateNewOrderedArrayIndexSeven = factoryFuncCreateArray(7);

// working with index 2 and 6 desktop

const touchEventCreateNewOrderedArrayIndexTwo = factoryFuncCreateArray(2);

const touchEventCreateNewOrderedArrayIndexSix = factoryFuncCreateArray(6);

/**
 * scroll methods for touch event
 * **/

const touchEventVerticalMovementHelper = {
  // going up
  up: {
    // top
    top: {
      one: (
        target,
        renderComponent,
        reorderArray,
        createArray,
        typeOfScroll,
        upDownArrow
      ) => {
        // reorder array
        const topItemToBottom = reorderArray(target);
        // create array of objs
        const arrayForTopOneDown = createArray(
          topItemToBottom,
          "2",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prevValues) => {
                return {
                  ...prevValues,
                  bottomOrTopArray: arrayForTopOneDown,
                  targetElement: "downtopone",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prevValues) => {
                return {
                  ...prevValues,
                  bottomOrTopArray: arrayForTopOneDown,
                  targetElement: "downtopone",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
    },
    // bottom
    bottom: {
      eight: (
        target,
        renderComponent,
        reorderArray,
        createArray,
        typeOfScroll,
        upDownArrow
      ) => {
        // reorder array
        const topItemToEnd = reorderArray(target);
        // create array of objs
        const arrayForBottomEightDown = createArray(
          topItemToEnd,
          "9",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((values) => {
                return {
                  ...values,
                  bottomOrTopArray: arrayForBottomEightDown,
                  targetElement: "downbottomeight",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((values) => {
                return {
                  ...values,
                  bottomOrTopArray: arrayForBottomEightDown,
                  targetElement: "downbottomeight",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
      nine: (
        target,
        renderComponent,
        reorderArray,
        createArray,
        typeOfScroll,
        upDownArrow
      ) => {
        // reorder array
        const bottomItemsToBeginning = reorderArray(target);
        // create array of objs
        const arrayForBottomNineDown = createArray(
          bottomItemsToBeginning,
          "1",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((val) => {
                return {
                  ...val,
                  bottomOrTopArray: arrayForBottomNineDown,
                  targetElement: "downbottomnine",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((val) => {
                return {
                  ...val,
                  bottomOrTopArray: arrayForBottomNineDown,
                  targetElement: "downbottomnine",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
    },
  },
  // going down
  down: {
    // top
    top: {
      one: (
        target,
        renderComponent,
        reorderArray,
        createArray,
        typeOfScroll,
        upDownArrow
      ) => {
        // reorder array
        const topItemsToBottom = reorderArray(target);
        // create array of objs
        const arrayForTopOneUp = createArray(
          topItemsToBottom,
          "9",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForTopOneUp,
                  targetElement: "uptopone",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForTopOneUp,
                  targetElement: "uptopone",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
      two: (
        target,
        renderComponent,
        reorderArray,
        createArray,
        typeOfScroll,
        upDownArrow
      ) => {
        // reorder array
        const bottomSnapItemToBeginning = reorderArray(target);
        // create array of objs
        const arrayForTopTwoUp = createArray(
          bottomSnapItemToBeginning,
          "1",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prevVals) => {
                return {
                  ...prevVals,
                  bottomOrTopArray: arrayForTopTwoUp,
                  targetElement: "uptoptwo",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prevVals) => {
                return {
                  ...prevVals,
                  bottomOrTopArray: arrayForTopTwoUp,
                  targetElement: "uptoptwo",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
    },
    // bottom
    bottom: {
      nine: (
        target,
        renderComponent,
        reorderArray,
        createArray,
        typeOfScroll,
        upDownArrow
      ) => {
        // reorder array
        const bottomItemToBeginning = reorderArray(target);
        // create array of objs
        const arrayForBottomNineUp = createArray(
          bottomItemToBeginning,
          "8",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((values) => {
                return {
                  ...values,
                  bottomOrTopArray: arrayForBottomNineUp,
                  targetElement: "upbottomnine",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((values) => {
                return {
                  ...values,
                  bottomOrTopArray: arrayForBottomNineUp,
                  targetElement: "upbottomnine",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
    },
  },
};

export function touchStartForMobile(event) {
  const objDataFromStorage = localStorage.getItem("cachedDataMobile")
    ? JSON.parse(localStorage.getItem("cachedDataMobile"))
    : null;
  const dataObj = objDataFromStorage
    ? objDataFromStorage
    : { touchStateScreenY: null, clientRectY: null };
  console.log(event.changedTouches[0].screenY);
  console.log("start", event.target.getBoundingClientRect().y);
  // assign touchstart value to obj properties
  dataObj.touchStateScreenY = event.changedTouches[0].screenY;
  dataObj.clientRectY = event.target.getBoundingClientRect().y;
  localStorage.setItem("cachedDataMobile", JSON.stringify(dataObj));
}

export function touchEndForMobile(event) {
  // touchend values
  const touchendScreenY = event.changedTouches[0].screenY;
  const touchendClientRectY = event.target.getBoundingClientRect().y;
  // touchstart screenY greater than touchend screenY going up
  // touchend screenY greater than touchstart screenY going down
  const valuesFromStorage = localStorage.getItem("cachedDataMobile")
    ? JSON.parse(localStorage.getItem("cachedDataMobile"))
    : null;

  const objOfTouchStartValues = valuesFromStorage ? valuesFromStorage : null;

  if (!objOfTouchStartValues) {
    console.log("objOfTouchStartValues is null.");
    return;
  }

  console.log("objOfTouchStartValues", objOfTouchStartValues);
  console.log("touch start values from local storage");
  console.log(objOfTouchStartValues.clientRectY);
  console.log(objOfTouchStartValues.touchStateScreenY);
  console.log(typeof objOfTouchStartValues.clientRectY);
  console.log(typeof objOfTouchStartValues.touchStateScreenY);
  console.log("touch end values");
  console.log("touchendScreenY", touchendScreenY);
  console.log("touchendClientRectY", touchendClientRectY);

  const currentFocusedSnapItem = document.getElementById("currentFocused");
  const targetPosIndex = currentFocusedSnapItem.getAttribute("data-pos-index");

  setTimeout(() => {
    if (
      objOfTouchStartValues.clientRectY ==
      event.target.getBoundingClientRect().y
    ) {
      console.log(
        "objOfTouchStartValues.clientRect == event.target.getBoundingClientRect().y each other"
      );
      console.log(
        objOfTouchStartValues.clientRectY ==
          event.target.getBoundingClientRect().y
      );
      return;
    }
    // touchstart clientRect.y is greater than touchend clientRect.y going up
    if (
      objOfTouchStartValues.clientRectY > event.target.getBoundingClientRect().y
    ) {
      console.log("scrolling up");
      touchEventChangeCurrentSnapItemAttr(currentFocusedSnapItem);

      // one
      if (targetPosIndex == "one") {
        touchEventVerticalMovementHelper["up"]["top"][targetPosIndex](
          currentFocusedSnapItem,
          this.renderSnapItems,
          moveFirstItemToEndOfList,
          touchEventCreateNewOrderedArrayIndexOne,
          null,
          null
        );
        return;
      }

      // eight
      if (targetPosIndex == "eight") {
        touchEventVerticalMovementHelper["up"]["bottom"][targetPosIndex](
          currentFocusedSnapItem,
          this.renderSnapItems,
          moveFirstItemToEndOfList,
          touchEventCreateNewOrderedArrayIndexSeven,
          null,
          null
        );
        return;
      }

      // nine
      if (targetPosIndex == "nine") {
        touchEventVerticalMovementHelper["up"]["bottom"][targetPosIndex](
          currentFocusedSnapItem,
          this.renderSnapItems,
          moveLastTwoItemsToBeginning,
          touchEventCreateNewOrderedArrayIndexOne,
          null,
          null
        );
        return;
      }

      // default action
      touchEventMovingUpHelper(currentFocusedSnapItem);
      document.getElementById("currentFocused");
    }
    // touchend clientRect.y is greater than touchstart clientRect.y going down
    if (
      event.target.getBoundingClientRect().y > objOfTouchStartValues.clientRectY
    ) {
      console.log("scrolling down");

      touchEventChangeCurrentSnapItemAttr(currentFocusedSnapItem);

      // one
      if (targetPosIndex == "one") {
        touchEventVerticalMovementHelper["down"]["top"][targetPosIndex](
          currentFocusedSnapItem,
          this.renderSnapItems,
          moveFirstTwoItemsToEnd,
          touchEventCreateNewOrderedArrayIndexSeven,
          null,
          null
        );
        return;
      }

      // two
      if (targetPosIndex == "two") {
        touchEventVerticalMovementHelper["down"]["top"][targetPosIndex](
          currentFocusedSnapItem,
          this.renderSnapItems,
          moveLastItemToBeginningOfList,
          touchEventCreateNewOrderedArrayIndexOne,
          null,
          null
        );
        return;
      }

      // nine
      if (targetPosIndex == "nine") {
        touchEventVerticalMovementHelper["down"]["bottom"][targetPosIndex](
          currentFocusedSnapItem,
          this.renderSnapItems,
          moveLastItemToBeginningOfList,
          touchEventCreateNewOrderedArrayIndexSeven,
          null,
          null
        );
        return;
      }

      // default action
      touchEventMovingDownHelper(currentFocusedSnapItem);
      document.getElementById("currentFocused");
    }
    console.log("end", event.target.getBoundingClientRect().y);
    console.log("end", event.changedTouches[0].screenY);
  }, 500);
}

/**
 * scrolling up helper touch event
 * **/

function touchEventMovingUpHelper(target) {
  const nextSnapItem = target.nextElementSibling;
  // set tabindex to "0"
  nextSnapItem.setAttribute("tabindex", "0");
  // aria-hidden "false"
  nextSnapItem.setAttribute("aria-hidden", "false");
  // add id attribute "currentFocused"
  nextSnapItem.setAttribute("id", "currentFocused");
}

/**
 * scrolling down helper touch event
 * **/

function touchEventMovingDownHelper(target) {
  const previousSnapItem = target.previousElementSibling;
  // set tabindex to "0"
  previousSnapItem.setAttribute("tabindex", "0");
  // aria-hidden "false"
  previousSnapItem.setAttribute("aria-hidden", "false");
  // add id attribute "currentFocused"
  previousSnapItem.setAttribute("id", "currentFocused");
}

/**
 * change current snap item attr touch event
 * **/

function touchEventChangeCurrentSnapItemAttr(target) {
  // set tabindex to "-1"
  target.setAttribute("tabindex", "-1");
  // remove id attribute
  target.removeAttribute("id");
  // aria-hidden "true"
  target.setAttribute("aria-hidden", "true");
}

/**
 * apply focus snap item attr touch event
 * **/

function touchEventApplyFocusSnapItemAttr(target) {
  // set tabindex to "0"
  target.setAttribute("tabindex", "0");
  // aria-hidden "false"
  target.setAttribute("id", "currentFocused");
  // add id attribute "currentFocused"
  target.setAttribute("aria-hidden", "false");
}
