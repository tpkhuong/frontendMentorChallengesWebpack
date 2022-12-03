export function swipeRightBtn(event) {
  event.target.closest("BUTTON").getAttribute("data-carouselbtnclicked") ==
  "false"
    ? event.target
        .closest("BUTTON")
        .setAttribute("data-carouselbtnclicked", "true")
    : event.target
        .closest("BUTTON")
        .setAttribute("data-carouselbtnclicked", "false");
  // select element with id carousel-snap-item then select parent element
  const carouselSnapElement = document.getElementById("carousel-snap-item");
  const introBtnElement = document.getElementById("show-carousel");
  setTimeout(() => {
    carouselSnapElement.parentElement.scrollBy(-5, 0);
  }, 350);
  introBtnElement.getAttribute("data-introbtnclicked") == "true"
    ? introBtnElement.setAttribute("data-introbtnclicked", "false")
    : null;
}

/**
 * mobile scroll methods
 * **/

const mobileScrollHelper = {
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
};

/**
 * desktop scroll methods
 * **/

const desktopScrollHelper = {
  // up
  up: {
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
        const topFourItemsToBottom = reorderArray(target);
        // create array of objs
        const arrayForDesktopUpTopOne = createArray(
          topFourItemsToBottom,
          "9",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopUpTopOne,
                  targetElement: "desktopuptopone",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopUpTopOne,
                  targetElement: "desktopuptopone",
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
        const bottomItemToBeginningUpTwo = reorderArray(target);
        // create array of objs
        const arrayForDesktopUpTopTwo = createArray(
          bottomItemToBeginningUpTwo,
          "1",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopUpTopTwo,
                  targetElement: "desktopuptoptwo",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopUpTopTwo,
                  targetElement: "desktopuptoptwo",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
      three: (
        target,
        renderComponent,
        reorderArray,
        createArray,
        typeOfScroll,
        upDownArrow
      ) => {
        // reorder array
        const bottomItemToBeginningThree = reorderArray(target);
        // create array of objs
        const arrayForDesktopUpTopThree = createArray(
          bottomItemToBeginningThree,
          "2",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopUpTopThree,
                  targetElement: "desktopuptopthree",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopUpTopThree,
                  targetElement: "desktopuptopthree",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
    },
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
        const bottomToBeginningEight = reorderArray(target);
        // create array of objs
        const arrayForDesktopUpBottomEight = createArray(
          bottomToBeginningEight,
          "7",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopUpBottomEight,
                  targetElement: "desktopupbottomeight",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopUpBottomEight,
                  targetElement: "desktopupbottomeight",
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
        const bottomItemToBeginningNine = reorderArray(target);
        // create array of objs
        const arrayForDesktopUpBottomNine = createArray(
          bottomItemToBeginningNine,
          "8",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopUpBottomNine,
                  targetElement: "desktopupbottomnine",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopUpBottomNine,
                  targetElement: "desktopupbottomnine",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
    },
  },
  // down
  down: {
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
        const topItemToBottomOne = reorderArray(target);
        // create array of objs
        const arrayForDesktopDownTopOne = createArray(
          topItemToBottomOne,
          "2",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopDownTopOne,
                  targetElement: "desktopdowntopone",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopDownTopOne,
                  targetElement: "desktopdowntopone",
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
        const topItemToBottomTwo = reorderArray(target);
        // create array of objs
        const arrayForDesktopDownTopTwo = createArray(
          topItemToBottomTwo,
          "3",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopDownTopTwo,
                  targetElement: "desktopdowntoptwo",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopDownTopTwo,
                  targetElement: "desktopdowntoptwo",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
    },
    bottom: {
      seven: (
        target,
        renderComponent,
        reorderArray,
        createArray,
        typeOfScroll,
        upDownArrow
      ) => {
        // reorder array
        const topItemToBottomSeven = reorderArray(target);
        // create array of objs
        const arrayForDesktopDownBottomSeven = createArray(
          topItemToBottomSeven,
          "8",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopDownBottomSeven,
                  targetElement: "desktopdownbottomseven",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopDownBottomSeven,
                  targetElement: "desktopdownbottomseven",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
      eight: (
        target,
        renderComponent,
        reorderArray,
        createArray,
        typeOfScroll,
        upDownArrow
      ) => {
        // reorder array
        const topItemToBottomEight = reorderArray(target);
        // create array of objs
        const arrayForDesktopDownBottomEight = createArray(
          topItemToBottomEight,
          "9",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopDownBottomEight,
                  targetElement: "desktopdownbottomeight",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopDownBottomEight,
                  targetElement: "desktopdownbottomeight",
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
        const lastFourToBeginning = reorderArray(target);
        // create array of objs
        const arrayForDesktopDownBottomNine = createArray(
          lastFourToBeginning,
          "1",
          renderComponent
        );
        // render component
        typeOfScroll == "mouse"
          ? setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopDownBottomNine,
                  targetElement: "desktopdownbottomnine",
                };
              });
            }, 500)
          : setTimeout(() => {
              renderComponent((prev) => {
                return {
                  ...prev,
                  bottomOrTopArray: arrayForDesktopDownBottomNine,
                  targetElement: "desktopdownbottomnine",
                  clickedBtn: upDownArrow,
                };
              });
            }, 100);
      },
    },
  },
};

/**
 * create func to create arrays for mobile and desktop
 * **/

// working with index 1 and 7 mobile

const createNewOrderedArrayIndexOne = factoryFuncCreateArray(1);

const createNewOrderedArrayIndexSeven = factoryFuncCreateArray(7);

// working with index 2 and 6 desktop

const createNewOrderedArrayIndexTwo = factoryFuncCreateArray(2);

const createNewOrderedArrayIndexThree = factoryFuncCreateArray(3);

const createNewOrderedArrayIndexFive = factoryFuncCreateArray(5);

const createNewOrderedArrayIndexSix = factoryFuncCreateArray(6);

/**
 * create func for mouse scroll, arrow key scroll, arrow button scroll
 * **/

/**
 * mobile scroll up
 * **/

const mobileMouseScrollUp = mobileScrollUpFactoryFunc(
  mobileScrollHelper,
  {
    moveFirstTwoItemsToEnd,
    moveLastItemToBeginningOfList,
  },
  { createNewOrderedArrayIndexSeven, createNewOrderedArrayIndexOne }
);

const mobileArrowKeyScrollUp = mobileScrollUpFactoryFunc(
  mobileScrollHelper,
  {
    moveFirstTwoItemsToEnd,
    moveLastItemToBeginningOfList,
  },
  { createNewOrderedArrayIndexSeven, createNewOrderedArrayIndexOne }
);

const mobileArrowBtnScrollUp = mobileScrollUpFactoryFunc(
  mobileScrollHelper,
  {
    moveFirstTwoItemsToEnd,
    moveLastItemToBeginningOfList,
  },
  { createNewOrderedArrayIndexSeven, createNewOrderedArrayIndexOne }
);

/**
 * mobile scroll down
 * **/

const mobileMouseScrollDown = mobileScrollDownFactoryFunc(
  mobileScrollHelper,
  {
    moveFirstItemToEndOfList,
    moveLastTwoItemsToBeginning,
  },
  {
    createNewOrderedArrayIndexOne,
    createNewOrderedArrayIndexSeven,
  }
);

const mobileArrowKeyScrollDown = mobileScrollDownFactoryFunc(
  mobileScrollHelper,
  {
    moveFirstItemToEndOfList,
    moveLastTwoItemsToBeginning,
  },
  {
    createNewOrderedArrayIndexOne,
    createNewOrderedArrayIndexSeven,
  }
);

const mobileArrowBtnScrollDown = mobileScrollDownFactoryFunc(
  mobileScrollHelper,
  {
    moveFirstItemToEndOfList,
    moveLastTwoItemsToBeginning,
  },
  {
    createNewOrderedArrayIndexOne,
    createNewOrderedArrayIndexSeven,
  }
);

/**
 * desktop scroll up
 * **/

const desktopMouseScrollUp = desktopScrollUpFactoryFunc(
  desktopScrollHelper,
  { moveLastItemToBeginningOfList, moveTopFourItemsToBottom },
  { createNewOrderedArrayIndexTwo, createNewOrderedArrayIndexSix }
);
const desktopArrowKeyScrollUp = desktopScrollUpFactoryFunc(
  desktopScrollHelper,
  { moveLastItemToBeginningOfList, moveTopFourItemsToBottom },
  { createNewOrderedArrayIndexTwo, createNewOrderedArrayIndexSix }
);
const desktopArrowBtnScrollUp = desktopScrollUpFactoryFunc(
  desktopScrollHelper,
  { moveLastItemToBeginningOfList, moveTopFourItemsToBottom },
  { createNewOrderedArrayIndexTwo, createNewOrderedArrayIndexSix }
);

/**
 * desktop scroll down
 * **/

const desktopMouseScrollDown = desktopScrollDownFactoryFunc(
  desktopScrollHelper,
  { moveFirstItemToEndOfList, moveBottomFourItemsToBeginning },
  { createNewOrderedArrayIndexTwo, createNewOrderedArrayIndexSix }
);
const desktopArrowKeyScrollDown = desktopScrollDownFactoryFunc(
  desktopScrollHelper,
  { moveFirstItemToEndOfList, moveBottomFourItemsToBeginning },
  { createNewOrderedArrayIndexTwo, createNewOrderedArrayIndexSix }
);
const desktopArrowBtnScrollDown = desktopScrollDownFactoryFunc(
  desktopScrollHelper,
  { moveFirstItemToEndOfList, moveBottomFourItemsToBeginning },
  { createNewOrderedArrayIndexTwo, createNewOrderedArrayIndexSix }
);

// call Object.freeze on our method obj so we can't mutate it

// on click

export function clickPreviousSnapItem(event) {
  // find snap item with tabindex === "0"
  if (event.target.closest("BUTTON")) {
    console.log("prev btn");
    const windowWidth = window.innerWidth;
    const currentFocusedElement = document.getElementById("currentFocused");
    const posindexUpArrowBtn =
      currentFocusedElement.getAttribute("data-pos-index");
    // set tabindex to "-1"
    currentFocusedElement.setAttribute("tabindex", "-1");
    // remove id attribute
    currentFocusedElement.removeAttribute("id");
    // aria-hidden "true"
    currentFocusedElement.setAttribute("aria-hidden", "true");

    /**
     * mobile
     * **/
    if (windowWidth <= 375) {
      if (
        posindexUpArrowBtn == "one" ||
        posindexUpArrowBtn == "two" ||
        posindexUpArrowBtn == "nine"
      ) {
        mobileArrowBtnScrollUp(
          currentFocusedElement,
          posindexUpArrowBtn,
          this.setSnapArray,
          null,
          "upBtn"
        );
        return;
      }
      // // top one
      // if (posindexUpArrowBtn == "one") {
      //   mobileScrollHelper["up"]["top"][posindexUpArrowBtn](
      //     currentFocusedElement,
      //     this.setSnapArray,
      //     moveFirstTwoItemsToEnd,
      //     createNewOrderedArrayIndexSeven,
      //     null,
      //     "upBtn"
      //   );
      //   return;
      // }
      // // top eight
      // if (posindexUpArrowBtn == "two") {
      //   mobileScrollHelper["up"]["top"][posindexUpArrowBtn](
      //     currentFocusedElement,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexOne,
      //     null,
      //     "upBtn"
      //   );
      //   return;
      // }
      // // bottom nine
      // if (posindexUpArrowBtn == "nine") {
      //   mobileScrollHelper["up"]["bottom"][posindexUpArrowBtn](
      //     currentFocusedElement,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSeven,
      //     null,
      //     "upBtn"
      //   );
      //   return;
      // }
    }

    /**
     * desktop
     * **/

    if (windowWidth >= 1440) {
      if (
        posindexUpArrowBtn == "one" ||
        posindexUpArrowBtn == "two" ||
        posindexUpArrowBtn == "three" ||
        posindexUpArrowBtn == "eight" ||
        posindexUpArrowBtn == "nine"
      ) {
        desktopArrowBtnScrollUp(
          currentFocusedElement,
          posindexUpArrowBtn,
          this.setSnapArray,
          null,
          "upBtn"
        );
        return;
      }

      // // top one
      // if (posindexUpArrowBtn == "one") {
      //   desktopScrollHelper["up"]["top"][posindexUpArrowBtn](
      //     currentFocusedElement,
      //     this.setSnapArray,
      //     moveTopFourItemsToBottom,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     "upBtn"
      //   );
      //   return;
      // }
      // // top two
      // if (posindexUpArrowBtn == "two") {
      //   desktopScrollHelper["up"]["top"][posindexUpArrowBtn](
      //     currentFocusedElement,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     "upBtn"
      //   );
      //   return;
      // }
      // // top three
      // if (posindexUpArrowBtn == "three") {
      //   desktopScrollHelper["up"]["top"][posindexUpArrowBtn](
      //     currentFocusedElement,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     "upBtn"
      //   );
      //   return;
      // }
      // // bottom eight
      // if (posindexUpArrowBtn == "eight") {
      //   desktopScrollHelper["up"]["bottom"][posindexUpArrowBtn](
      //     currentFocusedElement,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     "upBtn"
      //   );
      //   return;
      // }
      // // bottom nine
      // if (posindexUpArrowBtn == "nine") {
      //   desktopScrollHelper["up"]["bottom"][posindexUpArrowBtn](
      //     currentFocusedElement,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     "upBtn"
      //   );
      //   return;
      // }
    }

    // scroll up
    scrollingUpHelper(currentFocusedElement);
    previousSnapSibling(currentFocusedElement, windowWidth);
    // setTimeout(() => {
    //   event.target.closest("BUTTON").focus();
    // }, 50);
  }
}

export function clickNextSnapItem(event) {
  // find snap item with tabindex === "0"
  if (event.target.closest("BUTTON")) {
    console.log("next btn");
    const windowWidth = window.innerWidth;
    const currentFocusedItem = document.getElementById("currentFocused");
    const posindexDownArrowBtn =
      currentFocusedItem.getAttribute("data-pos-index");
    // set tabindex to "-1"
    currentFocusedItem.setAttribute("tabindex", "-1");
    // remove id attribute
    currentFocusedItem.removeAttribute("id");
    // aria-hidden "true"
    currentFocusedItem.setAttribute("aria-hidden", "true");

    /**
     * mobile
     * **/

    if (windowWidth <= 375) {
      if (
        posindexDownArrowBtn == "one" ||
        posindexDownArrowBtn == "eight" ||
        posindexDownArrowBtn == "nine"
      ) {
        mobileArrowBtnScrollDown(
          currentFocusedItem,
          posindexDownArrowBtn,
          this.setSnapArray,
          null,
          "downBtn"
        );
        return;
      }
      // // top one
      // if (posindexDownArrowBtn == "one") {
      //   mobileScrollHelper["down"]["top"][posindexDownArrowBtn](
      //     currentFocusedItem,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexOne,
      //     null,
      //     "downBtn"
      //   );
      //   return;
      // }
      // // bottom eight
      // if (posindexDownArrowBtn == "eight") {
      //   mobileScrollHelper["down"]["bottom"][posindexDownArrowBtn](
      //     currentFocusedItem,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSeven,
      //     null,
      //     "downBtn"
      //   );
      //   return;
      // }
      // // bottom nine
      // if (posindexDownArrowBtn == "nine") {
      //   mobileScrollHelper["down"]["bottom"][posindexDownArrowBtn](
      //     currentFocusedItem,
      //     this.setSnapArray,
      //     moveLastTwoItemsToBeginning,
      //     createNewOrderedArrayIndexOne,
      //     null,
      //     "downBtn"
      //   );
      //   return;
      // }
    }

    /**
     * desktop
     * **/

    if (windowWidth >= 1440) {
      if (
        posindexDownArrowBtn == "one" ||
        posindexDownArrowBtn == "two" ||
        posindexDownArrowBtn == "seven" ||
        posindexDownArrowBtn == "eight" ||
        posindexDownArrowBtn == "nine"
      ) {
        desktopArrowBtnScrollDown(
          currentFocusedItem,
          posindexDownArrowBtn,
          this.setSnapArray,
          null,
          "downBtn"
        );
        return;
      }

      // // top one
      // if (posindexDownArrowBtn == "one") {
      //   desktopScrollHelper["down"]["top"][posindexDownArrowBtn](
      //     currentFocusedItem,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     "downBtn"
      //   );
      //   return;
      // }
      // // top two
      // if (posindexDownArrowBtn == "two") {
      //   desktopScrollHelper["down"]["top"][posindexDownArrowBtn](
      //     currentFocusedItem,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     "downBtn"
      //   );
      //   return;
      // }
      // // bottom seven
      // if (posindexDownArrowBtn == "seven") {
      //   desktopScrollHelper["down"]["bottom"][posindexDownArrowBtn](
      //     currentFocusedItem,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     "downBtn"
      //   );
      //   return;
      // }
      // // bottom eight
      // if (posindexDownArrowBtn == "eight") {
      //   desktopScrollHelper["down"]["bottom"][posindexDownArrowBtn](
      //     currentFocusedItem,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     "downBtn"
      //   );
      //   return;
      // }
      // // bottom nine
      // if (posindexDownArrowBtn == "nine") {
      //   desktopScrollHelper["down"]["bottom"][posindexDownArrowBtn](
      //     currentFocusedItem,
      //     this.setSnapArray,
      //     moveBottomFourItemsToBeginning,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     "downBtn"
      //   );
      //   return;
      // }
    }

    scrollingDownHelper(currentFocusedItem);
    nextSnapSibling(currentFocusedItem, windowWidth);
    // setTimeout(() => {
    //   event.target.closest("BUTTON").focus();
    // }, 50);
  }
}

// keyboard
const methodsForKeyboardScroll = {
  // up arrow
  ArrowUp: (
    event,
    element,
    width,
    posindex,
    callToRender,
    scrollFuncsObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    const { mobileArrowKeyScrollUp, desktopArrowKeyScrollUp } = scrollFuncsObj;

    // const {
    //   moveFirstTwoItemsToEnd,
    //   moveLastItemToBeginningOfList,
    //   moveTopFourItemsToBottom,
    // } = reorderArrayFuncsObj;

    // const {
    //   createNewOrderedArrayIndexOne,
    //   createNewOrderedArrayIndexTwo,
    //   createNewOrderedArrayIndexSix,
    //   createNewOrderedArrayIndexSeven,
    // } = createArrayFuncsObj;

    const {
      scrollingUpHelper,
      previousSnapSibling,
      changeCurrentSnapItemAttr,
    } = defaultActionFuncsObj;

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      if (posindex == "one" || posindex == "two" || posindex == "nine") {
        mobileArrowKeyScrollUp(element, posindex, callToRender, null, null);

        return;
      }

      // if (posindex == "one") {
      //   methodObj["up"]["top"][posindex](
      //     element,
      //     callToRender,
      //     moveFirstTwoItemsToEnd,
      //     createNewOrderedArrayIndexSeven,
      //     null,
      //     null
      //   );
      //   return;
      // }

      // if (posindex == "two") {
      //   methodObj["up"]["top"][posindex](
      //     element,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexOne,
      //     null,
      //     null
      //   );
      //   return;
      // }

      // if (posindex == "nine") {
      //   methodObj["up"]["bottom"][posindex](
      //     element,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSeven,
      //     null,
      //     null
      //   );
      //   return;
      // }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      if (
        posindex == "one" ||
        posindex == "two" ||
        posindex == "three" ||
        posindex == "eight" ||
        posindex == "nine"
      ) {
        desktopArrowKeyScrollUp(element, posindex, callToRender, null, null);
      }

      // // top one
      // if (targetPosIndex == "one") {
      //   desktopScrollHelper["up"]["top"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveTopFourItemsToBottom,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // top two
      // if (targetPosIndex == "two") {
      //   desktopScrollHelper["up"]["top"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // top three
      // if (targetPosIndex == "three") {
      //   desktopScrollHelper["up"]["top"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // bottom eight
      // if (targetPosIndex == "eight") {
      //   desktopScrollHelper["up"]["bottom"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // bottom nine
      // if (targetPosIndex == "nine") {
      //   desktopScrollHelper["up"]["bottom"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     null
      //   );
      //   return;
      // }
    }

    // func to move two top items to bottom
    // func to move one bottom item to top

    scrollingUpHelper(element);
    previousSnapSibling(element, width);

    width <= 375
      ? document.getElementById("currentFocused").focus()
      : (document.getElementById("currentFocused").scrollIntoView(),
        document.getElementById("currentFocused").focus());

    console.log("up");
  },
  // left arrow
  ArrowLeft: (
    event,
    element,
    width,
    posindex,
    callToRender,
    scrollFuncsObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    const { mobileArrowKeyScrollUp, desktopArrowKeyScrollUp } = scrollFuncsObj;

    // const {
    //   moveFirstTwoItemsToEnd,
    //   moveLastItemToBeginningOfList,
    //   moveTopFourItemsToBottom,
    // } = reorderArrayFuncsObj;

    // const {
    //   createNewOrderedArrayIndexOne,
    //   createNewOrderedArrayIndexTwo,
    //   createNewOrderedArrayIndexSix,
    //   createNewOrderedArrayIndexSeven,
    // } = createArrayFuncsObj;

    const {
      scrollingUpHelper,
      previousSnapSibling,
      changeCurrentSnapItemAttr,
    } = defaultActionFuncsObj;

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      if (posindex == "one" || posindex == "two" || posindex == "nine") {
        mobileArrowKeyScrollUp(element, posindex, callToRender, null, null);

        return;
      }
      // if (posindex == "one") {
      //   methodObj["up"]["top"][posindex](
      //     element,
      //     callToRender,
      //     moveFirstTwoItemsToEnd,
      //     createNewOrderedArrayIndexSeven,
      //     null,
      //     null
      //   );
      //   return;
      // }

      // if (posindex == "two") {
      //   methodObj["up"]["top"][posindex](
      //     element,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexOne,
      //     null,
      //     null
      //   );
      //   return;
      // }

      // if (posindex == "nine") {
      //   methodObj["up"]["bottom"][posindex](
      //     element,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSeven,
      //     null,
      //     null
      //   );
      //   return;
      // }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      if (
        posindex == "one" ||
        posindex == "two" ||
        posindex == "three" ||
        posindex == "eight" ||
        posindex == "nine"
      ) {
        desktopArrowKeyScrollUp(element, posindex, callToRender, null, null);
      }

      // top one
      // if (targetPosIndex == "one") {
      //   desktopScrollHelper["up"]["top"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveTopFourItemsToBottom,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // top two
      // if (targetPosIndex == "two") {
      //   desktopScrollHelper["up"]["top"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // top three
      // if (targetPosIndex == "three") {
      //   desktopScrollHelper["up"]["top"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // bottom eight
      // if (targetPosIndex == "eight") {
      //   desktopScrollHelper["up"]["bottom"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // bottom nine
      // if (targetPosIndex == "nine") {
      //   desktopScrollHelper["up"]["bottom"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     null
      //   );
      //   return;
      // }
    }

    scrollingUpHelper(element);
    previousSnapSibling(element, width);

    width <= 375
      ? document.getElementById("currentFocused").focus()
      : (document.getElementById("currentFocused").scrollIntoView(),
        document.getElementById("currentFocused").focus());

    console.log("left");
  },
  // down arrow
  ArrowDown: (
    event,
    element,
    width,
    posindex,
    callToRender,
    scrollFuncsObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    const { mobileArrowKeyScrollDown, desktopArrowKeyScrollDown } =
      scrollFuncsObj;

    // const {
    //   moveFirstItemToEndOfList,
    //   moveLastTwoItemsToBeginning,
    //   moveBottomFourItemsToBeginning,
    // } = reorderArrayFuncsObj;

    // const {
    //   createNewOrderedArrayIndexOne,
    //   createNewOrderedArrayIndexTwo,
    //   createNewOrderedArrayIndexSix,
    //   createNewOrderedArrayIndexSeven,
    // } = createArrayFuncsObj;

    const { scrollingDownHelper, nextSnapSibling, changeCurrentSnapItemAttr } =
      defaultActionFuncsObj;

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      if (posindex == "one" || posindex == "eight" || posindex == "nine") {
        mobileArrowKeyScrollDown(element, posindex, callToRender, null, null);
        return;
      }

      // if (posindex == "one") {
      //   methodObj["down"]["top"][posindex](
      //     element,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexOne,
      //     null,
      //     null
      //   );
      //   return;
      // }

      // if (posindex == "eight") {
      //   methodObj["down"]["bottom"][posindex](
      //     element,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSeven,
      //     null,
      //     null
      //   );
      // }

      // if (posindex == "nine") {
      //   methodObj["down"]["bottom"][posindex](
      //     element,
      //     callToRender,
      //     moveLastTwoItemsToBeginning,
      //     createNewOrderedArrayIndexOne,
      //     null,
      //     null
      //   );
      //   return;
      // }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      if (
        posindex == "one" ||
        posindex == "two" ||
        posindex == "seven" ||
        posindex == "eight" ||
        posindex == "nine"
      ) {
        desktopArrowKeyScrollDown(element, posindex, callToRender, null, null);
        return;
      }

      // top one
      // if (targetPosIndex == "one") {
      //   desktopScrollHelper["down"]["top"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // top two
      // if (targetPosIndex == "two") {
      //   desktopScrollHelper["down"]["top"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // bottom seven
      // if (targetPosIndex == "seven") {
      //   desktopScrollHelper["down"]["bottom"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // bottom eight
      // if (targetPosIndex == "eight") {
      //   desktopScrollHelper["down"]["bottom"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // bottom nine
      // if (targetPosIndex == "nine") {
      //   desktopScrollHelper["down"]["bottom"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveBottomFourItemsToBeginning,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     null
      //   );
      //   return;
      // }
    }

    // func to move two bottom items to top
    // func to move one top item to bottom
    scrollingDownHelper(element);
    nextSnapSibling(element, width);

    width <= 375
      ? document.getElementById("currentFocused").focus()
      : (document.getElementById("currentFocused").scrollIntoView(),
        document.getElementById("currentFocused").focus());

    console.log("down");
  },
  // right arrow
  ArrowRight: (
    event,
    element,
    width,
    posindex,
    callToRender,
    scrollFuncsObj,
    defaultActionFuncsObj
  ) => {
    event.preventDefault();

    const { mobileArrowKeyScrollDown, desktopArrowKeyScrollDown } =
      scrollFuncsObj;

    // const {
    //   moveFirstItemToEndOfList,
    //   moveLastTwoItemsToBeginning,
    //   moveBottomFourItemsToBeginning,
    // } = reorderArrayFuncsObj;

    // const {
    //   createNewOrderedArrayIndexOne,
    //   createNewOrderedArrayIndexTwo,
    //   createNewOrderedArrayIndexSix,
    //   createNewOrderedArrayIndexSeven,
    // } = createArrayFuncsObj;

    const { scrollingDownHelper, nextSnapSibling, changeCurrentSnapItemAttr } =
      defaultActionFuncsObj;

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      if (posindex == "one" || posindex == "eight" || posindex == "nine") {
        mobileArrowKeyScrollDown(element, posindex, callToRender, null, null);
        return;
      }

      // if (posindex == "one") {
      //   methodObj["down"]["top"][posindex](
      //     element,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexOne,
      //     null,
      //     null
      //   );
      //   return;
      // }

      // if (posindex == "eight") {
      //   methodObj["down"]["bottom"][posindex](
      //     element,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSeven,
      //     null,
      //     null
      //   );
      // }

      // if (posindex == "nine") {
      //   methodObj["down"]["bottom"][posindex](
      //     element,
      //     callToRender,
      //     moveLastTwoItemsToBeginning,
      //     createNewOrderedArrayIndexOne,
      //     null,
      //     null
      //   );
      //   return;
      // }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      if (
        posindex == "one" ||
        posindex == "two" ||
        posindex == "seven" ||
        posindex == "eight" ||
        posindex == "nine"
      ) {
        desktopArrowKeyScrollDown(element, posindex, callToRender, null, null);
        return;
      }

      // top one
      // if (targetPosIndex == "one") {
      //   desktopScrollHelper["down"]["top"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // top two
      // if (targetPosIndex == "two") {
      //   desktopScrollHelper["down"]["top"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // bottom seven
      // if (targetPosIndex == "seven") {
      //   desktopScrollHelper["down"]["bottom"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // bottom eight
      // if (targetPosIndex == "eight") {
      //   desktopScrollHelper["down"]["bottom"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSix,
      //     null,
      //     null
      //   );
      //   return;
      // }
      // // bottom nine
      // if (targetPosIndex == "nine") {
      //   desktopScrollHelper["down"]["bottom"][targetPosIndex](
      //     target,
      //     callToRender,
      //     moveBottomFourItemsToBeginning,
      //     createNewOrderedArrayIndexTwo,
      //     null,
      //     null
      //   );
      //   return;
      // }
    }

    scrollingDownHelper(element);
    nextSnapSibling(element, width);

    width <= 375
      ? document.getElementById("currentFocused").focus()
      : (document.getElementById("currentFocused").scrollIntoView(),
        document.getElementById("currentFocused").focus());

    console.log("right");
  },
  // home
  Home: (
    event,
    element,
    width,
    posindex,
    callToRender,
    scrollMethodObj,
    defaultActionFuncsObj,
    reorderArrayFuncsObj,
    createArrayFuncsObj
  ) => {
    event.preventDefault();

    if (posindex != "one") {
      const {
        moveLastTwoItemsToBeginning,
        moveLastItemToBeginningOfList,
        moveBottomFourItemsToBeginning,
      } = reorderArrayFuncsObj;

      const { createNewOrderedArrayIndexOne, createNewOrderedArrayIndexTwo } =
        createArrayFuncsObj;

      const { changeCurrentSnapItemAttr } = defaultActionFuncsObj;

      changeCurrentSnapItemAttr(element);

      /**
       * mobile
       * **/

      if (width <= 375) {
        if (posindex == "nine") {
          const lastTwoItemsToBeginning = moveLastTwoItemsToBeginning(element);

          const arrayOfObjHomeBtn = createNewOrderedArrayIndexOne(
            lastTwoItemsToBeginning,
            "1",
            callToRender
          );

          callToRender((prevValues) => {
            return {
              ...prevValues,
              bottomOrTopArray: arrayOfObjHomeBtn,
              targetElement: "homebtnmovetwo",
              clickedBtn: null,
            };
          });
          return;
        }

        const lastItemToBeginning = moveLastItemToBeginningOfList(element);
        const arrayOfObjLastItemToTop = createNewOrderedArrayIndexOne(
          lastItemToBeginning,
          "1",
          callToRender
        );

        callToRender((values) => {
          return {
            ...values,
            bottomOrTopArray: arrayOfObjLastItemToTop,
            targetElement: "homebtnmoveone",
            clickedBtn: null,
          };
        });
        // firstItem.scrollIntoView();
      }

      /**
       * desktop
       * **/

      if (width >= 1440) {
        if (posindex == "two") {
          const lastSnapItemToTop = moveLastItemToBeginningOfList(element);
          const arrayOfObjLastSnapItemToTop = createNewOrderedArrayIndexTwo(
            lastSnapItemToTop,
            "1",
            callToRender
          );

          callToRender((values) => {
            return {
              ...values,
              bottomOrTopArray: arrayOfObjLastSnapItemToTop,
              targetElement: "homebtnmoveonetotop",
              clickedBtn: null,
            };
          });
          return;
        }

        if (posindex == "eight") {
          const snapItems = [...element.parentElement.children];
          const copyArray = [].concat(snapItems);
          const lastThreeItems = copyArray.slice(-3);
          const beforeLastThree = copyArray.slice(0, -3);

          const arrayOfObjThreeItemsToBeginning = createNewOrderedArrayIndexTwo(
            [...lastThreeItems, ...beforeLastThree],
            "1",
            callToRender
          );

          callToRender((values) => {
            return {
              ...values,
              bottomOrTopArray: arrayOfObjThreeItemsToBeginning,
              targetElement: "homebtnmovethreeatbottom",
            };
          });
          return;
        }

        if (posindex == "nine") {
          const lastFourToBeginning = moveBottomFourItemsToBeginning(element);
          const arrayOfObjFourItemsToBeginning = createNewOrderedArrayIndexTwo(
            lastFourToBeginning,
            "1",
            callToRender
          );

          callToRender((prevValues) => {
            return {
              ...prevValues,
              bottomOrTopArray: arrayOfObjFourItemsToBeginning,
              targetElement: "homebtnmovefouratbottom",
              clickedBtn: null,
            };
          });
          return;
        }
        // default action
        const lastTwoToBeginning = moveLastTwoItemsToBeginning(element);
        const arrayOfObjLastTwoToBeginning = createNewOrderedArrayIndexTwo(
          lastTwoToBeginning,
          "1",
          callToRender
        );

        callToRender((prev) => {
          return {
            ...prev,
            bottomOrTopArray: arrayOfObjLastTwoToBeginning,
            targetElement: "homebtnmovetwoatbottom",
            clickedBtn: null,
          };
        });
      }
    }

    console.log("home");
  },
  // end
  End: (
    event,
    element,
    width,
    posindex,
    callToRender,
    scrollMethodObj,
    defaultActionFuncsObj,
    reorderArrayFuncsObj,
    createArrayFuncsObj
  ) => {
    event.preventDefault();

    if (posindex != "nine") {
      const {
        moveFirstTwoItemsToEnd,
        moveFirstItemToEndOfList,
        moveTopFourItemsToBottom,
      } = reorderArrayFuncsObj;

      const { createNewOrderedArrayIndexSeven, createNewOrderedArrayIndexSix } =
        createArrayFuncsObj;

      const { changeCurrentSnapItemAttr } = defaultActionFuncsObj;

      changeCurrentSnapItemAttr(element);

      /**
       * mobile
       * **/

      if (width <= 375) {
        if (posindex == "one") {
          const firstTwoItemsToBottom = moveFirstTwoItemsToEnd(element);

          const arrayOfObjEndBtn = createNewOrderedArrayIndexSeven(
            firstTwoItemsToBottom,
            "9",
            callToRender
          );

          callToRender((values) => {
            return {
              ...values,
              bottomOrTopArray: arrayOfObjEndBtn,
              targetElement: "endbtnmovetwo",
              clickedBtn: null,
            };
          });
          return;
        }

        // default action
        const firstItemToEnd = moveFirstItemToEndOfList(element);
        const arrayOfObjFirstItemToEnd = createNewOrderedArrayIndexSeven(
          firstItemToEnd,
          "9",
          callToRender
        );

        callToRender((prev) => {
          return {
            ...prev,
            bottomOrTopArray: arrayOfObjFirstItemToEnd,
            targetElement: "endbtnmoveone",
            clickedBtn: null,
          };
        });
      }

      /**
       * desktop
       * **/

      if (width >= 1440) {
        if (posindex == "one") {
          const topFourToBottom = moveTopFourItemsToBottom(element);
          const arrayOfObjEndBtnOneIndex = createNewOrderedArrayIndexSix(
            topFourToBottom,
            "9",
            callToRender
          );

          callToRender((values) => {
            return {
              ...values,
              bottomOrTopArray: arrayOfObjEndBtnOneIndex,
              targetElement: "endbtntopfourtoend",
              clickedBtn: null,
            };
          });
          return;
        }

        if (posindex == "two") {
          const endBtnSnapItems = [...element.parentElement.children];
          const copyArrayTwoIndex = [].concat(endBtnSnapItems);

          const firstThree = copyArrayTwoIndex.slice(0, 3);
          const restOfSnapItems = copyArrayTwoIndex.slice(3);

          const arrayOfObjFirstThreeEndBtn = createNewOrderedArrayIndexSix(
            [...restOfSnapItems, ...firstThree],
            "9",
            callToRender
          );

          callToRender((prevValues) => {
            return {
              ...prevValues,
              bottomOrTopArray: arrayOfObjFirstThreeEndBtn,
              targetElement: "endbtntopthreetoend",
              clickedBtn: null,
            };
          });
          return;
        }

        if (posindex == "eight") {
          // move first item to end
          const topItemToBottom = moveFirstItemToEndOfList(element);
          const arrayOfObjFirstItemToEnd = createNewOrderedArrayIndexSix(
            topItemToBottom,
            "9",
            callToRender
          );

          callToRender((values) => {
            return {
              ...values,
              bottomOrTopArray: arrayOfObjFirstItemToEnd,
              targetElement: "endbtntopitemtoend",
              clickedBtn: null,
            };
          });

          return;
        }

        // default action
        const lastTwoSnapToBeginning = moveFirstTwoItemsToEnd(element);
        const arrayOfObjLastTwoSnapItem = createNewOrderedArrayIndexSix(
          lastTwoSnapToBeginning,
          "9",
          callToRender
        );

        callToRender((prev) => {
          return {
            ...prev,
            bottomOrTopArray: arrayOfObjLastTwoSnapItem,
            targetElement: "endbtnmovetwotoend",
            clickedBtn: null,
          };
        });
      }

      console.log("end");
    }
  },
  // page up
  PageUp: (
    event,
    element,
    width,
    posindex,
    callToRender,
    scrollMethodObj,
    defaultActionFuncsObj,
    reorderArrayFuncsObj,
    createArrayFuncsObj
  ) => {
    event.preventDefault();

    if (posindex == "one") {
      return;
    }

    const { moveLastItemToBeginningOfList, moveLastTwoItemsToBeginning } =
      reorderArrayFuncsObj;
    const {
      createNewOrderedArrayIndexOne,
      createNewOrderedArrayIndexTwo,
      createNewOrderedArrayIndexFive,
      createNewOrderedArrayIndexSix,
    } = createArrayFuncsObj;
    const { changeCurrentSnapItemAttr, applyFocusSnapItemAttr } =
      defaultActionFuncsObj;

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      // check if event.target data-pos-index is "nine" or "two"
      if (posindex == "nine") {
        const lastItemToBeginningIndexNine =
          moveLastItemToBeginningOfList(element);
        const arrayForPageUpNineIndex = createNewOrderedArrayIndexSix(
          lastItemToBeginningIndexNine,
          "7",
          callToRender
        );

        callToRender((prev) => {
          return {
            ...prev,
            bottomOrTopArray: arrayForPageUpNineIndex,
            targetElement: "pageupnine",
            clickedBtn: null,
          };
        });
        return;
      }

      if (posindex == "two" || posindex == "three") {
        const lastItemToBeginningIndexTwoThree =
          moveLastItemToBeginningOfList(element);

        const arrayForPageUpIndexTwoThree = createNewOrderedArrayIndexOne(
          lastItemToBeginningIndexTwoThree,
          "1",
          callToRender
        );

        callToRender((values) => {
          return {
            ...values,
            bottomOrTopArray: arrayForPageUpIndexTwoThree,
            targetElement: "pageuptwothree",
            clickedBtn: null,
          };
        });
        return;
      }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      // two last item to top
      if (posindex == "two") {
        const lastSnapItemToTopIndexTwo =
          moveLastItemToBeginningOfList(element);

        const arrayForPageUpIndexTwo = createNewOrderedArrayIndexTwo(
          lastSnapItemToTopIndexTwo,
          "1",
          callToRender
        );

        callToRender((values) => {
          return {
            ...values,
            bottomOrTopArray: arrayForPageUpIndexTwo,
            targetElement: "pageupindextwo",
            clickedBtn: null,
          };
        });
        return;
      }
      // three last two items to top
      if (posindex == "three") {
        const lastTwoItemToBeginningIndexThree =
          moveLastTwoItemsToBeginning(element);

        const arrayForPageUpIndexThree = createNewOrderedArrayIndexTwo(
          lastTwoItemToBeginningIndexThree,
          "1",
          callToRender
        );

        callToRender((prev) => {
          return {
            ...prev,
            bottomOrTopArray: arrayForPageUpIndexThree,
            targetElement: "pageupindexthree",
            clickedBtn: null,
          };
        });
        return;
      }
      // four last item to top
      if (posindex == "four") {
        const lastItemToBeginningIndexFour =
          moveLastItemToBeginningOfList(element);

        const arrayForPageUpIndexFour = createNewOrderedArrayIndexTwo(
          lastItemToBeginningIndexFour,
          "2",
          callToRender
        );

        callToRender((values) => {
          return {
            ...values,
            bottomOrTopArray: arrayForPageUpIndexFour,
            targetElement: "pageupindexfour",
            clickedBtn: null,
          };
        });
        return;
      }
      // eight last item to top
      if (posindex == "eight") {
        const lastItemToTopIndexEight = moveLastItemToBeginningOfList(element);

        const arrayForPageUpIndexEight = createNewOrderedArrayIndexFive(
          lastItemToTopIndexEight,
          "6",
          callToRender
        );

        callToRender((prevValues) => {
          return {
            ...prevValues,
            bottomOrTopArray: arrayForPageUpIndexEight,
            targetElement: "pageupindexeight",
            clickedBtn: null,
          };
        });
        return;
      }
      // nine last two items to top
      if (posindex == "nine") {
        const lastTwoSnapToTop = moveLastTwoItemsToBeginning(element);

        const arrayForPageUpIndexNine = createNewOrderedArrayIndexSix(
          lastTwoSnapToTop,
          "7",
          callToRender
        );

        callToRender((values) => {
          return {
            ...values,
            bottomOrTopArray: arrayForPageUpIndexNine,
            targetElement: "pageupindexnine",
            clickedBtn: null,
          };
        });
        return;
      }
    }

    // select previous previous sibling element

    const twoItemsAboveCurrent =
      element.previousElementSibling.previousElementSibling;

    applyFocusSnapItemAttr(twoItemsAboveCurrent);

    twoItemsAboveCurrent.focus();

    console.log("pageup");
  },
  // page down
  PageDown: (
    event,
    element,
    width,
    posindex,
    callToRender,
    scrollMethodObj,
    defaultActionFuncsObj,
    reorderArrayFuncsObj,
    createArrayFuncsObj
  ) => {
    event.preventDefault();

    if (posindex == "nine") {
      return;
    }

    const { moveFirstItemToEndOfList, moveFirstTwoItemsToEnd } =
      reorderArrayFuncsObj;
    const {
      createNewOrderedArrayIndexTwo,
      createNewOrderedArrayIndexThree,
      createNewOrderedArrayIndexSix,
      createNewOrderedArrayIndexSeven,
    } = createArrayFuncsObj;
    const { changeCurrentSnapItemAttr, applyFocusSnapItemAttr } =
      defaultActionFuncsObj;
    // check if posindex is "one", "seven" or "eight"

    changeCurrentSnapItemAttr(element);

    /**
     * mobile
     * **/

    if (width <= 375) {
      if (posindex == "one") {
        const firstItemToBottomPosindexOne = moveFirstItemToEndOfList(element);
        const arrayForPageDownOneIndex = createNewOrderedArrayIndexTwo(
          firstItemToBottomPosindexOne,
          "3",
          callToRender
        );

        callToRender((prevValues) => {
          return {
            ...prevValues,
            bottomOrTopArray: arrayForPageDownOneIndex,
            targetElement: "pagedownone",
            clickedBtn: null,
          };
        });

        return;
      }

      if (posindex == "seven" || posindex == "eight") {
        const firstItemToBottomPosindexSevenOrEight =
          moveFirstItemToEndOfList(element);

        const arrayForPageDownSevenOrEightIndex =
          createNewOrderedArrayIndexSeven(
            firstItemToBottomPosindexSevenOrEight,
            "9",
            callToRender
          );

        callToRender((values) => {
          return {
            ...values,
            bottomOrTopArray: arrayForPageDownSevenOrEightIndex,
            targetElement: "pagedownseveneight",
            clickedBtn: null,
          };
        });

        return;
      }
    }

    /**
     * desktop
     * **/

    if (width >= 1440) {
      // one first two to end
      if (posindex == "one") {
        const topTwoItemsToEnd = moveFirstTwoItemsToEnd(element);

        const arrayForPageDownIndexOne = createNewOrderedArrayIndexTwo(
          topTwoItemsToEnd,
          "3",
          callToRender
        );

        callToRender((values) => {
          return {
            ...values,
            bottomOrTopArray: arrayForPageDownIndexOne,
            targetElement: "pagedownindexone",
            clickedBtn: null,
          };
        });
        return;
      }
      // two first item to end
      if (posindex == "two") {
        const firstItemToBottomIndexTwo = moveFirstItemToEndOfList(element);

        const arrayForPageDownIndexTwo = createNewOrderedArrayIndexThree(
          firstItemToBottomIndexTwo,
          "4",
          callToRender
        );

        callToRender((prevValues) => {
          return {
            ...prevValues,
            bottomOrTopArray: arrayForPageDownIndexTwo,
            targetElement: "pagedownindextwo",
            clickedBtn: null,
          };
        });
        return;
      }
      // six first item to end
      if (posindex == "six") {
        const firstItemToEndIndexSix = moveFirstItemToEndOfList(element);

        const arrayForPageDownIndexSix = createNewOrderedArrayIndexSix(
          firstItemToEndIndexSix,
          "8",
          callToRender
        );

        callToRender((prev) => {
          return {
            ...prev,
            bottomOrTopArray: arrayForPageDownIndexSix,
            targetElement: "pagedownindexsix",
            clickedBtn: null,
          };
        });
        return;
      }
      // seven first two to end
      if (posindex == "seven") {
        const firstTwoToEndIndexSeven = moveFirstTwoItemsToEnd(element);

        const arrayForPageDownIndexSeven = createNewOrderedArrayIndexSix(
          firstTwoToEndIndexSeven,
          "9",
          callToRender
        );

        callToRender((values) => {
          return {
            ...values,
            bottomOrTopArray: arrayForPageDownIndexSeven,
            targetElement: "pagedownindexseven",
            clickedBtn: null,
          };
        });
        return;
      }
      // eight first item to end
      if (posindex == "eight") {
        const firstItemToEndIndexEight = moveFirstItemToEndOfList(element);

        const arrayForPageDownIndexEight = createNewOrderedArrayIndexSix(
          firstItemToEndIndexEight,
          "9",
          callToRender
        );

        callToRender((prevValues) => {
          return {
            ...prevValues,
            bottomOrTopArray: arrayForPageDownIndexEight,
            targetElement: "pagedownindexeight",
            clickedBtn: null,
          };
        });
        return;
      }
    }

    // select next next sibling element

    const twoItemsBelowCurrent = element.nextElementSibling.nextElementSibling;

    applyFocusSnapItemAttr(twoItemsBelowCurrent);

    twoItemsBelowCurrent.focus();

    console.log("pagedown");
  },
};

