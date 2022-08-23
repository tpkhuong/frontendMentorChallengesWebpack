import React from "react";
import OrderedItemStyles from "../../styles/Checkout/OrderedItems.module.css";

export default function OrderedItems({ children, ...props }) {
  /**
   * calculate length here
   * **/
  console.log(props.cartInfoArr);
  // const lengthForDisplay = props.cartInfoArr.length;
  // const showItemsLength = props.cartInfoArr[lengthForDisplay - 1];
  const testArr = [0, 1];
  const length = testArr.length;
  const lengthForBtn = testArr[length - 1];
  return (
    <React.Fragment>
      {/* items-total-wrapper */}
      <div>
        {/* items-wrapper */}
        {/* ul>summary items component */}
        {/* if items array length is 1 render the first element */}
        {/* if items array length is greater than 1 render all elements */}
        {/* line element */}
        {/* button text based on state and length of items array*/}
        <button className={OrderedItemStyles[`view-less-more-btn`]}>
          {lengthForBtn > 1
            ? `and ${lengthForBtn} other items(s)`
            : "and 1 other item"}
        </button>
        {/* total-price-wrapper */}
        {/* total-price */}
        {/* span x 2 */}
        {/* span title */}
        {/* span x 2: dollar sign and price string form */}
      </div>
    </React.Fragment>
  );
}
