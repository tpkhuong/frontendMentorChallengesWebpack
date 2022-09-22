// number only regex
const regex = /[0-9\-]/gi;
// letters and space regex
const regexForName = /[a-zA-Z\s]/g;

const objOfRegularExpressions = {
  number: /[0-9\-]/gi,
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
  // call value helper
  const { value } = event.target;
  eventInputValueHelper(event.target, "number");
  // get credit card number input value
  const lengthOfValue = value.length;
  // without checking for lengthOfValue > 0 when user enter value to credit card number
  // then delete one input is an empty string "", we will enter if statement
  // because 0 % 4 === 0 will be true
  if (lengthOfValue > 0 && lengthOfValue % 4 === 0) {
    console.log("Hello there!");
  }
}
// exp month
export function expirationMonthHelper(event) {
  // destructure this obj
  const { monthRef } = this;
  console.log("monthRef", monthRef);

  // call value helper
  eventInputValueHelper(event.target, "number");
}
// exp year
export function expirationYearHelper(event) {
  // destructure this obj
  const { yearRef } = this;
  console.log("yearRef", yearRef);

  // call value helper
  eventInputValueHelper(event.target, "number");
}
// cvc
export function cvcDigitsHelper(event) {
  // destructure this obj
  const { cvcRef } = this;
  console.log("cvcRef", cvcRef);

  // call value helper
  eventInputValueHelper(event.target, "number");
}
