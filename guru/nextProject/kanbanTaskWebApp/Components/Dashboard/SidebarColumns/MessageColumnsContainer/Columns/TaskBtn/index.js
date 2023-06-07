import React from "react";
import TaskBtnStyles from "./TaskBtn.module.css";
import { VscOpenPreview } from "react-icons/vsc";

export default function TaskBtn({
  children,
  completed,
  total,
  status,
  position,
  selected,
  tab,
}) {
  // apply drag event to each task btns
  console.log(completed, "completed");
  console.log(status, "status");
  console.log(tab, "tab");
  console.log(children, "children");
  console.log(selected, "selected");
  return (
    <React.Fragment>
      {selected ? (
        <button
          tabIndex={tab}
          id="drag-drop-selected"
          data-orderindex={position}
          data-typeofstatus={status}
          className={TaskBtnStyles[`task-btn`]}
          draggable="true"
          onDragStart={(event) => {
            // console.log("this is drag");
            // console.log(event.target);
            const selectedTaskBtn = event.target.closest("BUTTON");
            if (selectedTaskBtn) {
              // we want status of task btn and index (data-orderindex and data-typeofstatus) to access the obj in local storage
              const status = selectedTaskBtn.getAttribute("data-typeofstatus");
              const index = selectedTaskBtn.getAttribute("data-orderindex");
              localStorage.setItem(
                "dragSelected",
                JSON.stringify({ status, index })
              );
              console.log(selectedTaskBtn);
              return;
            }
          }}
          onDragEnter={(event) => {
            console.log("this is enter");
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              enteredTaskBtn.setAttribute("data-dragover", "true");
              return;
            }
          }}
          onDragLeave={(event) => {
            console.log("this is leave");
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              enteredTaskBtn.setAttribute("data-dragover", "false");
              return;
            }
          }}
          onDragOver={(event) => {
            event.preventDefault();
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              enteredTaskBtn.setAttribute("data-dragover", "true");
              return;
            }
            console.log("this is drag over");
          }}
          onDrop={(event) => {
            event.preventDefault();
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              // we want the status of the task btn and index that use fire onDrop event data-orderindex and data-typeofstatus
              console.log(JSON.parse(localStorage.getItem("dataSelected")));
              enteredTaskBtn.setAttribute("data-dragover", "false");
              return;
            }
            // console.log(event.target);

            console.log("drag drop");
          }}
        >
          <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
          <div className={TaskBtnStyles[`subtasks-icon-container`]}>
            <div className={TaskBtnStyles[`subtasks-container`]}>
              <span className={TaskBtnStyles[`subtasks-completed`]}>
                {completed}
              </span>
              <span>of</span>
              <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
              <span>subtasks</span>
            </div>
            {/* open view icon */}
            <a
              id="view-icon-selector"
              role="button"
              tabIndex={tab}
              className={TaskBtnStyles[`open-view-icon-btn`]}
              aria-label="open view modal"
            >
              <VscOpenPreview />
            </a>
          </div>
        </button>
      ) : (
        <button
          tabIndex={tab}
          data-orderindex={position}
          data-typeofstatus={status}
          className={TaskBtnStyles[`task-btn`]}
          draggable="true"
          onDragStart={(event) => {
            console.log("this is drag");
            console.log(event.target);
            const selectedTaskBtn = event.target.closest("BUTTON");
            if (selectedTaskBtn) {
              // we want status of task btn and index (data-orderindex and data-typeofstatus) to access the obj in local storage
              const status = selectedTaskBtn.getAttribute("data-typeofstatus");
              const index = Number(
                selectedTaskBtn.getAttribute("data-orderindex")
              );
              const selectedTaskObj = {
                status,
                index,
              };
              localStorage.setItem(
                "dragSelected",
                JSON.stringify(selectedTaskObj)
              );
              console.log(JSON.parse(localStorage.getItem("dragSelected")));
              console.log(selectedTaskBtn);
              return;
            }
          }}
          onDragEnter={(event) => {
            console.log("this is enter");
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              enteredTaskBtn.setAttribute("data-dragover", "true");
              return;
            }
          }}
          onDragLeave={(event) => {
            console.log("this is leave");
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              enteredTaskBtn.setAttribute("data-dragover", "false");
              return;
            }
          }}
          onDragOver={(event) => {
            event.preventDefault();
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              enteredTaskBtn.setAttribute("data-dragover", "true");
              return;
            }
            console.log("this is drag over");
          }}
          onDrop={(event) => {
            // position/index of drag start element less than position/index of drop element
            // drag start element will go below drop element
            // position/index of drag start element greater than position/index of drop element
            // drag start element will go above drop element
            event.preventDefault();
            const droppedTaskBtn = event.target.closest("BUTTON");
            if (droppedTaskBtn) {
              const droppedTaskBtnStatus =
                droppedTaskBtn.getAttribute("data-typeofstatus");
              const droppedTaskBtnPosition = Number(
                droppedTaskBtn.getAttribute("data-orderindex")
              );
              // we want the status of the task btn and index that use fire onDrop event data-orderindex and data-typeofstatus
              console.log(droppedTaskBtnStatus, "droppedTaskBtnStatus");
              console.log(droppedTaskBtnPosition, "droppedTaskBtnPosition");
              console.log(JSON.parse(localStorage.getItem("dragSelected")));
              droppedTaskBtn.setAttribute("data-dragover", "false");
              return;
            }
            // console.log(event.target);

            console.log("drag drop");
          }}
        >
          <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
          <div className={TaskBtnStyles[`subtasks-icon-container`]}>
            <div className={TaskBtnStyles[`subtasks-container`]}>
              <span className={TaskBtnStyles[`subtasks-completed`]}>
                {completed}
              </span>
              <span>of</span>
              <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
              <span>subtasks</span>
            </div>
            {/* open view icon */}
            <a
              tabIndex={tab}
              id="view-icon-selector"
              role="button"
              className={TaskBtnStyles[`open-view-icon-btn`]}
              aria-label="open view modal"
            >
              <VscOpenPreview />
            </a>
          </div>
        </button>
      )}
    </React.Fragment>
  );
}