export function keyboardScrollThroughSnapItems(event) {
  if (event.ctrlKey) {
    return;
  }
  console.log(this, "this");
  // event.code
  const windowWidth = window.innerWidth;
  const keyPropForMobileAndDesktop = windowWidth <= 375 ? "mobile" : "desktop";
  const scrollHelperMethodObj =
    windowWidth <= 375 ? mobileScrollHelper : desktopScrollHelper;
  // pass in event and element to methodsForKeyboardScroll[key]()
  // console.log(event.target.closest("div[aria-roledescription='slide']"));
  const currentFocusedSnapItem = document.getElementById("currentFocused");
  const targetPosIndex = currentFocusedSnapItem.getAttribute("data-pos-index");

  if (
    event.code == "Space" &&
    document.activeElement == currentFocusedSnapItem
  ) {
    event.preventDefault();
  }
  /**
   * up, right, down and left arrow keys
   * **/
  if (methodsForKeyboardScroll[event.code]) {
    // set tabindex to "-1"
    // currentFocusedSnapItem.setAttribute("tabindex", "-1");
    // aria-hidden "true"
    // currentFocusedSnapItem.setAttribute("aria-hidden", "true");
    // remove id attribute
    // currentFocusedSnapItem.removeAttribute("id");

    methodsForKeyboardScroll[event.code](
      event,
      currentFocusedSnapItem,
      windowWidth,
      targetPosIndex,
      this.setSnapArray,
      {
        mobileArrowKeyScrollUp,
        mobileArrowKeyScrollDown,
        desktopArrowKeyScrollUp,
        desktopArrowKeyScrollDown,
      },
      {
        scrollingUpHelper,
        scrollingDownHelper,
        previousSnapSibling,
        nextSnapSibling,
        changeCurrentSnapItemAttr,
        applyFocusSnapItemAttr,
      },
      {
        moveFirstItemToEndOfList,
        moveFirstTwoItemsToEnd,
        moveLastItemToBeginningOfList,
        moveLastTwoItemsToBeginning,
        moveTopFourItemsToBottom,
        moveBottomFourItemsToBeginning,
      },
      {
        createNewOrderedArrayIndexOne,
        createNewOrderedArrayIndexTwo,
        createNewOrderedArrayIndexThree,
        createNewOrderedArrayIndexFive,
        createNewOrderedArrayIndexSix,
        createNewOrderedArrayIndexSeven,
      }
    );
  }
  /**
   * pageup,pagedown,home and end
   * **/
  // if (methodsForKeyboardScroll[`${keyPropForMobileAndDesktop}${event.code}`]) {
  //   // set current event target's tabindex to "-1" and aria-hidden "true";
  //   // remove id attr currentFocused
  //   currentFocusedSnapItem.setAttribute("tabindex", "-1");
  //   currentFocusedSnapItem.setAttribute("aria-hidden", "true");
  //   currentFocusedSnapItem.removeAttribute("id");

  //   methodsForKeyboardScroll[`${keyPropForMobileAndDesktop}${event.code}`](
  //     event,
  //     currentFocusedSnapItem,
  //     this.setSnapArray
  //   );
  // }
}

