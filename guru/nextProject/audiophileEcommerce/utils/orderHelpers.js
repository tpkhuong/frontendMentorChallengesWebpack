import axios from "axios";

/**
 * objfororderdetails will have these properties:
 * totalPrice: total_price,
 * shippingCost,
 * tax: valueAddedTax,
 * grandTotal,
 * itemsarray will be cart items
 * **/

export function showOrderModal(event) {
  const { setOrderPlaced, refValues, objForOrderDetails, itemsArray } = this;
  const {
    personal,
    billing,
    shipping,
    paymentMethodSelection,
    renderFormAssistiveData,
  } = refValues;
  const { eMoney, cashDelivery, inputMoney } = paymentMethodSelection;
  /* check all inputs validity */
  // only call setorderplace(true)
  // when all inputs are valid and a payment method is selected
  // personal email, phone num, billing and shipping zip code
  // check format and empty string
  // personal
  console.log("objForOrderDetails,itemsArray", objForOrderDetails, itemsArray);
  const { personalArray, personalErrors } = personalInfoChecker(personal);

  // billing
  const { billingArray, billingErrors } = billingInforChecker(billing);

  // shipping
  const { shippingArray, shippingErrors } = shippingInfoChecker(shipping);

  // emoney
  /**
   * check for empty string first
   * **/
  // check if emoney payment is selected
  // check number and pin is valid
  const { emoneyArray, emoneyErrors } =
    eMoney.current.getAttribute("aria-checked") == "true"
      ? emoneyChecker({ eMoney, inputMoney })
      : { emoneyArray: [], emoneyErrors: 0 };

  const totalErrors = [
    personalErrors,
    billingErrors,
    shippingErrors,
    emoneyErrors,
  ].reduce(function getTotalErrors(buildingUp, currentValue) {
    // each currentvalue is the sum
    return buildingUp + currentValue;
  }, 0);

  // pass in func to renderFormAssistiveData

  renderFormAssistiveData((prevValues) => {
    return {
      ...prevValues,
      errors: {
        total: totalErrors,
        personal: personalErrors,
        billing: billingErrors,
        shipping: shippingErrors,
        emoney: emoneyErrors,
      },
      personalInputArray: personalArray,
      billingInputArray: billingArray,
      shippingInputArray: shippingArray,
      emoneyInputArray: emoneyArray,
    };
  });

  // when total errors == 0 run code below
  if (totalErrors == 0) {
    setOrderPlaced(true);

    // call func that will work with database here
    // or make api calls here, passing data to the correct api
    try {
      //
    } catch (error) {
      console.error(error);
    }
  }
}

/**
 * form error helper
 * **/

function emoneyChecker(refObj) {
  const { inputMoney } = refObj;
  const { array, sum } = getTotalErrors(inputMoney);
  return {
    emoneyArray: array,
    emoneyErrors: sum,
  };
}

function personalInfoChecker(refObj) {
  // each func will return total number of errors
  // empty string and invalid format
  const { array, sum } = getTotalErrors(refObj);
  return {
    personalArray: array,
    personalErrors: sum,
  };
}

function billingInforChecker(refObj) {
  // each func will return total number of errors
  // empty string and invalid format
  const { array, sum } = getTotalErrors(refObj);
  return {
    billingArray: array,
    billingErrors: sum,
  };
}

function shippingInfoChecker(refObj) {
  // each func will return total number of errors
  // empty string and invalid format
  const { array, sum } = getTotalErrors(refObj);
  return {
    shippingArray: array,
    shippingErrors: sum,
  };
}

function getTotalErrors(objOfRef) {
  // use Object.values() loop through array
  const arrayOfValues = Object.values(objOfRef);
  // first check if input is empty
  // if empty add 1
  // not empty check for input.validity.valid, add 1 total if invalid
  return arrayOfValues.reduce(
    function makeObjAndTotal(buildingUp, currentValue) {
      // each currentValue is a ref
      const { current } = currentValue;
      // only push ref of input into array if current error is 1
      const currentSectionError =
        current.value === "" ? 1 : !current.validity.valid ? 1 : 0;
      // assign correct id to aria-describedby here
      // the input without patterns we dont have to check for validity
      buildingUp.array =
        currentSectionError > 0
          ? [...buildingUp.array, current]
          : buildingUp.array;
      buildingUp.sum = buildingUp.sum + currentSectionError;
      return buildingUp;
    },
    { array: [], sum: 0 }
  );
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

export function generateOrderNumer(name) {
  const arrayOfStrings = name.split(" ");
  const [first, last] = arrayOfStrings;
  const beginning = Math.random() * new Date().getSeconds() + 1;
  const middle = Math.random() * 1000 + 1;
  const end = Math.random() * new Date().getMilliseconds() + 1;
  return `${first[0].toLowerCase()}${beginning.toFixed()}-${middle.toFixed()}-${last[0].toLowerCase()}${end.toFixed()}`;
}

function cachedFormInputsToStorage(inputRefObj) {
  // get obj from local storage
  const dataFromStorage = JSON.parse(localStorage.getItem("cachedUserInputs"));

  const { personalInfo, billingInfo, shippingInfo, paymentInfo } =
    dataFromStorage;

  // destructure ref objs
  const { personal, billing, shipping, paymentMethodSelection } = inputRefObj;
  // personal data
  personalInfo.name = personal.name;
  personalInfo.phoneNumber = personal.phoneNum;
  personalInfo.email = personal.email;
  // billing data
  billingInfo.address = billing.address;
  billingInfo.city = billing.city;
  billingInfo.state = billing.state;
  billingInfo.zipCode = billing.zipCode;
  billingInfo.country = billing.country;
  // shipping data
  shippingInfo.address = shipping.address;
  shippingInfo.city = shipping.city;
  shippingInfo.state = shipping.state;
  shippingInfo.zipCode = shipping.zipCode;
  shippingInfo.country = shipping.country;
  // payment data
  paymentInfo.eMoneyMethod = paymentMethodSelection.eMoney;
  paymentInfo.cashDeliveryMethod = paymentMethodSelection.cachDelivery;
  // save input value to local storage
  localStorage.setItem(JSON.stringify(dataFromStorage));
  const dataForApi = {
    apiDataForPersonal: dataFromStorage.personalInfo,
    apiDataForBilling: dataFromStorage.billingInfo,
    apiDataForShipping: dataFromStorage.shippingInfo,
    apitDataForPayment: dataFromStorage.paymentInfo,
  };
  // destructure the obj when we call this func
  return dataForApi;
}

async function createCustomer() {}

async function createOrders() {}

async function createOrderedItems() {}
