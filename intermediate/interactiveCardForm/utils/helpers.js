// number only regex
const regex = /[0-9\-]/gi;
// letters and space regex
const regexForName = /[a-zA-Z\s]/g;

const objOfRegularExpressions = {
  number: /[0-9\-]/gi,
  spaceAndNumber: /[0-9\s-]/gi,
  name: /[a-zA-Z\s]/g,
};

const objOfZerosForCardNumberDisplay = {
  notAmex: "0000 0000 0000 0000",
  amex: "0000 000000 00000",
};

const refToPrevClickCreditCardBtn = {
  prevCardBtnClick: null,
};

const currentDate = new Date();

// const changeOtherCardsAttr

// const objOfActionsBasedOnLength = {};

const amexObjOfActionsBasedOnLength = {
  5: (event, conditionalCheckFunc, appendOrRemoveValFunc) => {
    conditionalCheckFunc(event, appendOrRemoveValFunc);
  },
  12: (event, conditionalCheckFunc, appendOrRemoveValFunc) => {
    conditionalCheckFunc(event, appendOrRemoveValFunc);
  },
};

function eventInputValueHelper(target, inputType) {
  // passing event.target and string name or number
  const valueBasedOnRegex = target.value.match(
    objOfRegularExpressions[inputType]
  );
  target.value = !valueBasedOnRegex ? "" : valueBasedOnRegex.join("");
}

// cardholder name
export function cardHolderNameHelper(event) {
  // call value helper
  eventInputValueHelper(event.target, "name");
  // destructure this obj
  const { creditCardHolder } = this;
  linkCreditCardInfoToInputs(event.target, creditCardHolder.current, "name");
  // if (event.target.value === "") {
  //   creditCardHolder.current.innerText = "Jane Appleseed";
  // } else {
  //   creditCardHolder.current.innerText = event.target.value;
  // }
}
// credit card number
export function creditCardNumberHelper(event) {
  console.log("refToPrevClickCreditCardBtn", refToPrevClickCreditCardBtn);
  // destructure this obj
  const { cardNumber, setCreditCardState, creditCardDisplayRefObj } = this;
  // when user copy their credit card number into number input
  if (event.ctrlKey && event.code == "KeyV") {
    // add space to credit card number at length 5,10,15
    const arrOfCharacters = [...event.target.value];
    const creditCardNumberWithAddedSpace = arrOfCharacters.reduce(
      function addSpaceEachFourDigits(buildingUp, currentValue, index) {
        // index will starts at 0 we want to work with length so we add 1
        const addOneToIndex = index + 1;
        if (addOneToIndex == 16) {
          return [...buildingUp, currentValue];
        }
        // every fourth digit add space
        if (addOneToIndex % 4 === 0) {
          return [...buildingUp, currentValue, " "];
        }
        // append value to array
        return [...buildingUp, currentValue];
      },
      []
    );
    event.target.value = creditCardNumberWithAddedSpace.join("");
    // selected credit card icon based on first value
    highlightSelectedCardBasedOnFirstDigit(event, refToPrevClickCreditCardBtn);
  }
  /**
   * we will have an input helper func to allow space but we will have algorithm to remove it
   * as user hit space not when we add empty string to input
   * eventInputValueHelper(event.target, "number") will remove space after we execute
   * addOrRemoveValueFromCardNumInput
   * **/
  eventInputValueHelper(event.target, "spaceAndNumber");
  removeSpaceKeyEntryCardNumber(event);
  // call value helper
  const { value } = event.target;
  // get credit card number input value
  const lengthOfValueBeforeKeyUp = value.length;
  // without checking for lengthOfValue > 0 when user enter value to credit card number
  // then delete one input is an empty string "", we will enter if statement
  // because 0 % 4 === 0 or 0 % 5 will be true
  if (lengthOfValueBeforeKeyUp > 0 && lengthOfValueBeforeKeyUp % 5 === 0) {
    addRemoveValBasedOnKeyPressed(event, addOrRemoveValueFromCardNumInput);
  }
  // work with input values first then card number display element
  const newLength =
    value.length > 0 && value.length % 5 == 0
      ? event.code == "Backspace"
        ? value.length - 1
        : value.length + 1
      : value.length;
  // assign copied of zeros string to credit card # display
  // combine values user entered and copied string of zeros
  const combinedValuesOfInputsAndStrOfZeros = [
    ...event.target.value,
    ...objOfZerosForCardNumberDisplay["notAmex"].slice(newLength),
  ].join("");
  cardNumber.current.innerText = combinedValuesOfInputsAndStrOfZeros;
  // selected credit card icon based on first value
  conditionalCheckerForFirstDigitHighlight(
    event,
    highlightSelectedCardBasedOnFirstDigit,
    refToPrevClickCreditCardBtn,
    { setCreditCardState, creditCardDisplayRefObj }
  );
  // if (event.target.value.length == 1 && event.code != "Backspace") {
  //   highlightSelectedCardBasedOnFirstDigit(event, refToPrevClickCreditCardBtn);
  // }
  // if (event.target.value.length === 0 && event.code == "Backspace") {
  //   // since we will assign btn with data-selected="true" to
  //   // prevCardBtnClick we can selected element assigned to prevCardBtnClick
  //   // instead of using document.querySelector()
  //   refToPrevClickCreditCardBtn.prevCardBtnClick.getAttribute(
  //     "data-selected"
  //   ) == "true"
  //     ? refToPrevClickCreditCardBtn.prevCardBtnClick.setAttribute(
  //         "data-selected",
  //         "false"
  //       )
  //     : null;
  //   // assign null to refToPrevClickCreditCardBtn.prevCardBtnClick
  //   refToPrevClickCreditCardBtn.prevCardBtnClick = null;
  // }
}

