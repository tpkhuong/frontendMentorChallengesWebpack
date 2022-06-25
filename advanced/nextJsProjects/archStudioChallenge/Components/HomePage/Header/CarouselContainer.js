import React from "react";
// import SlideControllerButton from "./SlideControllerButton";
// import CarouselSlidesContainer from "./CarouselContainer";
// import CarouselContainerStyles from "../../../styles/Home/CarouselContainer.module.css";

function CarouselContainer({ children, ...props }) {
  return (
    <section
      className={CarouselContainerStyles[`carousel`]}
      aria-roledescription="carousel"
    >
      {/* carousel controller btns */}
      <div
        onClick={selectSlide}
        className={CarouselContainerStyles[`slide-btns-container`]}
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
  );
}

export default CarouselContainer;
