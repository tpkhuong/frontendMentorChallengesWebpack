import React from "react";
import {
  cardHolderNameHelper,
  creditCardNumberHelper,
  expirationMonthHelper,
  expirationYearHelper,
  cvcDigitsHelper,
  testRadioBtn,
  amexCreditCardNumHelper,
  cvcAmexDigitHelper,
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
  // set ref to radio btn
  const yesBtn = React.useRef();
  const noBtn = React.useRef();
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
          action=""
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
                className={BottomStyle[`cardholder-name`]}
              >
                <label htmlFor="cardholder">cardholder name</label>
                <div className={BottomStyle[`custom-input-border-wrapper`]}>
                  <input
                    placeholder="e.g. Jane Appleseed"
                    id="cardholder"
                    type="text"
                    onChange={cardHolderNameHelper.bind({
                      creditCardHolder: creditCardDisplayRefObj.creditCard.name,
                    })}
                  />
                  <span className={BottomStyle[`input-border`]}></span>
                  {/* <AcceptedMessage testName={`${BottomStyle[`accepted`]}`} /> */}
                  <span className={BottomStyle[`error-msg`]}>
                    Can't be blank
                  </span>
                </div>
                {/* accept icon */}
                <IoCheckmarkCircleSharp
                  className={`${BottomStyle[`accepted`]}`}
                  id="hello"
                />
              </div>
              {/* card number input */}
              {!stateOfCreditCard ? (
                <div
                  data-needattention="false"
                  className={BottomStyle[`card-number`]}
                >
                  <label htmlFor="credit-card-number">card number</label>
                  <div className={BottomStyle[`custom-input-border-wrapper`]}>
                    <input
                      placeholder="e.g. 1234 5678 9123 0000"
                      id="credit-card-number"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="cc-number"
                      pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                      maxLength="19"
                      onKeyUp={creditCardNumberHelper.bind({
                        cardNumber: creditCardDisplayRefObj.creditCard.number,
                      })}
                    />
                    <span className={BottomStyle[`input-border`]}></span>

                    <span className={BottomStyle[`error-msg`]}>
                      Wrong format, numbers only
                    </span>
                  </div>
                </div>
              ) : (
                // amex
                <div
                  data-needattention="false"
                  className={BottomStyle[`card-number`]}
                >
                  <label htmlFor="credit-card-number">card number</label>
                  <div className={BottomStyle[`custom-input-border-wrapper`]}>
                    <input
                      placeholder="e.g. 1234 567891 23000"
                      id="credit-card-number"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="cc-number"
                      pattern="[0-9]{4} [0-9]{6} [0-9]{5}"
                      maxLength="17"
                      onKeyUp={amexCreditCardNumHelper.bind({
                        amexCardNumber: creditCardDisplayRefObj.amex.number,
                      })}
                    />
                    <span className={BottomStyle[`input-border`]}></span>

                    <span className={BottomStyle[`error-msg`]}>
                      Wrong format, numbers only
                    </span>
                  </div>
                </div>
              )}
              {/* exp.date cvc container */}
              <div className={BottomStyle[`expdate-cvc-container`]}>
                {/* flex */}
                {/* month year input container */}
                <div
                  data-needattention="false"
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
                    <div className={BottomStyle[`exp-month`]}>
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
                          autoComplete="cc-exp-month"
                          maxLength="2"
                          onChange={expirationMonthHelper.bind({
                            monthRef:
                              creditCardDisplayRefObj.creditCard.expMonth,
                          })}
                        />
                        <span className={BottomStyle[`input-border`]}></span>
                      </div>
                    </div>
                    {/* year input*/}
                    <div className={BottomStyle[`exp-year`]}>
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
                          autoComplete="cc-exp-year"
                          maxLength="2"
                          onChange={expirationYearHelper.bind({
                            yearRef: creditCardDisplayRefObj.creditCard.expYear,
                          })}
                        />
                        <span className={BottomStyle[`input-border`]}></span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* cvc input container */}
                {!stateOfCreditCard ? (
                  <div
                    data-needattention="false"
                    className={BottomStyle[`cvc-input`]}
                  >
                    <label htmlFor="cvc">cvc</label>
                    <div className={BottomStyle[`custom-input-border-wrapper`]}>
                      <input
                        placeholder="e.g. 123"
                        id="cvc"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        maxLength="3"
                        onChange={cvcDigitsHelper.bind({
                          cvcRef: creditCardDisplayRefObj.creditCard.cvc,
                        })}
                      />
                      <span className={BottomStyle[`input-border`]}></span>
                      <span className={BottomStyle[`error-msg`]}>
                        Can't be blank
                      </span>
                    </div>
                  </div>
                ) : (
                  // amex
                  <div
                    data-needattention="false"
                    className={BottomStyle[`cvc-input`]}
                  >
                    <label htmlFor="cvc">cvc</label>
                    <div className={BottomStyle[`custom-input-border-wrapper`]}>
                      <input
                        placeholder="e.g. 2687"
                        id="cvc"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        maxLength="4"
                        onChange={cvcAmexDigitHelper.bind({
                          amexCvcRef: creditCardDisplayRefObj.amex.cvc,
                        })}
                      />
                      <span className={BottomStyle[`input-border`]}></span>
                      <span className={BottomStyle[`error-msg`]}>
                        Can't be blank
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          </fieldset>
          <button className={BottomStyle[`call-to-action-btn`]}>Confirm</button>
          <div
            onChange={testRadioBtn.bind({
              yesBtn,
              noBtn,
              setCreditCardState,
              creditCardDisplayRefObj,
            })}
            className="test-radio-btns"
          >
            <label htmlFor="yes-btn">yes</label>
            <input ref={yesBtn} id="yes-btn" name="test" type="radio" />
            <label htmlFor="no-btn">no</label>
            <input ref={noBtn} id="no-btn" name="test" type="radio" />
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
            We've added your card details
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
