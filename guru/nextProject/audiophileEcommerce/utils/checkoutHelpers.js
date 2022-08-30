export function checkoutSubmitHandler(event) {}

export function displayPaymentMethods(event) {
  const {
    setBillingShipping,
    yesInputRef,
    noInputRef,
    billingRef,
    shippingRef,
  } = this;
  //   setBillingShipping(event.target);
  //   use clicked on yes radio input shipping address same as billing
  if (event.target == yesInputRef.current) {
    console.log("hello this is yes radio input");
    console.log("yes input", yesInputRef.current.checked);
    console.log("no input", noInputRef.current.checked);
    /* different approach for a11y */
    // setBillingShipping(false);
    /**
     * we want to billing inputs validity when user click on yes input btns
     * which means user billing and shipping address are the same
     * **/
  }
  //   use clicked on no radio input shipping address is different than billing
  if (event.target == noInputRef.current) {
    console.log("hello this is no radio input");
    console.log("yes input", yesInputRef.current.checked);
    console.log("no input", noInputRef.current.checked);
    /* different approach for a11y */
    // setBillingShipping(true);
  }
}

export function personalInputListener(event) {
  if (event.target.closest("input")) {
    // check if input is email or phone number check entered value is correct
    // due to pattern attr
    if (
      event.target.getAttribute("id") == "personal-email" ||
      event.target.getAttribute("id") == "personal-phone-number"
    ) {
      // remove letters and only keep numbers and '-' when user is entering
      // values in phone number input

      if (event.target.getAttribute("id") == "personal-phone-number") {
        const regex = /[0-9\-]/gi;
        const onlyCharMatchPhoneNum = event.target.value.match(regex);
        event.target.value = !onlyCharMatchPhoneNum
          ? ""
          : onlyCharMatchPhoneNum.join("");
      }
      if (event.target.value === "" || !event.target.validity.valid) {
        // emailErrorColor.current.setAttribute("data-needuserattention", "true");
        event.target.parentElement.setAttribute(
          "data-needuserattention",
          "true"
        );
      } else {
        // emailErrorColor.current.setAttribute("data-needuserattention", "false");
        event.target.parentElement.setAttribute(
          "data-needuserattention",
          "false"
        );
      }
      // if phone number input is valid and value length is greater than 12
      // copy value inputs and assign that value to phone number input
      return;
    } else {
      /**
       * only allow letters and space for name
       * **/
      const regexForName = /[a-zA-Z\s]/g;
      const onlyLettersAndSpace = event.target.value.match(regexForName);
      event.target.value = !onlyLettersAndSpace
        ? ""
        : onlyLettersAndSpace.join("");
      if (event.target.value === "") {
        event.target.parentElement.setAttribute(
          "data-needuserattention",
          "true"
        );
      } else {
        event.target.parentElement.setAttribute(
          "data-needuserattention",
          "false"
        );
      }
    }
  }
}

export function billingShippingInputListener(event) {
  const { billing, shipping, linkInputToShipping } = this;
  const methods = createObjOfMethods(billing, shipping, linkInputToShipping);
  if (event.target.closest("input")) {
    // get element id
    const inputIdAttr = event.target.getAttribute("id");
    // methods[inputIdAttr]();
    // check if input is zip code check entered value is correct
    // due to pattern attr
    /**
     * this event listener callback is for both billing and shipping
     * **/
    const eitherBillingOrShipping = inputIdAttr.includes("billing")
      ? "data-billinguserattention"
      : "data-shippinguserattention";
    // console.log(inputIdAttr.includes("zip"));
    if (inputIdAttr.includes("zip")) {
      // remove letters or symbols
      // then assign that string to event.target.value
      const regex = /\d+/;
      const onlyNumbers = event.target.value.match(regex);
      // we will check when user press down on letter key
      // as first values in zip code
      event.target.value = !onlyNumbers ? "" : onlyNumbers.join("");
      if (event.target.value === "" || !event.target.validity.valid) {
        event.target.parentElement.setAttribute(
          eitherBillingOrShipping,
          "true"
        );
      } else {
        event.target.parentElement.setAttribute(
          eitherBillingOrShipping,
          "false"
        );
      }
      // dont want user input for zip to go pass length of 5
      if (!event.target.validity.valid && event.target.value.length > 5) {
        const copiedZipInput = event.target.value.slice(0, 5);
        event.target.value = copiedZipInput;
      }
      return;
    }
    /**
     * only allow letters and space for city, state, country
     * **/
    if (
      inputIdAttr.includes("city") ||
      inputIdAttr.includes("state") ||
      inputIdAttr.includes("country")
    ) {
      const letterSpaceRegex = /[a-zA-Z\s]/g;
      const onlyLettersAndSpace = event.target.value.match(letterSpaceRegex);
      event.target.value = !onlyLettersAndSpace
        ? ""
        : onlyLettersAndSpace.join("");
      if (event.target.value === "" || !event.target.validity.valid) {
        event.target.parentElement.setAttribute(
          eitherBillingOrShipping,
          "true"
        );
      } else {
        event.target.parentElement.setAttribute(
          eitherBillingOrShipping,
          "false"
        );
      }
    }
    if (event.target.value === "") {
      // if user is entering values in other inputs
      event.target.parentElement.setAttribute(eitherBillingOrShipping, "true");
    } else {
      event.target.parentElement.setAttribute(eitherBillingOrShipping, "false");
    }
  }
}

function createObjOfMethods(...objs) {
  const objOfMethods = {
    // address
    "billing-address": () => {
      console.log("this is billing address");
      console.log(objs);
    },
    "shipping-address": () => {
      console.log("this is shipping address");
      console.log(objs);
    },
    // city
    "billing-city": () => {
      console.log("this is billing city");
      console.log(objs);
    },
    "shipping-city": () => {
      console.log("this is shipping city");
      console.log(objs);
    },
    // state
    "billing-state": () => {
      console.log("this is billing state");
      console.log(objs);
    },
    "shipping-state": () => {
      console.log("this is shipping state");
      console.log(objs);
    },
    // zip code
    "billing-zip": () => {
      console.log("this is billing zip");
      console.log(objs);
    },
    "shipping-zip": () => {
      console.log("this is shipping zip");
      console.log(objs);
    },
    // country
    "billing-country": () => {
      console.log("this is billing country");
      console.log(objs);
    },
    "shipping-country": () => {
      console.log("this is shipping country");
      console.log(objs);
    },
  };
  return objOfMethods;
}

export function billingInputListener(event) {
  // const { billing, shipping } = this;
  // const methods = createObjOfMethods(billing, shipping);
  // if (event.target.closest("input")) {
  //   // get element id
  //   const inputIdAttr = event.target.getAttribute("id");
  //   methods[inputIdAttr]();
  //   // check if input is zip code check entered value is correct
  //   // due to pattern attr
  // }
}

export function shippingInputListener(event) {}

/**
 * moved algorithm to personalInputListener
 * **/

// export function checkingEmailValidity(event) {
//   // const { emailErrorColor } = this;
//   if (!event.target.validity.valid) {
//     // emailErrorColor.current.setAttribute("data-needUserAttention", "true");
//     event.target.previousElementSibling.setAttribute(
//       "data-needUserAttention",
//       "true"
//     );
//   } else {
//     // emailErrorColor.current.setAttribute("data-needUserAttention", "false");
//     event.target.previousElementSibling.setAttribute(
//       "data-needUserAttention",
//       "false"
//     );
//   }
// }
