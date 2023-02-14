import React from "react";
import AddTaskBtnStyles from "./AddTaskBtn.module.css";
import { BoardTaskRenderContext } from "../../Context";
import { useMediaQuery } from "../../../../utils/sharedHelpers";

export default function AddTaskBtn({ children }) {
  const isScreenLargerThanTabletSize = useMediaQuery("min", 768);
  const [renderAddTaskBtn, setAddTaskBtn] = React.useState(false);

  const renderContextForAddTaskBtn = React.useContext(BoardTaskRenderContext);
  return (
    <React.Fragment>
      {isScreenLargerThanTabletSize ? (
        <span
          className={`${AddTaskBtnStyles[`tablet-desktop-btn`]} ${
            AddTaskBtnStyles[`display-block`]
          }`}
        >
          <span aria-hidden="true">+</span>
          <span>Add New Task</span>
        </span>
      ) : (
        // <span
        //   className={`${AddTaskBtnStyles[`tablet-desktop-btn-bg`]} ${
        //     AddTaskBtnStyles[`display-block`]
        //   }`}
        // >
        // </span>
        <span
          className={`${AddTaskBtnStyles[`mobile-btn`]} ${
            AddTaskBtnStyles[`display-block`]
          }`}
        >
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFF"
              d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
            />
          </svg>
        </span>
        // <span
        //   className={`${AddTaskBtnStyles[`mobile-btn-bg`]} ${
        //     AddTaskBtnStyles[`display-block`]
        //   }`}
        // >
        // </span>
      )}
    </React.Fragment>
  );
}

function notes() {
  return (
    <React.Fragment>
      <button
        onClick={(event) => {
          //   console.log(renderContextAddTaskBtn);
          //   renderContextAddTaskBtn.theme = "dark";
          //   console.log(renderContextAddTaskBtn);
          // renderContextAddTaskBtn.funcRef("dark");
          // console.log(renderContextAddTaskBtn);
          // document
          //   .getElementById("logo-spacer")
          //   .getAttribute("data-showsidebar") == "true"
          //   ? document
          //       .getElementById("logo-spacer")
          //       .setAttribute("data-showsidebar", "false")
          //   : document
          //       .getElementById("logo-spacer")
          //       .setAttribute("data-showsidebar", "true");
        }}
      >
        dark theme
      </button>
      <button
        onClick={(event) => {
          //   console.log(renderContextAddTaskBtn);
          //   renderContextAddTaskBtn.theme = "light";
          //   console.log(renderContextAddTaskBtn);
          // renderContextAddTaskBtn.funcRef("light");
          // console.log(renderContextAddTaskBtn);
        }}
      >
        light theme
      </button>
    </React.Fragment>
  );
}