// credit card number amex
// 787878965423654
export function amexCreditCardNumHelper(event) {
  console.log("refToPrevClickCreditCardBtn", refToPrevClickCreditCardBtn);
  const { amexCardNumber, setCreditCardState, creditCardDisplayRefObj } = this;
  const { target } = event;
  // when user copy their credit card number into number input
  if (event.ctrlKey && event.code == "KeyV") {
    const arrOfStrChars = [...event.target.value];
    const arrOfCharsWithSpaceAdded = arrOfStrChars.reduce(
      function addSpaceToNumInput(buildingUp, currentValue, index) {
        const addOneToIndex = index + 1;
        // index will starts at 0 we want to work with length so we add 1
        if (addOneToIndex == 17) {
          // return [...buildingUp, currentValue];
          buildingUp.push(currentValue);
          return buildingUp;
        }
        // add space to credit card number at length 4,10
        if (addOneToIndex == 4 || addOneToIndex == 10) {
          // return [...buildingUp, currentValue, " "];
          buildingUp.push.apply(buildingUp, [currentValue, " "]);
          return buildingUp;
        }
        buildingUp.push(currentValue);
        return buildingUp;
      },
      []
    );
    event.target.value = arrOfCharsWithSpaceAdded.join("");
    // selected credit card icon based on first value
    highlightSelectedCardBasedOnFirstDigit(event, refToPrevClickCreditCardBtn);
  }
  /**
   * we will have an input helper func to allow space but we will have algorithm to remove it
   * as user hit space not when we add empty string to input
   * eventInputValueHelper(event.target, "number") will remove space after we execute
   * addOrRemoveValueFromCardNumInput
   * **/
  eventInputValueHelper(event.target, "spaceAndNumber");
  removeSpaceKeyEntryCardNumber(event);
  /**
   * add or remove space at length 5 and 12 0000 000000 00000
   * **/
  // call func based on length of input
  if (target.value.length == 5 || target.value.length == 12) {
    amexObjOfActionsBasedOnLength[target.value.length](
      event,
      addRemoveValBasedOnKeyPressed,
      addOrRemoveValueFromCardNumInput
    );
    console.log(event.target.value.length);
    // const lengthToCopyStrForDisplay =
    //   event.code == "Backspace"
    //     ? target.value.length - 1
    //     : target.value.length + 1;
    // console.log(lengthToCopyStrForDisplay);
    // console.log(
    //   objOfZerosForCardNumberDisplay["amex"].slice(lengthToCopyStrForDisplay)
    // );
  }

  // work with input values first then card number display element
  // copy display value based on input value length
  const combineInputValuesWithStrOfZeros = [
    ...event.target.value,
    ...objOfZerosForCardNumberDisplay["amex"].slice(target.value.length),
  ].join("");
  amexCardNumber.current.innerText = combineInputValuesWithStrOfZeros;
  // selected credit card icon based on first value
  conditionalCheckerForFirstDigitHighlight(
    event,
    highlightSelectedCardBasedOnFirstDigit,
    refToPrevClickCreditCardBtn,
    { setCreditCardState, creditCardDisplayRefObj }
  );
}

