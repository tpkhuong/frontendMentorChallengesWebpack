import React from "react";
import Head from "next/head";
// import { featuredSectionContents } from "./api/storage";
import { useMediaQuery } from "../src/storage";
import HomeStyles from "../styles/Home/Home.module.css";
import SlideControllerButton from "../Components/HomePage/Header/SlideControllerButton";
import CarouselSlidesContainer from "../Components/HomePage/Header/CarouselSlidesContainer";
import LinkButton from "../Components/LinkButton";
import VerticalLine from "../Components/VerticalLine";
import LogoNavbar from "../Components/LogoNavbarContainer";
import MobileNav from "../Components/MobileNav";
import WelcomeMessage from "../Components/HomePage/Main/WelcomeMessage";
import AboutSection from "../Components/HomePage/Main/AboutLinkSection";
import FeaturedSection from "../Components/HomePage/Main/FeaturedSection";
import PortfolioCard from "../Components/PortfolioCard";
import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";

// const useMediaQuery = (width) => {
//   const [targetReached, setTargetReached] = React.useState(false);

//   const updateTarget = React.useCallback((e) => {
//     if (e.matches) {
//       setTargetReached(true);
//     } else {
//       setTargetReached(false);
//     }
//   }, []);

//   React.useEffect(() => {
//     const media = window.matchMedia(`(max-width: ${width}px)`);
//     // media.addListener(updateTarget);
//     media.addEventListener("change", (e) => updateTarget(e));

//     // Check on mount (callback is not called until a change occurs)
//     if (media.matches) {
//       setTargetReached(true);
//     }

//     // return () => media.removeListener(updateTarget);
//     return () => media.removeEventListener("change", (e) => updateTarget(e));
//   }, []);

//   return targetReached;
// };

function Home(props) {
  const mobileSize = useMediaQuery("max", 378);
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>

      <VerticalLine pageRef="/">home</VerticalLine>
      <header role="banner" className={HomeStyles[`header`]}>
        <LogoNavbar></LogoNavbar>
        <div className={HomeStyles[`hero-img-content-wrapper`]}>
          {/* mobile navbar */}
          {mobileSize ? <MobileNav /> : null}
          {/* carousel container */}
          <section
            className={HomeStyles[`carousel`]}
            aria-roledescription="carousel"
          >
            {/* carousel controller btns */}
            <div
              onClick={selectSlide}
              className={HomeStyles[`slide-btns-container`]}
            >
              {/* Project Paramour */}
              <SlideControllerButton
                labelAttr={"Select Project Paramour slide"}
                datacontrol={"1"}
                isActive="true"
              >
                01
              </SlideControllerButton>
              {/* Seraph Station */}
              <SlideControllerButton
                labelAttr={"Select Seraph Station slide"}
                datacontrol={"2"}
              >
                02
              </SlideControllerButton>
              {/* Federal II Tower */}
              <SlideControllerButton
                labelAttr={"Select Federal II Tower slide"}
                datacontrol={"3"}
              >
                03
              </SlideControllerButton>
              {/* Trinity Bank Tower */}
              <SlideControllerButton
                labelAttr={"Select Trinity Bank Tower slide"}
                datacontrol={"4"}
              >
                04
              </SlideControllerButton>
            </div>
            {/* carousel-slides container */}
            <CarouselSlidesContainer />
          </section>

          {/* <picture>
            <source
              srcSet="/home/desktop/image-hero-paramour.jpg"
              media="(min-width: 1440px)"
            />
            <source
              srcSet="/home/tablet/image-hero-paramour.jpg"
              media="(min-width: 768px)"
            />
            <img src="/home/mobile/image-hero-paramour.jpg" alt="" />
          </picture>
          <div className="text-content">
            <h1>
              <span>Project</span>
              <span>Paramour</span>
            </h1>
            <p>
              Project made for an art museum near Southwest London. Project
              Paramour is a statement of bold, modern architecture.
            </p> */}
          {/* Header Btn */}
          {/* <LinkButton btnStyle="header-btn" linkRef="/about">
              See Our Portfolio
            </LinkButton>
          </div> */}
        </div>
      </header>
      <main className={HomeStyles[`main-section`]} role="main">
        <WelcomeMessage></WelcomeMessage>
        <AboutSection />
        <FeaturedSection />
        {/* <PortfolioCard
          desktop="/portfolio/desktop/image-del-sol.jpg"
          tablet="/portfolio/tablet/image-del-sol.jpg"
          mobile="/portfolio/mobile/image-del-sol.jpg"
          pageApplied="homepage"
          digit="1"
        >
          Project Del Sol
        </PortfolioCard> */}
      </main>
      <Footer />
    </React.Fragment>
  );
}

