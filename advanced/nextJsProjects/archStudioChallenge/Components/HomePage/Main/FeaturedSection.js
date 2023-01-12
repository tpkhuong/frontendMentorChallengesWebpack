import React from "react";
import { featuredSectionContents } from "../../../src/storage";
import FeaturedStyles from "../../../styles/Home/FeaturedSection.module.css";
import PortfolioCard from "../../PortfolioCard";
import LinkButton from "../../LinkButton";

function FeaturedSection({ children, ...props }) {
  return (
    <article className={FeaturedStyles[`featured`]}>
      <h2 className={FeaturedStyles[`section-title`]}>Featured</h2>
      <LinkButton btnStyle="featured-btn" linkRef="/portfolio">
        See All
      </LinkButton>
      {/* featured-items-container */}
      <div className={FeaturedStyles[`featured-items-container`]}>
        {/* make three portfolio cards */}
        {featuredSectionContents.map(function makeFeaturedCards(
          element,
          index
        ) {
          const { imgSrc, title, altText } = element;
          return (
            <PortfolioCard
              key={index}
              pageApplied="homepage"
              text={altText}
              desktop={imgSrc.desktop}
              tablet={imgSrc.tablet}
              mobile={imgSrc.mobile}
              digit={`${index + 1}`}
            >
              {title}
            </PortfolioCard>
          );
        })}
      </div>
    </article>
  );
}

export default FeaturedSection;
