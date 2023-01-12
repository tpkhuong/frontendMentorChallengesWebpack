import React from "react";
import PortfolioCardStyles from "../styles/PortfolioCard.module.css";
import Link from "next/link";

function PortfolioCard({ children, ...props }) {
  return (
    <div
      className={`${PortfolioCardStyles[`${props.pageApplied}`]} ${
        PortfolioCardStyles[`card-container`]
      }`}
    >
      <picture>
        <source media="(min-width: 1440px)" srcSet={props.desktop} />
        <source media="(min-width: 768px)" srcSet={props.tablet} />
        <img src={props.mobile} alt={props.text} />
      </picture>
      <div className={PortfolioCardStyles[`text-content`]}>
        <span className={PortfolioCardStyles[`card-title`]}>{children}</span>
        {props.pageApplied == "homepage" ? (
          <Link href="/portfolio">
            <a className={PortfolioCardStyles[`link-text`]}>
              View All Projects
            </a>
          </Link>
        ) : (
          <span className={PortfolioCardStyles[`date`]}>{props.monthYear}</span>
        )}
      </div>
      {/* number rendered for portfolio card component will be based on pageApplied prop */}
      {props.pageApplied == "homepage" ? (
        <span className={PortfolioCardStyles[`large-digit`]}>
          {props.digit}
        </span>
      ) : null}
    </div>
  );
}

export default PortfolioCard;
