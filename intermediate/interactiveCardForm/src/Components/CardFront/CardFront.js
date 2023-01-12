import React from "react";
import CardFrontStyles from "./CardFront.module.css";
import { LinkValuesToInputContext } from "../SectionWrapper/SectionWrapper";

export default function CardFront({ children, ...props }) {
  // set up state to re-render this component
  const [frontCardNumValue, setFrontCardNumberState] = React.useState(false);
  // create refs to front card display elements
  const cardNumberRef = React.useRef();
  const cardHolderRef = React.useRef();
  const expMonthRef = React.useRef();
  const expYearRef = React.useRef();
  // amex
  const creditNumberAmex = React.useRef();
  const cardFrontRef = React.useContext(LinkValuesToInputContext);
  cardFrontRef.creditCard.name = cardHolderRef;
  cardFrontRef.creditCard.number = cardNumberRef;
  cardFrontRef.creditCard.expMonth = expMonthRef;
  cardFrontRef.creditCard.expYear = expYearRef;
  // amex
  cardFrontRef.amex.number = creditNumberAmex;
  // assign setFrontCardNumberState to context obj
  cardFrontRef.setStateFuncRef.front = setFrontCardNumberState;
  return (
    <React.Fragment>
      <div className={CardFrontStyles[`front-wrapper`]}>
        {/* bg-img */}
        {/* logo */}
        <div className={CardFrontStyles[`logo-img-container`]}>
          <svg
            viewBox="0 0 100 45"
            width="84"
            height="47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
        </div>
        {/* text-content */}
        <div className={CardFrontStyles[`text-content`]}>
          {!frontCardNumValue ? (
            <span
              ref={cardNumberRef}
              id="front-number-display"
              className={CardFrontStyles[`credit-card-number-display`]}
            >
              0000 0000 0000 0000
            </span>
          ) : (
            // amex
            <span
              ref={creditNumberAmex}
              id="front-number-display"
              className={CardFrontStyles[`credit-card-number-display`]}
            >
              0000 000000 00000
            </span>
          )}
          {/* name and exp date */}
          <div className={CardFrontStyles[`name-expdate-wrapper`]}>
            <span
              ref={cardHolderRef}
              className={CardFrontStyles[`name-display`]}
            >
              jane appleseed
            </span>
            <span className={CardFrontStyles[`expdate-display`]}>
              <span
                ref={expMonthRef}
                className={CardFrontStyles[`exp-month-display`]}
              >
                00
              </span>
              <span>/</span>
              <span
                ref={expYearRef}
                className={CardFrontStyles[`exp-year-display`]}
              >
                00
              </span>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// function test() {
//   const { target } = event;
//   const { setCreditCardState, creditCardDisplayRefObj } = this;
//   const { refToPrevClickCreditCardBtn } = creditCardDisplayRefObj;
//   if (
//     target.closest("button[id]") == refToPrevClickCreditCardBtn.prevCardBtnClick
//   ) {
//     // if user click on selected card, deselect/remove highlight
//     // assign null to refToPrevClickCreditCardBtn.prevCardBtnClick
//     target
//       .closest("button[id]")
//       .firstElementChild.setAttribute("data-selected", "false");
//     refToPrevClickCreditCardBtn.prevCardBtnClick = null;
//     return;
//   }
//   // if prevCardBtnClick is not null change the value of data-selected to "false" of child element
//   refToPrevClickCreditCardBtn.prevCardBtnClick &&
//   refToPrevClickCreditCardBtn.prevCardBtnClick.tagName == "BUTTON"
//     ? refToPrevClickCreditCardBtn.prevCardBtnClick.firstElementChild.getAttribute(
//         "data-selected"
//       ) == "true"
//       ? refToPrevClickCreditCardBtn.prevCardBtnClick.firstElementChild.setAttribute(
//           "data-selected",
//           "false"
//         )
//       : null
//     : null;
//   if (target.closest("button[id]")) {
//     // get button id
//     const buttonId = target.closest("button[id]").getAttribute("id");
//     if (buttonId != "amex") {
//       // pass false boolean to setCreditCardState,creditCardDisplayRefObj.setStateFuncRef.front
//       /**
//        * when our algorithm have different ref to element based on state
//        * we want to have a ref to the setState func React.useState()
//        * then call that setState func in our callback/func to cause a re-render of the component
//        * where we declared React.useState()
//        * **/
//       if (
//         refToPrevClickCreditCardBtn.prevCardBtnClick &&
//         refToPrevClickCreditCardBtn.prevCardBtnClick.getAttribute("id") ==
//           "amex"
//       ) {
//         // to render visa,mastercard,discover card # display and input and cvc display and input
//         setCreditCardState(false);
//         creditCardDisplayRefObj.setStateFuncRef.front(false);
//         creditCardDisplayRefObj.setStateFuncRef.back(false);
//         // check if number input is !== "" (empty string)
//         // if user entered value to number input and display number in visa, mastercard and discover
//         // format 0000 0000 0000 0000
//         cardnumberInputBasedOnCreditCard(
//           document.getElementById("credit-card-number"),
//           "notamex"
//         );

//         // display values entered into number input to card number display element
//         // document.getElementById("credit-card-number").value === ""
//         //   ? null
//         //   : matchDisplayAndCreditCardInput(
//         //       document.getElementById("front-number-display"),
//         //       "notAmex",
//         //       document.getElementById("credit-card-number")
//         //     );
//       }
//     } else {
//       // to render amex card # display and input and cvc display and input
//       // do have to check prevCardBtnClick is truthy and prevCardBtnClick id is != "amex"
//       // at top of this func when will return/exit this func when the btn user click is the same btn ref
//       // assigned to prevCardBtnClick, amex is the card where we render a different # input and cvc
//       setCreditCardState(true);
//       creditCardDisplayRefObj.setStateFuncRef.front(true);
//       creditCardDisplayRefObj.setStateFuncRef.back(true);
//       // check if number input is !== "" (empty string)
//       // if user entered value to number input and display number in amex
//       // format 0000 000000 00000
//       cardnumberInputBasedOnCreditCard(
//         document.getElementById("credit-card-number"),
//         "amex"
//       );
//       debugger;
//       // display values entered into number input to card number display element
//       document.getElementById("credit-card-number").value === ""
//         ? null
//         : matchDisplayAndCreditCardInput(
//             document.getElementById("front-number-display"),
//             "amex",
//             document.getElementById("credit-card-number")
//           );
//     }
//     // change value of data-selected to "true"
//     target
//       .closest("button[id]")
//       .firstElementChild.getAttribute("data-selected") == "false"
//       ? target
//           .closest("button[id]")
//           .firstElementChild.setAttribute("data-selected", "true")
//       : null;
//     // update refToPrevClickCreditCardBtn.prevCardBtnClick to clicked btn
//     // target will be btn clicked
//     refToPrevClickCreditCardBtn.prevCardBtnClick = target.closest("button[id]");
//     console.log(setCreditCardState);
//     console.log(creditCardDisplayRefObj);
//   }
//   console.log(refToPrevClickCreditCardBtn);

//   // creditcardnumhelper

//   const { cardNumber, setCreditCardState, creditCardDisplayRefObj } = this;
//   const { refToPrevClickCreditCardBtn } = creditCardDisplayRefObj;
//   console.log("refToPrevClickCreditCardBtn", refToPrevClickCreditCardBtn);
//   // when user copy their credit card number into number input
//   if (event.ctrlKey && event.code == "KeyV") {
//     // add space to credit card number at length 5,10,15
//     cardnumberInputBasedOnCreditCard(event.target, "notamex");
//     // selected credit card icon based on first value
//     highlightSelectedCardBasedOnFirstDigit(event, refToPrevClickCreditCardBtn);
//     // display values entered into number input to card number display element
//     // event.target is the number input
//     const concatInputValueWithCopiedStrOfZeros = [
//       ...event.target.value,
//       ..."0000 0000 0000 0000".slice(event.target.value.length),
//     ].join("");
//     cardNumber.current.innerText = concatInputValueWithCopiedStrOfZeros;
//     // matchDisplayAndCreditCardInput(cardNumber.current, "notAmex", event.target);
//   }
//   console.log("hello", event);
//   /**
//    * we will have an input helper func to allow space but we will have algorithm to remove it
//    * as user hit space not when we add empty string to input
//    * eventInputValueHelper(event.target, "number") will remove space after we execute
//    * addOrRemoveValueFromCardNumInput
//    * **/
//   eventInputValueHelper(event.target, "spaceAndNumber");
//   removeSpaceKeyEntryCardNumber(event);
//   // call value helper
//   const { value } = event.target;
//   // get credit card number input value
//   const lengthOfValueBeforeKeyUp = value.length;
//   // without checking for lengthOfValue > 0 when user enter value to credit card number
//   // then delete one input is an empty string "", we will enter if statement
//   // because 0 % 4 === 0 or 0 % 5 will be true
//   if (lengthOfValueBeforeKeyUp > 0 && lengthOfValueBeforeKeyUp % 5 === 0) {
//     addRemoveValBasedOnKeyPressed(event, addOrRemoveValueFromCardNumInput);
//   }
//   // work with input values first then card number display element
//   const newLength =
//     value.length > 0 && value.length % 5 == 0
//       ? event.code == "Backspace"
//         ? value.length - 1
//         : value.length + 1
//       : value.length;
//   // assign copied of zeros string to credit card # display
//   // combine values user entered and copied string of zeros
//   const combinedValuesOfInputsAndStrOfZeros = [
//     ...event.target.value,
//     ..."0000 0000 0000 0000".slice(newLength),
//   ].join("");
//   cardNumber.current.innerText = combinedValuesOfInputsAndStrOfZeros;
//   // selected credit card icon based on first value
//   conditionalCheckerForFirstDigitHighlight(
//     event,
//     highlightSelectedCardBasedOnFirstDigit,
//     refToPrevClickCreditCardBtn,
//     { setCreditCardState, creditCardDisplayRefObj }
//   );
//   // if (event.target.value.length == 1 && event.code != "Backspace") {
//   //   highlightSelectedCardBasedOnFirstDigit(event, refToPrevClickCreditCardBtn);
//   // }
//   // if (event.target.value.length === 0 && event.code == "Backspace") {
//   //   // since we will assign btn with data-selected="true" to
//   //   // prevCardBtnClick we can selected element assigned to prevCardBtnClick
//   //   // instead of using document.querySelector()
//   //   refToPrevClickCreditCardBtn.prevCardBtnClick.getAttribute(
//   //     "data-selected"
//   //   ) == "true"
//   //     ? refToPrevClickCreditCardBtn.prevCardBtnClick.setAttribute(
//   //         "data-selected",
//   //         "false"
//   //       )
//   //     : null;
//   //   // assign null to refToPrevClickCreditCardBtn.prevCardBtnClick
//   //   refToPrevClickCreditCardBtn.prevCardBtnClick = null;
//   // }

//   // amexnumhelper

//   const { amexCardNumber, setCreditCardState, creditCardDisplayRefObj } = this;
//   const { refToPrevClickCreditCardBtn } = creditCardDisplayRefObj;
//   const { target } = event;
//   console.log("refToPrevClickCreditCardBtn", refToPrevClickCreditCardBtn);
//   // when user copy their credit card number into number input
//   if (event.ctrlKey && event.code == "KeyV") {
//     // add space to credit card number at length 5 and 11
//     cardnumberInputBasedOnCreditCard(event.target, "amex");
//     // selected credit card icon based on first value
//     highlightSelectedCardBasedOnFirstDigit(event, refToPrevClickCreditCardBtn);
//     // display values entered into number input to card number display element
//     // event.target is the number input
//     // matchDisplayAndCreditCardInput(
//     //   amexCardNumber.current,
//     //   "amex",
//     //   event.target
//     // );
//   }
//   console.log("hello");
//   /**
//    * we will have an input helper func to allow space but we will have algorithm to remove it
//    * as user hit space not when we add empty string to input
//    * eventInputValueHelper(event.target, "number") will remove space after we execute
//    * addOrRemoveValueFromCardNumInput
//    * **/
//   eventInputValueHelper(event.target, "spaceAndNumber");
//   removeSpaceKeyEntryCardNumber(event);
//   /**
//    * add or remove space at length 5 and 12 0000 000000 00000
//    * **/
//   // call func based on length of input
//   if (target.value.length == 5 || target.value.length == 12) {
//     const amexObjOfActionsBasedOnLength = {
//       5: (event, conditionalCheckFunc, appendOrRemoveValFunc) => {
//         conditionalCheckFunc(event, appendOrRemoveValFunc);
//       },
//       12: (event, conditionalCheckFunc, appendOrRemoveValFunc) => {
//         conditionalCheckFunc(event, appendOrRemoveValFunc);
//       },
//     };

//     amexObjOfActionsBasedOnLength[target.value.length](
//       event,
//       addRemoveValBasedOnKeyPressed,
//       addOrRemoveValueFromCardNumInput
//     );
//     console.log(event.target.value.length);
//     // const lengthToCopyStrForDisplay =
//     //   event.code == "Backspace"
//     //     ? target.value.length - 1
//     //     : target.value.length + 1;
//     // console.log(lengthToCopyStrForDisplay);
//     // console.log(
//     //   "0000 000000 00000".slice(lengthToCopyStrForDisplay)
//     // );
//   }

//   // work with input values first then card number display element
//   // copy display value based on input value length
//   const combineInputValuesWithStrOfZeros = [
//     ...event.target.value,
//     ..."0000 000000 00000".slice(target.value.length),
//   ].join("");
//   console.log(
//     "combineInputValuesWithStrOfZeros",
//     combineInputValuesWithStrOfZeros
//   );
//   amexCardNumber.current.innerText = combineInputValuesWithStrOfZeros;
//   // selected credit card icon based on first value
//   conditionalCheckerForFirstDigitHighlight(
//     event,
//     highlightSelectedCardBasedOnFirstDigit,
//     refToPrevClickCreditCardBtn,
//     { setCreditCardState, creditCardDisplayRefObj }
//   );
// }
