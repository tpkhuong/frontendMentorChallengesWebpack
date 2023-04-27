import React from "react";
import ViewTaskStyles from "./ViewTask.module.css";
import StatusMenu from "../StatusMenu/index";
import EditDeleteTaskBtnAndModal from "./EditDeleteTaskBtn/index";
import { BoardTaskRenderContext } from "../Context/index";
import {
  isTasksCompletedZero,
  isStatusOfTaskDoing,
  doesTasksCompletedMatchTotal,
  removeItem,
} from "./viewTaskHelpers";

const strArray = [
  "Research competitor pricing and business models",
  "Outline a business model that works for our solution",
  "Talk to potential customers about our proposed solution and ask for fair price expectancy",
];

export default function ViewTask({ children }) {
  // when user click on a task btn to render view task we will
  // get task data from currentBoard in local storage
  // then make a "currentTask" and save it to local storage
  const [initialTaskValuesObj, setViewTask] = React.useState({
    renderViewTask: false,
    title: "",
    description: "",
    status: "",
    isSelected: "",
    index: null,
    subtasks: null,
  });

  const renderContextViewTask = React.useContext(BoardTaskRenderContext);

  renderContextViewTask.stateFuncsForModals.viewTask = setViewTask;

  return (
    <React.Fragment>
      {initialTaskValuesObj.renderViewTask && (
        <div className={ViewTaskStyles[`view-task-modal-bg`]}>
          <div
            aria-modal="true"
            role="dialog"
            aria-labelledby="view-task-modal-title"
            className={ViewTaskStyles[`view-task-modal`]}
          >
            {/* title and edit/delete btn */}
            <div className={ViewTaskStyles[`title-edit-delete-btn-container`]}>
              <h2
                id="view-task-modal-title"
                className={ViewTaskStyles[`subtask-title`]}
              >
                {initialTaskValuesObj.title}
              </h2>
              {/* edit/delete btn */}
              <EditDeleteTaskBtnAndModal />
            </div>
            {/* description */}
            <p className={ViewTaskStyles[`description`]}>
              {initialTaskValuesObj.description}
            </p>
            {/* subtasks */}
            <span className={ViewTaskStyles[`subtask-label`]}>
              <span>Subtasks</span>
              <span className={ViewTaskStyles[`margin-inline-start`]}>(</span>
              <span id="subtask-completed">{`${initialTaskValuesObj.subtasks.reduce(
                (buildingUp, currentValue) => {
                  if (currentValue.isCompleted) {
                    buildingUp += 1;
                  }
                  return buildingUp;
                },
                0
              )}`}</span>
              <span className={ViewTaskStyles[`margin-inline-start`]}>of</span>
              <span className={ViewTaskStyles[`margin-inline-start`]}>
                {initialTaskValuesObj.subtasks.length}
              </span>
              <span>)</span>
            </span>
            <ul role="group">
              {/* ul role=group */}
              {initialTaskValuesObj.subtasks.map(function makeSubtask(
                obj,
                index
              ) {
                return (
                  <li key={Math.random() * index}>
                    <Subtask
                      listitemIndex={index}
                      isCompleted={obj.isCompleted}
                      content={obj.title}
                      renderContext={renderContextViewTask}
                    />
                  </li>
                );
              })}
            </ul>
            {/* subtasks bg: light theme: light grey */}
            {/* subtasks bg: dark theme: very dark grey */}
            {/* current status */}
            <StatusMenu
              isViewTask={true}
              statusValueFromEditModal={initialTaskValuesObj.status}
            >
              Current Status
            </StatusMenu>
            {/* having save changes adding another step for user */}
            <button
              onClick={(event) => {
                // only call column component setStateFunc when user change current status of task

                console.log(event.target);
              }}
              type="button"
              className={ViewTaskStyles[`save-btn`]}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function Subtask({
  children,
  content,
  isCompleted,
  listitemIndex,
  renderContext,
}) {
  const arrayOfWords = content.split(" ");

  return (
    <button
      role="checkbox"
      data-viewtasksubtaskindex={listitemIndex}
      aria-checked={`${isCompleted}`}
      className={ViewTaskStyles[`subtask-checkbox-container`]}
      onClick={(event) => {
        // todo-column-selector
        const btnClicked = event.target.closest("BUTTON");
        if (btnClicked) {
          const currentUser = JSON.parse(localStorage.getItem("currentUser"));
          const currentBoard = JSON.parse(localStorage.getItem("currentBoard"));
          const currentTask = JSON.parse(localStorage.getItem("currentTask"));

          const taskStatus = currentTask.status;
          const taskIndex = currentTask.index;
          const subtaskIndex = Number(
            btnClicked.getAttribute("data-viewtasksubtaskindex")
          );

          const subtaskDigitElement = document.getElementById(
            `${taskStatus}-column-selector`
          ).childNodes[1].childNodes[taskIndex].firstElementChild.childNodes[1]
            .firstElementChild;

          let subtaskStatus = btnClicked.getAttribute("aria-checked");

          // let completedSubtaskDigitTaskBtn = Number(
          //   subtaskDigitElement.textContent
          // );

          let subtaskCompletedNumForm = Number(
            document.getElementById("subtask-completed").textContent
          );
          const previousSubtasksCompleted = subtaskCompletedNumForm;
          // update subtask obj of currentTask for local storage
          // based on subtaskStatus
          // user subtaskIndex to access subtask obj of currentTask
          let subtaskObj = currentTask.subtasks[subtaskIndex];
          if (subtaskStatus == "false") {
            btnClicked.setAttribute("aria-checked", "true");
            // updating the subtaskObj of currentTask obj will update the correct isCompleted property of subtask user clicked
            // dont need to update currentTask
            subtaskObj.isCompleted = true;
            // add one to subtask display
            subtaskCompletedNumForm += 1;
            // completedSubtaskDigitTaskBtn += 1;
            /**
             * *************
             * **/
            /**
             * we are updating digit of completed subtasks here and
             * when we render TaskBtn component
             * **/
            /**
             * *************
             * **/
            // update digit display
            document.getElementById(
              "subtask-completed"
            ).textContent = `${subtaskCompletedNumForm}`;

            /**
             * removing algorithm below will only update the subtasks completed of column component
             * of current task and not both current task btn and another task btn component when there are two
             * task btn component in a column
             * **/
            // subtaskDigitElement.textContent = `${subtaskCompletedNumForm}`;
            // check if completed == total here
            // run doesTasksCompletedMatchTotal then isStatusOfTaskDoing
            // check length of subtasks
            if (currentTask.subtasks.length == 1) {
              // going from todo to done
              const modifiedArray = removeItem(
                currentBoard.columns.todo,
                currentTask.index
              );
              currentBoard.columns.todo = modifiedArray;
              // update currentTask status
              currentTask.status = "done";
              // update currentTask index because we are adding it to another column array
              currentTask.index = currentBoard.columns.done.length;
              // update status drop down menu
              renderContext.setStateFuncs.statusMenu((prevValues) => {
                return {
                  ...prevValues,
                  valueOfStatusBtn: "Done",
                };
              });
              currentBoard.columns.done.push(currentTask);

              renderContext.setStateFuncs.todoColumn(currentBoard.columns.todo);
              renderContext.setStateFuncs.doneColumn(currentBoard.columns.done);
            }
            if (currentTask.subtasks.length > 1) {
              if (previousSubtasksCompleted == 0) {
                /**
                 * 0 to 1 todo to doing
                 * **/
                const modArray = removeItem(
                  currentBoard.columns.todo,
                  currentTask.index
                );
                console.log(modArray, "modArray");
                // update index of each obj
                modArray.forEach((obj, index) => {
                  obj.index = index;
                });
                currentBoard.columns.todo = modArray;
                // update currentTask status
                currentTask.status = "doing";
                // update currentTask index because we are adding it to another column array
                currentTask.index = currentBoard.columns.doing.length;
                // update status drop down menu
                renderContext.setStateFuncs.statusMenu((prevValues) => {
                  return {
                    ...prevValues,
                    valueOfStatusBtn: "Doing",
                  };
                });
                currentBoard.columns.doing.push(currentTask);
                // render columns
                console.log(
                  currentBoard.columns.todo,
                  "currentBoard.columns.todo"
                );
                console.log(currentBoard, "currentBoard");
                console.log(currentTask, "currentTask");
                renderContext.setStateFuncs.todoColumn(
                  currentBoard.columns.todo
                );

                renderContext.setStateFuncs.doingColumn(
                  currentBoard.columns.doing
                );
              }
              // if (
              //   previousSubtasksCompleted !== 0 &&
              //   subtaskCompletedNumForm !== currentTask.subtasks.length
              // ) {
              //   /**
              //    * status does not change it is doing
              //    * **/
              //   // change the status of the
              // }
              if (
                previousSubtasksCompleted > 0 &&
                subtaskCompletedNumForm == currentTask.subtasks.length
              ) {
                /**
                 * doing to done
                 * **/
                const filteredArray = removeItem(
                  currentBoard.columns.doing,
                  currentTask.index
                );
                // update index of each obj
                filteredArray.forEach((obj, index) => {
                  obj.index = index;
                });
                currentBoard.columns.doing = filteredArray;
                // update currentTask status
                currentTask.status = "done";
                // update currentTask index because we are adding it to another column array
                currentTask.index = currentBoard.columns.done.length;
                // update status drop down menu
                renderContext.setStateFuncs.statusMenu((prevValues) => {
                  return {
                    ...prevValues,
                    valueOfStatusBtn: "Done",
                  };
                });
                currentBoard.columns.done.push(currentTask);
                // render columns
                console.log(currentBoard, "currentBoard");
                console.log(currentTask, "currentTask");
                renderContext.setStateFuncs.doingColumn(
                  currentBoard.columns.doing
                );

                renderContext.setStateFuncs.doneColumn(
                  currentBoard.columns.done
                );
              }
            }
            // doesTasksCompletedMatchTotal({
            //   previousSubtasksCompleted,
            //   newSubtasksCompleted: subtaskCompletedNumForm,
            //   totalCompleted: currentTask.subtasks.length,
            //   renderContext,
            //   bindObjToFunc,
            //   boardData: { currentUser, currentBoard, currentTask },
            // });

            // isStatusOfTaskDoing({
            //   previousSubtasksCompleted,
            //   newSubtasksCompleted: subtaskCompletedNumForm,
            //   totalCompleted: currentTask.subtasks.length,
            //   renderContext,
            //   bindObjToFunc,
            //   boardData: { currentUser, currentBoard, currentTask },
            // });
          }

          if (subtaskStatus == "true") {
            btnClicked.setAttribute("aria-checked", "false");
            // updating the subtaskObj of currentTask obj will update the correct isCompleted property of subtask user clicked
            // dont need to update currentTask

            subtaskObj.isCompleted = false;

            // subtract one from subtask display
            subtaskCompletedNumForm -= 1;
            // completedSubtaskDigitTaskBtn -= 1;
            // update digit display
            document.getElementById(
              "subtask-completed"
            ).textContent = `${subtaskCompletedNumForm}`;
            // subtaskDigitElement.textContent = `${subtaskCompletedNumForm}`;
            // check for zero of total here
            // run isTasksCompletedZero then isStatusOfTaskDoing
            // isTasksCompletedZero({
            //   previousSubtasksCompleted,
            //   newSubtasksCompleted: subtaskCompletedNumForm,
            //   renderContext,
            //   bindObjToFunc,
            //   boardData: { currentUser, currentBoard, currentTask },
            // });
            // update subtask array of currentTasks

            // check length of subtasks
            if (currentTask.subtasks.length == 1) {
              // going from done to todo
              const filteredArray = removeItem(
                currentBoard.columns.done,
                currentTask.index
              );
              // update index of each obj
              // filteredArray.forEach((obj, index) => {
              //   obj.index = index;
              // });
              currentBoard.columns.done = filteredArray;
              // update currentTask status
              currentTask.status = "todo";
              // update currentTask index because we are adding it to another column array
              currentTask.index = currentBoard.columns.todo.length;
              currentBoard.columns.todo.push(currentTask);
              // update status drop down menu
              renderContext.setStateFuncs.statusMenu((prevValues) => {
                return {
                  ...prevValues,
                  valueOfStatusBtn: "Todo",
                };
              });
              console.log(currentBoard, "currentBoard");
              console.log(currentTask, "currentTask");
              // render columns
              renderContext.setStateFuncs.doneColumn(currentBoard.columns.done);
              renderContext.setStateFuncs.todoColumn(currentBoard.columns.todo);
            }
            if (currentTask.subtasks.length > 1) {
              if (previousSubtasksCompleted == currentTask.subtasks.length) {
                /**
                 * done to doing
                 * **/
                const arrayWithoutCurrentTask = removeItem(
                  currentBoard.columns.done,
                  currentTask.index
                );
                // update index of each obj
                arrayWithoutCurrentTask.forEach((obj, index) => {
                  obj.index = index;
                });
                currentBoard.columns.done = arrayWithoutCurrentTask;
                // update currentTask status
                currentTask.status = "doing";
                // update currentTask index because we are adding it to another column array
                currentTask.index = currentBoard.columns.doing.length;
                currentBoard.columns.doing.push(currentTask);
                // update status drop down menu
                renderContext.setStateFuncs.statusMenu((prevValues) => {
                  return {
                    ...prevValues,
                    valueOfStatusBtn: "Doing",
                  };
                });
                console.log(currentBoard, "currentBoard");
                console.log(currentUser, "currentUser");
                // render columns
                renderContext.setStateFuncs.doneColumn(
                  currentBoard.columns.done
                );
                renderContext.setStateFuncs.doingColumn(
                  currentBoard.columns.doing
                );
              }
            }
            /**
             * doing status does not change
             * **/
            if (
              previousSubtasksCompleted < currentTask.subtasks.length &&
              subtaskCompletedNumForm == 0
            ) {
              /**
               * doing to todo
               * **/
              const arrayWithCurrentTaskRemoved = removeItem(
                currentBoard.columns.doing,
                currentTask.index
              );
              // update index of each obj
              arrayWithCurrentTaskRemoved.forEach((obj, index) => {
                obj.index = index;
              });
              currentBoard.columns.doing = arrayWithCurrentTaskRemoved;
              // update currentTask status
              currentTask.status = "todo";
              // update currentTask index because we are adding it to another column array
              currentTask.index = currentBoard.columns.todo.length;
              currentBoard.columns.todo.push(currentTask);
              // update status drop down menu
              renderContext.setStateFuncs.statusMenu((prevValues) => {
                return {
                  ...prevValues,
                  valueOfStatusBtn: "Todo",
                };
              });
              // render columns
              renderContext.setStateFuncs.doingColumn(
                currentBoard.columns.doing
              );
              renderContext.setStateFuncs.todoColumn(currentBoard.columns.todo);
            }
            // isStatusOfTaskDoing({
            //   previousSubtasksCompleted,
            //   newSubtasksCompleted: subtaskCompletedNumForm,
            //   totalCompleted: currentTask.subtasks.length,
            //   renderContext,
            //   bindObjToFunc,
            //   boardData: { currentUser, currentBoard, currentTask },
            // });
          }
          // update current task in currentBoard then ipdate currentUser with currentBoard
          // console.log(currentBoard.columns, "columns");
          console.log("before we save data to local storage");
          console.log("currentTask", currentTask);
          console.log("currentUser", currentUser);
          console.log("currentBoard", currentBoard);
          // update columns of current board in these funcs
          // isTasksCompletedZero, isStatusOfTaskDoing, doesTasksCompletedMatchTotal,
          // currentBoard.columns[taskStatus][taskIndex] = currentTask;

          /**
           * update data in local storage
           * **/

          currentBoard.columns[currentTask.status][currentTask.index].subtasks =
            currentTask.subtasks;

          currentUser.boards[currentBoard.index] = currentBoard;
          // update local storage
          localStorage.setItem("currentTask", JSON.stringify(currentTask));
          localStorage.setItem("currentBoard", JSON.stringify(currentBoard));
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
        }
      }}
    >
      {/* checkbox */}
      <div className={ViewTaskStyles[`subtask-checkedbox`]}>
        <svg width="10" height="8" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#FFF"
            strokeWidth="2"
            fill="none"
            d="m1.276 3.066 2.756 2.756 5-5"
          />
        </svg>
        {/* <img src="/assets/icon-check.svg" alt="white checked icon" /> */}
      </div>
      {/* title */}
      {/* <span className={ViewTaskStyles[`subtask-content`]}>{content}</span> */}
      <p className={ViewTaskStyles[`subtask-content`]}>
        {/* {content} */}
        {arrayOfWords.map(function buildSentence(word, index, list) {
          return (
            <React.Fragment key={Math.random() * index + 1}>
              <span className={ViewTaskStyles[`single-word`]}>{word}</span>
              {index + 1 == list.length ? null : (
                <span className={ViewTaskStyles[`sentence-spacer`]}></span>
              )}
            </React.Fragment>
          );
        })}
      </p>
    </button>
  );
}
