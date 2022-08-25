export function showOrderModal(event) {
  const { setOrderPlaced, refValues } = this;
  console.log(refValues);
  setOrderPlaced(true);
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
