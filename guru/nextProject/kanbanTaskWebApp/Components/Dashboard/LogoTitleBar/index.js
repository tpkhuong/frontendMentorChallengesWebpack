import React from "react";
import LogoTitleStyles from "./LogoTitleBar.module.css";
import Logo from "./Logo/index";
import BoardTitle from "./BoardTitle";
import AddTaskBtn from "./AddTaskBtn";
import EditDeleteBoardBtn from "./EditDeleteBoardBtn";
import { tabThroughEditDeleteModal } from "./EditDeleteBoardBtn/editDeleteBtnHelpers";

export default function LogoTitleBar({ children, valuesForTitleAddTask }) {
  return (
    <div className={LogoTitleStyles[`logo-title-container`]}>
      <Logo />
      <div
        onKeyDown={tabThroughEditDeleteModal}
        className={LogoTitleStyles[`title-btns-container`]}
      >
        <BoardTitle boardTitle={valuesForTitleAddTask.title} />
        <AddTaskBtn isCurrentBoardEmpty={valuesForTitleAddTask.isBoardEmpty} />
        <EditDeleteBoardBtn />
      </div>
    </div>
  );
}
