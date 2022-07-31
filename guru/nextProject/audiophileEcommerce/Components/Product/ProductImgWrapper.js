import React from "react";
import ProductImgWrapperStyles from "../../styles/Product/ProductImgWrapper.module.css";

function ProductImgWrapper({ children, ...props }) {
  return (
    <div className={ProductImgWrapperStyles[`img-wrapper`]}>
      <picture>
        <source media="(min-width: 1440px)" srcSet={props.desktop} />
        <source media="(min-width: 768px)" srcSet={props.tablet} />
        <img src={props.mobile} alt={props.textContent} />
      </picture>
    </div>
  );
}

export default ProductImgWrapper;
