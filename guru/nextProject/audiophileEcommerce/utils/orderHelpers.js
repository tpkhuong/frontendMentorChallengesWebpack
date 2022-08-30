export function showOrderModal(event) {
  const { setOrderPlaced, refValues } = this;
  const { personal, billing, shipping, paymentMethodSelection } = refValues;
  const { eMoney, cashDelivery, inputMoney } = paymentMethodSelection;
  /* check all inputs validity */
  console.log(refValues);
  // only call setorderplace(true)
  // when all inputs are valid and a payment method is selected
  // personal email, phone num, billing and shipping zip code
  // check format and empty string
  /**
   * check for empty string first
   * **/
  // check if emoney payment is selected
  // check number and pin is valid
  if (eMoney.current.getAttribute("aria-checked") == "true") {
  }
  // setOrderPlaced(true);
}

export function hideOrderModal(event) {}

// show hide ordered items

export function showHideItems(event) {
  // start here
  const { showMore, setShowMore } = this;
  if (!showMore) {
    // when showMore is falsey and user click on "and other items" btn
    // pass boolean value true to setShowMore which will render all items
    // in array
    setShowMore(true);
  } else {
    // when showMore is truthy we enter here
    // user click on "view less", pass boolean value false to setShowMore
    // which will render first item in array
    setShowMore(false);
  }
}
