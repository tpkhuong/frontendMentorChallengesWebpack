// emoney
export function eMoneyClickHandler(event) {
  // destructure this obj
  const { setPaymentMethod, activeDescendantRef, emoneyRef, cashDeliveryRef } =
    this;
  if (event.target.closest("[data-isemoney='true']")) {
    console.log("hello this is emoney");
  }
  // pass value boolean false to setPaymentMethod
  setPaymentMethod(false);
  // we focus on the radio btn clicked
  emoneyRef.current.focus();
  // assign value of "0" to tabindex of radio btn click
  emoneyRef.current.setAttribute("tabindex", "0");
  // get value of id attr of the radio btn clicked
  const idOfEmoneyBtn = emoneyRef.current.getAttribute("id");
  // assign that value to aria-activedescendant
  activeDescendantRef.current.setAttribute(
    "aria-activedescendant",
    `${idOfEmoneyBtn}`
  );
  // assign "true" to aria-checked
  emoneyRef.current.setAttribute("aria-checked", "true");
  // assign "false" to aria-checked to other radio btn
  cashDeliveryRef.current.setAttribute("aria-checked", "false");
  // assign value of "-1" to other radio btns tabindex
  cashDeliveryRef.current.setAttribute("tabindex", "-1");
}

// cash on delivery
export function cashOnDeliveryClickHandler(event) {
  // destructure this obj
  const { setPaymentMethod, activeDescendantRef, emoneyRef, cashDeliveryRef } =
    this;
  if (event.target.closest("[data-iscashdelivery='true']")) {
    console.log("hello this is cash delivery");
    // pass value boolean true to setPaymentMethod
    setPaymentMethod(true);
    // we focus on the radio btn clicked
    cashDeliveryRef.current.focus();
    // assign value of "0" to tabindex of radio btn click
    cashDeliveryRef.current.setAttribute("tabindex", "0");
    // get value of id attr of the radio btn clicked
    const idOfCashBtn = cashDeliveryRef.current.getAttribute("id");
    // assign that value to aria-activedescendant
    activeDescendantRef.current.setAttribute(
      "aria-activedescendant",
      `${idOfCashBtn}`
    );
    // assign "true" to aria-checked
    cashDeliveryRef.current.setAttribute("aria-checked", "true");
    // assign "false" to aria-checked to other radio btn
    emoneyRef.current.setAttribute("aria-checked", "false");
    // assign value of "-1" to other radio btns tabindex
    emoneyRef.current.setAttribute("tabindex", "-1");
  }
}
