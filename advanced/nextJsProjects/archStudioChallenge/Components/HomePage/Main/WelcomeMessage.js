import React from "react";
import WelcomeStyles from "../../../styles/Home/WelcomeMessage.module.css";

function WelcomeMessage({ children, ...props }) {
  return (
    <article className={WelcomeStyles[`welcome-message-component`]}>
      {/* message-img-container */}
      <div className={WelcomeStyles[`message-img-container`]}>
        <div className={WelcomeStyles[`message-container`]}>
          <h2 className={WelcomeStyles[`section-title`]}>
            Welcome to Arch Studio
          </h2>
          <p
            className={`${WelcomeStyles[`paragraph`]} ${
              WelcomeStyles[`top-margin`]
            }`}
          >
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p
            className={`${WelcomeStyles[`paragraph`]} ${
              WelcomeStyles[`top-bottom-margin`]
            }`}
          >
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p className={WelcomeStyles[`paragraph`]}>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <div className={WelcomeStyles[`img-container`]}>
          <img
            className={WelcomeStyles[`desktop-img`]}
            src="/home/desktop/image-welcome.jpg"
            alt="Top section of Shiny Taupe building."
          />
        </div>
      </div>
      {/* welcome text */}
      <span className={WelcomeStyles[`large-text`]}>Welcome</span>
    </article>
  );
}

export default WelcomeMessage;