// up and left arrow

function previousSnapSibling(element, width) {
  const negativeVerticalScroll = width <= 375 ? -1 : -50;
  // instead of working with document.activeElement which will give us the curent focused element
  // we will use event.target.closest("div[aria-roledescription='slide']") or work with snap item
  // for both keyboard and clicking on previous and next btn
  // pass in the div with aria-roledescription='slide' as the element parameter
  // algorithm to assign value string "0" to tabindex attr will be handled by our intersection observer func
  element.parentElement.scrollBy(0, negativeVerticalScroll);
}

// down and right arrow

function nextSnapSibling(element, width) {
  const positiveVerticalScroll = width <= 375 ? 1 : 50;
  // instead of working with document.activeElement which will give us the curent focused element
  // we will use event.target.closest("div[aria-roledescription='slide']") or work with snap item
  // for both keyboard and clicking on previous and next btn
  // pass in the div with aria-roledescription='slide' as the element parameter
  // algorithm to assign value string "0" to tabindex attr will be handled by our intersection observer func
  element.parentElement.scrollBy(0, positiveVerticalScroll);
}

// intersection observer

/**
 * mobile
 * **/

// use getElementById in .useEffect() to select snap items container and its children
// pass those variables to funcs below
export function observeSnapItemsContainerMobile(
  rootElement,
  children,
  callFuncToRenderNewArray,
  isDesktop,
  isResize
) {
  // offsetTop 2928
  // options
  const mobileOptions = {
    root: rootElement,
    //
    threshold: 1,
    rootMargin: "0px",
  };
  // call IntersectionObserver
  const mobileObserver = new IntersectionObserver(
    assignValuesToElementAttrMobile,
    mobileOptions
  );
  console.log(mobileObserver);
  console.log("isDesktop", isDesktop);
  console.log(localStorage.getItem("cachedObserverValues"));
  // disconnect observer at desktop size
  if (isDesktop) {
    console.log("isDesktop is true scrollsnapitem mobileobserver");
    console.log(mobileObserver);
    mobileObserver.unobserve(rootElement);
    // go back to orginal snap item order for desktop
    console.log(
      document.getElementById("currentFocused").parentElement.children
    );
    console.log("before rerender desktop");
    console.log("callFuncToRenderNewArray", callFuncToRenderNewArray);
    // callFuncToRenderNewArray((prevValues) => {
    //   return {
    //     ...prevValues,
    //     bottomOrTopArray: copyArray,
    //     targetElement: "desktop",
    //   };
    // });
    return;
  }

  console.log("another test mobile");

  // const mobileScrollHelper = {
  //   top: {
  //     one: (target, observer) => {
  //       console.log("resize", isResize);
  //       console.log(target);
  //       console.log("observer", observer);

  //       target.nextElementSibling.setAttribute("tabindex", "-1");
  //       target.nextElementSibling.setAttribute("aria-hidden", "true");
  //       console.log(target.parentElement.children);
  //       const parentChildren = [...target.parentElement.children];
  //       const arr = [...parentChildren];
  //       const lastItem = arr[arr.length - 1];
  //       const beforeLastItem = arr.slice(0, -1);
  //       console.log(lastItem), console.log(beforeLastItem);
  //       const reorderItems = createNewOrderedArrayIndexOne(
  //         [lastItem, ...beforeLastItem],
  //         "1"
  //       );
  //       console.log(reorderItems);
  //       observer.disconnect();

  //       // callFuncToRenderNewArray(reorderItems);
  //       callFuncToRenderNewArray((prev) => {
  //         return {
  //           ...prev,
  //           bottomOrTopArray: reorderItems,
  //           targetElement: "one",
  //         };
  //       });
  //     },
  //     two: (target, observer, prevFocused) => {
  //       console.log("resize", isResize);

  //       console.log(target);
  //       console.log("observer", observer);

  //       prevFocused.getAttribute("data-pos-index") == "one"
  //         ? (target.previousElementSibling.setAttribute("tabindex", "-1"),
  //           target.previousElementSibling.setAttribute("aria-hidden", "true"))
  //         : null;
  //       prevFocused.getAttribute("data-pos-index") == "three"
  //         ? (target.nextElementSibling.setAttribute("tabindex", "-1"),
  //           target.nextElementSibling.setAttribute("aria-hidden", "true"))
  //         : null;

  //       // target.previousElementSibling.setAttribute("tabindex", "-1");
  //       // target.previousElementSibling.setAttribute("aria-hidden", "true");

  //       // target.nextElementSibling.setAttribute("tabindex", "-1");
  //       // target.nextElementSibling.setAttribute("aria-hidden", "true");
  //       console.log(target.parentElement.children);
  //       const parentChildren = [...target.parentElement.children];
  //       const copyOfArr = [...parentChildren];
  //       const [firstItem, ...restOfArray] = copyOfArr;
  //       console.log(firstItem);
  //       console.log(restOfArray);
  //       const newOrderedItems = createNewOrderedArrayIndexOne(
  //         [...restOfArray, firstItem],
  //         "2"
  //       );
  //       console.log(newOrderedItems);
  //       observer.disconnect();

  //       // callFuncToRenderNewArray(newOrderedItems);
  //       callFuncToRenderNewArray((values) => {
  //         return {
  //           ...values,
  //           bottomOrTopArray: newOrderedItems,
  //           targetElement: "two",
  //         };
  //       });
  //     },
  //     nine: (target, observer) => {
  //       console.log("resize", isResize);

  //       console.log(target);
  //       console.log("observer", observer);

  //       target.nextElementSibling.setAttribute("tabindex", "-1");
  //       target.nextElementSibling.setAttribute("aria-hidden", "true");
  //       console.log(target.parentElement.children);

  //       const scrollChildren = [...target.parentElement.children];
  //       const copyOfArray = [...scrollChildren];
  //       const firstItem = copyOfArray[0];
  //       const secondItem = copyOfArray[1];
  //       const restOfItems = copyOfArray.slice(2);
  //       console.log(firstItem);
  //       console.log(secondItem);
  //       console.log(restOfItems);
  //       const reorderedChildren = createNewOrderedArrayIndexSeven(
  //         [...restOfItems, firstItem, secondItem],
  //         "9"
  //       );
  //       console.log(reorderedChildren);
  //       observer.disconnect();

  //       // callFuncToRenderNewArray(reorderedChildren);
  //       callFuncToRenderNewArray((values) => {
  //         return {
  //           ...values,
  //           bottomOrTopArray: reorderedChildren,
  //           targetElement: "nine",
  //         };
  //       });
  //     },
  //   },
  //   bottom: {
  //     one: (target, observer) => {
  //       console.log("resize", isResize);

  //       console.log(target);
  //       console.log("observer", observer);
  //       target.previousElementSibling.setAttribute("tabindex", "-1");
  //       target.previousElementSibling.setAttribute("aria-hidden", "true");
  //       console.log(target.parentElement.children);

  //       const snapItems = [...target.parentElement.children];
  //       const copyOfSnapItems = [...snapItems];
  //       const secondToLast = copyOfSnapItems[copyOfSnapItems.length - 2];
  //       const lastItem = copyOfSnapItems[copyOfSnapItems.length - 1];
  //       const beforeLastTwo = copyOfSnapItems.slice(0, -2);
  //       console.log(secondToLast);
  //       console.log(lastItem);
  //       console.log(beforeLastTwo);
  //       const reorderedItems = createNewOrderedArrayIndexOne(
  //         [secondToLast, lastItem, ...beforeLastTwo],
  //         "1"
  //       );
  //       console.log(reorderedItems);
  //       observer.disconnect();
  //       // callFuncToRenderNewArray(reorderedItems);
  //       callFuncToRenderNewArray((prevValues) => {
  //         return {
  //           ...prevValues,
  //           bottomOrTopArray: reorderedItems,
  //           targetElement: "one",
  //         };
  //       });
  //     },
  //     eight: (target, observer, prevFocus) => {
  //       console.log("resize", isResize);

  //       console.log(target);
  //       console.log("observer", observer);

  //       prevFocus.getAttribute("data-pos-index") == "seven"
  //         ? (target.previousElementSibling.setAttribute("tabindex", "-1"),
  //           target.previousElementSibling.setAttribute("aria-hidden", "true"))
  //         : null;
  //       prevFocus.getAttribute("data-pos-index") == "nine"
  //         ? (target.nextElementSibling.setAttribute("tabindex", "-1"),
  //           target.nextElementSibling.setAttribute("aria-hidden", "true"))
  //         : null;

  //       //         target.nextElementSibling.setAttribute("tabindex", "-1");
  //       //         target.nextElementSibling.setAttribute("aria-hidden", "true");

  //       // target.previousElementSibling.setAttribute("tabindex", "-1");
  //       //         target.previousElementSibling.setAttribute("aria-hidden", "true");

  //       console.log(target.parentElement.children);

  //       const snapChildren = [...target.parentElement.children];
  //       const copyOfSnapChildren = [].concat(snapChildren);
  //       const lastItem = copyOfSnapChildren[copyOfSnapChildren.length - 1];
  //       const beforeLastItem = copyOfSnapChildren.slice(0, -1);
  //       console.log(lastItem);
  //       console.log(beforeLastItem);
  //       const reordernSnapItem = createNewOrderedArrayIndexSeven(
  //         [lastItem, ...beforeLastItem],
  //         "8"
  //       );
  //       console.log(reordernSnapItem);
  //       observer.disconnect();

  //       // callFuncToRenderNewArray(reordernSnapItem);
  //       // debugger;
  //       callFuncToRenderNewArray((prevValues) => {
  //         return {
  //           ...prevValues,
  //           bottomOrTopArray: reordernSnapItem,
  //           targetElement: "eight",
  //         };
  //       });
  //     },
  //     nine: (target, observer) => {
  //       console.log("resize", isResize);

  //       console.log(target);
  //       console.log("observer", observer);

  //       target.previousElementSibling.setAttribute("tabindex", "-1");
  //       target.previousElementSibling.setAttribute("aria-hidden", "true");
  //       console.log(target.parentElement.children);

  //       const parentChildren = [...target.parentElement.children];
  //       const copyOfArray = parentChildren.slice();
  //       // get target parent children
  //       const [firstElement, ...restOfItems] = copyOfArray;
  //       console.log(firstElement);
  //       console.log(restOfItems);
  //       const reorderArray = createNewOrderedArrayIndexSeven(
  //         [...restOfItems, firstElement],
  //         "9"
  //       );
  //       console.log(reorderArray);
  //       observer.disconnect();

  //       // callFuncToRenderNewArray(reorderArray);
  //       callFuncToRenderNewArray((prevValues) => {
  //         return {
  //           ...prevValues,
  //           bottomOrTopArray: reorderArray,
  //           targetElement: "nine",
  //         };
  //       });
  //     },
  //   },
  // nine: (target) => {
  //   target.previousElementSibling.setAttribute("tabindex", "-1");
  //   // get target parent children
  //   const [firstElement, ...restOfItems] = [...target.parentElement.children];
  //   const reorderArray = [...restOfItems, firstElement].map(
  //     function createNewOrderedList(element, index) {
  //       /**
  //                      * classText,
  //                     posIndex,
  //                     spanText,
  //                     tabindex,
  //                     ariaHidden,
  //                     ariaLabel,
  //                      * **/
  //       const objOfValues =
  //         index == 7
  //           ? {
  //               classText: "snap-item",
  //               posIndex: element.getAttribute("data-pos-index"),
  //               spanText: element.firstElementChild.innerText,
  //               tabindex: "0",
  //               ariaHidden: "false",
  //               ariaLabel: `9 of 9`,
  //               focusId: "currentFocused",
  //             }
  //           : {
  //               classText: "snap-item",
  //               posIndex: element.getAttribute("data-pos-index"),
  //               spanText: element.firstElementChild.innerText,
  //               tabindex: "-1",
  //               ariaHidden: "true",
  //               ariaLabel: element.getAttribute("aria-label"),
  //             };
  //       return objOfValues;
  //     }
  //   );
  //   console.log(reorderArray);
  //   callFuncToRenderNewArray((prevValues) => {
  //     return {
  //       ...prevValues,
  //       upArrowArray: reorderArray,
  //       downArrowArray: null,
  //     };
  //   });
  // },
  // };
  // callback
  function assignValuesToElementAttrMobile(entries, observer) {
    entries.forEach(function loopThroughItemsMobile(entry) {
      if (!entry.isIntersecting) {
        return;
      }
      console.log(localStorage.getItem("cachedObserverValues"));
      /**
       * one solution check if localStorage.getItem("cachedObserverValues") is desktop
       * if it is desktop return
       * **/
      console.log(isResize);
      if (isResize) {
        console.log(
          "inside callback to mobile observer callback resize if statement"
        );
        return;
      }
      console.log(isResize);
      console.log(
        "outside callback to mobile observer callback resize if statement"
      );
      console.log("previous", entry.target.previousElementSibling);
      console.log("next", entry.target.nextElementSibling);
      const targetPosindex = entry.target.getAttribute("data-pos-index");
      console.log(targetPosindex);
      console.log("mobile");
      console.log(entry);
      console.log(document.getElementById("currentFocused"), "currentFocused");
      console.log(entry.target);
      console.log(entry.target.offsetTop);
      // top position 1 element offsetTop is 0
      // top position 2 element offsetTop is 366
      // bottom position 8 element offsetTop is 2562
      // bottom position 9 element offsetTop is 2928
      const previousFocused = document.activeElement;
      console.log("previousFocused", previousFocused);
      console.log(previousFocused == entry.target);
      if (previousFocused == entry.target) {
        console.log("return");
        return;
      }

      /**
       * when we call setSnapItem func which will render carousel component
       * document.activeElement will be the element with id="currentFocused"
       * **/
      /**
       * one solution
       * **/
      // find current focus element using document.activeElement
      // then find the pos index of that focus element
      // then find pos index of intersecting element
      // compare the two
      // if focus element pos index is less than pos index of intersecting element user is scrolling down
      // if focus element pos index is greater pos index of intersecting element user is scrolling up
      /**
       * another solution
       * **/
      // check where the user is by getting offsetTop of snap item
      /**
       * working at top:0,366,732
       * **/
      if (
        targetPosindex == "nine" &&
        entry.target.previousElementSibling == null &&
        previousFocused !== entry.target
      ) {
        console.log("hello, this is nine");
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        // when target posindex is nine && target.previousElementSibling == null && target.nextElementSibling.getAttribute("data-pos-index") == "one"
        // take elements with posindex of nine and one placed them at end of array
        mobileScrollHelper["top"][targetPosindex](entry.target, observer);
        return;
      }
      // when target posindex is one && target.previousElementSibling == null && target.nextElementSibling.getAttribute("data-pos-index") == "two"
      // take element with posindex of nine and placed it at the beginning of array
      if (
        targetPosindex == "one" &&
        entry.target.previousElementSibling == null &&
        previousFocused !== entry.target
      ) {
        console.log(entry.target, "entry.target");
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          entry.target.parentElement.children
        );
        mobileScrollHelper["top"][targetPosindex](entry.target, observer);
        return;
      }
      // when target posindex is two && target.previousElementSibling.getAttribute("data-pos-index") == "nine" && target.previousElementSibling.previousElementSibling.getAttritebu("data-pos-index") == "nine"
      // take element with posindex of nine and placed at end of array
      if (targetPosindex == "two" && previousFocused !== entry.target) {
        if (
          entry.target.previousElementSibling.previousElementSibling &&
          entry.target.previousElementSibling.previousElementSibling.getAttribute(
            "data-pos-index"
          ) == "nine"
        ) {
          console.log(
            "document.getElementByIdcurrentFocused.parentElement.children",
            document.getElementById("currentFocused").parentElement.children
          );
          console.log("hello this is two prev is one prev prev is nine");
          console.log(observer);
          mobileScrollHelper["top"][targetPosindex](
            entry.target,
            observer,
            previousFocused
          );
          return;
        }
      }
      /**
       * working at bottom: 2195,2562,2928
       * **/
      // when target posindex is eight && target.nextElementSibling.getAttribute("data-pos-index") == "nine" && target.nextElementSibling.nextElementSibling.getAttribute("data-pos-index") == "one"
      // take element with posindex of one and placed it at the beginning of array
      if (targetPosindex == "eight" && previousFocused !== entry.target) {
        if (
          entry.target.nextElementSibling.nextElementSibling &&
          entry.target.nextElementSibling.nextElementSibling.getAttribute(
            "data-pos-index"
          ) == "one"
        ) {
          console.log(
            "document.getElementByIdcurrentFocused.parentElement.children",
            document.getElementById("currentFocused").parentElement.children
          );
          console.log("this is eight bottom");
          mobileScrollHelper["bottom"][targetPosindex](
            entry.target,
            observer,
            previousFocused
          );
          return;
        }
      }
      // when target posindex is nine && target.nextElementSibling is null && target.previousElementSibling.getAttribute("data-pos-index") == "eight"
      // take element with posindex of one and placed it at the end of array
      if (targetPosindex == "nine" && entry.target.nextElementSibling == null) {
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        mobileScrollHelper["bottom"][targetPosindex](entry.target, observer);
        return;
      }
      // when target posindex is one && target.nextElementSibling is null && target.previousElementSibling.getAttribute("data-pos-index") == "nine"
      // take elements with posindex of nine and one placed them at beginning of array
      if (
        targetPosindex == "one" &&
        document.getElementById("currentFocused").nextElementSibling == null
      ) {
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        mobileScrollHelper["bottom"][targetPosindex](entry.target, observer);
        return;
      }
      observerHelper(entry.target);
      //   if (targetPosindex != "one" && targetPosindex != "nine") {
      //     observerHelper(entry.target);
      //     if (
      //       targetPosindex == "eight" &&
      //       document.activeElement.getAttribute("data-pos-index") == "nine"
      //     ) {
      //       console.log("hello this is eight last focus was nine");
      //     }
      //     if (
      //       targetPosindex == "two" &&
      //       document.activeElement.getAttribute("data-pos-index") == "one"
      //     ) {
      //       console.log("hello this is two last focus was one");
      //     }
      //     return;
      //   }
      //   // if entry target pos is one or nine and we're at the bottom of scroll
      //   if (targetPosindex == "nine" || targetPosindex == "one") {
      //     if (entry.target.offsetTop == 2928) {
      //       mobileScrollHelper["bottom"][targetPosindex](entry.target);
      //       return;
      //     }
      //     // if entry target pos is one or nine and we're at the top of scroll
      //     // if (entry.target.offsetTop == 0) {
      //     //   mobileScrollHelper["top"][targetPosindex](entry.target);
      //     //   return;
      //     // }
      //   }
    });
  }
  // loop through children elements and call oberser.observe on those elements
  children.forEach(function observeEachItem(item) {
    mobileObserver.observe(item);
  });
}

