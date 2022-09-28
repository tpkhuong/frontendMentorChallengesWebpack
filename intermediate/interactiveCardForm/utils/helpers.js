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

// const objOfActionsBasedOnLength = {};

// const amexObjOfActionsBasedOnLength = {
//   5: (keyStroke) => {},
//   12: "",
// };

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
  console.log("creditCardHolder", creditCardHolder);
  linkCreditCardInfoToInputs(event.target, creditCardHolder.current, "name");
  // if (event.target.value === "") {
  //   creditCardHolder.current.innerText = "Jane Appleseed";
  // } else {
  //   creditCardHolder.current.innerText = event.target.value;
  // }
}
// credit card number
export function creditCardNumberHelper(event) {
  // visa starts with 4
  // mastercard starts with 5
  // american express starts with 3
  // discover starts with 6
  // destructure this obj
  const { cardNumber } = this;
  console.log("cardNumber", cardNumber);
  /**
   * we will input helper func to allow space but we will have algorithm to remove it
   * as user hit space not when we add empty string to input
   * eventInputValueHelper(event.target, "number") will remove space after we execute
   * addOrRemoveValueFromCardNumInput
   * **/
  eventInputValueHelper(event.target, "spaceAndNumber");
  if (event.code == "Space") {
    const arrForRemovingLastValue = [...event.target.value];
    arrForRemovingLastValue.pop();
    event.target.value = arrForRemovingLastValue.join("");
  }
  // call value helper
  const { value } = event.target;
  // get credit card number input value
  const lengthOfValueBeforeKeyUp = value.length;
  // without checking for lengthOfValue > 0 when user enter value to credit card number
  // then delete one input is an empty string "", we will enter if statement
  // because 0 % 4 === 0 or 0 % 5 will be true
  // if (lengthOfValue > 0 && lengthOfValue % 5 === 0) {
  // }
  console.log(event);
  console.log(event.target.value.length);
  if (lengthOfValueBeforeKeyUp > 0 && lengthOfValueBeforeKeyUp % 5 === 0) {
    if (event.code == "Backspace") {
      console.log("hello this is backspace and length 5");
      console.log(event.target.value);
      // call join on array returned from addOrRemoveValueFromCardNumInput
      // then assign string return from calling join() to event.targer.value
      event.target.value = addOrRemoveValueFromCardNumInput(
        event.target.value,
        "remove"
      ).join("");
    } else {
      console.log("Hello this is key and length 5");
      console.log(event.target.value);
      // console.log("hello");
      event.target.value = addOrRemoveValueFromCardNumInput(
        event.target.value,
        "add"
      ).join("");
      // const arr = [...event.target.value];
      // const lastStr = arr.pop();
      // console.log("arr", arr);
      // console.log("lastStr", lastStr);
    }
  }
  // work with input values first then card number display element
}

// credit card number amex

export function amexCreditCardNumHelper(event) {
  console.log(this);
}

function addOrRemoveValueFromCardNumInput(string, addOrRemove) {
  const arrOfStrings = [...string];
  const copyOfArr = [].concat(arrOfStrings);
  const lastValueOfArr = copyOfArr.pop();
  // add empty string and lastValue to arr
  const arrWithAddedLastValAndSpace = [...copyOfArr, " ", lastValueOfArr];
  // when user hit "backspace" our algorithm will remove the last value
  // of input value which will be the empty space " "
  console.log("copyOfArr", copyOfArr);
  console.log("arrWithAddedLastValAndSpace", arrWithAddedLastValAndSpace);
  return addOrRemove == "add" ? arrWithAddedLastValAndSpace : copyOfArr;
}

// exp month
export function expirationMonthHelper(event) {
  // destructure this obj
  const { current } = this.monthRef;
  const { value } = event.target;
  // call value helper
  eventInputValueHelper(event.target, "number");
  if (value.length == 1 && Number(value) > 1) {
    event.target.value = `0${value}`;
  }
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
  // destructure this obj
  const { current } = this.yearRef;
  // call value helper
  eventInputValueHelper(event.target, "number");
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

export function testRadioBtn(event) {
  const { yesBtn, noBtn, setCreditCardState, creditCardDisplayRefObj } = this;
  // yes btn clicked
  console.log(yesBtn.current);
  if (event.target == yesBtn.current) {
    console.log("this is yes btn");
    // pass true boolean to setCreditCardState,creditCardDisplayRefObj.setStateFuncRef.front
    /**
     * when our algorithm have different ref to element based on state
     * we want to have a ref to the setState func React.useState()
     * then call that setState func in our callback/func to cause a re-render of the component
     * where we declared React.useState()
     * **/
    setCreditCardState(true);
    creditCardDisplayRefObj.setStateFuncRef.front(true);
    creditCardDisplayRefObj.setStateFuncRef.back(true);
    console.log(creditCardDisplayRefObj);
  }
  // no btn clicked
  if (event.target == noBtn.current) {
    console.log("this is no btn");
    // pass false boolean to setCreditCardState,creditCardDisplayRefObj.setStateFuncRef.front
    /**
     * when our algorithm have different ref to element based on state
     * we want to have a ref to the setState func React.useState()
     * then call that setState func in our callback/func to cause a re-render of the component
     * where we declared React.useState()
     * **/
    setCreditCardState(false);
    creditCardDisplayRefObj.setStateFuncRef.front(false);
    creditCardDisplayRefObj.setStateFuncRef.back(false);
    console.log(creditCardDisplayRefObj);
  }
}
