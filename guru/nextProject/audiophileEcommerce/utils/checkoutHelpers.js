export function checkoutSubmitHandler(event) {}

export function toggleBillingAndShippingAddress(event) {
  // get data from local storage
  const localData =
    localStorage.getItem("someData") == null
      ? initialCheckoutInputObjForLocalStorage
      : JSON.parse(localStorage.getItem("someData"));

  const {
    // setBillingShipping,
    setShippingSame,
    arrayOfText,
    yesInputRef,
    noInputRef,
    billingRef,
    shippingRef,
  } = this;
  //   setBillingShipping(event.target);
  //   user clicked on yes radio input shipping address same as billing
  if (event.target == yesInputRef.current) {
    /* different approach for a11y */
    // setBillingShipping(false);

    localData.toggleSameAddressInfo.yesInputBtn = yesInputRef.current.checked;
    localData.toggleSameAddressInfo.noInputBtn = noInputRef.current.checked;
    /**
     * we want to check billing inputs validity when user click on yes input btns
     * which means user billing and shipping address are the same.
     * only copy billing input value to shipping input value when billing inputs
     * are valid.
     * **/
    const copiedArray = [].concat(arrayOfText);
    /**
     * since we only copy input from billing to shipping inputs when the billing inputs
     * are valid. we will see shipping input parent data-shippinguserattention to "false"
     * **/
    // address
    billingRef.address.current.value === ""
      ? copiedArray.push("address")
      : ((shippingRef.address.current.value = billingRef.address.current.value),
        shippingRef.address.current.parentElement.setAttribute(
          "data-shippinguserattention",
          "false"
        ));
    // city
    billingRef.city.current.value === ""
      ? copiedArray.push("city")
      : ((shippingRef.city.current.value = billingRef.city.current.value),
        shippingRef.city.current.parentElement.setAttribute(
          "data-shippinguserattention",
          "false"
        ));
    // state
    billingRef.state.current.value === ""
      ? copiedArray.push("state")
      : ((shippingRef.state.current.value = billingRef.state.current.value),
        shippingRef.state.current.parentElement.setAttribute(
          "data-shippinguserattention",
          "false"
        ));
    // zip code check for empty and valid format
    billingRef.zipCode.current.value === ""
      ? copiedArray.push("zip code")
      : !billingRef.zipCode.current.validity.valid
      ? copiedArray.push("zip code")
      : ((shippingRef.zipCode.current.value = billingRef.zipCode.current.value),
        shippingRef.zipCode.current.parentElement.setAttribute(
          "data-shippinguserattention",
          "false"
        ));
    // country
    billingRef.country.current.value === ""
      ? copiedArray.push("country")
      : ((shippingRef.country.current.value = billingRef.country.current.value),
        shippingRef.country.current.parentElement.setAttribute(
          "data-shippinguserattention",
          "false"
        ));
    // check if shipping inputs are valid
    // address
    // city
    // state
    // zip
    // country
    setShippingSame((prevValues) => {
      return {
        ...prevValues,
        isShippingSame: true,
        arrayOfText: copiedArray,
      };
    });
  }
  //   user clicked on no radio input shipping address is different than billing
  if (event.target == noInputRef.current) {
    // setShippingSame(false);
    arrayOfText.length > 0
      ? setShippingSame((prevValues) => {
          return {
            ...prevValues,
            isShippingSame: false,
            arrayOfText: [],
          };
        })
      : null;
    // set shipping inputs to default when yesInput value in local storage is true
    localData.toggleSameAddressInfo.yesInputBtn
      ? Object.values(shippingRef).forEach(({ current }) => {
          // input value to empty string
          current.value = "";
          // parent element "data-shippinguserattention", "true"
          current.parentElement.setAttribute(
            "data-shippinguserattention",
            "true"
          );
        })
      : null;

    localData.toggleSameAddressInfo.yesInputBtn = yesInputRef.current.checked;
    localData.toggleSameAddressInfo.noInputBtn = noInputRef.current.checked;
  }
  // save yesbtn and nobtn checkd values to local storage
  localStorage.setItem("someData", JSON.stringify(localData));
}

