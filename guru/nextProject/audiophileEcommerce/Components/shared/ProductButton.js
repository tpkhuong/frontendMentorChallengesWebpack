import React from "react";
import ProductButtonStyles from "../../styles/Components/shared/ProductButton.module.css";
import Link from "next/link";
import { getCurrentUrl } from "../../utils/helpers";
// import { cachedObj } from "../../src/storage";

function ProductButton({ children, ...props }) {
  return (
    <Link href={props.productPage}>
      <a
        onClick={getCurrentUrl}
        className={`${ProductButtonStyles[`${props.fgBgColor}`]} ${
          ProductButtonStyles[`general`]
        }`}
      >
        SEE PRODUCT
      </a>
    </Link>
  );
}

// function getCurrentUrl(event) {
//   console.log(cachedObj.previousURLs);
//   console.log(document.URL);
//   cachedObj.previousURLs.push(document.URL);
// }

export default ProductButton;
