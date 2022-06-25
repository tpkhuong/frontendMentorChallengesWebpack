import React from "react";
import AboutSectionStyles from "../../../styles/Home/AboutLinkSection.module.css";
import LinkButton from "../../LinkButton";

function AboutSection({ children, ...props }) {
  return (
    <article className={AboutSectionStyles[`about-page-link`]}>
      {/* picture */}
      <picture>
        <source
          srcSet="/home/desktop/image-small-team.jpg"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/home/tablet/image-small-team.jpg"
          media="(min-width: 768px)"
        />
        <img
          src="/home/mobile/image-small-team.jpg"
          alt="White Stone Vacation Resort surrounded by water."
        />
      </picture>
      {/* text content */}
      <div className={AboutSectionStyles[`text-link-wrapper`]}>
        <span className={AboutSectionStyles[`text`]}>
          Small team, big ideas
        </span>
        {/* <span className={AboutSectionStyles[`top`]}>Small team,</span>
        <span className={AboutSectionStyles[`bottom`]}>big ideas</span> */}
        <LinkButton btnStyle="about-btn" linkRef="/about">
          About Us
        </LinkButton>
      </div>
    </article>
  );
}

export default AboutSection;