function addOrRemoveValueFromCardNumInput(string, addOrRemove) {
  const arrOfStrings = [...string];
  const copyOfArr = [].concat(arrOfStrings);
  const lastValueOfArr = copyOfArr.pop();
  // add empty string and lastValue to arr
  const arrWithAddedLastValAndSpace = [...copyOfArr, " ", lastValueOfArr];
  // when user hit "backspace" our algorithm will remove the last value
  // of input value which will be the empty space " "
  return addOrRemove == "add" ? arrWithAddedLastValAndSpace : copyOfArr;
}

// remove space key entry

function removeSpaceKeyEntryCardNumber(event) {
  const { code } = event;
  if (code == "Space") {
    const arrForRemovingLastValue = [...event.target.value];
    arrForRemovingLastValue.pop();
    event.target.value = arrForRemovingLastValue.join("");
  }
}

// add or remove value based on key pressed

function addRemoveValBasedOnKeyPressed(event, funcToAddOrRemoveNumFromInput) {
  // want code and target from event obj
  const { code, target } = event;
  if (code == "Backspace") {
    // call join on array returned from addOrRemoveValueFromCardNumInput
    // then assign string return from calling join() to event.targer.value
    target.value = funcToAddOrRemoveNumFromInput(target.value, "remove").join(
      ""
    );
  } else {
    target.value = funcToAddOrRemoveNumFromInput(target.value, "add").join("");
  }
}

// exp month
export function expirationMonthHelper(event) {
  const currMonthPlusOne = currentDate.getMonth() + 1;
  // const currMonthPlusOne = 10 + 1;
  // destructure this obj
  const { current } = this.monthRef;
  const { value } = event.target;
  // call value helper
  eventInputValueHelper(event.target, "number");
  // when user press 1 and length is 1 we want to check
  if (currMonthPlusOne >= 10) {
    // key 0 to 9 is not allowed
    value.length == 1
      ? (event.target.value = "1")
      : Number(value) > 12
      ? // if input value is greater than 13 assign "12"
        (event.target.value = "12")
      : Number(value) >= currMonthPlusOne
      ? (event.target.value = value)
      : (event.target.value = "1");
  } else {
    // check value instead of value.length
    // we want to allow user to enter 1 as an input value
    if (value.length == 1 && Number(value) == 1 && currMonthPlusOne == 1) {
      event.target.value = "01";
      return;
    }

    value.length < 2
      ? Number(value) <= 1
        ? (event.target.value = value)
        : // value is not 1
        Number(value) >= currMonthPlusOne
        ? (event.target.value = `0${value}`)
        : (event.target.value = "0")
      : // user gets here input value length is 2
      Number(value) >= currMonthPlusOne
      ? (event.target.value = value)
      : // if user enter incorrect month help them by assigning current month to input
        (event.target.value =
          currMonthPlusOne > 9
            ? `${currMonthPlusOne}`
            : `0${currMonthPlusOne}`);
  }
  // if (currMonthPlusOne < 10) {
  //   // if value is greater than equal to current month
  //   // concat "0" and Number(value) and assign to input
  //   // Number(value) <= currMonthPlusOne
  //   //   ? (event.target.value = `0${value}`)
  //   //   : (event.target.value = "0");
  //   Number(value) >= currMonthPlusOne
  //     ? (event.target.value = `0${value}`)
  //     : (event.target.value = "0");
  // }
  // call linked display to input
  linkCreditCardInfoToInputs(event.target, current, "number", "front");
  // if (event.target.value === "") {
  //   monthRef.current.innerText = "00";
  // } else {
  //   monthRef.current.innerText = `${event.target.value}`;
  // }
}
// exp year
export function expirationYearHelper(event) {
  const currentYear = currentDate.toDateString().slice(-4).slice(-2);
  const { value } = event.target;
  // destructure this obj
  const { current } = this.yearRef;
  // call value helper
  eventInputValueHelper(event.target, "number");
  if (value.length == 2) {
    Number(value) >= Number(currentYear)
      ? (event.target.value = value)
      : (event.target.value = `${currentYear.split("")[0]}`);
  }
  // call linked display to input
  linkCreditCardInfoToInputs(event.target, current, "number", "front");
}
// cvc
export function cvcDigitsHelper(event) {
  // destructure this obj
  const { current } = this.cvcRef;
  // call value helper
  eventInputValueHelper(event.target, "number");
  // call linked display to input
  linkCreditCardInfoToInputs(event.target, current, "back");
}

