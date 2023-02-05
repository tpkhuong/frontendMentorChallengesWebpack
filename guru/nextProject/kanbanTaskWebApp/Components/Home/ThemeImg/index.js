import React from "react";
import ThemeImgStyles from "./ThemeImg.module.css";

function ImgComponent() {
  const themeObj = {
    hour: 9,
    imgSrc: "/login-create-account/morning-sunrise.png",
    imgAltText:
      "Three dark shade birds flying over a red orange ocean towards the rising sun rise between two dark purple mountains with light gray top peaks. One purple palm tree on each side",
  };
  //   const hour = new Date().getHours()
  if (themeObj.hour >= 9 && themeObj.hour < 20) {
    themeObj.imgSrc = "/login-create-account/morning-sunrise.png";
    themeObj.imgAltText =
      "Three dark shade birds flying over a red orange ocean towards the rising sun rise between two dark purple mountains with light gray top peaks. One purple palm tree on each side";
  } else {
    themeObj.imgSrc = "/login-create-account/night-sky.jpg";
    themeObj.imgAltText =
      "In an open field near a forest and high mountains four hot air balloon: two high in the sky near the bright crescent moon in a light purple sky. Two taking off near a white windmill.";
  }
  return function innerComponent({ children }) {
    React.useEffect(() => {
      if (themeObj.hour >= 9 && themeObj.hour < 20) {
        document.getElementById("theme").setAttribute("class", "dark");
        // set theme to light
        document
          .getElementById("login-theme-wrapper")
          .getAttribute("data-theme") == "dark"
          ? document
              .getElementById("login-theme-wrapper")
              .setAttribute("data-theme", "light")
          : null;
      } else {
        // set theme to dark
        document
          .getElementById("login-theme-wrapper")
          .getAttribute("data-theme") == "light"
          ? document
              .getElementById("login-theme-wrapper")
              .setAttribute("data-theme", "dark")
          : null;
      }
    });
    return (
      <div className={ThemeImgStyles[`img-container`]}>
        <img
          // src="/login-create-account/morning-sunrise.png"
          src={themeObj.imgSrc}
          alt={themeObj.imgAltText}
        />
        {/* alt text for night sky */}
        {/* In an open field near a forest and high mountains four hot air balloon: two high in the sky near the bright crescent moon in a light purple sky. Two taking off near a white windmill. */}
      </div>
    );
  };
}

export const ThemeImg = ImgComponent();

// if (hour >= 8 && hour < 20) {
//   // night time
// } else {
//   // day time
// }
