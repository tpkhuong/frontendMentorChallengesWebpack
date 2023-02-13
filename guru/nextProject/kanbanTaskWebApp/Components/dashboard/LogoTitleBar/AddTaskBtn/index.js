import React from "react";
import { BoardTaskRenderContext } from "../../Context";

export default function AddTaskBtn({ children }) {
  const renderContextAddTaskBtn = React.useContext(BoardTaskRenderContext);
  return (
    <React.Fragment>
      {/* import useMediaQeury */}
      <button
        onClick={(event) => {
          //   console.log(renderContextAddTaskBtn);
          //   renderContextAddTaskBtn.theme = "dark";
          //   console.log(renderContextAddTaskBtn);
          // renderContextAddTaskBtn.funcRef("dark");
          // console.log(renderContextAddTaskBtn);
          document
            .getElementById("logo-spacer")
            .getAttribute("data-showsidebar") == "true"
            ? document
                .getElementById("logo-spacer")
                .setAttribute("data-showsidebar", "false")
            : document
                .getElementById("logo-spacer")
                .setAttribute("data-showsidebar", "true");
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