// cvc amex
export function cvcAmexDigitHelper(event) {
  const { current } = this.amexCvcRef;
  if (event.target.value === "") {
    current.innerText = "0000";
  } else {
    current.innerText = event.target.value;
  }
}

function linkCreditCardInfoToInputs(
  target,
  displayElement,
  typeOfInput,
  sideOfCard
) {
  if (target.value === "") {
    if (typeOfInput == "name") {
      displayElement.innerText = "Jane Appleseed";
    } else {
      displayElement.innerText = sideOfCard == "front" ? "00" : "000";
    }
  } else {
    displayElement.innerText = `${target.value}`;
  }
}

export function creditCardSelectorHelper(event) {
  const { target } = event;
  const { setCreditCardState, creditCardDisplayRefObj } = this;
  if (
    target.closest("button[id]") == refToPrevClickCreditCardBtn.prevCardBtnClick
  ) {
    // if user click on selected card, deselect/remove highlight
    // assign null to refToPrevClickCreditCardBtn.prevCardBtnClick
    target
      .closest("button[id]")
      .firstElementChild.setAttribute("data-selected", "false");
    refToPrevClickCreditCardBtn.prevCardBtnClick = null;
    return;
  }
  // if prevCardBtnClick is not null change the value of data-selected to "false" of child element
  refToPrevClickCreditCardBtn.prevCardBtnClick &&
  refToPrevClickCreditCardBtn.prevCardBtnClick.tagName == "BUTTON"
    ? refToPrevClickCreditCardBtn.prevCardBtnClick.firstElementChild.getAttribute(
        "data-selected"
      ) == "true"
      ? refToPrevClickCreditCardBtn.prevCardBtnClick.firstElementChild.setAttribute(
          "data-selected",
          "false"
        )
      : null
    : null;
  if (target.closest("button[id]")) {
    // get button id
    const buttonId = target.closest("button[id]").getAttribute("id");
    if (buttonId != "amex") {
      // pass false boolean to setCreditCardState,creditCardDisplayRefObj.setStateFuncRef.front
      /**
       * when our algorithm have different ref to element based on state
       * we want to have a ref to the setState func React.useState()
       * then call that setState func in our callback/func to cause a re-render of the component
       * where we declared React.useState()
       * **/
      if (
        refToPrevClickCreditCardBtn.prevCardBtnClick &&
        refToPrevClickCreditCardBtn.prevCardBtnClick.getAttribute("id") ==
          "amex"
      ) {
        // to render visa,mastercard,discover card # display and input and cvc display and input
        setCreditCardState(false);
        creditCardDisplayRefObj.setStateFuncRef.front(false);
        creditCardDisplayRefObj.setStateFuncRef.back(false);
      }
    } else {
      // to render amex card # display and input and cvc display and input
      // do have to check prevCardBtnClick is truthy and prevCardBtnClick id is != "amex"
      // at top of this func when will return/exit this func when the btn user click is the same btn ref
      // assigned to prevCardBtnClick, amex is the card where we render a different # input and cvc
      setCreditCardState(true);
      creditCardDisplayRefObj.setStateFuncRef.front(true);
      creditCardDisplayRefObj.setStateFuncRef.back(true);
    }
    // change value of data-selected to "true"
    target
      .closest("button[id]")
      .firstElementChild.getAttribute("data-selected") == "false"
      ? target
          .closest("button[id]")
          .firstElementChild.setAttribute("data-selected", "true")
      : null;
    // update refToPrevClickCreditCardBtn.prevCardBtnClick to clicked btn
    // target will be btn clicked
    refToPrevClickCreditCardBtn.prevCardBtnClick = target.closest("button[id]");
    console.log(setCreditCardState);
    console.log(creditCardDisplayRefObj);
  }
  console.log(refToPrevClickCreditCardBtn);
}

