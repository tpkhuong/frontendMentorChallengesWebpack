import React from "react";
import PaymentStyles from "../../styles/Checkout/Payment.module.css";
import { ErrorMessageContext } from "../../pages/checkout";
import {
  eMoneyClickHandler,
  cashOnDeliveryClickHandler,
  checkValidityEmoney,
} from "../../utils/paymentHelpers";

function Payment({ children, ...props }) {
  // check if data obj is set in local storage
  const [selectedPayment, setPaymentMethod] = React.useState(false);
  // when selectedPayment is false we should emoney
  // show cash delivery when selectedPayment is true
  // make reference to activedescendant eleemnt
  const activeDescendantRef = React.useRef();
  // emoney
  const emoneyRef = React.useRef();
  // number ref
  const moneyNumberRef = React.useRef();
  // pin ref
  const pinRef = React.useRef();
  // cashdelivery
  const cashDeliveryRef = React.useRef();
  // get context obj created in checkout page
  const { paymentMethodSelection } = React.useContext(ErrorMessageContext);
  paymentMethodSelection.eMoney = emoneyRef;
  paymentMethodSelection.cashDelivery = cashDeliveryRef;
  const { inputMoney } = paymentMethodSelection;
  inputMoney.number = moneyNumberRef;
  inputMoney.pin = pinRef;
  // console.log(paymentRefObj);
  return (
    <React.Fragment>
      {/* title */}
      <fieldset>
        <legend className={PaymentStyles[`section-title`]}>
          payment details
        </legend>
        {/* content-wrapper */}
        <article className={PaymentStyles[`content-wrapper`]}>
          {/* payment method title and radio btn wrapper */}
          <div className={PaymentStyles[`methods-selection-wrapper`]}>
            <div className="wrapper">
              <h2 className={PaymentStyles[`title`]} id="payment-method">
                Payment Method
              </h2>
            </div>
            <div
              ref={activeDescendantRef}
              aria-activedescendant="rbtn1"
              role="radiogroup"
              aria-labelledby="payment-method"
            >
              {/* each radio button */}
              {/* e-money radio button */}
              <div
                data-isemoney="true"
                className={PaymentStyles[`width-wrapper`]}
                tabIndex="0"
                aria-checked="true"
                role="radio"
                // id will matched aria-activedescendant
                id="rbtn1"
                ref={emoneyRef}
                onClick={eMoneyClickHandler.bind({
                  setPaymentMethod,
                  activeDescendantRef,
                  emoneyRef,
                  cashDeliveryRef,
                })}
              >
                <div className={PaymentStyles[`input-wrapper`]}>
                  <div className={PaymentStyles[`circle-border`]}>
                    <div className={PaymentStyles[`circle`]}></div>
                  </div>
                  {/* <input id="e-money" type="radio" name="payment" /> */}
                  <span className={PaymentStyles[`input-content`]}>
                    e-Money
                  </span>
                </div>
              </div>
              {/* cash on delivery radio button */}
              <div
                ref={cashDeliveryRef}
                // tabIndex="-1"
                aria-checked="false"
                role="radio"
                // id will matched aria-activedescendant
                id="rbtn2"
                data-iscashdelivery="true"
                className={PaymentStyles[`width-wrapper`]}
                onClick={cashOnDeliveryClickHandler.bind({
                  setPaymentMethod,
                  activeDescendantRef,
                  emoneyRef,
                  cashDeliveryRef,
                })}
              >
                <div className={PaymentStyles[`input-wrapper`]}>
                  <div className={PaymentStyles[`circle-border`]}>
                    <div className={PaymentStyles[`circle`]}></div>
                  </div>
                  {/* <input id="e-money" type="radio" name="payment" /> */}
                  <span className={PaymentStyles[`input-content`]}>
                    Cash on Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* render based on radio btn selected */}
          <div className={PaymentStyles[`payment-wrapper`]}>
            {!selectedPayment ? (
              // /* e-money */
              <div
                onChange={checkValidityEmoney}
                className={PaymentStyles[`emoney-wrapper`]}
              >
                {/* e-money number */}
                <div
                  data-emoneyattention="true"
                  className={PaymentStyles[`e-money-number`]}
                >
                  <label htmlFor="emoney-number">e-Money Number</label>
                  <input
                    id="emoney-number"
                    type="text"
                    required
                    placeholder="8888888888"
                    pattern="[0-9]{8}"
                    ref={moneyNumberRef}
                  />
                  <span className={PaymentStyles[`error-text`]}>
                    NOT ACCEPTED
                  </span>
                  <span className={PaymentStyles[`correct-text`]}>
                    ACCEPTED
                  </span>
                </div>
                {/* e-money PIN */}
                <div
                  data-emoneyattention="true"
                  className={PaymentStyles[`e-money-pin`]}
                >
                  <label htmlFor="emoney-pin">e-Money PIN</label>
                  <input
                    id="emoney-pin"
                    type="text"
                    required
                    placeholder="88888"
                    pattern="[0-9]{5}"
                    ref={pinRef}
                  />
                  <span className={PaymentStyles[`error-text`]}>
                    NOT ACCEPTED
                  </span>
                  <span className={PaymentStyles[`correct-text`]}>
                    ACCEPTED
                  </span>
                </div>
              </div>
            ) : (
              /* cash on delivery */
              <div className={PaymentStyles[`cash-delivery-wrapper`]}>
                <div className={PaymentStyles[`img-wrapper`]}>
                  <svg
                    width="48"
                    height="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                      fill="#D87D4A"
                    />
                  </svg>
                </div>
                <p className={PaymentStyles[`description`]}>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
        </article>
      </fieldset>
    </React.Fragment>
  );
}

export default Payment;