function notes() {
  <button
    tabIndex={tab}
    data-orderindex={position}
    data-typeofstatus={status}
    className={TaskBtnStyles[`task-btn`]}
    draggable="true"
    onDragStart={(event) => {
      console.log("this is drag");
      console.log(event.target);
      const selectedTaskBtn = event.target.closest("BUTTON");
      if (selectedTaskBtn) {
        // we want status of task btn and index (data-orderindex and data-typeofstatus) to access the obj in local storage
        const status = selectedTaskBtn.getAttribute("data-typeofstatus");
        const index = Number(selectedTaskBtn.getAttribute("data-orderindex"));
        const selectedTaskObj = {
          status,
          index,
        };
        localStorage.setItem("dragSelected", JSON.stringify(selectedTaskObj));
        console.log(JSON.parse(localStorage.getItem("dragSelected")));
        console.log(selectedTaskBtn);
        return;
      }
    }}
    onDragEnter={(event) => {
      console.log("this is enter");
      const enteredTaskBtn = event.target.closest("BUTTON");
      if (enteredTaskBtn) {
        enteredTaskBtn.setAttribute("data-dragover", "true");
        return;
      }
    }}
    onDragLeave={(event) => {
      console.log("this is leave");
      const enteredTaskBtn = event.target.closest("BUTTON");
      if (enteredTaskBtn) {
        enteredTaskBtn.setAttribute("data-dragover", "false");
        return;
      }
    }}
    onDragOver={(event) => {
      event.preventDefault();
      const enteredTaskBtn = event.target.closest("BUTTON");
      if (enteredTaskBtn) {
        enteredTaskBtn.setAttribute("data-dragover", "true");
        return;
      }
      console.log("this is drag over");
    }}
    onDrop={(event) => {
      event.preventDefault();
      const droppedTaskBtn = event.target.closest("BUTTON");
      if (droppedTaskBtn) {
        // we want the status of the task btn and index that use fire onDrop event data-orderindex and data-typeofstatus
        console.log(JSON.parse(localStorage.getItem("dragSelected")));
        droppedTaskBtn.setAttribute("data-dragover", "false");
        return;
      }
      // console.log(event.target);

      console.log("drag drop");
    }}
  >
    <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
    <div className={TaskBtnStyles[`subtasks-icon-container`]}>
      <div className={TaskBtnStyles[`subtasks-container`]}>
        <span className={TaskBtnStyles[`subtasks-completed`]}>{completed}</span>
        <span>of</span>
        <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
        <span>subtasks</span>
      </div>
      {/* open view icon */}
      <a
        tabIndex={tab}
        id="view-icon-selector"
        role="button"
        className={TaskBtnStyles[`open-view-icon-btn`]}
        aria-label="open view modal"
      >
        <VscOpenPreview />
      </a>
    </div>
  </button>;
  {
    selected ? (
      <button
        tabIndex={tab}
        id="drag-drop-selected"
        data-orderindex={position}
        data-typeofstatus={status}
        className={TaskBtnStyles[`task-btn`]}
        draggable="true"
        onDragStart={(event) => {
          // console.log("this is drag");
          // console.log(event.target);
          const selectedTaskBtn = event.target.closest("BUTTON");
          if (selectedTaskBtn) {
            // we want status of task btn and index (data-orderindex and data-typeofstatus) to access the obj in local storage
            const status = selectedTaskBtn.getAttribute("data-typeofstatus");
            const index = selectedTaskBtn.getAttribute("data-orderindex");
            localStorage.setItem(
              "dragSelected",
              JSON.stringify({ status, index })
            );
            console.log(selectedTaskBtn);
            return;
          }
        }}
        onDragEnter={(event) => {
          console.log("this is enter");
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "true");
            return;
          }
        }}
        onDragLeave={(event) => {
          console.log("this is leave");
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "false");
            return;
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "true");
            return;
          }
          console.log("this is drag over");
        }}
        onDrop={(event) => {
          event.preventDefault();
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            // we want the status of the task btn and index that use fire onDrop event data-orderindex and data-typeofstatus
            console.log(JSON.parse(localStorage.getItem("dataSelected")));
            enteredTaskBtn.setAttribute("data-dragover", "false");
            return;
          }
          // console.log(event.target);

          console.log("drag drop");
        }}
      >
        <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
        <div className={TaskBtnStyles[`subtasks-icon-container`]}>
          <div className={TaskBtnStyles[`subtasks-container`]}>
            <span className={TaskBtnStyles[`subtasks-completed`]}>
              {completed}
            </span>
            <span>of</span>
            <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
            <span>subtasks</span>
          </div>
          {/* open view icon */}
          <a
            id="view-icon-selector"
            role="button"
            tabIndex={tab}
            className={TaskBtnStyles[`open-view-icon-btn`]}
            aria-label="open view modal"
          >
            <VscOpenPreview />
          </a>
        </div>
      </button>
    ) : (
      <button
        tabIndex={tab}
        data-orderindex={position}
        data-typeofstatus={status}
        className={TaskBtnStyles[`task-btn`]}
        draggable="true"
        onDragStart={(event) => {
          console.log("this is drag");
          console.log(event.target);
          const selectedTaskBtn = event.target.closest("BUTTON");
          if (selectedTaskBtn) {
            // we want status of task btn and index (data-orderindex and data-typeofstatus) to access the obj in local storage
            const status = selectedTaskBtn.getAttribute("data-typeofstatus");
            const index = Number(
              selectedTaskBtn.getAttribute("data-orderindex")
            );
            const selectedTaskObj = {
              status,
              index,
            };
            localStorage.setItem(
              "dragSelected",
              JSON.stringify(selectedTaskObj)
            );
            console.log(JSON.parse(localStorage.getItem("dragSelected")));
            console.log(selectedTaskBtn);
            return;
          }
        }}
        onDragEnter={(event) => {
          console.log("this is enter");
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "true");
            return;
          }
        }}
        onDragLeave={(event) => {
          console.log("this is leave");
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "false");
            return;
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "true");
            return;
          }
          console.log("this is drag over");
        }}
        onDrop={(event) => {
          event.preventDefault();
          const droppedTaskBtn = event.target.closest("BUTTON");
          if (droppedTaskBtn) {
            // we want the status of the task btn and index that use fire onDrop event data-orderindex and data-typeofstatus
            console.log(JSON.parse(localStorage.getItem("dragSelected")));
            droppedTaskBtn.setAttribute("data-dragover", "false");
            return;
          }
          // console.log(event.target);

          console.log("drag drop");
        }}
      >
        <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
        <div className={TaskBtnStyles[`subtasks-icon-container`]}>
          <div className={TaskBtnStyles[`subtasks-container`]}>
            <span className={TaskBtnStyles[`subtasks-completed`]}>
              {completed}
            </span>
            <span>of</span>
            <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
            <span>subtasks</span>
          </div>
          {/* open view icon */}
          <a
            tabIndex={tab}
            id="view-icon-selector"
            role="button"
            className={TaskBtnStyles[`open-view-icon-btn`]}
            aria-label="open view modal"
          >
            <VscOpenPreview />
          </a>
        </div>
      </button>
    );
  }
}

