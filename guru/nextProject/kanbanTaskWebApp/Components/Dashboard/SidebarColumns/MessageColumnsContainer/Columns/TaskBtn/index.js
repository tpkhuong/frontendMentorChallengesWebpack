import React from "react";
import TaskBtnStyles from "./TaskBtn.module.css";
import { VscOpenPreview } from "react-icons/vsc";
import { BoardTaskRenderContext } from "../../../../Context";

export default function TaskBtn({
  children,
  completed,
  total,
  status,
  position,
  selected,
  tab,
}) {
  const renderContextTaskBtn = React.useContext(BoardTaskRenderContext);
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
              const grabbedElementValues = JSON.parse(
                localStorage.getItem("dragSelected")
              );

              const grabbedTaskBtn = document.getElementById(
                `${grabbedElementValues.status}-column-selector`
              ).childNodes[1].childNodes[grabbedElementValues.index]
                .firstElementChild;

              if (enteredTaskBtn === grabbedTaskBtn) {
                return;
              }

              enteredTaskBtn.setAttribute("data-dragover", "true");
              return;
            }
          }}
          onDragLeave={(event) => {
            console.log("this is leave");
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              const grabbedElementValues = JSON.parse(
                localStorage.getItem("dragSelected")
              );

              const grabbedTaskBtn = document.getElementById(
                `${grabbedElementValues.status}-column-selector`
              ).childNodes[1].childNodes[grabbedElementValues.index]
                .firstElementChild;

              if (enteredTaskBtn === grabbedTaskBtn) {
                return;
              }

              enteredTaskBtn.setAttribute("data-dragover", "false");
              return;
            }
          }}
          onDragOver={(event) => {
            event.preventDefault();
            const enteredTaskBtn = event.target.closest("BUTTON");
            if (enteredTaskBtn) {
              const grabbedElementValues = JSON.parse(
                localStorage.getItem("dragSelected")
              );

              const grabbedTaskBtn = document.getElementById(
                `${grabbedElementValues.status}-column-selector`
              ).childNodes[1].childNodes[grabbedElementValues.index]
                .firstElementChild;

              if (enteredTaskBtn === grabbedTaskBtn) {
                return;
              }
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
            onDropEvent({ event, renderContextTaskBtn });
            const droppedTaskBtn = event.target.closest("BUTTON");
            // if (droppedTaskBtn) {
            //   const droppedTaskBtnStatus =
            //     droppedTaskBtn.getAttribute("data-typeofstatus");
            //   const droppedTaskBtnPosition = Number(
            //     droppedTaskBtn.getAttribute("data-orderindex")
            //   );
            //   // we want the status of the task btn and index that use fire onDrop event data-orderindex and data-typeofstatus
            //   console.log(droppedTaskBtnStatus, "droppedTaskBtnStatus");
            //   console.log(droppedTaskBtnPosition, "droppedTaskBtnPosition");
            //   console.log(JSON.parse(localStorage.getItem("dragSelected")));
            //   droppedTaskBtn.setAttribute("data-dragover", "false");
            //   return;
            // }
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

function topToBottomArray({
  array,
  droppedTaskBtnPosition,
  grabbedTaskBtnPosition,
  isStatusDifferent,
}) {
  // return obj top and bottom array without grabbed element obj
  const top = array.slice(0, droppedTaskBtnPosition + 1);
  const bottom = array.slice(droppedTaskBtnPosition + 1);
  // different status
  if (isStatusDifferent) {
    return {
      top,
      bottom,
    };
  }
  // same status
  const removeGrabbedObjFromTopArray = top.filter(function removeObj(
    obj,
    index
  ) {
    return obj.index !== grabbedTaskBtnPosition;
  });
  return {
    top: removeGrabbedObjFromTopArray,
    bottom,
  };
}

function bottomToTopArray({
  array,
  droppedTaskBtnPosition,
  grabbedTaskBtnPosition,
}) {
  // return obj top and bottom array without grabbed element obj
  const top = array.slice(0, droppedTaskBtnPosition);
  const bottom = array.slice(droppedTaskBtnPosition);
  const removeGrabbedObjFromBottomArray = bottom.filter(function removeObj(
    obj,
    index
  ) {
    return obj.index !== grabbedTaskBtnPosition;
  });

  return {
    top,
    bottom: removeGrabbedObjFromBottomArray,
  };
}

function onDropEvent({ event, renderContextTaskBtn }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const currentBoard = JSON.parse(localStorage.getItem("currentBoard"));

  const droppedTaskBtn = event.target.closest("BUTTON");
  if (droppedTaskBtn) {
    const grabbedElementValues = JSON.parse(
      localStorage.getItem("dragSelected")
    );

    const grabbedElementObj =
      currentBoard.columns[grabbedElementValues.status][
        grabbedElementValues.index
      ];

    const grabbedTaskBtn = document.getElementById(
      `${grabbedElementValues.status}-column-selector`
    ).childNodes[1].childNodes[grabbedElementValues.index].firstElementChild;

    const droppedTaskBtnStatus =
      droppedTaskBtn.getAttribute("data-typeofstatus");

    const droppedTaskBtnPosition = Number(
      droppedTaskBtn.getAttribute("data-orderindex")
    );

    if (grabbedTaskBtn == droppedTaskBtn) {
      return;
    }

    // check if status of grabbed element and dropped element equal each other
    // just re-render one column
    if (grabbedElementValues.status === droppedTaskBtnStatus) {
      const statusArray = currentBoard.columns[grabbedElementValues.status];
      console.log(grabbedElementObj);
      console.log(statusArray);
      if (grabbedElementValues.index < droppedTaskBtnPosition) {
        // position/index of drag start element less than position/index of drop element
        // drag start element will go below drop element
        // use topToBottomArray func
        const objWithTopAndBottomArrays = topToBottomArray({
          array: statusArray,
          droppedTaskBtnPosition,
          grabbedTaskBtnPosition: grabbedElementValues.index,
        });
        // concat top array, grabbedTaskBtnObj and bottom array

        const newOrderedArray = [
          ...objWithTopAndBottomArrays.top,
          grabbedElementObj,
          ...objWithTopAndBottomArrays.bottom,
        ];
        // update index of objs in array after we concat the array with the grabbed element obj
        newOrderedArray.forEach(function updateObjIndex(obj, index) {
          obj.index = index;
        });
        // update array in currentBoard
        currentBoard.columns[grabbedElementValues.status] = newOrderedArray;
        currentUser.boards[currentBoard.index] = currentBoard;

        localStorage.setItem("currentBoard", JSON.stringify(currentBoard));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        // render column with new objs array
        renderContextTaskBtn.setStateFuncs[
          `${grabbedElementValues.status}Column`
        ](newOrderedArray);

        setTimeout(() => {
          // focus element after render of column
          const focusElementValues = newOrderedArray[droppedTaskBtnPosition];
          const elementToFocus = document.getElementById(
            `${focusElementValues.status}-column-selector`
          ).childNodes[1].childNodes[focusElementValues.index]
            .firstElementChild;

          elementToFocus.focus();
          console.log(elementToFocus);
        }, 80);
      }
      if (grabbedElementValues.index > droppedTaskBtnPosition) {
        // position/index of drag start element greater than position/index of drop element
        // drag start element will go above drop element
        // use bottomToTopArray func
        const objOfArrays = bottomToTopArray({
          array: statusArray,
          droppedTaskBtnPosition,
          grabbedTaskBtnPosition: grabbedElementValues.index,
        });

        const reorderedArray = [
          ...objOfArrays.top,
          grabbedElementObj,
          ...objOfArrays.bottom,
        ];
        // update index of objs in array after we concat the array with the grabbed element obj
        reorderedArray.forEach(function updateIndex(obj, index) {
          obj.index = index;
        });
        // update array in currentBoard
        currentBoard.columns[grabbedElementValues.status] = reorderedArray;
        currentUser.boards[currentBoard.index] = currentBoard;

        localStorage.setItem("currentBoard", JSON.stringify(currentBoard));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        // render column with new objs array
        renderContextTaskBtn.setStateFuncs[
          `${grabbedElementValues.status}Column`
        ](reorderedArray);
        setTimeout(() => {
          // focus element after render of column
          const elementObjValues = reorderedArray[droppedTaskBtnPosition];
          const focusElement = document.getElementById(
            `${elementObjValues.status}-column-selector`
          ).childNodes[1].childNodes[elementObjValues.index].firstElementChild;

          focusElement.focus();
          console.log(focusElement);
        }, 80);
      }
    }

    if (grabbedElementValues.status !== droppedTaskBtnStatus) {
      // remove grabbed element from column
      const copiedGrabbedElementArray =
        currentBoard.columns[grabbedElementValues.status];

      const arrayWithoutGrabbedElementObj = copiedGrabbedElementArray.filter(
        function removeObj(obj, index) {
          return obj.index !== grabbedElementValues.index;
        }
      );
      // update index of obj in arrayWithoutGrabbedElementObj
      arrayWithoutGrabbedElementObj.forEach(function updateIndex(obj, index) {
        obj.index = index;
      });
      // grabbed element will always go below dropped element
      const grabbedTaskBtnObj =
        copiedGrabbedElementArray[grabbedElementValues.index];
      // update status of grabbed task btn to match dropped task btn
      grabbedTaskBtnObj.status = droppedTaskBtnStatus;
      // copy dropped status array
      const copiedDroppedElementArray =
        currentBoard.columns[droppedTaskBtnStatus];
      // call topToBottomArray func
      const objArrays = topToBottomArray({
        isStatusDifferent: true,
        array: copiedDroppedElementArray,
        droppedTaskBtnPosition,
      });
      // concat arrays and grabbed element obj
      const concatArraysWithGrabbedElementObj = [
        ...objArrays.top,
        grabbedTaskBtnObj,
        ...objArrays.bottom,
      ];
      // update obj index
      concatArraysWithGrabbedElementObj.forEach(function updateIndex(
        obj,
        index
      ) {
        obj.index = index;
      });
      // update data in local storage
      currentBoard.columns[`${grabbedElementValues.status}`] =
        arrayWithoutGrabbedElementObj;

      currentBoard.columns[`${droppedTaskBtnStatus}`] =
        concatArraysWithGrabbedElementObj;

      currentUser.boards[currentBoard.index] = currentBoard;

      localStorage.setItem("currentBoard", JSON.stringify(currentBoard));
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      // re-render two columns
      renderContextTaskBtn.setStateFuncs[
        `${grabbedElementValues.status}Column`
      ](arrayWithoutGrabbedElementObj);
      renderContextTaskBtn.setStateFuncs[`${droppedTaskBtnStatus}Column`](
        concatArraysWithGrabbedElementObj
      );
      // focus grabbed element in new column
      setTimeout(() => {
        // focus element
        const focusElement = document.getElementById(
          `${droppedTaskBtnStatus}-column-selector`
        ).childNodes[1].childNodes[droppedTaskBtnPosition + 1]
          .firstElementChild;

        focusElement.focus();
      }, 80);
    }

    // we want the status of the task btn and index that use fire onDrop event data-orderindex and data-typeofstatus
    console.log(droppedTaskBtnStatus, "droppedTaskBtnStatus");
    console.log(droppedTaskBtnPosition, "droppedTaskBtnPosition");
    droppedTaskBtn.setAttribute("data-dragover", "false");
    return;
  }
  // console.log(event.target);

  console.log("drag drop");
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
