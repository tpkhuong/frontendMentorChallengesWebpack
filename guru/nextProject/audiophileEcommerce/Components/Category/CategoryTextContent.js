import React from "react";
import CategoryTextContentStyles from "../../styles/Categoty/CategoryTextContent.module.css";
import ProductButton from "../shared/ProductButton";

function CategoryTextContent({ children, ...props }) {
  return (
    <div className={CategoryTextContentStyles[`text-container`]}>
      {/* is new product */}
      <span
        data-isnew={props.isNew}
        className={CategoryTextContentStyles[`new-product`]}
      >
        new product
      </span>
      {/* title */}
      <h2 className={CategoryTextContentStyles[`title`]}>{props.title}</h2>
      {/* description */}
      <p className={CategoryTextContentStyles[`description`]}>
        {props.content}
      </p>
      {/* product button */}
      <ProductButton productPage="/" fgBgColor="orange-white" />
    </div>
  );
}

export default CategoryTextContent;