function notesTwo() {
  {
    selected ? (
      <button
        tabIndex={tab}
        id="drag-drop-selected"
        data-orderindex={position}
        data-typeofstatus={status}
        className={TaskBtnStyles[`task-btn`]}
        draggable="true"
        onDragStart={(event) => {
          // console.log("this is drag");
          // console.log(event.target);
          const selectedTaskBtn = event.target.closest("BUTTON");
          if (selectedTaskBtn) {
            // we want status of task btn and index (data-orderindex and data-typeofstatus) to access the obj in local storage
            const status = selectedTaskBtn.getAttribute("data-typeofstatus");
            const index = selectedTaskBtn.getAttribute("data-orderindex");
            localStorage.setItem(
              "dragSelected",
              JSON.stringify({ status, index })
            );
            console.log(selectedTaskBtn);
            return;
          }
        }}
        onDragEnter={(event) => {
          console.log("this is enter");
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "true");
            return;
          }
        }}
        onDragLeave={(event) => {
          console.log("this is leave");
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "false");
            return;
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "true");
            return;
          }
          console.log("this is drag over");
        }}
        onDrop={(event) => {
          event.preventDefault();
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            // we want the status of the task btn and index that use fire onDrop event data-orderindex and data-typeofstatus
            console.log(JSON.parse(localStorage.getItem("dataSelected")));
            enteredTaskBtn.setAttribute("data-dragover", "false");
            return;
          }
          // console.log(event.target);

          console.log("drag drop");
        }}
      >
        <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
        <div className={TaskBtnStyles[`subtasks-icon-container`]}>
          <div className={TaskBtnStyles[`subtasks-container`]}>
            <span className={TaskBtnStyles[`subtasks-completed`]}>
              {completed}
            </span>
            <span>of</span>
            <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
            <span>subtasks</span>
          </div>
          {/* open view icon */}
          <a
            id="view-icon-selector"
            role="button"
            tabIndex={tab}
            className={TaskBtnStyles[`open-view-icon-btn`]}
            aria-label="open view modal"
          >
            <VscOpenPreview />
          </a>
        </div>
      </button>
    ) : (
      <button
        tabIndex={tab}
        data-orderindex={position}
        data-typeofstatus={status}
        className={TaskBtnStyles[`task-btn`]}
        draggable="true"
        onDragStart={(event) => {
          console.log("this is drag");
          console.log(event.target);
          const selectedTaskBtn = event.target.closest("BUTTON");
          if (selectedTaskBtn) {
            // we want status of task btn and index (data-orderindex and data-typeofstatus) to access the obj in local storage
            const status = selectedTaskBtn.getAttribute("data-typeofstatus");
            const index = Number(
              selectedTaskBtn.getAttribute("data-orderindex")
            );
            const selectedTaskObj = {
              status,
              index,
            };
            localStorage.setItem(
              "dragSelected",
              JSON.stringify(selectedTaskObj)
            );
            console.log(JSON.parse(localStorage.getItem("dragSelected")));
            console.log(selectedTaskBtn);
            return;
          }
        }}
        onDragEnter={(event) => {
          console.log("this is enter");
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "true");
            return;
          }
        }}
        onDragLeave={(event) => {
          console.log("this is leave");
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "false");
            return;
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
          const enteredTaskBtn = event.target.closest("BUTTON");
          if (enteredTaskBtn) {
            enteredTaskBtn.setAttribute("data-dragover", "true");
            return;
          }
          console.log("this is drag over");
        }}
        onDrop={(event) => {
          event.preventDefault();
          const droppedTaskBtn = event.target.closest("BUTTON");
          if (droppedTaskBtn) {
            // we want the status of the task btn and index that use fire onDrop event data-orderindex and data-typeofstatus
            console.log(JSON.parse(localStorage.getItem("dragSelected")));
            droppedTaskBtn.setAttribute("data-dragover", "false");
            return;
          }
          // console.log(event.target);

          console.log("drag drop");
        }}
      >
        <h3 className={TaskBtnStyles[`task-title`]}>{children}</h3>
        <div className={TaskBtnStyles[`subtasks-icon-container`]}>
          <div className={TaskBtnStyles[`subtasks-container`]}>
            <span className={TaskBtnStyles[`subtasks-completed`]}>
              {completed}
            </span>
            <span>of</span>
            <span className={TaskBtnStyles[`subtasks-total`]}>{total}</span>
            <span>subtasks</span>
          </div>
          {/* open view icon */}
          <a
            tabIndex={tab}
            id="view-icon-selector"
            role="button"
            className={TaskBtnStyles[`open-view-icon-btn`]}
            aria-label="open view modal"
          >
            <VscOpenPreview />
          </a>
        </div>
      </button>
    );
  }
}
