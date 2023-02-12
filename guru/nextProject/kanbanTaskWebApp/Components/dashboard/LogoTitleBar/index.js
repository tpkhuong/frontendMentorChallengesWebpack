import React from "react";
import LogoTitleStyles from "./LogoTitleBar.module.css";
import Logo from "./Logo/Logoindex";
import BoardTitle from "./BoardTitle";
import AddTaskBtn from "./AddTaskBtn";

export default function LogoTitleBar({ children }) {
  return (
    <div className={LogoTitleStyles[`logo-title-container`]}>
      <Logo />
      <div className={LogoTitleStyles[`title-btns-container`]}>
        <BoardTitle />
        <AddTaskBtn />
      </div>
    </div>
  );
}
