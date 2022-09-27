// number only regex
const regex = /[0-9\-]/gi;
// letters and space regex
const regexForName = /[a-zA-Z\s]/g;

const objOfRegularExpressions = {
  number: /[0-9\-]/gi,
  spaceAndNumber: /[0-9\s-]/gi,
  name: /[a-zA-Z\s]/g,
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
  console.log("creditCardHolder", creditCardHolder);
}
// credit card number
export function creditCardNumberHelper(event) {
  // destructure this obj
  const { cardNumber } = this;
  console.log("cardNumber", cardNumber);
  eventInputValueHelper(event.target, "spaceAndNumber");
  // call value helper
  const { value } = event.target;
  // get credit card number input value
  const lengthOfValue = value.length;
  // without checking for lengthOfValue > 0 when user enter value to credit card number
  // then delete one input is an empty string "", we will enter if statement
  // because 0 % 4 === 0 or 0 % 5 will be true
  if (lengthOfValue > 0 && lengthOfValue % 5 === 0) {
    console.log("Hello there!");
    console.log("value", value.slice(-4));
  }
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
  linkCreditCardInfoToInputs(event.target, current, "front");
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
  linkCreditCardInfoToInputs(event.target, current, "front");

  // if (event.target.value === "") {
  //   current.innerText = "00";
  // } else {
  //   current.innerText = `${event.target.value}`;
  // }
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

function linkCreditCardInfoToInputs(target, displayElement, sideOfCard) {
  if (target.value === "") {
    displayElement.innerText = sideOfCard == "front" ? "00" : "000";
  } else {
    displayElement.innerText = `${target.value}`;
  }
}
