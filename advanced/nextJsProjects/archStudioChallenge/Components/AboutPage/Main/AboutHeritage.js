import React from "react";
import HeritageStyles from "../../../styles/About/AboutHeritage.module.css";

function HeritageSection({ children, ...props }) {
  return (
    <article className={HeritageStyles[`heritage-wrapper`]}>
      {/* text-content */}
      <div className={HeritageStyles[`text-content`]}>
        <h2 className={HeritageStyles[`title`]}>Our Heritage</h2>
        <p className={HeritageStyles[`description`]}>
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p
          className={`${HeritageStyles[`description`]} ${
            HeritageStyles[`top-bottom-space`]
          }`}
        >
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p className={HeritageStyles[`description`]}>
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>
      {/* img-wrapper */}
      <div className={HeritageStyles[`img-wrapper`]}>
        <img
          className={HeritageStyles[`desktop-img`]}
          src="/about/desktop/image-heritage.jpg"
          alt="Side view of glassed building."
        />
      </div>
    </article>
  );
}

export default HeritageSection;