/**
 * working with element at index 1 or 7
 * **/

/**
 * DELETE LATER!!!
 * **/

// function createNewOrderedArrayIndexOne(array, quantity) {
//   return array.map(function createNewOrderedList(element, index) {
//     /**
//      * classText,
//     posIndex,
//     spanText,
//     tabindex,
//     ariaHidden,
//     ariaLabel,
//      * **/
//     const objOfValues =
//       index == 1
//         ? {
//             classText: "snap-item",
//             posIndex: element.getAttribute("data-pos-index"),
//             spanText: element.firstElementChild.innerText,
//             tabindex: "0",
//             ariaHidden: "false",
//             ariaLabel: `${quantity} of 9`,
//             focusId: "currentFocused",
//           }
//         : {
//             classText: "snap-item",
//             posIndex: element.getAttribute("data-pos-index"),
//             spanText: element.firstElementChild.innerText,
//             tabindex: "-1",
//             ariaHidden: "true",
//             ariaLabel: element.getAttribute("aria-label"),
//           };
//     return objOfValues;
//   });
// }

// function createNewOrderedArrayIndexSeven(array, quantity) {
//   return array.map(function createNewOrderedList(element, index) {
//     /**
//      * classText,
//         posIndex,
//         spanText,
//         tabindex,
//         ariaHidden,
//         ariaLabel,
//      * **/
//     const objOfValues =
//       index == 7
//         ? {
//             classText: "snap-item",
//             posIndex: element.getAttribute("data-pos-index"),
//             spanText: element.firstElementChild.innerText,
//             tabindex: "0",
//             ariaHidden: "false",
//             ariaLabel: `${quantity} of 9`,
//             focusId: "currentFocused",
//           }
//         : {
//             classText: "snap-item",
//             posIndex: element.getAttribute("data-pos-index"),
//             spanText: element.firstElementChild.innerText,
//             tabindex: "-1",
//             ariaHidden: "true",
//             ariaLabel: element.getAttribute("aria-label"),
//           };
//     return objOfValues;
//   });
// }

