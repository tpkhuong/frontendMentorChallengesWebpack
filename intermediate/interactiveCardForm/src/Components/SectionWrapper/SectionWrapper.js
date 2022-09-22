import React from "react";
import SectionStyles from "./SectionWrapper.module.css";
import CardFront from "../CardFront/CardFront";
import CardBack from "../CardBack/CardBack";
import BottomContainer from "../BottomContainer/BottomContainer";

export const LinkValuesToInputContext = React.createContext({});

export default function SectionWrapper({ children, ...props }) {
  const memoizedCreditCardContent = React.useMemo(() => {
    return {
      creditCard: {
        name: null,
        number: null,
        expMonth: null,
        expYear: null,
        cvc: null,
      },
    };
  });

  return (
    <section className={SectionStyles[`interactive-card-wrapper`]}>
      <h1 className="visually-hidden">Interactive Card Form</h1>
      <LinkValuesToInputContext.Provider value={memoizedCreditCardContent}>
        <div className={SectionStyles[`cards-container`]}>
          {/* front and back */}
          {/* front */}
          <CardFront />
          {/* back */}
          <CardBack />
        </div>
        {/* form inputs and confirm component wrapper*/}
        <BottomContainer />
      </LinkValuesToInputContext.Provider>
    </section>
  );
}
