import React from "react";
import ThemeWrapperStyles from "./ThemeWrapper.module.css";
import LoginSignup from "../LoginSignup";
// move section element code here from home pae
// move code from themeImg component here
// move home.module.css code to themeWrapper module .css
// found a way where we dont have to use React.useEffect()

// function ThemeComponent() {
//   const themeComponentData = {
//     hour: new Date().getHours(),
//     theme: "light",
//     imgSrc: "/login-create-account/morning-sunrise.png",
//     imgAltText:
//       "Three dark shade birds flying over a red orange ocean towards the rising sun rise between two dark purple mountains with light gray top peaks. One purple palm tree on each side",
//   };

//   if (themeComponentData.hour >= 8 && themeComponentData.hour < 20) {
//     themeComponentData.imgSrc = "/login-create-account/morning-sunrise.png";
//     themeComponentData.imgAltText =
//       "Three dark shade birds flying over a red orange ocean towards the rising sun rise between two dark purple mountains with light gray top peaks. One purple palm tree on each side";
//     themeComponentData.theme = "light";
//   } else {
//     themeComponentData.imgSrc = "/login-create-account/night-sky.jpg";
//     themeComponentData.imgAltText =
//       "In an open field near a forest and high mountains four hot air balloon: two high in the sky near the bright crescent moon in a light purple sky. Two taking off near a white windmill.";
//     themeComponentData.theme = "dark";
//   }

//   return function innerComponent({ children }) {
//     return (
//       <section
//         data-theme={themeComponentData.theme}
//         id="login-theme-wrapper"
//         className={ThemeWrapperStyles[`login-bg`]}
//       >
//         {/* <div className={ThemeWrapperStyles[`img-container`]}>
//         <img aria-hidden="true" src="/assets/blob-scene.svg" alt="" />
//       </div> */}
//         <div className={ThemeWrapperStyles[`img-form-container`]}>
//           <div className={ThemeWrapperStyles[`img-container`]}>
//             <img
//               // src="/login-create-account/morning-sunrise.png"
//               src={themeComponentData.imgSrc}
//               alt={themeComponentData.imgAltText}
//             />
//             {/* alt text for night sky */}
//             {/* In an open field near a forest and high mountains four hot air balloon: two high in the sky near the bright crescent moon in a light purple sky. Two taking off near a white windmill. */}
//           </div>
//           <LoginSignup />
//         </div>
//       </section>
//     );
//   };
// }

// export const ThemeWrapper = ThemeComponent();

export default function ThemeWrapper({ children }) {
  // const themeComponentData = {
  //   hour: new Date().getHours(),
  //   theme: "light",
  //   imgSrc: "/login-create-account/morning-sunrise.png",
  //   imgAltText:
  //     "Three dark shade birds flying over a red orange ocean towards the rising sun rise between two dark purple mountains with light gray top peaks. One purple palm tree on each side",
  // };

  // if (themeComponentData.hour >= 8 && themeComponentData.hour < 20) {
  //   themeComponentData.imgSrc = "/login-create-account/morning-sunrise.png";
  //   themeComponentData.imgAltText =
  //     "Three dark shade birds flying over a red orange ocean towards the rising sun rise between two dark purple mountains with light gray top peaks. One purple palm tree on each side";
  //   themeComponentData.theme = "light";
  // } else {
  //   themeComponentData.imgSrc = "/login-create-account/night-sky.jpg";
  //   themeComponentData.imgAltText =
  //     "In an open field near a forest and high mountains four hot air balloon: two high in the sky near the bright crescent moon in a light purple sky. Two taking off near a white windmill.";
  //   themeComponentData.theme = "dark";
  // }

  const [themeWrapperValues, setThemeWrapper] = React.useState({
    imgSrc: "/login-create-account/morning-sunrise.png",
    theme: "light",
    imgAltText:
      "Three dark shade birds flying over a red orange ocean towards the rising sun rise between two dark purple mountains with light gray top peaks. One purple palm tree on each side",
  });
  React.useEffect(() => {
    const hour = new Date().getHours();

    const isDaytime = hour >= 8 && hour < 20;

    if (!isDaytime) {
      // themeComponentData.imgSrc = "/login-create-account/night-sky.jpg";
      // themeComponentData.imgAltText =
      //   "In an open field near a forest and high mountains four hot air balloon: two high in the sky near the bright crescent moon in a light purple sky. Two taking off near a white windmill.";
      // themeComponentData.theme = "dark";
      setThemeWrapper({
        theme: "dark",
        imgSrc: "/login-create-account/night-sky.jpg",
        imgAltText:
          "In an open field near a forest and high mountains four hot air balloon: two high in the sky near the bright crescent moon in a light purple sky. Two taking off near a white windmill.",
      });
    }
  }, []);

  return (
    <section
      data-theme={themeWrapperValues.theme}
      id="login-theme-wrapper"
      className={ThemeWrapperStyles[`login-bg`]}
    >
      {/* <div className={ThemeWrapperStyles[`img-container`]}>
  <img aria-hidden="true" src="/assets/blob-scene.svg" alt="" />
</div> */}
      <div className={ThemeWrapperStyles[`img-form-container`]}>
        <div className={ThemeWrapperStyles[`img-container`]}>
          <img
            // src="/login-create-account/morning-sunrise.png"
            src={themeWrapperValues.imgSrc}
            alt={themeWrapperValues.imgAltText}
          />
          {/* alt text for night sky */}
          {/* In an open field near a forest and high mountains four hot air balloon: two high in the sky near the bright crescent moon in a light purple sky. Two taking off near a white windmill. */}
        </div>
        <LoginSignup />
      </div>
    </section>
  );
}