/**
 * DELETE LATER!!!
 * **/

/**
 * create array factory func
 * **/

export function factoryFuncCreateArray(indexOfArray) {
  return function innerFunc(array, quantity, renderFunc) {
    return array.map(function createNewOrderedList(element, index) {
      /** 
     * classText,
        posIndex,
        spanText,
        tabindex,
        ariaHidden,
        ariaLabel,
     * **/
      const objOfValues =
        index == indexOfArray
          ? {
              classText: "snap-item",
              posIndex: element.getAttribute("data-pos-index"),
              spanText: element.firstElementChild.innerText,
              tabindex: "0",
              ariaHidden: "false",
              ariaLabel: `${quantity} of 9`,
              focusId: "currentFocused",
              stateFunc: renderFunc,
            }
          : {
              classText: "snap-item",
              posIndex: element.getAttribute("data-pos-index"),
              spanText: element.firstElementChild.innerText,
              tabindex: "-1",
              ariaHidden: "true",
              ariaLabel: element.getAttribute("aria-label"),
              stateFunc: renderFunc,
            };
      return objOfValues;
    });
  };
}

/**
 * mobile scroll up factory func
 * **/

function mobileScrollUpFactoryFunc(
  mobileMethodsObj,
  { moveFirstTwoItemsToEnd, moveLastItemToBeginningOfList },
  { createNewOrderedArrayIndexSeven, createNewOrderedArrayIndexOne }
) {
  return function innerFunc(
    target,
    posIndex,
    renderComponent,
    scrollType,
    arrowBtn
  ) {
    console.log(moveFirstTwoItemsToEnd, moveLastItemToBeginningOfList);
    console.log(createNewOrderedArrayIndexSeven, createNewOrderedArrayIndexOne);
    // top one
    if (posIndex == "one") {
      mobileMethodsObj["up"]["top"][posIndex](
        target,
        renderComponent,
        moveFirstTwoItemsToEnd,
        createNewOrderedArrayIndexSeven,
        scrollType,
        arrowBtn
      );
      return;
    }
    // top eight
    if (posIndex == "two") {
      mobileMethodsObj["up"]["top"][posIndex](
        target,
        renderComponent,
        moveLastItemToBeginningOfList,
        createNewOrderedArrayIndexOne,
        scrollType,
        arrowBtn
      );
      return;
    }
    // bottom nine
    if (posIndex == "nine") {
      mobileMethodsObj["up"]["bottom"][posIndex](
        target,
        renderComponent,
        moveLastItemToBeginningOfList,
        createNewOrderedArrayIndexSeven,
        scrollType,
        arrowBtn
      );
      return;
    }
  };
}

