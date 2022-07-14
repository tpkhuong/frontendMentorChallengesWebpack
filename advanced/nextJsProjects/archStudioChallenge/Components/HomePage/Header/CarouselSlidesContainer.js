import React from "react";
import LinkButton from "../../LinkButton";
import {
  featuredSectionContents,
  slideElementContent,
} from "../../../src/storage.js";
import CarouselSlidesStyles from "../../../styles/Home/CarouselSlidesContainer.module.css";

function CarouselSlidesContainer({ children, ...props }) {
  return (
    <div
      id="carousel-items"
      className={CarouselSlidesStyles[`carousel-slides`]}
      aria-live="polite"
    >
      {/* carousel-slide there are four */}

      {slideElementContent.map(function makeSlide(element, index) {
        const { imgSrc, title, text } = element;
        return (
          <div
            role="group"
            data-activeslide={index == 0 ? "true" : null}
            data-slideindex={index + 1}
            aria-roledescription="slide"
            aria-label={`${index + 1} of 4`}
            className={CarouselSlidesStyles[`carousel-slide`]}
            key={index}
          >
            <picture>
              <source srcSet={imgSrc.desktop} media="(min-width: 1440px)" />
              <source srcSet={imgSrc.tablet} media="(min-width: 768px)" />
              <img src={imgSrc.mobile} alt="" />
            </picture>
            {/* text content container */}
            <div className={CarouselSlidesStyles[`home-hero-text-content`]}>
              <h1 className={CarouselSlidesStyles[`home-title`]}>
                <span className={CarouselSlidesStyles[`top`]}>{title.top}</span>
                <span className={CarouselSlidesStyles[`bottom`]}>
                  {title.bottom}
                </span>
              </h1>
              <p className={CarouselSlidesStyles[`description`]}>{text}</p>
              {/* Header Btn */}
              <LinkButton btnStyle="header-btn" linkRef="/portfolio">
                See Our Portfolio
              </LinkButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CarouselSlidesContainer;
