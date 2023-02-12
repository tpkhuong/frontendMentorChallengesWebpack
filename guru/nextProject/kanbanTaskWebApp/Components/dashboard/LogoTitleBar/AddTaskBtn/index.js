import React from "react";
import { BoardTaskRenderContext } from "../../Context";

export default function AddTaskBtn({ children }) {
  const renderContextAddTaskBtn = React.useContext(BoardTaskRenderContext);
  return (
    <React.Fragment>
      <button
        onClick={(event) => {
          //   console.log(renderContextAddTaskBtn);
          //   renderContextAddTaskBtn.theme = "dark";
          //   console.log(renderContextAddTaskBtn);
          renderContextAddTaskBtn.funcRef("dark");
          console.log(renderContextAddTaskBtn);
        }}
      >
        dark theme
      </button>
      <button
        onClick={(event) => {
          //   console.log(renderContextAddTaskBtn);
          //   renderContextAddTaskBtn.theme = "light";
          //   console.log(renderContextAddTaskBtn);
          renderContextAddTaskBtn.funcRef("light");
          console.log(renderContextAddTaskBtn);
        }}
      >
        light theme
      </button>
    </React.Fragment>
  );
}