/**
 * mobile scroll down factory func
 * **/

function mobileScrollDownFactoryFunc(
  mobileMethodsObj,
  { moveFirstItemToEndOfList, moveLastTwoItemsToBeginning },
  { createNewOrderedArrayIndexOne, createNewOrderedArrayIndexSeven }
) {
  return function innerFunc(
    target,
    posIndex,
    renderComponent,
    scrollType,
    arrowBtn
  ) {
    // top one
    if (posIndex == "one") {
      mobileMethodsObj["down"]["top"][posIndex](
        target,
        renderComponent,
        moveFirstItemToEndOfList,
        createNewOrderedArrayIndexOne,
        scrollType,
        arrowBtn
      );
      return;
    }
    // bottom eight
    if (posIndex == "eight") {
      mobileMethodsObj["down"]["bottom"][posIndex](
        target,
        renderComponent,
        moveFirstItemToEndOfList,
        createNewOrderedArrayIndexSeven,
        scrollType,
        arrowBtn
      );
      return;
    }
    // bottom nine
    if (posIndex == "nine") {
      mobileMethodsObj["down"]["bottom"][posIndex](
        target,
        renderComponent,
        moveLastTwoItemsToBeginning,
        createNewOrderedArrayIndexOne,
        scrollType,
        arrowBtn
      );
      return;
    }
  };
}

/**
 * desktop scroll up factory func
 * **/

function desktopScrollUpFactoryFunc(
  desktopMethodObj,
  { moveLastItemToBeginningOfList, moveTopFourItemsToBottom },
  { createNewOrderedArrayIndexTwo, createNewOrderedArrayIndexSix }
) {
  return function innerFunc(
    target,
    posIndex,
    renderSnapItems,
    scrollType,
    arrowBtn
  ) {
    // top one
    if (posIndex == "one") {
      desktopMethodObj["up"]["top"][posIndex](
        target,
        renderSnapItems,
        moveTopFourItemsToBottom,
        createNewOrderedArrayIndexSix,
        scrollType,
        arrowBtn
      );
      return;
    }
    // top two
    if (posIndex == "two") {
      desktopMethodObj["up"]["top"][posIndex](
        target,
        renderSnapItems,
        moveLastItemToBeginningOfList,
        createNewOrderedArrayIndexTwo,
        scrollType,
        arrowBtn
      );
      return;
    }
    // top three
    if (posIndex == "three") {
      desktopMethodObj["up"]["top"][posIndex](
        target,
        renderSnapItems,
        moveLastItemToBeginningOfList,
        createNewOrderedArrayIndexTwo,
        scrollType,
        arrowBtn
      );
      return;
    }
    // bottom eight
    if (posIndex == "eight") {
      desktopMethodObj["up"]["bottom"][posIndex](
        target,
        renderSnapItems,
        moveLastItemToBeginningOfList,
        createNewOrderedArrayIndexSix,
        scrollType,
        arrowBtn
      );
      return;
    }
    // bottom nine
    if (posIndex == "nine") {
      desktopMethodObj["up"]["bottom"][posIndex](
        target,
        renderSnapItems,
        moveLastItemToBeginningOfList,
        createNewOrderedArrayIndexSix,
        scrollType,
        arrowBtn
      );
      return;
    }
  };
}

/**
 * desktop scroll down factory func
 * **/

function desktopScrollDownFactoryFunc(
  desktopMethodObj,
  { moveFirstItemToEndOfList, moveBottomFourItemsToBeginning },
  { createNewOrderedArrayIndexTwo, createNewOrderedArrayIndexSix }
) {
  return function innerFunc(
    target,
    posIndex,
    renderSnapItems,
    scrollType,
    arrowBtn
  ) {
    // top one
    if (posIndex == "one") {
      desktopMethodObj["down"]["top"][posIndex](
        target,
        renderSnapItems,
        moveFirstItemToEndOfList,
        createNewOrderedArrayIndexTwo,
        scrollType,
        arrowBtn
      );
      return;
    }
    // top two
    if (posIndex == "two") {
      desktopMethodObj["down"]["top"][posIndex](
        target,
        renderSnapItems,
        moveFirstItemToEndOfList,
        createNewOrderedArrayIndexTwo,
        scrollType,
        arrowBtn
      );
      return;
    }
    // bottom seven
    if (posIndex == "seven") {
      desktopMethodObj["down"]["bottom"][posIndex](
        target,
        renderSnapItems,
        moveFirstItemToEndOfList,
        createNewOrderedArrayIndexSix,
        scrollType,
        arrowBtn
      );
      return;
    }
    // bottom eight
    if (posIndex == "eight") {
      desktopMethodObj["down"]["bottom"][posIndex](
        target,
        renderSnapItems,
        moveFirstItemToEndOfList,
        createNewOrderedArrayIndexSix,
        scrollType,
        arrowBtn
      );
      return;
    }
    // bottom nine
    if (posIndex == "nine") {
      desktopMethodObj["down"]["bottom"][posIndex](
        target,
        renderSnapItems,
        moveBottomFourItemsToBeginning,
        createNewOrderedArrayIndexTwo,
        scrollType,
        arrowBtn
      );
      return;
    }
  };
}
/**
 * desktop
 * **/

