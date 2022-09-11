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
    // loop through entries of billingRef obj we have access to both keys and values
    // billingInfo and shippingInfo obj
    Object.entries(billingRef).forEach(function saveValuesToStorage(element) {
      // key will be either:address, city,state,zipCode, country
      // value will be ref obj with current property of input
      // coult destructure value to {current}
      const [key, { current }] = element;
      // access localData property billingInfo and shippingInfo obj using key
      // billing
      localData.billingInfo[key] = current.value;
      // shipping
      localData.shippingInfo[key] = current.value;
    });

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
    /**
     * having algorithm that push inputs values to local storage before removing
     * data entered to shipping section inputs.
     * the entered data to shipping section will be in local storage until user click
     * on yes radio btn
     * **/

    // set shipping inputs to default when yesInput value in local storage is true
    localData.toggleSameAddressInfo.yesInputBtn
      ? Object.entries(shippingRef).forEach(([key, { current }]) => {
          // destrucutre array in function declaration
          // key is the property string: address,city etc
          // value is the obj ref which we destructure to get current property
          // input value to empty string
          current.value = "";
          // parent element "data-shippinguserattention", "true"
          current.parentElement.setAttribute(
            "data-shippinguserattention",
            "true"
          );
          // assign empty "" to properties of shippingInfo obj in storage
          localData.shippingInfo[key] = current.value;
        })
      : null;
    // will save shipping inputs values to local storage
    // since billing input values will not change when user click on no radio btn
    // we can assign empty string to properties of shippingInfo obj in local storage
    // since the value of each shipping inputs will be empty ""
    // dont have to loop through shippingRef obj
    localData.toggleSameAddressInfo.yesInputBtn = yesInputRef.current.checked;
    localData.toggleSameAddressInfo.noInputBtn = noInputRef.current.checked;
  }
  // save yesbtn and nobtn checked values to local storage
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
    // input id

    const inputElementId = event.target.getAttribute("id");
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
      // if (event.target.value === "" || !event.target.validity.valid) {
      //   // emailErrorColor.current.setAttribute("data-needuserattention", "true");
      //   event.target.parentElement.setAttribute(
      //     "data-needuserattention",
      //     "true"
      //   );
      // } else {
      //   // emailErrorColor.current.setAttribute("data-needuserattention", "false");
      //   event.target.parentElement.setAttribute(
      //     "data-needuserattention",
      //     "false"
      //   );
      // }
      if (event.target.value === "") {
        event.target.parentElement.setAttribute("data-isempty", "true");
        event.target.parentElement.setAttribute("data-needuserattention", "");
        // assign correct id to aria-describedby
        inputElementId == "personal-email"
          ? event.target.setAttribute("aria-describedby", "email-isempty")
          : event.target.setAttribute(
              "aria-describedby",
              "phone-number-isempty"
            );
      } else {
        // input is not empty we want to check for validity
        event.target.parentElement.setAttribute("data-isempty", "");
        if (!event.target.validity.valid) {
          // input not valid
          event.target.parentElement.setAttribute(
            "data-needuserattention",
            "true"
          );
          // assign correct id to aria-describedby
          inputElementId == "personal-email"
            ? event.target.setAttribute("aria-describedby", "email-notaccepted")
            : event.target.setAttribute(
                "aria-describedby",
                "phone-notaccepted"
              );
        } else {
          // input is valid
          event.target.parentElement.setAttribute(
            "data-needuserattention",
            "false"
          );
          // assign correct id to aria-describedby
          inputElementId == "personal-email"
            ? event.target.setAttribute("aria-describedby", "email-accepted")
            : event.target.setAttribute("aria-describedby", "phone-accepted");
        }
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

  if (event.target.closest("input")) {
    // get data from local storage
    const dataFromLocalStorage =
      localStorage.getItem("someData") == null
        ? initialCheckoutInputObjForLocalStorage
        : JSON.parse(localStorage.getItem("someData"));
    // get element id
    const inputIdAttr = event.target.getAttribute("id");
    const billingOrShippingStr = inputIdAttr.includes("billing")
      ? "billing"
      : "shipping";
    /**
     * this event listener callback is for both billing and shipping
     * **/
    const eitherBillingOrShipping =
      billingOrShippingStr == "billing"
        ? "data-billinguserattention"
        : "data-shippinguserattention";
    // reverse selecting input parent if yesBtn is checked == true
    const selectingParentForLinkedInputs = sameAddressInputRef.yesBtn.current
      .checked
      ? billingOrShippingStr == "billing"
        ? "data-shippinguserattention"
        : "data-billinguserattention"
      : null;

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
      // if (event.target.value === "" || !event.target.validity.valid) {
      //   event.target.parentElement.setAttribute(
      //     eitherBillingOrShipping,
      //     "true"
      //   );
      // } else {
      //   event.target.parentElement.setAttribute(
      //     eitherBillingOrShipping,
      //     "false"
      //   );
      // }
      // check for empty
      if (event.target.value === "") {
        event.target.parentElement.setAttribute("data-isempty", "true");
        event.target.parentElement.setAttribute(eitherBillingOrShipping, "");
      } else {
        event.target.parentElement.setAttribute("data-isempty", "");
        // check for validity
        if (!event.target.validity.valid) {
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
      // dont want user input for zip to go pass length of 5
      if (!event.target.validity.valid && event.target.value.length > 5) {
        const copiedZipInput = event.target.value.slice(0, 5);
        event.target.value = copiedZipInput;
      }
      // get billing or shipping element based on event.target id
      // if its billing use shipping obj and vice versa
      if (sameAddressInputRef.yesBtn.current.checked) {
        // run code if sameAddressInputRef.yesBtn.current.checked is truthy
        linkedInputHelper(
          event,
          inputIdAttr,
          "zipCode",
          eitherBillingOrShipping,
          selectingParentForLinkedInputs,
          shipping,
          billing
        );
        // cached input values to both billing and shipping
        dataFromLocalStorage.billingInfo.zipCode = event.target.value;
        dataFromLocalStorage.shippingInfo.zipCode = event.target.value;
      } else {
        // we want to find out which input the user currently has focused on
        // billing or shipping and cached input values according to the billing/shipping
        // input the user is currently on
        billingOrShippingStr == "billing"
          ? (dataFromLocalStorage.billingInfo.zipCode = event.target.value)
          : (dataFromLocalStorage.shippingInfo.zipCode = event.target.value);
      }
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
      // find out if id is either city,state,country
      const [, eitherCityStateOrCountryStr] = inputIdAttr.split("-");
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
      /**
       * we can cached input data when we check if yesBtn to question
       * shipping is same as billing address
       * **/
      if (sameAddressInputRef.yesBtn.current.checked) {
        linkedInputHelper(
          event,
          inputIdAttr,
          eitherCityStateOrCountryStr,
          eitherBillingOrShipping,
          selectingParentForLinkedInputs,
          shipping,
          billing
        );
        // cached input values to both billing and shipping
        dataFromLocalStorage.billingInfo[eitherCityStateOrCountryStr] =
          event.target.value;
        dataFromLocalStorage.shippingInfo[eitherCityStateOrCountryStr] =
          event.target.value;
      } else {
        // we want to find out which input the user currently has focused on
        // billing or shipping and cached input values according to the billing/shipping
        // input the user is currently on
        billingOrShippingStr == "billing"
          ? (dataFromLocalStorage.billingInfo[eitherCityStateOrCountryStr] =
              event.target.value)
          : (dataFromLocalStorage.shippingInfo[eitherCityStateOrCountryStr] =
              event.target.value);
      }
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

      if (sameAddressInputRef.yesBtn.current.checked) {
        // find out if id is either city,state,country

        linkedInputHelper(
          event,
          inputIdAttr,
          "address",
          eitherBillingOrShipping,
          selectingParentForLinkedInputs,
          shipping,
          billing
        );
        // cached input values to both billing and shipping
        dataFromLocalStorage.billingInfo.address = event.target.value;
        dataFromLocalStorage.shippingInfo.address = event.target.value;
      } else {
        // we want to find out which input the user currently has focused on
        // billing or shipping and cached input values according to the billing/shipping
        // input the user is currently on
        billingOrShippingStr == "billing"
          ? (dataFromLocalStorage.billingInfo.address = event.target.value)
          : (dataFromLocalStorage.shippingInfo.address = event.target.value);
      }
    }
    // save input data to local storage
    localStorage.setItem("someData", JSON.stringify(dataFromLocalStorage));
  }
}

function linkedInputHelper(
  eventInput,
  idAttr,
  idInputStr,
  billingOrShipping,
  parentLinkedInput,
  shippingRef,
  billingRef
) {
  const linkedInputElement = idAttr.includes("billing")
    ? shippingRef[idInputStr]
    : billingRef[idInputStr];
  linkedInputElement.current.value = eventInput.target.value;
  // we want to update the linked input error messages and aria-describedby
  if (idInputStr == "zipCode") {
    // we are typing in zipCode input
    // get event target value for data-isempty and data-shippinguserattention/data-billinguserattention
    const currentInputIsEmptyAttr =
      eventInput.parentElement.getAttribute("data-isempty");
    const currentInputAttentionAttr =
      eventInput.parentElement.getAttribute(parentLinkedInput);
    // assign that value to linkedInputELement parent element
    linkedInputElement.current.parentElement.setAttribute(
      "data-isempty",
      currentInputIsEmptyAttr
    );
    linkedInputElement.current.parentElement.setAttribute(
      parentLinkedInput,
      currentInputAttentionAttr
    );
  } else {
    // we get here we are typing in address,city,state, or country input
    eventInput.target.parentElement.getAttribute(billingOrShipping) == "false"
      ? linkedInputElement.current.parentElement.setAttribute(
          parentLinkedInput,
          "false"
        )
      : linkedInputElement.current.parentElement.setAttribute(
          parentLinkedInput,
          "true"
        );
  }
  // get value of event.target aria-describedby
  const [firstPartOfAttr, ...restOfAttr] = eventInput.target
    .getAttribute("aria-describedby")
    .split("-");
  const linkedElementFirstPartOfStr =
    firstPartOfAttr == "billing" ? "shipping" : "billing";
  const strForAriaDescribedby = [
    linkedElementFirstPartOfStr,
    ...restOfAttr,
  ].join("-");
  linkedInputElement.current.setAttribute(
    "aria-describedby",
    strForAriaDescribedby
  );
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
    eMoneyMethod: "true",
    cashDeliveryMethod: "false",
  },
};

