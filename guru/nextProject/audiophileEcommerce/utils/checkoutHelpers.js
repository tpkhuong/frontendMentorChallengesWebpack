export function checkoutSubmitHandler(event) {}

export function checkingEmailValidity(event) {
  const { emailErrorColor } = this;
  if (!event.target.validity.valid) {
    emailErrorColor.current.setAttribute("data-invalidemail", "true");
  } else {
    emailErrorColor.current.setAttribute("data-invalidemail", "false");
  }
}