function highlightSelectedCardBasedOnFirstDigit(event, cachedObj, objOfFuncs) {
  const { value } = event.target;
  // visa starts with 4
  if (value.length == 1 && value === "4") {
    highlightCardSelectFirstValHelper(
      "visa",
      document.getElementById("visa"),
      cachedObj,
      objOfFuncs
    );
    return;
  }
  // mastercard starts with 5
  if (value.length == 1 && value === "5") {
    highlightCardSelectFirstValHelper(
      "mastercard",
      document.getElementById("mastercard"),
      cachedObj,
      objOfFuncs
    );
    return;
  }
  // american express starts with 3
  if (value.length == 1 && value === "3") {
    highlightCardSelectFirstValHelper(
      "discover",
      document.getElementById("discover"),
      cachedObj,
      objOfFuncs
    );

    return;
  }
  // discover starts with 6
  if (value.length == 1 && value === "6") {
    highlightCardSelectFirstValHelper(
      "amex",
      document.getElementById("amex"),
      cachedObj,
      objOfFuncs
    );
    return;
  }
}

function highlightCardSelectFirstValHelper(
  typeofCard,
  cardBtnSelectedKeyPress,
  prevBtnRefObj,
  objOfStateFuncs
) {
  const { setCreditCardState, creditCardDisplayRefObj } = objOfStateFuncs;
  console.log(setCreditCardState, creditCardDisplayRefObj);
  if (
    !prevBtnRefObj.prevCardBtnClick &&
    !document.querySelector("[data-selected='true']")
  ) {
    cardBtnSelectedKeyPress.firstElementChild.setAttribute(
      "data-selected",
      "true"
    );
    // if typeofcard == amex render amex card # and cvc display and inputs
    if (typeofCard == "amex") {
      setCreditCardState(true);
      creditCardDisplayRefObj.setStateFuncRef.front(true);
      creditCardDisplayRefObj.setStateFuncRef.back(true);
    }
    prevBtnRefObj.prevCardBtnClick = cardBtnSelectedKeyPress;
  } else {
    // check if button firstchild data-selected value is false
    // if it is assign "true" to data-selected else do nothing
    cardBtnSelectedKeyPress.firstElementChild.getAttribute("data-selected") ==
    "false"
      ? (cardBtnSelectedKeyPress.firstElementChild.setAttribute(
          "data-selected",
          "true"
        ),
        prevBtnRefObj.prevCardBtnClick.firstElementChild.setAttribute(
          "data-selected",
          "false"
        ))
      : null;

    if (typeofCard != "amex") {
      // check if prevCardBtnClick id is "amex"
      // if it is call state func to render amex display and input elements
      // visa, mastercard of discover

      if (prevBtnRefObj.prevCardBtnClick.getAttribute("id") == "amex") {
        setCreditCardState(false);
        creditCardDisplayRefObj.setStateFuncRef.front(false);
        creditCardDisplayRefObj.setStateFuncRef.back(false);
      }
    }
    if (typeofCard == "amex") {
      console.log("card amex");
      console.log(prevBtnRefObj.prevCardBtnClick);
      // amex
      if (prevBtnRefObj.prevCardBtnClick.getAttribute("id") != "amex") {
        setCreditCardState(true);
        creditCardDisplayRefObj.setStateFuncRef.front(true);
        creditCardDisplayRefObj.setStateFuncRef.back(true);
      }
    }
    prevBtnRefObj.prevCardBtnClick = cardBtnSelectedKeyPress;
  }
}

function conditionalCheckerForFirstDigitHighlight(
  event,
  highlightSelectedFunc,
  refToPrevObj,
  objOfSetStateFuncs
) {
  // selected credit card icon based on first value
  if (event.target.value.length == 1 && event.code != "Backspace") {
    highlightSelectedFunc(event, refToPrevObj, objOfSetStateFuncs);
  }

  if (event.target.value.length === 0 && event.code == "Backspace") {
    console.log("hello this is length == 0 and backspace");
    // since we will assign btn with data-selected="true" to
    // prevCardBtnClick we can selected element assigned to prevCardBtnClick
    // instead of using document.querySelector()
    console.log(refToPrevObj.prevCardBtnClick);
    if (refToPrevObj.prevCardBtnClick) {
      if (refToPrevObj.prevCardBtnClick.getAttribute("id") == "amex") {
        const { setCreditCardState, creditCardDisplayRefObj } =
          objOfSetStateFuncs;
        setCreditCardState(false);
        creditCardDisplayRefObj.setStateFuncRef.front(false);
        creditCardDisplayRefObj.setStateFuncRef.back(false);
      }
      // data-selected is on firstChild of button
      refToPrevObj.prevCardBtnClick.firstElementChild.getAttribute(
        "data-selected"
      ) == "true"
        ? refToPrevObj.prevCardBtnClick.firstElementChild.setAttribute(
            "data-selected",
            "false"
          )
        : null;
    }
    // assign null to refToPrevObj.prevCardBtnClick
    refToPrevObj.prevCardBtnClick = null;
  }
}

