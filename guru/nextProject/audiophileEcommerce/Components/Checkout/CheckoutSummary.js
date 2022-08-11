import React from "react";
import CheckoutSummaryStyles from "../../styles/Checkout/CheckoutSummary.module.css";
import SummaryItem from "./SummaryItem";
import {
  addCommasToPrice,
  cartModalTotalPrice,
  taxCalculation,
} from "../../utils/helpers";

function CheckoutSummary({ children, ...props }) {
  //   console.log(props.dataPassedToSummary);
  const { arrayOfItems, cartTotalPrice, totalPriceInCartStrType } =
    props.dataPassedToSummary;
  // calculate tax and grand total before we assign them to values in our
  const valueAddedTax = taxCalculation(cartTotalPrice);
  const shippingCost = 50;
  const arrayOfValuesForGrandTotal = [
    cartTotalPrice,
    valueAddedTax,
    shippingCost,
  ];
  // summary item obj: textContent, totalPriceStrType
  //   const grandTotal = arrayOfValuesForGrandTotal.reduce(function getSum(
  //     buildingUp,
  //     currentValue
  //   ) {
  //     return buildingUp + currentValue;
  //   },
  //   0);
  // build array of obj
  //   const arrayOfTaxShippingTotalObj = [
  //     // total
  //     {
  //       textContent: "total",
  //       totalPriceStrType: totalPriceInCartStrType,
  //     },
  //     // shipping
  //     {
  //       textContent: "shipping",
  //       totalPriceStrType: addCommasToPrice(shippingCost),
  //     },
  //     // value added tax
  //     {
  //       textContent: "vat (included)",
  //       totalPriceStrType: addCommasToPrice(valueAddedTax),
  //     },
  //     // grand total
  //     {
  //       textContent: "grand total",
  //       totalPriceStrType: addCommasToPrice(grandTotal),
  //     },
  //   ];
  return (
    <article className={CheckoutSummaryStyles[`summary-wrapper`]}>
      {/* title */}
      <h2 className={CheckoutSummaryStyles[`title`]}>summary</h2>
      {/* ul>li using .map() */}
      {/* loop through arrayOfItems */}
      <ul className={CheckoutSummaryStyles[`summary-item-list`]}>
        <SummaryItem />
      </ul>
      <div className={CheckoutSummaryStyles[`total-tax-shipping-wrapper`]}>
        {/* total price */}
        {/* shipping price */}
        {/* VAT (tax) */}
        {/* grand total */}
        {/* {arrayOfTaxShippingTotalObj.map(function buildPriceRowSummary(
          element,
          index
        ) {
          const { textContent, totalPriceStrType } = element;
          return (
            <div
              key={Math.random() * index}
              className={CheckoutSummaryStyles[`total-price-wrapper`]}
            >
              <span className={CheckoutSummaryStyles[`text`]}>
                {textContent}
              </span>
              <span className={CheckoutSummaryStyles[`price`]}>
                <span className={CheckoutSummaryStyles[`dollar-sign`]}>$</span>
                <span className={CheckoutSummaryStyles[`price-digit`]}>
                  {totalPriceStrType}
                </span>
              </span>
            </div>
          );
        })} */}
      </div>
      {/* continue and pay btn */}
    </article>
  );
}

export default CheckoutSummary;
