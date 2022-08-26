export function checkoutSubmitHandler(event) {}

export function checkingEmailValidity(event) {
  const { emailErrorColor } = this;
  if (!event.target.validity.valid) {
    emailErrorColor.current.setAttribute("data-invalidemail", "true");
  } else {
    emailErrorColor.current.setAttribute("data-invalidemail", "false");
  }
}

export function displayPaymentMethods(event) {
  const { setBillingShipping, yesInputRef, noInputRef } = this;
  //   setBillingShipping(event.target);
  //   use clicked on yes radio input shipping address same as billing
  if (event.target == yesInputRef.current) {
    console.log("hello this is yes radio input");
    console.log("yes input", yesInputRef.current.checked);
    console.log("no input", noInputRef.current.checked);
    setBillingShipping(false);
  }
  //   use clicked on no radio input shipping address is different than billing
  if (event.target == noInputRef.current) {
    console.log("hello this is no radio input");
    console.log("yes input", yesInputRef.current.checked);
    console.log("no input", noInputRef.current.checked);
    setBillingShipping(true);
  }
}
