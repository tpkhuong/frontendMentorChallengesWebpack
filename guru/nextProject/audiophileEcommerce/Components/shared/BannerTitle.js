import React from "react";
import BannerTitleStyles from "../../styles/Components/shared/BannerTitle.module.css";

function BannerTitle({ children, ...props }) {
  return <h1 className={BannerTitleStyles[`title`]}>{children}</h1>;
}

export default BannerTitle;
