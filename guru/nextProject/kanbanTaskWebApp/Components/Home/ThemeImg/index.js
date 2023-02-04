import React from "react";
import ThemeImgStyles from "./ThemeImg.module.css";

export default function ThemeImg({ children }) {
  return (
    <div className={ThemeImgStyles[`img-container`]}>
      <img
        src="/login-create-account/morning-sunrise.png"
        alt="Three dark shade birds flying over a red orange ocean towards the rising sun rise between two dark purple mountains with light gray top peaks. One purple palm tree on each side"
      />
      {/* alt text for night sky */}
      {/* In an open field near a forest and high mountains four hot air balloon: two high in the sky near the bright crescent moon in a light purple sky. Two taking off near a white windmill. */}
    </div>
  );
}