export function observeSnapItemsContainerDesktop(
  rootElement,
  children,
  callFuncToRenderNewArray,
  initialArrayValue,
  isMobile,
  isResize
) {
  // options
  const desktopOptions = {
    root: rootElement,
    threshold: 1,
    rootMargin: "-200px 0px -200px 0px",
  };
  // call IntersectionObserver
  const desktopObserver = new IntersectionObserver(
    assignValuesToElementAttrDesktop,
    desktopOptions
  );
  console.log("desktop observer", desktopObserver);
  console.log(localStorage.getItem("cachedObserverValues"));

  // disconnect observer at mobile size

  if (isMobile) {
    console.log("isMobile true disconnect desktop scrollsnapitem observer");
    console.log(desktopObserver);
    desktopObserver.unobserve(rootElement);
    // go back to original snap item order mobile
    // const copyArrayForMobile = [];
    // copyArrayForMobile.push.apply(
    //   copyArrayForMobile,
    //   methodsForKeyboardScroll.nonArrowKeys.originalSnapitems
    // );

    // copyArrayForMobile[1].focusId = "currentFocused";

    // const sortItems = [
    //   ...document.getElementById("currentFocused").parentElement.children,
    // ].sort(function reorderItems(first, second) {
    //   const firstLabel = Number(first.getAttribute("aria-label").charAt(0));
    //   const secondLabel = Number(second.getAttribute("aria-label").charAt(0));
    //   if (secondLabel < firstLabel) return 1;
    //   if (firstLabel < secondLabel) return -1;
    //   return 0;
    // });

    // const lastItem = sortItems[sortItems.length - 1];
    // const beforeLast = sortItems.slice(0, -1);

    // const reorderArray = createNewOrderedArrayIndexOne(
    //   [lastItem, ...beforeLast],
    //   "1"
    // );

    // console.log("before rerender mobile");
    // console.log("reorderArray", reorderArray);

    // callFuncToRenderNewArray((values) => {
    //   return {
    //     ...values,
    //     bottomOrTopArray: reorderArray,
    //     targetElement: "mobile",
    //   };
    // });
    return;
  }
  console.log("testing");
  const desktopScrollHelper = {
    moveUp: {
      two: (
        target,
        observer,
        renderNewArray,
        createNewArray,
        rearrangeArrayItems
      ) => {
        target.nextElementSibling.setAttribute("tabindex", "-1");
        target.nextElementSibling.setAttribute("aria-hidden", "true");

        const { lastItem, beforeLastItem } = rearrangeArrayItems(target);

        const reorderedItems = createNewArray(
          [lastItem, ...beforeLastItem],
          "2"
        );

        observer.disconnect();

        renderNewArray((prevValues) => {
          return {
            ...prevValues,
            bottomOrTopArray: reorderedItems,
            targetElement: "two",
          };
        });
      },
      eight: (
        target,
        observer,
        renderNewArray,
        createNewArray,
        rearrangeArrayItems
      ) => {
        target.nextElementSibling.setAttribute("tabindex", "-1");
        target.nextElementSibling.setAttribute("aria-hidden", "true");

        const { lastItem, beforeLastItem } = rearrangeArrayItems(target);

        const reorderedChildren = createNewArray(
          [lastItem, ...beforeLastItem],
          "8"
        );

        observer.disconnect();

        renderNewArray((prev) => {
          return {
            ...prev,
            bottomOrTopArray: reorderedChildren,
            targetElement: "eight",
          };
        });
      },
    },
    moveDown: {
      two: (
        target,
        observer,
        renderNewArray,
        createNewArray,
        rearrangeArrayItems
      ) => {
        target.previousElementSibling.setAttribute("tabindex", "-1");
        target.previousElementSibling.setAttribute("aria-hidden", "true");
        const { firstItem, restOfArray } = rearrangeArrayItems(target);

        const reorderedSnapItems = createNewArray(
          [...restOfArray, firstItem],
          "2"
        );

        observer.disconnect();

        renderNewArray((values) => {
          return {
            ...values,
            bottomOrTopArray: reorderedSnapItems,
            targetElement: "two",
          };
        });
      },
      eight: (
        target,
        observer,
        renderNewArray,
        createNewArray,
        rearrangeArrayItems
      ) => {
        target.previousElementSibling.setAttribute("tabindex", "-1");
        target.previousElementSibling.setAttribute("aria-hidden", "true");

        const { firstItem, restOfArray } = rearrangeArrayItems(target);

        const reorderedItems = createNewArray([...restOfArray, firstItem], "8");

        observer.disconnect();

        renderNewArray((values) => {
          return {
            ...values,
            bottomOrTopArray: reorderedItems,
            targetElement: "eight",
          };
        });
      },
    },
    top: {
      one: (
        target,
        observer,
        renderNewArray,
        createNewArray,
        rearrangeArrayItems
      ) => {
        console.log(target);
        console.log("observer", observer);

        target.nextElementSibling.setAttribute("tabindex", "-1");
        target.nextElementSibling.setAttribute("aria-hidden", "true");
        console.log(target.parentElement.children);
        const { lastItem, beforeLastItem } = rearrangeArrayItems(target);
        console.log(lastItem), console.log(beforeLastItem);
        const reorderItems = createNewArray([lastItem, ...beforeLastItem], "1");
        console.log(reorderItems);
        observer.disconnect();

        // renderNewArray(reorderItems);
        renderNewArray((prev) => {
          return {
            ...prev,
            bottomOrTopArray: reorderItems,
            targetElement: "one",
          };
        });
      },
      three: (
        target,
        observer,
        renderNewArray,
        createNewArray,
        rearrangeArrayItems
      ) => {
        console.log("this is three");
        target.previousElementSibling.setAttribute("tabindex", "-1");
        target.previousElementSibling.setAttribute("aria-hidden", "true");

        const { firstItem, restOfArray } = rearrangeArrayItems(target);
        console.log("firstItem", firstItem);
        console.log("restOfArray", restOfArray);
        const neworderedItems = createNewArray(
          [...restOfArray, firstItem],
          "3"
        );
        console.log("neworderedItems", neworderedItems);
        observer.disconnect();

        renderNewArray((prev) => {
          return {
            ...prev,
            bottomOrTopArray: neworderedItems,
            targetElement: "three",
          };
        });
      },
      nine: (target, observer, renderNewArray, createNewArray) => {
        console.log(target);
        console.log("observer", observer);

        target.nextElementSibling.setAttribute("tabindex", "-1");
        target.nextElementSibling.setAttribute("aria-hidden", "true");
        console.log(target.parentElement.children);

        const scrollChildren = [...target.parentElement.children];
        const copyOfArray = [...scrollChildren];
        const firstFour = copyOfArray.slice(0, 4);
        const lastFive = copyOfArray.slice(4);
        console.log(firstFour);
        console.log(lastFive);
        const reorderedChildren = createNewArray(
          [...lastFive, ...firstFour],
          "9"
        );
        console.log(reorderedChildren);
        observer.disconnect();

        // renderNewArray(reorderedChildren);
        renderNewArray((values) => {
          return {
            ...values,
            bottomOrTopArray: reorderedChildren,
            targetElement: "nine",
          };
        });
      },
    },
    bottom: {
      one: (target, observer, renderNewArray, createNewArray) => {
        console.log(target);
        console.log("observer", observer);
        target.previousElementSibling.setAttribute("tabindex", "-1");
        target.previousElementSibling.setAttribute("aria-hidden", "true");
        console.log(target.parentElement.children);

        const snapItems = [...target.parentElement.children];
        const copyOfSnapItems = [...snapItems];

        const firstFiveItems = copyOfSnapItems.slice(0, 5);
        const lastFourItems = copyOfSnapItems.slice(5);

        const reorderedItems = createNewArray(
          [...lastFourItems, ...firstFiveItems],
          "1"
        );
        console.log(reorderedItems);
        observer.disconnect();
        // renderNewArray(reorderedItems);
        renderNewArray((prevValues) => {
          return {
            ...prevValues,
            bottomOrTopArray: reorderedItems,
            targetElement: "one",
          };
        });
      },
      seven: (
        target,
        observer,
        renderNewArray,
        createNewArray,
        rearrangeArrayItems
      ) => {
        target.nextElementSibling.setAttribute("tabindex", "-1");
        target.nextElementSibling.setAttribute("aria-hidden", "true");

        const { lastItem, beforeLastItem } = rearrangeArrayItems(target);

        const reorderChildren = createNewArray(
          [lastItem, ...beforeLastItem],
          "7"
        );

        observer.disconnect();

        renderNewArray((prevValues) => {
          return {
            ...prevValues,
            bottomOrTopArray: reorderChildren,
            targetElement: "seven",
          };
        });
      },
      nine: (
        target,
        observer,
        renderNewArray,
        createNewArray,
        rearrangeArrayItems
      ) => {
        console.log(target);
        console.log("observer", observer);

        target.previousElementSibling.setAttribute("tabindex", "-1");
        target.previousElementSibling.setAttribute("aria-hidden", "true");
        console.log(target.parentElement.children);

        const { firstItem, restOfArray } = rearrangeArrayItems(target);
        console.log(firstItem);
        console.log(restOfArray);
        const reorderArray = createNewArray([...restOfArray, firstItem], "9");
        console.log(reorderArray);
        observer.disconnect();

        // renderNewArray(reorderArray);
        renderNewArray((prevValues) => {
          return {
            ...prevValues,
            bottomOrTopArray: reorderArray,
            targetElement: "nine",
          };
        });
      },
    },
  };

  /**
   * observer callback
   * **/

  function assignValuesToElementAttrDesktop(entries, observer) {
    entries.forEach(function loopThroughItemsDesktop(entry) {
      if (!entry.isIntersecting) {
        return;
      }
      console.log(isMobile, "isMobile");
      console.log(isResize, "isResize");
      if (isResize) {
        console.log(
          "inside callback to desktop observer callback resize if statement"
        );
        return;
      }
      console.log(isResize, "isResize");
      console.log(isMobile, "isMobile");
      console.log(
        "outside callback to desktop observer callback resize if statement"
      );
      console.log("desktop");
      console.log(entry);
      console.log("previous", entry.target.previousElementSibling);
      console.log("next", entry.target.nextElementSibling);
      const targetPosindex = entry.target.getAttribute("data-pos-index");
      console.log(targetPosindex);
      console.log(entry.target);
      console.log(entry.target.offsetTop);
      // top position 1 element offsetTop is 0
      // top position 2 element offsetTop is 366
      // bottom position 8 element offsetTop is 2562
      // bottom position 9 element offsetTop is 2928
      const previousFocused = document.activeElement;
      console.log("previousFocused", previousFocused);
      console.log(previousFocused == entry.target);
      if (previousFocused == entry.target) {
        console.log("return");
        return;
      }
      /**
       * when we call setSnapItem func which will render carousel component
       * document.activeElement will be the element with id="currentFocused"
       * **/
      /**
       * one solution
       * **/
      // find current focus element using document.activeElement
      // then find the pos index of that focus element
      // then find pos index of intersecting element
      // compare the two
      // if focus element pos index is less than pos index of intersecting element user is scrolling down
      // if focus element pos index is greater pos index of intersecting element user is scrolling up
      /**
       * another solution
       * **/
      // check where the user is by getting offsetTop of snap item
      /**
       * working at top:0,366,732
       * **/
      // if (targetPosindex == "nine" && previousFocused !== entry.target) {
      //   console.log("hello, this is nine");
      //   console.log(
      //     "document.getElementByIdcurrentFocused.parentElement.children",
      //     document.getElementById("currentFocused").parentElement.children
      //   );
      //   // when previousFocused data pos index is "one" when top
      //   if (previousFocused.getAttribute("data-pos-index") == "one") {
      //     desktopScrollHelper["top"][targetPosindex](
      //       entry.target,
      //       observer,
      //       callFuncToRenderNewArray,
      //       createNewOrderedArrayIndexSix
      //     );
      //     return;
      //   }
      //   // when previousFocused data pos index is "eight" when bottom
      //   if (previousFocused.getAttribute("data-pos-index") == "eight") {
      //     desktopScrollHelper["bottom"][targetPosindex](
      //       entry.target,
      //       observer,
      //       callFuncToRenderNewArray,
      //       createNewOrderedArrayIndexSix,
      //       moveFirstItemToEndOfList
      //     );
      //     return;
      //   }
      // }

      const parentChildren = [...entry.target.parentElement.children];

      if (targetPosindex == "one" && previousFocused !== entry.target) {
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        // when parent children[0].getAttribute("data-pos-index") == "nine" run top or when initialArrayValue is null
        if (!initialArrayValue) {
          console.log("one top");
          desktopScrollHelper["top"][targetPosindex](
            entry.target,
            observer,
            callFuncToRenderNewArray,
            createNewOrderedArrayIndexTwo,
            moveLastItemToBeginningOfList
          );
          return;
        }

        if (parentChildren[0].getAttribute("data-pos-index") == "nine") {
          console.log("one top");
          desktopScrollHelper["top"][targetPosindex](
            entry.target,
            observer,
            callFuncToRenderNewArray,
            createNewOrderedArrayIndexTwo,
            moveLastItemToBeginningOfList
          );
          return;
        }
        // // when parent children[children.length - 1].getAttribute("data-pos-index") == "two" run bottom
        if (
          parentChildren[parentChildren.length - 1].getAttribute(
            "data-pos-index"
          ) == "two"
        ) {
          console.log("one bottom");
          desktopScrollHelper["bottom"][targetPosindex](
            entry.target,
            observer,
            callFuncToRenderNewArray,
            createNewOrderedArrayIndexTwo
          );
          return;
        }
      }

      if (targetPosindex == "two" && previousFocused !== entry.target) {
        if (!initialArrayValue) {
          return;
        }
        // when parentChildren[0].getAttribute("data-pos-index") == "one" run moveUp
        console.log(previousFocused.getAttribute("data-pos-index"), "data");
        if (parentChildren[0].getAttribute("data-pos-index") == "one") {
          console.log("last was three");
          desktopScrollHelper["moveUp"][targetPosindex](
            entry.target,
            observer,
            callFuncToRenderNewArray,
            createNewOrderedArrayIndexTwo,
            moveLastItemToBeginningOfList
          );
          return;
        }
        // when parentChildren[0].getAttribute("data-pos-index") == "eight" run moveDown
        if (parentChildren[0].getAttribute("data-pos-index") == "eight") {
          console.log("last was one");
          desktopScrollHelper["moveDown"][targetPosindex](
            entry.target,
            observer,
            callFuncToRenderNewArray,
            createNewOrderedArrayIndexTwo,
            moveFirstItemToEndOfList
          );

          return;
        }
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        console.log("hello this is two prev is one prev prev is nine");
        console.log(observer);
      }

      if (targetPosindex == "three" && previousFocused !== entry.target) {
        console.log("initialArrayValue", initialArrayValue);
        // when parentChildren[0].getAttribute("data-pos-index") == "nine" or !initialArrayValue run top
        if (
          !initialArrayValue ||
          parentChildren[0].getAttribute("data-pos-index") == "nine"
        ) {
          console.log("last was two");
          desktopScrollHelper["top"][targetPosindex](
            entry.target,
            observer,
            callFuncToRenderNewArray,
            createNewOrderedArrayIndexTwo,
            moveFirstItemToEndOfList
          );
          return;
        }
      }
      /**
       * working at bottom: 2195,2562,2928
       * **/
      // when target posindex is eight && target.nextElementSibling.getAttribute("data-pos-index") == "nine" && target.nextElementSibling.nextElementSibling.getAttribute("data-pos-index") == "one"
      // take element with posindex of one and placed it at the beginning of array

      if (targetPosindex == "seven" && previousFocused !== entry.target) {
        // when parentChildren[parentChildren.length - 1].getAttribute("data-pos-index") == "one"
        if (
          parentChildren[parentChildren.length - 1].getAttribute(
            "data-pos-index"
          ) == "one"
        ) {
          desktopScrollHelper["bottom"][targetPosindex](
            entry.target,
            observer,
            callFuncToRenderNewArray,
            createNewOrderedArrayIndexSix,
            moveLastItemToBeginningOfList
          );
          return;
        }
      }

      if (targetPosindex == "eight" && previousFocused !== entry.target) {
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        // when parentChildren[parentChildren.length - 1].getAttribute("data-pos-index") == "two" run moveUp
        if (
          parentChildren[parentChildren.length - 1].getAttribute(
            "data-pos-index"
          ) == "two"
        ) {
          desktopScrollHelper["moveUp"][targetPosindex](
            entry.target,
            observer,
            callFuncToRenderNewArray,
            createNewOrderedArrayIndexSix,
            moveLastItemToBeginningOfList
          );
          return;
        }
        // when parentChildren[parentChildren.length - 1].getAttribute("data-pos-index") == "nine" run moveDown
        if (
          parentChildren[parentChildren.length - 1].getAttribute(
            "data-pos-index"
          ) == "nine"
        ) {
          desktopScrollHelper["moveDown"][targetPosindex](
            entry.target,
            observer,
            callFuncToRenderNewArray,
            createNewOrderedArrayIndexSix,
            moveFirstItemToEndOfList
          );
          return;
        }
        console.log("this is eight bottom");
        return;
      }
      if (targetPosindex == "nine" && previousFocused !== entry.target) {
        console.log(
          "document.getElementByIdcurrentFocused.parentElement.children",
          document.getElementById("currentFocused").parentElement.children
        );
        // when parentChildren[0].getAttribute("data-pos-index") == "eight" run top
        if (parentChildren[0].getAttribute("data-pos-index") == "eight") {
          desktopScrollHelper["top"][targetPosindex](
            entry.target,
            observer,
            callFuncToRenderNewArray,
            createNewOrderedArrayIndexSix
          );
          return;
        }
        // when parentChildren[parentChildren.length - 1].getAttribute("data-pos-index") == "one" run bottom
        if (
          parentChildren[parentChildren.length - 1].getAttribute(
            "data-pos-index"
          ) == "one"
        ) {
          desktopScrollHelper["bottom"][targetPosindex](
            entry.target,
            observer,
            callFuncToRenderNewArray,
            createNewOrderedArrayIndexSix,
            moveFirstItemToEndOfList
          );
        }
        return;
      }
      observerHelper(entry.target);
    });
  }
  // loop through children elements and call oberser.observe on those elements
  children.forEach(function obserbeEachChild(child) {
    desktopObserver.observe(child);
  });
}

/**
 * move item to top of list
 * **/

export function moveLastItemToBeginningOfList(target) {
  const parentChildren = [...target.parentElement.children];
  const arr = [...parentChildren];
  const lastItem = arr[arr.length - 1];
  const beforeLastItem = arr.slice(0, -1);
  console.log(lastItem), console.log(beforeLastItem);
  // const result = {
  //   lastItem,
  //   beforeLastItem,
  // };
  const result = [lastItem, ...beforeLastItem];
  return result;
}

/**
 * move item to bottom of list
 * **/

export function moveFirstItemToEndOfList(target) {
  const parentChildren = [...target.parentElement.children];
  const arr = [...parentChildren];
  const firstItem = arr[0];
  const restOfArray = arr.slice(1);
  // const result = {
  //   firstItem,
  //   restOfArray,
  // };
  const result = [...restOfArray, firstItem];
  return result;
}

/**
 * move two items to top of list
 * **/

export function moveLastTwoItemsToBeginning(target) {
  const parentChildren = [...target.parentElement.children];
  const copiedArr = [...parentChildren];
  const lastItem = copiedArr[copiedArr.length - 1];
  const secondToLastItem = copiedArr[copiedArr.length - 2];
  const beforeLastItems = copiedArr.slice(0, -2);
  const result = [secondToLastItem, lastItem, ...beforeLastItems];
  return result;
}

/**
 * move two items to bottom of list
 * **/

export function moveFirstTwoItemsToEnd(target) {
  const parentChildren = [...target.parentElement.children];
  const copiedArray = [].concat(parentChildren);
  const firstItem = copiedArray[0];
  const secondItem = copiedArray[1];
  const restOfArray = copiedArray.slice(2);
  const result = [...restOfArray, firstItem, secondItem];
  return result;
}

/**
 * move top four item to bottom
 * **/

function moveTopFourItemsToBottom(target) {
  const parentChildren = [...target.parentElement.children];
  const copiedArr = [...parentChildren];
  const firstFour = copiedArr.slice(0, 4);
  const lastFive = copiedArr.slice(4);
  const result = [...lastFive, ...firstFour];
  return result;
}

/**
 * move bottom four to top
 * **/

function moveBottomFourItemsToBeginning(target) {
  const parentChildren = [...target.parentElement.children];
  const copiedArr = [...parentChildren];
  const lastFour = copiedArr.slice(-4);
  const firstFive = copiedArr.slice(0, -4);
  const result = [...lastFour, ...firstFive];
  return result;
}

function observerHelper(target, desktopHelper) {
  // if current target element tabindex === "0" return
  // when we rerender our items the target element tabindex will be "0"
  // we are calling .focus() in our React.useEffect()
  const targetTabindex = target.getAttribute("tabindex");
  const elementID = target.getAttribute("id");
  const elementAriaHidden = target.getAttribute("aria-hidden");
  if (targetTabindex === "0") {
    return;
  }

  !elementID ? target.setAttribute("id", "currentFocused") : null;

  setTimeout(() => {
    elementAriaHidden == "true"
      ? target.setAttribute("aria-hidden", "false")
      : null;
  }, 150);

  // if current target element tabindex == "-1" assign "0" to tabindex of target
  const beforeElement = target.previousElementSibling;
  const afterElement = target.nextElementSibling;
  targetTabindex == "-1" ? target.setAttribute("tabindex", "0") : null;

  if (beforeElement) {
    beforeElement.getAttribute("tabindex") === "0"
      ? beforeElement.setAttribute("tabindex", "-1")
      : null;

    beforeElement.getAttribute("id") == "currentFocused"
      ? beforeElement.setAttribute("id", "")
      : null;

    beforeElement.getAttribute("aria-hidden") == "false"
      ? beforeElement.setAttribute("aria-hidden", "true")
      : null;
  }

  if (afterElement) {
    afterElement.getAttribute("tabindex") === "0"
      ? afterElement.setAttribute("tabindex", "-1")
      : null;

    afterElement.getAttribute("id") == "currentFocused"
      ? afterElement.setAttribute("id", "")
      : null;

    afterElement.getAttribute("aria-hidden") == "false"
      ? afterElement.setAttribute("aria-hidden", "true")
      : null;
  }
  target.focus();
}

function desktopPreviousFocusedHelper(target) {
  const focusedItem = document.activeElement;
  const dataFromLocalStorage = !localStorage.getItem("cachedValues")
    ? null
    : JSON.parse(localStorage.getItem("cachedValues"));
  const cachedObj = dataFromLocalStorage
    ? dataFromLocalStorage
    : { prevFocused: focusedItem };
  console.log(cachedObj);
}

/**
 * wheel event instead of intersection observer to work with desktop/mobile screen size
 * when user zoom in
 * **/

