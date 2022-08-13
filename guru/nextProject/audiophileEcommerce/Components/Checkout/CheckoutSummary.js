import React from "react";
import CheckoutSummaryStyles from "../../styles/Checkout/CheckoutSummary.module.css";
import SummaryItem from "./SummaryItem";
import {
  addCommasToPrice,
  cartModalTotalPrice,
  taxCalculation,
} from "../../utils/helpers";

function CheckoutSummary({ children, ...props }) {
  const { total_price, items } = props.dataPassedToSummary;
  //   calculate tax and grand total before we assign them to values in our
  const valueAddedTax = taxCalculation(total_price);
  const shippingCost = 50;
  // array of values to calculate grand total
  const arrayOfValuesForGrandTotal = [total_price, valueAddedTax, shippingCost];
  const grandTotal = arrayOfValuesForGrandTotal.reduce(function getSum(
    buildingUp,
    currentValue
  ) {
    return buildingUp + currentValue;
  },
  0);
  //   build array of obj
  const arrayOfTaxShippingTotalObj = [
    // total
    {
      textContent: "total",
      totalPriceStrType: addCommasToPrice(total_price),
    },
    // shipping
    {
      textContent: "shipping",
      totalPriceStrType: addCommasToPrice(shippingCost),
    },
    // value added tax
    {
      textContent: "vat (included)",
      totalPriceStrType: addCommasToPrice(valueAddedTax),
    },
    // grand total
    {
      textContent: "grand total",
      totalPriceStrType: addCommasToPrice(grandTotal),
    },
  ];
  return (
    <article className={CheckoutSummaryStyles[`summary-wrapper`]}>
      {/* title */}
      <h2 className={CheckoutSummaryStyles[`title`]}>summary</h2>

      <ul className={CheckoutSummaryStyles[`summary-item-list`]}>
        {/* ul>li using .map() */}
        {/* loop through items */}
        {/*   name: {
          display: title,
          order_record: nameForCartItemSearch,
        },
        price: {
          display: priceStr,
          order_record: priceNum,
        },
        item_quantity: quantityForInput,
        image_src: strImgSrc,
        alt_text: altTextCartModalSummaryItem, */}
        {/* we will pass in name.display, price.display, item_quantity, image_src, alt_text  into SummaryItem */}
        <SummaryItem name price quantity imageSrc imageAlt />
      </ul>
      <div className={CheckoutSummaryStyles[`total-tax-shipping-wrapper`]}>
        {/* total price */}
        {/* shipping price */}
        {/* VAT (tax) */}
        {/* grand total */}
        {arrayOfTaxShippingTotalObj.map(function buildPriceRowSummary(
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
        })}
      </div>
      {/* continue and pay btn */}
    </article>
  );
}

export default CheckoutSummary;
