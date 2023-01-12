import React from "react";
// import { previousURLs, cartItems } from "../src/storage";

/**
 * All Helper funcs go here.
 * **/

export const useMediaQuery = (minMax, width) => {
  const [targetReached, setTargetReached] = React.useState(false);

  const updateTarget = React.useCallback((event) => {
    if (event.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  React.useEffect(() => {
    const media = window.matchMedia(`(${minMax}-width: ${width}px)`);
    // media.addListener(updateTarget);
    media.addEventListener("change", (event) => updateTarget(event));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    // return () => media.removeListener(updateTarget);
    return () =>
      media.removeEventListener("change", (event) => updateTarget(event));
  }, []);

  return targetReached;
};

export function showMobileNav(event) {
  // select our elements
  const hamburgerBtn = document.querySelector("[data-ismenuopen]");
  const mobileNavContainer = document.querySelector("[data-showmenu]");

  const clickedBtn = event.target.closest("BUTTON").getAttribute("aria-label");
  // obj of methods
  const actionObj = {
    "open mobile navigation": () => {
      // change value of data-ismenuopen to true
      hamburgerBtn.getAttribute("data-ismenuopen") == "false"
        ? hamburgerBtn.setAttribute("data-ismenuopen", "true")
        : null;
      // change value of data-showmenu to true
      mobileNavContainer.getAttribute("data-showmenu") == "false"
        ? mobileNavContainer.setAttribute("data-showmenu", "true")
        : null;
    },
    "close mobile navigation": () => {
      // change value of data-ismenuopen to false
      hamburgerBtn.getAttribute("data-ismenuopen") == "true"
        ? hamburgerBtn.setAttribute("data-ismenuopen", "false")
        : null;
      // change value of data-showmenu to false
      mobileNavContainer.getAttribute("data-showmenu") == "true"
        ? mobileNavContainer.setAttribute("data-showmenu", "false")
        : null;
    },
  };

  // call our methods
  actionObj[clickedBtn]();
}

export function targetLastMobileNavElement(event) {
  // last element
  const lastElement = document.querySelector("[id='last-element']");
  // clicked element
  const closeBtnElement = document.querySelector(
    "[aria-label='close mobile navigation']"
  );
  if (event.shiftKey) {
    if (event.code == "Tab" && event.target == closeBtnElement) {
      event.preventDefault();
      lastElement.focus();
    }
  }
}

export function focusFirstModalElement(event) {
  // target element
  const closeBtnElement = document.querySelector(
    "[aria-label='close mobile navigation']"
  );
  // clicked element
  const lastElement = document.querySelector("[id='last-element']");
  if (!event.shiftKey && event.code == "Tab" && event.target == lastElement) {
    event.preventDefault();
    closeBtnElement.focus();
  }
}

export function getCurrentUrl(event) {
  // check if previousURLs array is in local storage
  const previousURLsArray =
    localStorage.getItem("previousLinks") === null
      ? []
      : JSON.parse(localStorage.getItem("previousLinks"));
  previousURLsArray.push(document.URL);
  // set urls to localstorage
  // console.log(JSON.stringify(previousURLsArray));
  localStorage.setItem("previousLinks", JSON.stringify(previousURLsArray));
  // console.log(localStorage.getItem("previousLinks"));
}

export function goToPreviousPage(event) {
  /**
   * update the previousUrls array in localStorage
   * **/
  // destructure our this obj
  // const { urlState } = this;
  // get array from local storage
  const arrayOfUrls = JSON.parse(localStorage.getItem("previousLinks"));
  // call pop method on array to remove last added page url
  // const lastUrl = arrayOfUrls.pop();
  // console.log(lastUrl);
  arrayOfUrls.pop();
  // call urlState passing the value return by calling pop() method assigned to variable/identifier
  // urlState(() => {
  //   return lastUrl;
  // });
  // update array saved in local storage
  localStorage.setItem("previousLinks", JSON.stringify(arrayOfUrls));
}

export function addCommasToPrice(number) {
  // convertNumToString is number without commas, ex: 4500 => "4500"
  const convertNumToString = String(number);
  const lengthOfNum = convertNumToString.length;
  const arrayOfChars = convertNumToString.split("");
  // return string type
  const conditionalObj = {
    4: (array) => {
      // left 0,1
      // right 1
      return [array[0], ",", ...rightSideOfComma(array, 1)].join("");
    },
    5: (array) => {
      // left 0, 2
      // right 2
      return [
        ...leftSideOfComma(array, 2),
        ",",
        ...rightSideOfComma(array, 2),
      ].join("");
    },
    6: (array) => {
      // left 0, 3
      // right 3
      return [
        ...leftSideOfComma(array, 3),
        ",",
        ...rightSideOfComma(array, 3),
      ].join("");
    },
    7: (array) => {
      // left 0, 4
      // right 4
      return [
        array[0],
        ",",
        ...middleOfNumber(array),
        ",",
        ...rightSideOfComma(array, 4),
      ].join("");
    },
  };

  if (lengthOfNum <= 3) {
    return convertNumToString;
  } else {
    const lengthToStringType = String(lengthOfNum);
    return conditionalObj[lengthToStringType](arrayOfChars);
  }
}

/**
 * helper func for adding commas to price
 * **/

function leftSideOfComma(array, end) {
  return array.slice(0, end);
}

function middleOfNumber(array) {
  // start at 1
  // end at 4
  return array.slice(1, 4);
}

function rightSideOfComma(array, start) {
  return array.slice(start);
}

export function removeCommasForCheckout(string) {
  // returns number type
  // use this regex /\d+/g
  const regex = /\d+/g;
  return Number(string.match(regex).join(""));
}

export function updateQuantity(event) {
  const updateMethods = {
    increment: () => {
      // arrow func will use this of parent func which is updateQuantity
      // convert input value to number type
      const numTypeInputValue = Number(this.quantityInputRef.current.value);
      // add 1 to that value
      const addOne = numTypeInputValue + 1;
      // convert update value to string
      this.quantityInputRef.current.value = String(addOne);
    },
    decrement: () => {
      // arrow func will use this of parent func which is updateQuantity
      // convert input value to number type
      const numTypeInputValue = Number(this.quantityInputRef.current.value);
      // subtract 1 to that value
      const minusOne = numTypeInputValue - 1;
      // convert update value to string
      // if minusOne == 0, assign 1 to this.quantityInputRef.current.value, we dont want input value to go to 0 or negative number
      // else assign minusOne to this.quantityInputRef.current.value
      minusOne == 0
        ? (this.quantityInputRef.current.value = String(1))
        : (this.quantityInputRef.current.value = String(minusOne));
    },
  };

  if (event.target.closest("BUTTON")) {
    const methodSelector = event.target.getAttribute("data-typeofupdate");
    updateMethods[methodSelector]();
  }

  // const methodSelector = document
  //   .querySelector("[data-typeofupdate]")
  //   .getAttribute("data-typeofupdate");

  // updateMethods[methodSelector]();
}

export function upperCaseFirstChar(array) {
  // pass in array with items ["Headphone unit", "Replacement earcups", "User manual", "3.5mm 5m audio cable"] etc
  // make an array with same length
  // call split on each item in array
  const arrayOfStringWithFirstCharUppercased = array.map(
    function algorithmToUppercaseFirstChar(element) {
      // each item in the array returned by using split method
      const splitStrAtSpace = element.split(" ");
      // use map method
      const strWithUppercasedFirstChar = splitStrAtSpace.map(
        function uppercaseFirstChar(eachStr) {
          // each element in map method
          // get first char
          const firstChar = eachStr[0];
          // convert firstChar to number
          const convertFirstCharToNumType = Number(firstChar);
          // our conditionals
          // first char Number() is typeof "number" && Number.isNaN(first char) is false
          // return that element
          if (
            typeof convertFirstCharToNumType == "number" &&
            !Number.isNaN(convertFirstCharToNumType)
          ) {
            return eachStr;
          }
          // if first char Number(first char) is typeof "number" && Number.isNaN(first char) is true
          if (
            typeof convertFirstCharToNumType == "number" &&
            Number.isNaN(convertFirstCharToNumType)
          ) {
            // uppercase the first char
            const firstCharUpperCased = firstChar.toUpperCase();
            // copy str starting at index 1 using String.slice(1)
            const restOfStr = eachStr.slice(1);
            // then concat first char with copied string starting at index 1
            return firstCharUpperCased.concat(restOfStr);
          }
        }
      );
      // join the string in array with space operator
      return strWithUppercasedFirstChar.join(" ");
    }
  );
  return arrayOfStringWithFirstCharUppercased;
}

/********
 * Cart functionality
 * Add to cart
 * cart modal: calculate total
 * ********/

export function addToCartAlgorithm(event) {
  const itemTextObj = {
    "xx99-mark-one-headphones":
      "Black with gold circle over the ear headphones",
    "xx99-mark-two-headphones": "All Black over the ears headphones",
    "xx59-headphones": "All white over the ears headphones",
    "zx7-speaker":
      "Black speaker with large white top sub woofer and small black bottom sub woofer",
    "zx9-speaker": "All black speaker",
    "yx1-earphones": "Large round black wireless earphones",
  };
  // we want price with comma for display
  // without comma for total calculation
  // name for display, slug for building img src
  // quantity ref for cart quantity control
  // create obj push into an array then save it to local storage/session storage
  // each obj will have img src, name, price with comma and without, quantity
  // nameForImgSrc
  // priceInStrForm
  // price
  // name
  // this.quantityInputRef.current.value
  const arrayFromLocalStorage =
    localStorage.getItem("arrayOfObjs") == null
      ? []
      : JSON.parse(localStorage.getItem("arrayOfObjs"));
  // destructure this obj
  const { quantityInputRef, propsForCart } = this;
  const { nameForImgSrc, priceInStrForm, price, name } = propsForCart;
  // make obj
  // /cart/image-xx59-headphones.jpg
  /**
   * each cart item will have these values passed to it.
   * as "element" in our map function which render cart item
   * **/
  const objOfCartItemValues = {
    priceStr: priceInStrForm,
    priceNum: price,
    nameForCartItemSearch: name,
    altTextCartModalSummaryItem: itemTextObj[nameForImgSrc],
    strImgSrc: `/cart/image-${nameForImgSrc}.jpg`,
    title: itemTitleForSummaryAndCartModal(name),
    quantityForInput: quantityInputRef.current.value,
    totalPrice: individualItemTotalCalculation(
      price,
      Number(quantityInputRef.current.value)
    ),
  };
  /**
   * for each individual item add to localStorage we wont need total price in string form with commas.
   * we will need it for summary in checkout page.
   * **/
  /**
   * we will be working with arrayFromLocalStorage before we update data in localStorage
   * **/
  // before we push obj into array check if array does not have
  // obj with name already in the array
  // length 0 push obj into array
  // length 1 access obj at 0 index array[0]
  // check if array does not have obj with item name already in it
  // length greater than 1 loop through array
  // check if array has obj with same name/title
  // calculate total price by taking quantity * price
  // for cart modal we can loop through array of objs, take total property in each
  // obj and add them.
  /**
   * we will be working with arrayFromLocalStorage before we update data in localStorage
   * **/

  const lengthOfArray = arrayFromLocalStorage.length;

  if (lengthOfArray >= 1) {
    /**
     * assign value string "false" to element with attribute data-iscartempty
     * assign value of lengthOfArray in string type/form to element with id cart-item-quantity
     * **/

    /**
     * array has more than one item loop through array
     * update quantity and total price if title and name are the same
     * since we want the index of the obj with the title that matches the name, it is best to use for loop
     * **/
    /**
     * array has one item: we can make algorithm shorter by loop through array if length is 1 or greater
     * since our algorithm when length is 1 or greater than 1 is similar
     * **/
    let indexOfObj;
    // loop through array with for loop or foreach find index of obj where the obj title matches name
    /**
     * for loop
     * **/
    // for (let index = 0; index < lengthOfArray; index++) {
    //   let element = arrayFromLocalStorage[index];
    //   const { title } = element;
    //   if (title === name) {
    //     indexOfObj = index;
    //   }
    // }

    /**
     * for each loop
     * **/

    arrayFromLocalStorage.forEach(function findIndexOfObj(element, index) {
      const { title } = element;
      if (title === name) {
        indexOfObj = index;
      }
    });
    // if indexOfObj is undefined push objOfCartItemValues into array
    /**
     * shouldn't use !indexOfObj because when indexOfObj is 0, since 0 is a falsy value !indexOfObj will be true
     * **/
    if (indexOfObj == undefined) {
      arrayFromLocalStorage.push(objOfCartItemValues);
    } else {
      // else update quantity and totalprice
      // obj at index in arrayFromLocalStorage
      const objAtIndex = arrayFromLocalStorage[indexOfObj];
      const { updatedQuantity, updatedTotal } = updateQuantityAndTotalPrice(
        objAtIndex,
        this
      );
      objAtIndex.quantityForInput = `${updatedQuantity}`;
      objAtIndex.totalPrice = updatedTotal;
    }
  } else {
    /**
     * array is empty
     * **/
    arrayFromLocalStorage.push(objOfCartItemValues);
  }

  console.log(arrayFromLocalStorage);
  localStorage.setItem("arrayOfObjs", JSON.stringify(arrayFromLocalStorage));
  // console.log(this.quantityInputRef.current.value);
}

/**
 * make title shorter
 * **/

function itemTitleForSummaryAndCartModal(title) {
  const objOfNames = {
    "XX99 Mark I": "XX99 MK I",
    "XX99 Mark II": "XX99 MK II",
  };
  // call .split(" ") title which will be XX99 Mark II Headphones
  // get first value in array returned from.split()
  // if title includes mark we will run difference algorithm
  if (title.includes("XX99")) {
    const titleWithoutCategory = title.split(" ").slice(0, 3).join(" ");
    return objOfNames[titleWithoutCategory];
  } else {
    return title.split(" ")[0];
  }
}

/**
 * total calculations helper.
 * **/

function individualItemTotalCalculation(price, quantity) {
  return price * quantity;
}

/**
 * updateQuantityAndTotalPrice
 * **/

function updateQuantityAndTotalPrice(
  objInLocalStorage,
  objOfPropsAndQuantityInput
) {
  /**
   * we assign the updated quantity and total price to obj at index after we find the obj that matches title/name
   * **/
  const { quantityInputRef, propsForCart } = objOfPropsAndQuantityInput;
  const { quantityForInput } = objInLocalStorage;
  // get quantity of localStorage and quantity from input add them
  const updatedQuantity =
    Number(quantityForInput) + Number(quantityInputRef.current.value);
  // take that update quantity value multiply it with price to get new total
  const updatedTotal = individualItemTotalCalculation(
    updatedQuantity,
    propsForCart.price
  );
  return {
    updatedQuantity,
    updatedTotal,
  };
}

export function cartIconBtnAlgorithm(event) {
  // have algorithm to show/hide cart modal here
  const { useCartState } = this;
  const arrayOfItems = JSON.parse(localStorage.getItem("arrayOfObjs"));

  /**
   * when user click on cart icon in logo nav bar, we will render cart modal
   * when cartState changes. Which will be handled in this func, when useCartState func
   * is called we will render Cart Modal passing data we get from calling
   * localStorage.getItem("arrayOfObjs")
   * **/
  // cartitem component will use value from each item dataObj in arrayOfItems
  // cartModal will use length of arrayOfObjs
  // and total price in string type of all items in cart
  const itemsInCartLength = arrayOfItems ? arrayOfItems.length : null;
  if (itemsInCartLength) {
    /**
     * before we call useCartState with data from localStorage we want to calculate total of all items in cart and add/or not add commas to that total
     * get length of arrayOfItems to be use for cart (number)
     * **/
    // calculate total price of items in cart;
    const cartTotalPrice = cartModalTotalPrice(arrayOfItems);
    // cart total price string type
    const totalPriceInCartStrType = addCommasToPrice(cartTotalPrice);
    /**
     * we want to make an obj with arrayOfItems, total price of cart in number type
     * since we will add commas to other amounts in summary(value added tax and grand totla)
     * save it to database
     * **/

    // const objOfCartItemValues = {
    //   priceStr: priceInStrForm,
    //   priceNum: price,
    //   nameForCartItemSearch: name,
    //   strImgSrc: `/cart/image-${nameForImgSrc}.jpg`,
    // altTextCartModalSummaryItem: itemTextObj[nameForImgSrc],
    //   title: itemTitleForSummaryAndCartModal(name),
    //   quantityForInput: quantityInputRef.current.value,
    //   totalPrice: individualItemTotalCalculation(
    //     price,
    //     Number(quantityInputRef.current.value)
    //   ),
    // };

    const arrayOfItemsForDatabase = arrayOfItems.map(function makeObj(element) {
      const {
        strImgSrc,
        nameForCartItemSearch,
        altTextCartModalSummaryItem,
        priceStr,
        priceNum,
        title,
        quantityForInput,
      } = element;
      return {
        name: {
          display: title,
          order_record: nameForCartItemSearch,
        },
        price: {
          display: priceStr,
          order_record: priceNum,
        },
        item_quantity: quantityForInput,
        image_src: strImgSrc,
        alt_text: altTextCartModalSummaryItem,
      };
    });

    const randomNum = (Math.random() * new Date().getMilliseconds())
      .toFixed(5)
      .split(".")
      .join("");

    const cartInfoDatabase = {
      items: [...arrayOfItemsForDatabase],
      total_price: cartTotalPrice,
    };
    /**
     * insert obj into database
     * **/
    addCartInfoToDatabase(cartInfoDatabase);
    /**
     * pass in an obj {arrayOfItems, quantity of cart, total with commas in string form} into useCartState
     * which will be passed into cart modal as addCartDataFromLocalStorage prop, we can use the data in cart modal
     * when we call useCartState passing in obj, it will assign that obj to cartState in the CartBtnAndModal component.
     * **/
    useCartState({
      arrayOfItems,
      itemsInCartLength,
      totalPriceInCartStrType,
      useCartState,
      // dataForCheckoutBtn,
    });
  }
  // console.log(data);
  // const { strImgSrc } = data[0];
  // console.log(strImgSrc);
}

/**
 * connect to db and add cart information
 * **/

export async function addCartInfoToDatabase(obj) {
  const copyOfObj = Object.assign({ username: "Deadpool" }, obj);
  const response = await fetch("/api/addcartinfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(copyOfObj),
  });

  console.log(response);
}

/**
 * total price helper for cartIcon func
 * **/

export function cartModalTotalPrice(array) {
  // loop through array of objs, get total price and add them up
  return array.reduce(function addTotalPrice(buildingUp, currentValue) {
    const { totalPrice } = currentValue;
    return buildingUp + totalPrice;
  }, 0);
}

/**
 * cart item quantity increment/decrement
 * **/

// export function cartItemQuantityFunc(event) {
//   // method obj
//   const methodObj = {
//     increment: () => {
//       console.log("hello from increment method");
//     },
//     decrement: () => {
//       console.log("hello from derement method");
//     },
//   };

//   // check if element clicked is button
//   if (event.target.closest("BUTTON")) {
//     const btnAttrValue = event.target.getAttribute("data-typeofbtn");
//     methodObj[btnAttrValue]();
//   }
// }

export function cartItemIncrement(event) {
  // cartItemQuantityRef, refTotalPrice, and dataForQuantityUpdate are bind to this func
  const { cartItemQuantityRef, dataForQuantityUpdate, refTotalPrice } = this;
  // each cart item component will have its own specific data
  // only time the element this function is attached to is rendered is when
  // there are items in localStorage, if length of array in localStorage is > 1 loop
  // each access item of array at 0 index
  // console.log(this.dataForQuantityUpdate);
  const { itemsInArray, indexOfItem } = findMatchingCartItem(
    dataForQuantityUpdate
  );
  /**
   * moved algorithm to updateQuantityAndTotalPriceCartItemComponent
   * **/
  // const copyOfArray = [...itemsInArray];
  // const itemAtIndex = copyOfArray[indexOfItem];
  // we want to update quantity and total price of individual cart item
  // which will mutate that values in of the properties in the obj assign to the array
  // then we can loop through array, access total price of each item and them together
  // to get total price for cart modal
  /**
   * update input display add one to cartItemQuantityRef
   * **/
  const convertNumInputToStr = Number(cartItemQuantityRef.current.value);
  const plusOneToInput = convertNumInputToStr + 1;
  // pass this, itemsInArray, indexOfItem and subtractOne/plusOneToInput to updateQuantityAndTotalPriceCartItemComponent
  updateQuantityAndTotalPriceCartItemComponent(
    this,
    itemsInArray,
    indexOfItem,
    plusOneToInput
  );
}

export function cartItemDecrement(event) {
  // cartItemQuantityRef, refTotalPrice, and dataForQuantityUpdate are bind to this func
  console.log(this);
  const { cartItemQuantityRef, dataForQuantityUpdate, refTotalPrice } = this;
  // each cart item component will have its own specific data
  // only time the element this function is attached to is rendered is when
  // there are items in localStorage, if length of array in localStorage is > 1 loop
  // else access item of array at 0 index
  // console.log(this.dataForQuantityUpdate);
  const { itemsInArray, indexOfItem } = findMatchingCartItem(
    dataForQuantityUpdate
  );
  /**
   * moved algorithm to updateQuantityAndTotalPriceCartItemComponent
   * **/
  // const copyOfArray = [...itemsInArray];
  // const itemAtIndex = copyOfArray[indexOfItem];
  // we want to update quantity and total price of individual cart item
  // which will mutate that values in of the properties in the obj assign to the array
  // then we can loop through array, access total price of each item and them together
  // to get total price for cart modal
  /**
   * update input display: minus one to cartItemQuantityRef
   * **/
  const convertNumInputToStr = Number(cartItemQuantityRef.current.value);
  const subtractOne = convertNumInputToStr - 1;
  if (subtractOne > 0) {
    // pass this, itemsInArray, indexOfItem and subtractOne/plusOneToInput to updateQuantityAndTotalPriceCartItemComponent
    updateQuantityAndTotalPriceCartItemComponent(
      this,
      itemsInArray,
      indexOfItem,
      subtractOne
    );
    // cartItemQuantityRef.current.value = `${subtractOne}`;
    // // update quantity and total of cart item in obj
    // itemAtIndex.quantityForInput = `${subtractOne}`;
    // itemAtIndex.totalPrice = individualItemTotalCalculation(
    //   dataForQuantityUpdate.priceNum,
    //   subtractOne
    // );
    // // loop through copy of array add up each item total price
    // const newTotalPrice = cartModalTotalPrice(copyOfArray);
    // // assign new total price to refTotalPrice
    // refTotalPrice.current.value = `${newTotalPrice}`;
    // // saved updated cart item quantity and total price to local storage
    // localStorage.setItem("arrayOfObjs", JSON.stringify(copyOfArray));
  } else {
    cartItemQuantityRef.current.value = `1`;
  }
}

export function cartItemInputOnChange(event) {
  // since input is string type
  // we can check for empty string which is one of the 7 falsy values and negate that with !
  // or check truthy which will be a number in string form "3"
  // we are confident event will trigger on empty string "" when user click backspace
  // "8" or any number when user keydown on number key when cursor is in input
  // if (event.target.value !== "") {
  //   console.log(event.target.value);
  // }
  if (event.target.value) {
    const { dataForQuantityUpdate, refTotalPrice } = this;
    // event.target.value will be cartItemQuantityRef which will be the parament updatedQuantity passed into updateQuantityAndTotalPriceCartItemComponent
    console.log(event.target.value);
    const { itemsInArray, indexOfItem } = findMatchingCartItem(
      dataForQuantityUpdate
    );
    updateQuantityAndTotalPriceCartItemComponent(
      this,
      itemsInArray,
      indexOfItem,
      event.target.value
    );
  }
}

/**
 * helper funcs for updating cart item quantity
 * **/

// pass this, itemsInArray, indexOfItem and subtractOne/plusOneToInput to updateQuantityAndTotalPriceCartItemComponent
function updateQuantityAndTotalPriceCartItemComponent(
  dataBindToThisObj,
  array,
  indexForArray,
  updatedQuantity
) {
  console.log(dataBindToThisObj);
  const copyOfArray = [...array];
  const itemAtIndex = copyOfArray[indexForArray];
  const { cartItemQuantityRef, dataForQuantityUpdate, refTotalPrice } =
    dataBindToThisObj;
  // use ternary operator here: we want to use cartItemQuantityRef.current.value for increment/decrement but not on change
  cartItemQuantityRef
    ? (cartItemQuantityRef.current.value = `${updatedQuantity}`)
    : null;
  // update quantity and total of cart item in obj
  itemAtIndex.quantityForInput = `${updatedQuantity}`;
  itemAtIndex.totalPrice = individualItemTotalCalculation(
    dataForQuantityUpdate.priceNum,
    updatedQuantity
  );
  console.log(copyOfArray);
  console.log("refTotalPrice", refTotalPrice);
  // loop through copy of array add up each item total price
  const newTotalPrice = cartModalTotalPrice(copyOfArray);
  console.log(newTotalPrice);
  // assign new total price to refTotalPrice
  // refTotalPrice element is a span we want to use .innerText not .value
  // add comma to newTotalPrice
  // addCommasToPrice func returns a string

  refTotalPrice.current.innerText = addCommasToPrice(newTotalPrice);
  // saved updated cart item quantity and total price to local storage
  localStorage.setItem("arrayOfObjs", JSON.stringify(copyOfArray));
}

/**
 * find cart item in array assigned to local storage
 * **/

function findMatchingCartItem(dataObj) {
  // working with data from dataForQuantityUpdate which will be the obj passed in to this func as
  // the dataObj parament
  const { nameForCartItemSearch: title } = dataObj;
  // get array from local storage
  const arrayFromLocalStorage = JSON.parse(localStorage.getItem("arrayOfObjs"));
  const lengthOfArray = arrayFromLocalStorage.length;
  // return the item in the array
  if (lengthOfArray > 1) {
    // loop through array
    let indexOfCartItem;
    // for loop
    for (let index = 0; index < lengthOfArray; index++) {
      const element = arrayFromLocalStorage[index];
      const { nameForCartItemSearch } = element;
      if (nameForCartItemSearch == title) {
        indexOfCartItem = index;
      }
    }
    // for each loop
    // arrayFromLocalStorage.forEach(function findMatchingObj(element, index) {
    //   const { nameForCartItemSearch } = element;
    //   if (nameForCartItemSearch == title) {
    //     indexOfCartItem = index;
    //   }
    // });
    return {
      itemsInArray: arrayFromLocalStorage,
      indexOfItem: indexOfCartItem,
    };
  } else {
    // each access item of array at 0 index
    return {
      itemsInArray: arrayFromLocalStorage,
      indexOfItem: 0,
    };
  }
}

/**
 * cart modal remove all btn
 * **/

export function removeAllBtnAlgorithm(event) {
  // use bind when we can attach this func to remove all btn
  // so we can use data that is passed to cart modal component
  // arrayOfItems, itemsInCartLength, totalPriceInCartStrType
  // when user hit remove all btn, we will update cart quanity, list of cart item and total
  // we will pass useCartModalState func, when we call useCartModalState
  // we will pass in a func useCartModalState((prevVales) => { return {} })
  const { useCartModalState } = this;
  if (event.target.closest("BUTTON")) {
    useCartModalState((prevValues) => {
      return {
        ...prevValues,
        cartQuantity: "0",
        cartTotalPrice: "0",
      };
    });
  }

  /**
   * assign string value "0" to element with id cart-item-quantity
   * assign string value "true" to element with attribute: data-iscartempty
   * **/

  /**
   * allow user to restore their cart in case user click on remove all by accident
   * **/
}

/**
 * cart modal close btn
 * **/

export function closeModalBtnAlgorithm(event) {
  // use bind when we can attach this func to close btn
  // so we can use data that is passed to cart modal component
  // refToOpenCartModal to focus cart btn in logonavbar component when user click close cart modal
  // stateOfCartFunc to not render cart modal
  if (event.target.closest("BUTTON")) {
    const { refToOpenCartModal, stateOfCartFunc } = this;
    stateOfCartFunc(false);
    refToOpenCartModal.current.focus();
  }
}

/**
 * tab through cart modal
 * **/

export function keyboardFunctionalityFocusRemoveAllBtn(event) {
  // passing ref of remove all btn and close modal btn to this func
  const { refToRemoveAllBtn, refToCheckoutBtn } = this;
  // when user focus is on checkout btn and user click tab we want to focus remove all btn
  if (
    !event.shiftKey &&
    event.code == "Tab" &&
    event.target == refToCheckoutBtn.current
  ) {
    event.preventDefault();
    refToRemoveAllBtn.current.focus();
  }
}
export function keyboardFunctionalityFocusCheckoutBtn(event) {
  // passing ref of remove all btn and close modal btn to this func
  const { refToRemoveAllBtn, refToCheckoutBtn } = this;
  // when user focus is on remove all btn and user click shift + tab we want to focus checkout btn
  if (
    event.shiftKey &&
    event.code == "Tab" &&
    event.target == refToRemoveAllBtn.current
  )
    event.preventDefault(), refToCheckoutBtn.current.focus();
}

/**
 * calculate tax
 * **/

export function taxCalculation(price) {
  const TAX_RATE = 12 / 100;
  return typeof price == "number"
    ? Math.floor(TAX_RATE * price)
    : Math.floor(TAX_RATE * Number(price));
}