export function confirmBtnHelper(event) {
  // month
  const currentMonth = currentDate.getMonth() + 1;
  // year
  const currentYear = Number(currentDate.toDateString().slice(-4).slice(-2));
  // holder name
  const cardHolderName = document.getElementById("cardholder");
  showEmptyMsgHelper(cardHolderName);
  // card #
  const cardNumberElement = document.getElementById("credit-card-number");
  showEmptyMsgHelper(cardNumberElement);
  checkformatOfCardAndCvcNum(cardNumberElement);
  // exp month year container
  const expMonthYrContainer = document.getElementById("exp-date-msg-container");
  // exp month
  const expMonthElement = document.getElementById("expdate-month");
  showMonthYearErrorBorder(expMonthElement);
  // exp year
  const expYearElement = document.getElementById("expdate-year");
  showMonthYearErrorBorder(expYearElement);

  showMonthYearEmptyText(expMonthElement, expYearElement, expMonthYrContainer);
  // cvc
  const cvcElement = document.getElementById("cvc");
  showEmptyMsgHelper(cvcElement);
  checkformatOfCardAndCvcNum(cvcElement);
  // let user know if the month/year they entered is earlier than current month/year
  /**
   * data-expisempty="false"
data-showexpdatemsg="false"
data-errormsgtext="hello"
className={BottomStyle[`expdate-month-year-container`]}
   * **/
  if (
    expMonthElement.value !== "" &&
    expMonthElement.validity.valid &&
    expYearElement.value !== "" &&
    expYearElement.validity.valid
  ) {
    console.log("there");
    if (Number(expYearElement.value) < currentYear) {
      // check year msg
      expYearElement.parentElement.parentElement.setAttribute(
        "data-yearneedsattn",
        "true"
      );
      expMonthYrContainer.setAttribute("data-showexpdatemsg", "true");
      expYearElement.setAttribute("aria-describedby", "format-text");
      expMonthYrContainer.lastElementChild.innerText = `Check year. Current year is ${currentYear}.`;
      return;
    } else {
      expYearElement.parentElement.parentElement.setAttribute(
        "data-yearneedsattn",
        "false"
      );
      expMonthYrContainer.setAttribute("data-showexpdatemsg", "false");
      expYearElement.setAttribute("aria-describedby", "");
      expMonthYrContainer.lastElementChild.innerText = ``;
    }

    if (Number(expYearElement.value) == currentYear) {
      console.log("hello exp year here");
      console.log(currentMonth);
      // check if month is less than currentYear month
      // if it is show month error msg
      if (Number(expMonthElement.value) < currentMonth) {
        expMonthElement.parentElement.parentElement.setAttribute(
          "data-monthneedsattn",
          "true"
        );

        expMonthYrContainer.setAttribute("data-showexpdatemsg", "true");
        expMonthElement.setAttribute("aria-describedby", "format-text");
        expMonthYrContainer.lastElementChild.innerText = `Check month.`;
        return;
      } else {
        expMonthElement.parentElement.parentElement.setAttribute(
          "data-yearneedsattn",
          "false"
        );
        expMonthYrContainer.setAttribute("data-showexpdatemsg", "false");
        expMonthElement.setAttribute("aria-describedby", "");
        expMonthYrContainer.lastElementChild.innerText = ``;
      }
    }
  }
}

function showEmptyMsgHelper(element, expDateContainer) {
  // if expDateContainer is null element is not exp month or year
  element.value === ""
    ? (element.parentElement.parentElement.setAttribute(
        "data-needattention",
        "true"
      ),
      element.setAttribute("aria-describedby", "empty-text"))
    : (element.parentElement.parentElement.setAttribute(
        "data-needattention",
        "false"
      ),
      element.setAttribute("aria-describedby", ""));
  // !expDateContainer
  //   ? element.value === ""
  //     ? (element.parentElement.parentElement.setAttribute(
  //         "data-needattention",
  //         "true"
  //       ),
  //       element.setAttribute("aria-describedby", "empty-text"))
  //     : (element.parentElement.parentElement.setAttribute(
  //         "data-needattention",
  //         "false"
  //       ),
  //       element.setAttribute("aria-describedby", ""))
  //   : element.value === ""
  //   ? (expDateContainer.setAttribute("data-expdateempty", "true"),
  //     element.setAttribute("aria-describedby", "empty-text"))
  //   : (expDateContainer.setAttribute("data-expdateempty", "false"),
  //     element.setAttribute("aria-describedby", ""));
}

