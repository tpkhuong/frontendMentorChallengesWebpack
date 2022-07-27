import React from "react";
import ProductButtonStyles from "../../styles/Components/shared/ProductButton.module.css";
import Link from "next/link";

function ProductButton({ children, ...props }) {
  return (
    <Link href={props.productPage}>
      <a
        className={`${ProductButtonStyles[`${props.fgBgColor}`]} ${
          ProductButtonStyles[`general`]
        }`}
      >
        SEE PRODUCT
      </a>
    </Link>
  );
}

export default ProductButton;