export function focusCenteredSnapItemOnWheelScrollDesktopMobile(event) {
  const screenSize = window.innerWidth;
  console.log(event);
  console.log("screenSize", screenSize);
  const { deltaY } = event;
  const currentFocused = document.getElementById("currentFocused");
  const targetPosIndex = currentFocused.getAttribute("data-pos-index");
  console.log(currentFocused, "currentFocused");
  // get element with id currentFocused
  // set tabindex to "-1"
  currentFocused.setAttribute("tabindex", "-1");
  // remove id attribute
  currentFocused.removeAttribute("id");
  // aria-hidden "true"
  currentFocused.setAttribute("aria-hidden", "true");

  // when deltaY is negative run scrollingUpHelper
  if (deltaY < 0) {
    /**
     * mobile
     * **/
    if (screenSize <= 375) {
      // top one
      /**
       * different order of snap items without using resize event listener and calling setSnapArray to render carousel component
       * **/
      //   if (targetPosIndex == "one") {
      //     const lastItem =
      //       currentFocused.parentElement.children[
      //         currentFocused.parentElement.children.length - 1
      //       ];
      //     setTimeout(() => {
      //       currentFocused.parentElement.setAttribute(
      //         "data-item-order",
      //         "mobile-one-last"
      //       );
      //       applyFocusSnapItemAttr(lastItem);
      //       lastItem.focus();
      //       lastItem.scrollIntoView();
      //     }, 500);
      //     return;
      //   }
      //   if (targetPosIndex == "two") {
      //     setTimeout(() => {
      //       currentFocused.parentElement.setAttribute(
      //         "data-item-order",
      //         "mobile-nine-first"
      //       );
      //     }, 500);
      //   }
      //   if (targetPosIndex == "nine") {
      //     setTimeout(() => {
      //       currentFocused.parentElement.setAttribute(
      //         "data-item-order",
      //         "standard"
      //       );
      //     }, 500);
      //   }
      /**
       * different order of snap items without using resize event listener and calling setSnapArray to render carousel component
       * **/
      /**
       * work with resize event listener
       * **/
      if (
        targetPosIndex == "one" ||
        targetPosIndex == "two" ||
        targetPosIndex == "nine"
      ) {
        mobileMouseScrollUp(
          currentFocused,
          targetPosIndex,
          this.setSnapArray,
          "mouse",
          null
        );
        return;
      }
      /**
       * work with resize event listener
       * **/
      // if (targetPosIndex == "one") {
      //   mobileScrollHelper["up"]["top"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveFirstTwoItemsToEnd,
      //     createNewOrderedArrayIndexSeven,
      //     "mouse"
      //   );
      //   return;
      // }
      // // top eight
      // if (targetPosIndex == "two") {
      //   mobileScrollHelper["up"]["top"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexOne,
      //     "mouse"
      //   );
      //   return;
      // }
      // // bottom nine
      // if (targetPosIndex == "nine") {
      //   mobileScrollHelper["up"]["bottom"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSeven,
      //     "mouse"
      //   );
      //   return;
      // }
    }

    /**
     * desktop
     * **/

    if (screenSize >= 1440) {
      if (
        targetPosIndex == "one" ||
        targetPosIndex == "two" ||
        targetPosIndex == "three" ||
        targetPosIndex == "eight" ||
        targetPosIndex == "nine"
      ) {
        desktopMouseScrollUp(
          currentFocused,
          targetPosIndex,
          this.setSnapArray,
          "mouse",
          null
        );
        return;
      }

      // // top one
      // if (targetPosIndex == "one") {
      //   desktopScrollHelper["up"]["top"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveTopFourItemsToBottom,
      //     createNewOrderedArrayIndexSix,
      //     "mouse"
      //   );
      //   return;
      // }
      // // top two
      // if (targetPosIndex == "two") {
      //   desktopScrollHelper["up"]["top"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexTwo,
      //     "mouse"
      //   );
      //   return;
      // }
      // // top three
      // if (targetPosIndex == "three") {
      //   desktopScrollHelper["up"]["top"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexTwo,
      //     "mouse"
      //   );
      //   return;
      // }
      // // bottom eight
      // if (targetPosIndex == "eight") {
      //   desktopScrollHelper["up"]["bottom"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSix,
      //     "mouse"
      //   );
      //   return;
      // }
      // // bottom nine
      // if (targetPosIndex == "nine") {
      //   desktopScrollHelper["up"]["bottom"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveLastItemToBeginningOfList,
      //     createNewOrderedArrayIndexSix,
      //     "mouse"
      //   );
      //   return;
      // }
    }

    scrollingUpHelper(currentFocused);
    setTimeout(() => {
      document.getElementById("currentFocused").focus();
    }, 500);

    console.log("scrolling up");
  }
  // when deltaY is positive run scrollingDownHelper
  if (deltaY > 0) {
    /**
     * mobile
     * **/
    if (screenSize <= 375) {
      /**
       * different order of snap items without using resize event listener and calling setSnapArray to render carousel component
       * **/

      // if (targetPosIndex == "one") {
      //   setTimeout(() => {
      //     currentFocused.parentElement.setAttribute(
      //       "data-item-order",
      //       "standard"
      //     );
      //   }, 500);
      // }

      // if (targetPosIndex == "eight") {
      //   setTimeout(() => {
      //     currentFocused.parentElement.setAttribute(
      //       "data-item-order",
      //       "mobile-one-last"
      //     );
      //   }, 500);
      // }

      // if (targetPosIndex == "nine") {
      //   setTimeout(() => {
      //     currentFocused.parentElement.setAttribute(
      //       "data-item-order",
      //       "mobile-nine-first"
      //     );

      //     const firstItem = currentFocused.parentElement.children[0];

      //     applyFocusSnapItemAttr(firstItem);

      //     firstItem.focus();
      //     firstItem.scrollIntoView();
      //   }, 500);

      //   return;
      // }

      /**
       * different order of snap items without using resize event listener and calling setSnapArray to render carousel component
       * **/

      /**
       * work with resize event listener
       * **/
      if (
        targetPosIndex == "one" ||
        targetPosIndex == "eight" ||
        targetPosIndex == "nine"
      ) {
        mobileMouseScrollDown(
          currentFocused,
          targetPosIndex,
          this.setSnapArray,
          "mouse",
          null
        );
        return;
      }
      /**
       * work with resize event listener
       * **/
      // // top one
      // if (targetPosIndex == "one") {
      //   mobileScrollHelper["down"]["top"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexOne,
      //     "mouse"
      //   );
      //   return;
      // }
      // // bottom eight
      // if (targetPosIndex == "eight") {
      //   mobileScrollHelper["down"]["bottom"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSeven,
      //     "mouse"
      //   );
      //   return;
      // }
      // // bottom nine
      // if (targetPosIndex == "nine") {
      //   mobileScrollHelper["down"]["bottom"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveLastTwoItemsToBeginning,
      //     createNewOrderedArrayIndexOne,
      //     "mouse"
      //   );
      //   return;
      // }
    }

    /**
     * desktop
     * **/

    if (screenSize >= 1440) {
      if (
        targetPosIndex == "one" ||
        targetPosIndex == "two" ||
        targetPosIndex == "seven" ||
        targetPosIndex == "eight" ||
        targetPosIndex == "nine"
      ) {
        desktopMouseScrollDown(
          currentFocused,
          targetPosIndex,
          this.setSnapArray,
          "mouse",
          null
        );
        return;
      }

      // // top one
      // if (targetPosIndex == "one") {
      //   desktopScrollHelper["down"]["top"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexTwo,
      //     "mouse"
      //   );
      //   return;
      // }
      // // top two
      // if (targetPosIndex == "two") {
      //   desktopScrollHelper["down"]["top"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexTwo,
      //     "mouse"
      //   );
      //   return;
      // }
      // // bottom seven
      // if (targetPosIndex == "seven") {
      //   desktopScrollHelper["down"]["bottom"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSix,
      //     "mouse"
      //   );
      //   return;
      // }
      // // bottom eight
      // if (targetPosIndex == "eight") {
      //   desktopScrollHelper["down"]["bottom"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveFirstItemToEndOfList,
      //     createNewOrderedArrayIndexSix,
      //     "mouse"
      //   );
      //   return;
      // }
      // // bottom nine
      // if (targetPosIndex == "nine") {
      //   desktopScrollHelper["down"]["bottom"][targetPosIndex](
      //     currentFocused,
      //     this.setSnapArray,
      //     moveBottomFourItemsToBeginning,
      //     createNewOrderedArrayIndexTwo,
      //     "mouse"
      //   );
      //   return;
      // }
    }

    scrollingDownHelper(currentFocused);
    setTimeout(() => {
      document.getElementById("currentFocused").focus();
    }, 500);
    console.log("scrolling down");
    /**
     * desktop
     * **/
  }
}

/**
 * scrolling up helper
 * **/

function scrollingUpHelper(target, btnUpClicked) {
  const previousSnapItem = target.previousElementSibling;
  // set tabindex to "0"
  previousSnapItem.setAttribute("tabindex", "0");
  // aria-hidden "false"
  previousSnapItem.setAttribute("aria-hidden", "false");
  // add id attribute "currentFocused"
  previousSnapItem.setAttribute("id", "currentFocused");
}

/**
 * scrolling down helper
 * **/

function scrollingDownHelper(target, btnDownClicked) {
  const nextSnapItem = target.nextElementSibling;
  // set tabindex to "0"
  nextSnapItem.setAttribute("tabindex", "0");
  // aria-hidden "false"
  nextSnapItem.setAttribute("aria-hidden", "false");
  // add id attribute "currentFocused"
  nextSnapItem.setAttribute("id", "currentFocused");
}

/**
 * change current snap item attr
 * **/

function changeCurrentSnapItemAttr(target) {
  // set tabindex to "-1"
  target.setAttribute("tabindex", "-1");
  // remove id attribute
  target.removeAttribute("id");
  // aria-hidden "true"
  target.setAttribute("aria-hidden", "true");
}

/**
 * apply focus snap item attr
 * **/

function applyFocusSnapItemAttr(target) {
  // set tabindex to "0"
  target.setAttribute("tabindex", "0");
  // aria-hidden "false"
  target.setAttribute("id", "currentFocused");
  // add id attribute "currentFocused"
  target.setAttribute("aria-hidden", "false");
}

/**
 * resize mobile. desktop going to mobile
 * **/

export function resizeDesktopToMobile(
  container,
  moveLastItemFunc,
  moveFirstItemFunc,
  resizeFocusFunc,
  createChildrenFunc
) {
  const focusedSnapItem = document.getElementById("currentFocused");

  const targetPosindex = focusedSnapItem.getAttribute("data-pos-index");

  // dont move snap items
  if (
    targetPosindex == "three" ||
    targetPosindex == "four" ||
    targetPosindex == "five" ||
    targetPosindex == "six" ||
    targetPosindex == "seven"
  ) {
    // render array
    const copiedItems = [...focusedSnapItem.parentElement.children];

    const focusItemBeforeReplaceChildren = document.activeElement;

    // container.replaceChildren();
    const appendSnapItemsToContainer = createChildrenFunc(copiedItems);

    container.append(appendSnapItemsToContainer);

    resizeFocusFunc(focusItemBeforeReplaceChildren);
    return;
  }
  // move snap items
  // top
  if (targetPosindex == "one" || targetPosindex == "two") {
    // top item goes to bottom

    const arrayForTopItemToBottom = moveFirstItemFunc(focusedSnapItem);

    const focusItemBeforeReplaceChildren = document.activeElement;

    container.replaceChildren();

    console.log(arrayForTopItemToBottom, "arrayForTopItemToBottom");

    const appendElementsToContainer = createChildrenFunc(
      arrayForTopItemToBottom
    );
    console.log(appendElementsToContainer, "appendElementsToContainer");
    console.log(container, "container");
    container.append(appendElementsToContainer);

    resizeFocusFunc(focusItemBeforeReplaceChildren);
    return;
  }
  // bottom
  if (targetPosindex == "eight" || targetPosindex == "nine") {
    // bottom item goes to top
    const arrayForBottomItemToBeginning = moveLastItemFunc(focusedSnapItem);

    const focusItemBeforeReplaceChildren = document.activeElement;

    // container.replaceChildren();

    const appendSnapItemsToContainer = createChildrenFunc(
      arrayForBottomItemToBeginning
    );

    container.append(appendSnapItemsToContainer);

    resizeFocusFunc(focusItemBeforeReplaceChildren);
    return;
  }
}

/**
 * resize desktop. mobile going to desktop
 * **/

export function resizeMobileToDesktop(
  container,
  moveLastItemFunc,
  moveFirstItemFunc,
  resizeFocusFunc,
  createChildrenFunc
) {
  const currentFocusedItem = document.getElementById("currentFocused");

  const targetPosindex = currentFocusedItem.getAttribute("data-pos-index");
  // dont move snap items
  if (
    targetPosindex == "three" ||
    targetPosindex == "four" ||
    targetPosindex == "five" ||
    targetPosindex == "six" ||
    targetPosindex == "seven"
  ) {
    // render array
    const copiedSnapItemsArray = [...currentFocusedItem.parentElement.children];

    const focusItemBeforeReplaceChildren = document.activeElement;

    // container.replaceChildren();

    const appendSnapItemsArray = createChildrenFunc(copiedSnapItemsArray);

    container.append(appendSnapItemsArray);

    resizeFocusFunc(focusItemBeforeReplaceChildren);
    return;
  }
  // move snap items
  if (targetPosindex == "one" || targetPosindex == "two") {
    // bottom item goes to top
    const lastItemToBeginnging = moveLastItemFunc(currentFocusedItem);

    const focusItemBeforeReplaceChildren = document.activeElement;

    // container.replaceChildren();
    const appendItemsToScrollContainer =
      createChildrenFunc(lastItemToBeginnging);

    container.append(appendItemsToScrollContainer);

    resizeFocusFunc(focusItemBeforeReplaceChildren);
    return;
  }
  if (targetPosindex == "eight" || targetPosindex == "nine") {
    // top item goes to bottom
    const topItemToBottom = moveFirstItemFunc(currentFocusedItem);

    const focusItemBeforeReplaceChildren = document.activeElement;

    // container.replaceChildren();

    const appendSnapItemsToScrollContainer =
      createChildrenFunc(topItemToBottom);

    container.append(appendSnapItemsToScrollContainer);

    resizeFocusFunc(focusItemBeforeReplaceChildren);
    return;
  }
}

/**
 * resize focus correct item
 * **/

export function resizeFocusCorrectItem(target) {
  if (
    target.getAttribute("id") == "upBtn" ||
    target.getAttribute("id") == "downBtn"
  ) {
    document.getElementById("currentFocused").focus();
    document.getElementById("currentFocused").scrollIntoView();
    setTimeout(() => {
      target.focus();
    }, 80);
    return;
  }

  console.log(target, "target after replacechildren()");

  if (document.activeElement.tagName == "BODY") {
    console.log("focus is on body element");
    target.focus();
    target.scrollIntoView();
    return;
  }
}

/**
 * assign item order attr
 * **/

function assignItemOrderAttr(focusedElement, attrValue, time) {
  setTimeout(() => {
    focusedElement.parentElement.setAttribute("data-item-order", attrValue);
  }, time);
}
