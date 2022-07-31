import React from "react";
import ProductTextPriceInfoStyles from "../../styles/Product/ProductTextPriceInfo.module.css";
import AddCard from "./AddCartContainer";
import { addCommasToPrice } from "../../utils/helpers";

function ProductTextPriceInfo({ children, ...props }) {
  // convert price to string form here
  const priceInStrForm = addCommasToPrice(props.price);
  // console.log(...props);
  return (
    <div
      // use console.log(data.details["xx59"].new);
      data-isnew={props.newProduct}
      className={ProductTextPriceInfoStyles[`info-content-wrapper`]}
    >
      <span className={ProductTextPriceInfoStyles[`new-product`]}>
        new product
      </span>
      {/* use min-content */}
      <h2 className={ProductTextPriceInfoStyles[`title`]}>
        {props.title}
        {/* <span className={ProductTextPriceInfoStyles[`product-title`]}>
          {props.product}
        </span>
        <span className={ProductTextPriceInfoStyles[`category-title`]}>
          {props.category}
        </span> */}
      </h2>
      <p className={ProductTextPriceInfoStyles[`description`]}>
        {props.description}
      </p>
      <div className={ProductTextPriceInfoStyles[`price-container`]}>
        <span className={ProductTextPriceInfoStyles[`dollar-sign`]}>$</span>
        <span data-productprice className={ProductTextPriceInfoStyles[`price`]}>
          {priceInStrForm}
        </span>
      </div>
      {/* add cart component */}
    </div>
  );
}

export default ProductTextPriceInfo;
