import React from "react";
import Head from "next/head";
import { featuredSectionContents, slideElementContent } from "./api/storage";
import HomeStyles from "../styles/Home/Home.module.css";
import LinkButton from "../Components/LinkButton";
import VerticalLine from "../Components/VerticalLine";
import LogoNavbar from "../Components/LogoNavbarContainer";
import MobileNav from "../Components/MobileNav";
import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = React.useState(false);

  const updateTarget = React.useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  React.useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    // media.addListener(updateTarget);
    media.addEventListener("change", (e) => updateTarget(e));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    // return () => media.removeListener(updateTarget);
    return () => media.removeEventListener("change", (e) => updateTarget(e));
  }, []);

  return targetReached;
};

function Home(props) {
  const mobileSize = useMediaQuery(378);
  const [first] = slideElementContent;
  const { imgSrc, title, text } = first;
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

      <VerticalLine pageRef="/">portfolio</VerticalLine>
      <header className={HomeStyles[`header`]}>
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
            <div className={HomeStyles[`slide-btns-container`]}>
              <button
                className={HomeStyles[`slide-controller-btn`]}
                aria-label="Select Project Paramour slide"
                aria-controls="carousel-items"
              >
                01
              </button>
              <button
                className={HomeStyles[`slide-controller-btn`]}
                aria-label="Select Seraph Station slide"
                aria-controls="carousel-items"
              >
                02
              </button>
              <button
                className={HomeStyles[`slide-controller-btn`]}
                aria-label="Select Federal II Tower slide"
                aria-controls="carousel-items"
              >
                03
              </button>
              <button
                className={HomeStyles[`slide-controller-btn`]}
                aria-label="Select Trinity Bank Tower slide"
                aria-controls="carousel-items"
              >
                04
              </button>
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
                      <source
                        srcSet={imgSrc.desktop}
                        media="(min-width: 1440px)"
                      />
                      <source
                        srcSet={imgSrc.tablet}
                        media="(min-width: 768px)"
                      />
                      <img src={imgSrc.mobile} alt="" />
                    </picture>
                    {/* text content container */}
                    <div className={HomeStyles[`home-hero-text-content`]}>
                      <h1 className={HomeStyles[`home-title`]}>
                        <span className={HomeStyles[`top`]}>{title.top}</span>
                        <span className={HomeStyles[`bottom`]}>
                          {title.bottom}
                        </span>
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
      <Footer />
    </React.Fragment>
  );
}

export default Home;
//   ../public/portfolio/tablet/image-228b.jpg 580w
//   ../public/portfolio/desktop/image-228b.jpg 355w

function note() {
  <div
    role="group"
    aria-roledescription="slide"
    // aria-label={`${index + 1} of 4`}
    className={HomeStyles[`carousel-slide`]}
    // key={index}
  >
    <picture>
      {/* <source srcSet={imgSrc.desktop} media="(min-width: 1440px)" />
                  <source srcSet={imgSrc.tablet} media="(min-width: 768px)" />
                  <img src={imgSrc.mobile} alt="" /> */}
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
    {/* text content container */}
    <div className={HomeStyles[`home-hero-text-content`]}>
      <h1 className={HomeStyles[`home-title`]}>
        <span className={HomeStyles[`top`]}>Project</span>
        <span className={HomeStyles[`bottom`]}>Paramour</span>
      </h1>
      <p className={HomeStyles[`description`]}>
        Project made for an art museum near Southwest London. Project Paramour
        is a statement of bold, modern architecture.
      </p>
      {/* Header Btn */}
      <LinkButton btnStyle="header-btn" linkRef="/about">
        See Our Portfolio
      </LinkButton>
    </div>
  </div>;
}