function checkformatOfCardAndCvcNum(element) {
  // when credit card and cvc number does not match pattern
  // assign "true" to data-formatchecking="true"
  element.value !== ""
    ? !element.validity.valid
      ? (element.parentElement.parentElement.setAttribute(
          "data-formatchecking",
          "true"
        ),
        element.setAttribute("aria-describedby", "format-text"))
      : (element.parentElement.parentElement.setAttribute(
          "data-formatchecking",
          "false"
        ),
        element.setAttribute("aria-describedby", ""))
    : null;
}

function showMonthYearEmptyText(month, year, expDateContainer) {
  month.value === "" || year.value === ""
    ? expDateContainer.setAttribute("data-expdateempty", "true")
    : expDateContainer.setAttribute("data-expdateempty", "false");
  // aria-describedby

  month.value === ""
    ? month.setAttribute("aria-describedby", "empty-text")
    : month.setAttribute("aria-describedby", "");

  year.value === ""
    ? year.setAttribute("aria-describedby", "empty-text")
    : year.setAttribute("aria-describedby", "");
}

function showMonthYearErrorBorder(element) {
  // check element id
  const elementId = element.getAttribute("id").split("-")[1];
  element.value === ""
    ? (element.parentElement.parentElement.setAttribute(
        `data-${elementId == "month" ? "month" : "year"}needsattn`,
        "true"
      ),
      element.setAttribute("aria-describedby", "empty-text"))
    : (element.parentElement.parentElement.setAttribute(
        `data-${elementId == "month" ? "month" : "year"}needsattn`,
        "false"
      ),
      element.setAttribute("aria-describedby", ""));
}

// function closurePrevBtnClicked() {
//   const obj = {
//     prevBtn: null,
//   };

//   return function innerFunc(event) {
//     const { target } = event;
//     const { setCreditCardState, creditCardDisplayRefObj } = this;
//     // if prevBtn is not null change the value of data-selected to "false" of child element
//     obj.prevBtn && obj.prevBtn.tagName == "BUTTON"
//       ? obj.prevBtn.firstElementChild.getAttribute("data-selected") == "true"
//         ? obj.prevBtn.firstElementChild.setAttribute("data-selected", "false")
//         : null
//       : null;
//     if (target.closest("button[id]")) {
//       // get button id
//       const buttonId = target.closest("button[id]").getAttribute("id");
//       if (buttonId != "amex") {
//         // pass false boolean to setCreditCardState,creditCardDisplayRefObj.setStateFuncRef.front
//         /**
//          * when our algorithm have different ref to element based on state
//          * we want to have a ref to the setState func React.useState()
//          * then call that setState func in our callback/func to cause a re-render of the component
//          * where we declared React.useState()
//          * **/
//         setCreditCardState(false);
//         creditCardDisplayRefObj.setStateFuncRef.front(false);
//         creditCardDisplayRefObj.setStateFuncRef.back(false);
//       } else {
//         setCreditCardState(true);
//         creditCardDisplayRefObj.setStateFuncRef.front(true);
//         creditCardDisplayRefObj.setStateFuncRef.back(true);
//       }
//       // change value of data-selected to "true"
//       target
//         .closest("button[id]")
//         .firstElementChild.getAttribute("data-selected") == "false"
//         ? target
//             .closest("button[id]")
//             .firstElementChild.setAttribute("data-selected", "true")
//         : null;
//       // update obj.prevBtn to clicked btn
//       // target will be btn clicked
//       obj.prevBtn = target.closest("button[id]");
//       console.log(setCreditCardState);
//       console.log(creditCardDisplayRefObj);
//     }
//     console.log(obj);
//   };
// }

// export const creditCardSelectorHelper = closurePrevBtnClicked();

// export function creditCardSelectorHelper(event) {
//   const { target } = event;
//   console.log(target.closest("svg[id]"));
// }
