import React from "react";
import HeroContentStyles from "../../styles/Home/HeroContent.module.css";
import LogoNavBarLine from "../../Components/shared/LogoNavBarLine";
import ProductButton from "../shared/ProductButton";
// import Link from "next/link"

function HeroContent({ children, ...props }) {
  return (
    // use bg img for hero content
    <article className={HeroContentStyles[`hero-content-wrapper`]}>
      <LogoNavBarLine />
      <div className={HeroContentStyles[`text-content`]}>
        <span className={HeroContentStyles[`new-product`]}>NEW PRODUCT</span>
        <h2 className={HeroContentStyles[`title`]}>XX99 MARK II HEADPHONES</h2>
        <p className={HeroContentStyles[`description`]}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        {/* see product */}
        <ProductButton
          productPage="/headphones/xx99mark2"
          fgBgColor="orange-white"
        />
      </div>

      {/* <div className={HeroContentStyles[`img-wrapper`]}>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="/home/desktop/image-hero.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/home/tablet/image-header.jpg"
          />
          <img
            src="/home/mobile/image-header.jpg"
            alt="Black over the ear headphones"
          />
        </picture>
      </div> */}
    </article>
  );
}

export default HeroContent;
