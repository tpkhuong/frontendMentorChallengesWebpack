import React from "react";
import AddTaskBtnStyles from "./AddTaskBtn.module.css";
import AddTaskModal from "./AddTaskModal/index";
import { BoardTaskRenderContext } from "../../Context/index";
import { useMediaQuery } from "../../../../utils/sharedHelpers";

export default function AddTaskBtn({ children }) {
  const isScreenLargerThanTabletSize = useMediaQuery("min", 768);
  const [renderAddTaskBtn, setAddTaskBtn] = React.useState(true);
  const [renderAddTaskModal, setTaskModal] = React.useState(false);

  const renderContextForAddTaskBtn = React.useContext(BoardTaskRenderContext);

  renderContextForAddTaskBtn.setStateFuncs.addTaskBtn = setAddTaskBtn;

  return (
    <React.Fragment>
      {
        isScreenLargerThanTabletSize ? (
          !renderAddTaskBtn ? (
            <span
              className={`${AddTaskBtnStyles[`tablet-desktop-btn`]} ${
                AddTaskBtnStyles[`display-block`]
              }`}
            >
              <span aria-hidden="true">+</span>
              <span>Add New Task</span>
            </span>
          ) : (
            <React.Fragment>
              <button
                id="add-task-btn"
                className={`${AddTaskBtnStyles[`tablet-desktop-btn`]} ${
                  AddTaskBtnStyles[`active-btn`]
                }`}
                onClick={(event) => {
                  // focus first input of ask task modal
                  setTimeout(() => {
                    document.getElementById("add-task-title").focus();
                  }, 80);

                  showAddTaskModal(renderAddTaskModal, setTaskModal);
                }}
              >
                <span aria-hidden="true">+</span>
                <span>Add New Task</span>
              </button>
              {renderAddTaskModal ? (
                <AddTaskModal renderAddTaskModalFunc={setTaskModal} />
              ) : null}
            </React.Fragment>
          )
        ) : // <span
        //   className={`${AddTaskBtnStyles[`tablet-desktop-btn-bg`]} ${
        //     AddTaskBtnStyles[`display-block`]
        //   }`}
        // >
        // </span>
        !renderAddTaskBtn ? (
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
        ) : (
          <React.Fragment>
            <button
              id="add-task-btn"
              className={`${AddTaskBtnStyles[`mobile-btn`]} ${
                AddTaskBtnStyles[`active-btn`]
              }`}
              onClick={(event) => {
                // focus first input of ask task modal
                setTimeout(() => {
                  document.getElementById("add-task-title").focus();
                }, 80);

                showAddTaskModal(renderAddTaskModal, setTaskModal);
              }}
            >
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FFF"
                  d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
                />
              </svg>
            </button>
            {renderAddTaskModal ? (
              <AddTaskModal renderAddTaskModalFunc={setTaskModal} />
            ) : null}
          </React.Fragment>
        )
        // <span
        //   className={`${AddTaskBtnStyles[`mobile-btn-bg`]} ${
        //     AddTaskBtnStyles[`display-block`]
        //   }`}
        // >
        // </span>
      }
    </React.Fragment>
  );
}

function showAddTaskModal(stateValue, setStateFunc) {
  if (!stateValue) {
    // show add new task modal
    setStateFunc(true);
    return;
  }

  if (stateValue) {
    // hide add new task modal
    setStateFunc(false);
    return;
  }
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