export function valuesForBillingShippingComponent(
  objInputRef,
  localDataObj,
  parentAttr,
  ariaText
) {
  console.log(objInputRef.address);
  // assign value
  // address
  objInputRef.address.current.value = !localDataObj ? "" : localDataObj.address;
  // city
  objInputRef.city.current.value = !localDataObj ? "" : localDataObj.city;
  // state
  objInputRef.state.current.value = !localDataObj ? "" : localDataObj.state;
  // zip code
  objInputRef.zipCode.current.value = !localDataObj ? "" : localDataObj.zipCode;
  // country
  objInputRef.country.current.value = !localDataObj ? "" : localDataObj.country;
  // check for validation
  console.log(objInputRef.zipCode.current.validity.valid);
  // address
  objInputRef.address.current.value === ""
    ? (objInputRef.address.current.parentElement.setAttribute(
        parentAttr,
        "true"
      ),
      objInputRef.address.current.setAttribute(
        "aria-describedby",
        `${ariaText}-address-notaccepted`
      ))
    : (objInputRef.address.current.parentElement.setAttribute(
        parentAttr,
        "false"
      ),
      objInputRef.address.current.setAttribute(
        "aria-describedby",
        `${ariaText}-address-accepted`
      ));
  // city
  objInputRef.city.current.value === ""
    ? (objInputRef.city.current.parentElement.setAttribute(parentAttr, "true"),
      objInputRef.city.current.setAttribute(
        "aria-describedby",
        `${ariaText}-city-notaccepted`
      ))
    : (objInputRef.city.current.parentElement.setAttribute(parentAttr, "false"),
      objInputRef.city.current.setAttribute(
        "aria-describedby",
        `${ariaText}-city-accepted`
      ));
  // state
  objInputRef.state.current.value === ""
    ? (objInputRef.state.current.parentElement.setAttribute(parentAttr, "true"),
      objInputRef.state.current.setAttribute(
        "aria-describedby",
        `${ariaText}-state-notaccepted`
      ))
    : (objInputRef.state.current.parentElement.setAttribute(
        parentAttr,
        "false"
      ),
      objInputRef.state.current.setAttribute(
        "aria-describedby",
        `${ariaText}-state-accepted`
      ));
  // zip code
  /**
   * when we had equality operator and setting data-isempty to parentelement in our
   * conditional statement of our ternary operator
   * it made our algorithm enter else statement which assign "false"
   * to parent element "data" billing or shipping"userattention" attr
   * **/
  if (objInputRef.zipCode.current.value === "") {
    objInputRef.zipCode.current.parentElement.setAttribute(
      "data-isempty",
      "true"
    );
    objInputRef.zipCode.current.setAttribute(
      "aria-describedby",
      `${ariaText}-zip-isempty`
    );
  } else {
    objInputRef.zipCode.current.parentElement.setAttribute("data-isempty", "");
    if (!objInputRef.zipCode.current.validity.valid) {
      objInputRef.zipCode.current.parentElement.setAttribute(
        parentAttr,
        "true"
      );
      objInputRef.zipCode.current.setAttribute(
        "aria-describedby",
        `${ariaText}-zip-notaccept`
      );
    } else {
      objInputRef.zipCode.current.parentElement.setAttribute(
        parentAttr,
        "false"
      );
      objInputRef.zipCode.current.setAttribute(
        "aria-describedby",
        `${ariaText}-zip-accepted`
      );
    }
  }
  // objInputRef.zipCode.current.setAttribute("data-isempty", "true");
  // country
  objInputRef.country.current.value === ""
    ? (objInputRef.country.current.parentElement.setAttribute(
        parentAttr,
        "true"
      ),
      objInputRef.country.current.setAttribute(
        "aria-describedby",
        `${ariaText}-country-notaccepted`
      ))
    : (objInputRef.country.current.parentElement.setAttribute(
        parentAttr,
        "false"
      ),
      objInputRef.country.current.setAttribute(
        "aria-describedby",
        `${ariaText}-country-accepted`
      ));
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

// function createObjOfMethods({ billing, shipping, sameAddressInputRef }) {
//   const objOfMethods = {
//     // address
//     "billing-address": () => {
//       console.log("this is billing address");
//       console.log(billing, shipping, sameAddressInputRef);
//     },
//     "shipping-address": () => {
//       console.log("this is shipping address");
//       console.log(billing, shipping, sameAddressInputRef);
//     },
//     // city
//     "billing-city": () => {
//       console.log("this is billing city");
//       console.log(billing, shipping, sameAddressInputRef);
//     },
//     "shipping-city": () => {
//       console.log("this is shipping city");
//       console.log(billing, shipping, sameAddressInputRef);
//     },
//     // state
//     "billing-state": () => {
//       console.log("this is billing state");
//       console.log(billing, shipping, sameAddressInputRef);
//     },
//     "shipping-state": () => {
//       console.log("this is shipping state");
//       console.log(billing, shipping, sameAddressInputRef);
//     },
//     // zip code
//     "billing-zip": () => {
//       console.log("this is billing zip");
//       shipping.zipCode.current.value = billing.zipCode.current.value;
//       billing.zipCode.current.parentElement.getAttribute(
//         "data-billinguserattention"
//       ) == "true"
//         ? shipping.zipCode.current.parentElement.setAttribute(
//             "data-shippinguserattention",
//             "true"
//           )
//         : shipping.zipCode.current.parentElement.setAttribute(
//             "data-shippinguserattention",
//             "false"
//           );
//       console.log(billing, shipping, sameAddressInputRef);
//     },
//     "shipping-zip": () => {
//       console.log("this is shipping zip");
//       console.log(billing, shipping, sameAddressInputRef);
//     },
//     // country
//     "billing-country": () => {
//       console.log("this is billing country");
//       console.log(billing, shipping, sameAddressInputRef);
//     },
//     "shipping-country": () => {
//       console.log("this is shipping country");
//       console.log(billing, shipping, sameAddressInputRef);
//     },
//   };
//   return objOfMethods;
// }

function notes() {
  // if we wanted to use one loop to save both billing and shipping input values to storage
  // make obj with both billing and shipping ref to inputs
  const testObj = {
    address: {
      billing: billingRef.address,
      shipping: shippingRef.address,
    },
    city: {
      billing: billingRef.city,
      shipping: shippingRef.city,
    },
    state: {
      billing: billingRef.state,
      shipping: shippingRef.state,
    },
    zipCode: {
      billing: billingRef.zipCode,
      shipping: shippingRef.zipCode,
    },
    country: {
      billing: billingRef.country,
      shipping: shippingRef.country,
    },
  };
  Object.entries(testObj).forEach((element) => {
    // key is eiter address,city,state,zipCode country
    // obj is destructure to be billing and shipping properties
    const [key, { billing, shipping }] = element;
    localData.billingInfo[key] = billing.current.value;
    localData.shippingInfo[key] = shipping.current.value;
  });
}