function selectSlide(event) {
  // console.log(event.target.closest("BUTTON"));
  const activeSlide = document.querySelector("[data-activeslide='true']");
  const activeButton = document.querySelector("[data-activebutton='true']");
  if (!event.target.getAttribute("data-activebutton")) {
    // we only want to run algorithm when the clicked button is not the current active button
    const clickedBtnIndex = event.target.getAttribute("data-controlindex");
    // since the typeof for both data-controlindex and data-slideindex values are string form
    // we wont convert clickedBtnIndex to number form
    const matchingSlideElement = document.querySelector(
      `[data-slideindex='${clickedBtnIndex}']`
    );
    // remove data-activeslide from activeSlide element and data-activebutton from activeButton element
    activeSlide.removeAttribute("data-activeslide");
    activeButton.removeAttribute("data-activebutton");
    // add data-activeslide and data-activebutton to btn clicked and matchslidelement
    event.target.setAttribute("data-activebutton", "true");
    matchingSlideElement.setAttribute("data-activeslide", "true");
  }
}

export default Home;

function note() {
  <section className={HomeStyles[`carousel`]} aria-roledescription="carousel">
    {/* carousel controller btns */}
    <div onClick={selectSlide} className={HomeStyles[`slide-btns-container`]}>
      {/* Project Paramour */}
      <SlideControllerButton
        labelAttr={"Select Project Paramour slide"}
        datacontrol={"1"}
        isActive="true"
      >
        01
      </SlideControllerButton>
      {/* Seraph Station */}
      <SlideControllerButton
        labelAttr={"Select Seraph Station slide"}
        datacontrol={"2"}
      >
        02
      </SlideControllerButton>
      {/* Federal II Tower */}
      <SlideControllerButton
        labelAttr={"Select Federal II Tower slide"}
        datacontrol={"3"}
      >
        03
      </SlideControllerButton>
      {/* Trinity Bank Tower */}
      <SlideControllerButton
        labelAttr={"Select Trinity Bank Tower slide"}
        datacontrol={"4"}
      >
        04
      </SlideControllerButton>
    </div>
    {/* carousel-slides container */}
    <div
      id="carousel-items"
      className={HomeStyles[`carousel-slides`]}
      aria-live="polite"
    >
      {/* carousel-slide there are four */}

      {slideElementContent.map(function makeSlide(element, index) {
        const { imgSrc, title, text } = element;
        const noAdd = false;
        return (
          <div
            role="group"
            data-activeslide={index == 0 ? "true" : null}
            data-slideindex={index + 1}
            aria-roledescription="slide"
            aria-label={`${index + 1} of 4`}
            className={HomeStyles[`carousel-slide`]}
            key={index}
          >
            <picture>
              <source srcSet={imgSrc.desktop} media="(min-width: 1440px)" />
              <source srcSet={imgSrc.tablet} media="(min-width: 768px)" />
              <img src={imgSrc.mobile} alt="" />
            </picture>
            {/* text content container */}
            <div className={HomeStyles[`home-hero-text-content`]}>
              <h1 className={HomeStyles[`home-title`]}>
                <span className={HomeStyles[`top`]}>{title.top}</span>
                <span className={HomeStyles[`bottom`]}>{title.bottom}</span>
              </h1>
              <p className={HomeStyles[`description`]}>{text}</p>
              {/* Header Btn */}
              <LinkButton btnStyle="header-btn" linkRef="/about">
                See Our Portfolio
              </LinkButton>
            </div>
          </div>
        );
      })}
    </div>
  </section>;
}
