import React from "react";
import {
  cardHolderNameHelper,
  creditCardNumberHelper,
  expirationMonthHelper,
  expirationYearHelper,
  cvcDigitsHelper,
  amexCreditCardNumHelper,
  cvcAmexDigitHelper,
  creditCardSelectorHelper,
  confirmBtnHelper,
  showHideValidationIcons,
  funcsForClickAndKeyUp,
} from "../../../utils/helpers.js";
import { LinkValuesToInputContext } from "../SectionWrapper/SectionWrapper";
import {
  FaCcVisa,
  FaCcAmex,
  FaCcDiscover,
  FaCcMastercard,
} from "react-icons/fa";
import { IoCloseCircleSharp, IoCheckmarkCircleSharp } from "react-icons/io5";
import BottomStyle from "./BottomContainer.module.css";
// FaCcVisa
// FaCcAmex
// FaCcDiscover
// FaCcMastercard
export default function BottomContainer({ children, ...props }) {
  // console.log(funcsForClickAndKeyUp.amexCreditCardNumHelper);
  // console.log(creditCardSelectorHelper);
  // get credit card front and back display ref from context
  const creditCardDisplayRefObj = React.useContext(LinkValuesToInputContext);
  // create state for amex/other credit cards
  const [stateOfCreditCard, setCreditCardState] = React.useState(false);
  return (
    <React.Fragment>
      {/* control height of app at desktop layout */}
      <div className={BottomStyle[`form-confirm-container`]}>
        {/* <div className="flex-wrapper">
          <div className={BottomContainer[`flex-display`]}>
            <svg
              width="80"
              height="80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="url(#a)" />
              <path
                d="M28 39.92 36.08 48l16-16"
                stroke="#fff"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="-23.014"
                  y1="11.507"
                  x2="0"
                  y2="91.507"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6348FE" />
                  <stop offset="1" stopColor="#610595" />
                </linearGradient>
              </defs>
            </svg>
            <span className={BottomContainer[`box`]}>
              <span className={BottomContainer[`circle`]}></span>
            </span>
            <svg
              width="80"
              height="80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="url(#a)" />
              <path
                d="M28 39.92 36.08 48l16-16"
                stroke="#fff"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="-23.014"
                  y1="11.507"
                  x2="0"
                  y2="91.507"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6348FE" />
                  <stop offset="1" stopColor="#610595" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div> */}
        {/* form inputs */}
        <form
          className={BottomStyle[`creditcard-form`]}
          noValidate
          role="form"
          action="#"
        >
          <fieldset className={BottomStyle[`credit-card-fieldset`]}>
            <legend
              className={`${BottomStyle[`title`]} ${
                BottomStyle[`visually-hidden`]
              }`}
            >
              Credit Card Information
            </legend>
            {/*  */}
            <article className={BottomStyle[`customer-card-container`]}>
              {/* name input */}
              <div
                data-needattention="false"
                id="cardholder-container"
                className={BottomStyle[`cardholder-name`]}
              >
                <label htmlFor="cardholder">cardholder name</label>
                <div className={BottomStyle[`custom-input-border-wrapper`]}>
                  <input
                    aria-describedby=""
                    placeholder="e.g. Jane Appleseed"
                    id="cardholder"
                    type="text"
                    onChange={cardHolderNameHelper.bind({
                      creditCardHolder: creditCardDisplayRefObj.creditCard.name,
                    })}
                  />
                  <span className={BottomStyle[`input-border`]}></span>
                  {/* <AcceptedMessage testName={`${BottomStyle[`accepted`]}`} /> */}
                  <span id="empty-text" className={BottomStyle[`error-msg`]}>
                    Can't be blank.
                  </span>
                </div>
                {/* accept icon */}
                <IoCheckmarkCircleSharp
                  data-accepted-icon
                  className={`${BottomStyle[`accepted`]}`}
                />
                <IoCloseCircleSharp
                  data-notaccepted-icon
                  className={`${BottomStyle[`not-accepted`]}`}
                />
              </div>
              {/* card number input */}
              <div
                data-needattention="false"
                data-formatchecking="false"
                id="cardnumber-container"
                className={BottomStyle[`card-number`]}
              >
                <div className={BottomStyle[`number-cards-style-wrapper`]}>
                  <label htmlFor="credit-card-number">card number</label>
                  <div
                    onClick={funcsForClickAndKeyUp.creditCardSelectorHelper.bind(
                      {
                        setCreditCardState,
                        creditCardDisplayRefObj,
                      }
                    )}
                    className={BottomStyle[`card-btns-container`]}
                  >
                    {/* visa */}
                    <button
                      aria-label="visa card"
                      id="visa"
                      className={BottomStyle[`cc-button`]}
                    >
                      <FaCcVisa
                        data-selected="false"
                        className={BottomStyle[`major-credit-cards`]}
                      />
                    </button>
                    {/* mastercard */}
                    <button
                      aria-label="master card"
                      id="mastercard"
                      className={BottomStyle[`cc-button`]}
                    >
                      <FaCcMastercard
                        data-selected="false"
                        className={BottomStyle[`major-credit-cards`]}
                      />
                    </button>
                    {/* discover */}
                    <button
                      aria-label="discover card"
                      id="discover"
                      className={BottomStyle[`cc-button`]}
                    >
                      <FaCcDiscover
                        data-selected="false"
                        className={BottomStyle[`major-credit-cards`]}
                      />
                    </button>
                    {/* amex */}
                    <button
                      aria-label="american express card"
                      id="amex"
                      className={BottomStyle[`cc-button`]}
                    >
                      <FaCcAmex
                        data-selected="false"
                        className={BottomStyle[`major-credit-cards`]}
                      />
                    </button>
                  </div>
                </div>
                <div className={BottomStyle[`custom-input-border-wrapper`]}>
                  {!stateOfCreditCard ? (
                    <input
                      placeholder="e.g. 1234 5678 9123 0000"
                      aria-describedby=""
                      id="credit-card-number"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="cc-number"
                      pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                      maxLength="19"
                      onKeyUp={funcsForClickAndKeyUp.creditCardNumberHelper.bind(
                        {
                          cardNumber: creditCardDisplayRefObj.creditCard.number,
                          setCreditCardState,
                          creditCardDisplayRefObj,
                        }
                      )}
                    />
                  ) : (
                    // amex
                    <input
                      placeholder="e.g. 1234 567891 23000"
                      aria-describedby=""
                      id="credit-card-number"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="cc-number"
                      pattern="[0-9]{4} [0-9]{6} [0-9]{5}"
                      maxLength="17"
                      onKeyUp={funcsForClickAndKeyUp.amexCreditCardNumHelper.bind(
                        {
                          amexCardNumber: creditCardDisplayRefObj.amex.number,
                          setCreditCardState,
                          creditCardDisplayRefObj,
                        }
                      )}
                    />
                  )}
                  <span className={BottomStyle[`input-border`]}></span>
                  <span id="empty-text" className={BottomStyle[`error-msg`]}>
                    Can't be blank.
                  </span>
                  <span
                    id="format-text"
                    className={BottomStyle[`wrong-format`]}
                  >
                    Check format of credit card number.
                  </span>

                  {/* <span className={BottomStyle[`error-msg`]}>
                    Wrong format, check first number of credit card.
                  </span> */}
                </div>
                <IoCheckmarkCircleSharp
                  data-accepted-icon
                  className={`${BottomStyle[`accepted`]}`}
                />
                <IoCloseCircleSharp
                  data-notaccepted-icon
                  className={`${BottomStyle[`not-accepted`]}`}
                />
              </div>
              {/* exp.date cvc container */}
              <div className={BottomStyle[`expdate-cvc-container`]}>
                {/* flex */}
                {/* month year input container */}
                <div
                  data-expdateempty="false"
                  data-showexpdatemsg="false"
                  id="exp-date-msg-container"
                  // data-errormsgtext="hello"
                  className={BottomStyle[`expdate-month-year-container`]}
                >
                  <p
                    aria-label="expiration date format two digit month / two digit year"
                    className={BottomStyle[`expdate-text`]}
                  >
                    exp.date (mm/yy)
                  </p>
                  {/* month input */}
                  <div className={BottomStyle[`style-wrapper`]}>
                    {/* use pseudo-element for error msg for month and year inputs */}
                    {/* flex */}
                    <div
                      data-monthneedsattn="false"
                      className={BottomStyle[`exp-month`]}
                    >
                      <label
                        className="visually-hidden"
                        htmlFor="expdate-month"
                      >
                        expiration month
                      </label>
                      <div
                        className={BottomStyle[`custom-input-border-wrapper`]}
                      >
                        <input
                          placeholder="MM"
                          id="expdate-month"
                          type="tel"
                          inputMode="numeric"
                          aria-describedby=""
                          autoComplete="cc-exp-month"
                          pattern="[0-9]{2}"
                          maxLength="2"
                          onClick={expirationMonthHelper.bind({
                            monthRef:
                              creditCardDisplayRefObj.creditCard.expMonth,
                          })}
                        />
                        <span
                          className={BottomStyle[`month-input-border`]}
                        ></span>
                      </div>
                    </div>
                    {/* year input*/}
                    <div
                      data-yearneedsattn="false"
                      className={BottomStyle[`exp-year`]}
                    >
                      <label className="visually-hidden" htmlFor="expdate-year">
                        expiration year
                      </label>
                      <div
                        className={BottomStyle[`custom-input-border-wrapper`]}
                      >
                        <input
                          placeholder="YY"
                          id="expdate-year"
                          type="tel"
                          inputMode="numeric"
                          aria-describedby=""
                          autoComplete="cc-exp-year"
                          pattern="[0-9]{2}"
                          maxLength="2"
                          onClick={expirationYearHelper.bind({
                            yearRef: creditCardDisplayRefObj.creditCard.expYear,
                          })}
                        />
                        <span
                          className={BottomStyle[`year-input-border`]}
                        ></span>
                      </div>
                    </div>
                  </div>
                  <IoCheckmarkCircleSharp
                    data-accepted-icon
                    className={`${BottomStyle[`accepted`]}`}
                  />
                  <IoCloseCircleSharp
                    data-notaccepted-icon
                    className={`${BottomStyle[`not-accepted`]}`}
                  />
                  <span id="empty-text" className={BottomStyle[`error-msg`]}>
                    Can't be blank.
                  </span>
                  <span
                    id="format-text"
                    className={BottomStyle[`wrong-format`]}
                  ></span>
                </div>
                {/* cvc input container */}
                {!stateOfCreditCard ? (
                  <div
                    data-needattention="false"
                    data-formatchecking="false"
                    id="cvcnumber-container"
                    className={BottomStyle[`cvc-input`]}
                  >
                    <label htmlFor="cvc">cvc</label>
                    <div className={BottomStyle[`custom-input-border-wrapper`]}>
                      <input
                        placeholder="e.g. 123"
                        aria-describedby=""
                        id="cvc"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        pattern="[0-9]{3}"
                        maxLength="3"
                        onChange={cvcDigitsHelper.bind({
                          cvcRef: creditCardDisplayRefObj.creditCard.cvc,
                        })}
                      />
                      <span className={BottomStyle[`input-border`]}></span>
                      <span
                        id="empty-text"
                        className={BottomStyle[`error-msg`]}
                      >
                        Can't be blank.
                      </span>
                      <span
                        id="format-text"
                        className={BottomStyle[`wrong-format`]}
                      >
                        Check format of cvc number.
                      </span>
                    </div>
                    <IoCheckmarkCircleSharp
                      data-accepted-icon
                      className={`${BottomStyle[`accepted`]}`}
                    />
                    <IoCloseCircleSharp
                      data-notaccepted-icon
                      className={`${BottomStyle[`not-accepted`]}`}
                    />
                  </div>
                ) : (
                  // amex
                  <div
                    data-needattention="false"
                    data-formatchecking="false"
                    id="cvcnumber-container"
                    className={BottomStyle[`cvc-input`]}
                  >
                    <label htmlFor="cvc">cvc</label>
                    <div className={BottomStyle[`custom-input-border-wrapper`]}>
                      <input
                        placeholder="e.g. 2687"
                        id="cvc"
                        aria-describedby=""
                        type="tel"
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        pattern="[0-9]{4}"
                        maxLength="4"
                        onChange={cvcAmexDigitHelper.bind({
                          amexCvcRef: creditCardDisplayRefObj.amex.cvc,
                        })}
                      />
                      <span className={BottomStyle[`input-border`]}></span>
                      <span
                        id="empty-text"
                        className={BottomStyle[`error-msg`]}
                      >
                        Can't be blank.
                      </span>
                      <span
                        id="format-text"
                        className={BottomStyle[`wrong-format`]}
                      >
                        Check format of cvc number.
                      </span>
                    </div>
                    <IoCheckmarkCircleSharp
                      data-accepted-icon
                      className={`${BottomStyle[`accepted`]}`}
                    />
                    <IoCloseCircleSharp
                      data-notaccepted-icon
                      className={`${BottomStyle[`not-accepted`]}`}
                    />
                  </div>
                )}
              </div>
            </article>
          </fieldset>
          <button
            onClick={confirmBtnHelper}
            className={BottomStyle[`call-to-action-btn`]}
          >
            Confirm
          </button>
          <div className="test-radio-btns">
            <label htmlFor="yes-btn">yes</label>
            <input
              // onClick={funcsForClickAndKeyUp.creditCardSelectorHelper.bind({
              //   setCreditCardState,
              //   creditCardDisplayRefObj,
              // })}
              // onClick={funcsObj.first.bind({ setCreditCardState })}
              // ref={yesBtn}
              id="yes-btn"
              name="test"
              type="radio"
            />
            <label htmlFor="no-btn">no</label>
            <input
              // onClick={funcsForClickAndKeyUp.keyUpAmexNumHelper.bind({
              //   setCreditCardState,
              // })}
              // ref={noBtn}
              // onClick={funcsObj.second.bind({ setCreditCardState })}
              id="no-btn"
              name="test"
              type="radio"
            />
          </div>
        </form>
        {/* confirm */}
        <section className={BottomStyle[`confirm-container`]}>
          <div className={BottomStyle[`confirm-check-img`]}>
            <svg
              width="80"
              height="80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="url(#a)" />
              <path
                d="M28 39.92 36.08 48l16-16"
                stroke="#fff"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="-23.014"
                  y1="11.507"
                  x2="0"
                  y2="91.507"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6348FE" />
                  <stop offset="1" stopColor="#610595" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className={BottomStyle[`title`]}>thank you!</h2>
          <p className={BottomStyle[`description`]}>
            We've added your card details.
          </p>
          <button className={BottomStyle[`call-to-action-btn`]}>
            Continue
          </button>
        </section>
      </div>
    </React.Fragment>
  );
}

// function AcceptedMessage({ children, ...props }) {
//   return (
//     <IconContext.Provider value={{}}>
//       <React.Fragment>
//         <IoCheckmarkCircleSharp className={props.testName} id="hello" />
//       </React.Fragment>
//     </IconContext.Provider>
//   );
// }