export function personalInputListener(event) {
  if (event.target.closest("input")) {
    /**
     * get data from local storage
     * **/
    const dataFromLocalStorage =
      localStorage.getItem("someData") == null
        ? initialCheckoutInputObjForLocalStorage
        : JSON.parse(localStorage.getItem("someData"));

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
        // dont want user input for phone number to go pass length of 12
        if (!event.target.validity.valid && event.target.value.length > 12) {
          const copiedZipInput = event.target.value.slice(0, 12);
          event.target.value = copiedZipInput;
        }
        // save user personal info inputs: phone number
        dataFromLocalStorage.personalInfo.phoneNumber = event.target.value;
      } else {
        // save user personal info inputs: email
        dataFromLocalStorage.personalInfo.email = event.target.value;
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
      // save user personal info inputs: name
      dataFromLocalStorage.personalInfo.name = event.target.value;
    }
    // save obj to local storage
    localStorage.setItem("someData", JSON.stringify(dataFromLocalStorage));
  }
}

export function billingShippingInputListener(event) {
  const { billing, shipping, sameAddressInputRef, toggleObj } = this;
  // console.log(this);
  const methods = createObjOfMethods({
    billing,
    shipping,
    sameAddressInputRef,
  });
  if (event.target.closest("input")) {
    // get element id
    const inputIdAttr = event.target.getAttribute("id");
    /**
     * this event listener callback is for both billing and shipping
     * **/
    const eitherBillingOrShipping = inputIdAttr.includes("billing")
      ? "data-billinguserattention"
      : "data-shippinguserattention";
    // check if input is zip code check entered value is correct
    // due to pattern attr
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
      console.log("zip");
      // return;
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
      console.log("city, state, country");
    }

    if (inputIdAttr.includes("address")) {
      // if user is entering values in other inputs
      if (event.target.value === "") {
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
      console.log("address");
    }

    // methods[inputIdAttr]();
  }
}

function createObjOfMethods({ billing, shipping, sameAddressInputRef }) {
  const objOfMethods = {
    // address
    "billing-address": () => {
      console.log("this is billing address");
      console.log(billing, shipping, sameAddressInputRef);
    },
    "shipping-address": () => {
      console.log("this is shipping address");
      console.log(billing, shipping, sameAddressInputRef);
    },
    // city
    "billing-city": () => {
      console.log("this is billing city");
      console.log(billing, shipping, sameAddressInputRef);
    },
    "shipping-city": () => {
      console.log("this is shipping city");
      console.log(billing, shipping, sameAddressInputRef);
    },
    // state
    "billing-state": () => {
      console.log("this is billing state");
      console.log(billing, shipping, sameAddressInputRef);
    },
    "shipping-state": () => {
      console.log("this is shipping state");
      console.log(billing, shipping, sameAddressInputRef);
    },
    // zip code
    "billing-zip": () => {
      console.log("this is billing zip");
      shipping.zipCode.current.value = billing.zipCode.current.value;
      billing.zipCode.current.parentElement.getAttribute(
        "data-billinguserattention"
      ) == "true"
        ? shipping.zipCode.current.parentElement.setAttribute(
            "data-shippinguserattention",
            "true"
          )
        : shipping.zipCode.current.parentElement.setAttribute(
            "data-shippinguserattention",
            "false"
          );
      console.log(billing, shipping, sameAddressInputRef);
    },
    "shipping-zip": () => {
      console.log("this is shipping zip");
      console.log(billing, shipping, sameAddressInputRef);
    },
    // country
    "billing-country": () => {
      console.log("this is billing country");
      console.log(billing, shipping, sameAddressInputRef);
    },
    "shipping-country": () => {
      console.log("this is shipping country");
      console.log(billing, shipping, sameAddressInputRef);
    },
  };
  return objOfMethods;
}

export const initialCheckoutInputObjForLocalStorage = {
  personalInfo: {
    name: "",
    phoneNumber: "",
    email: "",
  },
  billingInfo: {
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  },
  shippingInfo: {
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  },
  toggleSameAddressInfo: {
    yesInputBtn: false,
    noInputBtn: false,
  },
  paymentInfo: {
    eMoneyMethod: "",
    cashDeliveryMethod: "",
  },
};

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
