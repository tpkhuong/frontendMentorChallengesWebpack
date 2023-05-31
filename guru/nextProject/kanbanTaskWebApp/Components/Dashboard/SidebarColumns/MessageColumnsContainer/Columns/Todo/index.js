import React from "react";
import TodoColumnStyles from "./Todo.module.css";
import ColumnTitle from "../ColumnTitle";
import TaskBtn from "../TaskBtn/index";
import { BoardTaskRenderContext } from "../../../../Context/index";
import { VscOpenPreview } from "react-icons/vsc";

// hsl 193 75% 59%

// const todoArray = [
//   {
//     title: "Build UI for onboarding flow",
//     description: "",
//     status: "todo",
//     isSelected: false,
//     index: 0,
//     subtasks: [
//       {
//         title: "Sign up page",
//         isCompleted: true,
//       },
//       {
//         title: "Sign in page",
//         isCompleted: false,
//       },
//       {
//         title: "Welcome page",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "Build UI for search",
//     description: "",
//     status: "todo",
//     isSelected: false,
//     index: 1,
//     subtasks: [
//       {
//         title: "Search page",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "Build settings UI",
//     description: "",
//     status: "todo",
//     isSelected: false,
//     index: 2,
//     subtasks: [
//       {
//         title: "Account page",
//         isCompleted: false,
//       },
//       {
//         title: "Billing page",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "QA and test all major user journeys",
//     description:
//       "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
//     status: "todo",
//     isSelected: false,
//     index: 3,
//     subtasks: [
//       {
//         title: "Internal testing",
//         isCompleted: false,
//       },
//       {
//         title: "External testing",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "Build UI for onboarding flow",
//     description: "",
//     status: "todo",
//     isSelected: false,
//     index: 0,
//     subtasks: [
//       {
//         title: "Sign up page",
//         isCompleted: true,
//       },
//       {
//         title: "Sign in page",
//         isCompleted: false,
//       },
//       {
//         title: "Welcome page",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "Build UI for search",
//     description: "",
//     status: "todo",
//     isSelected: false,
//     index: 1,
//     subtasks: [
//       {
//         title: "Search page",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "Build settings UI",
//     description: "",
//     status: "todo",
//     isSelected: false,
//     index: 2,
//     subtasks: [
//       {
//         title: "Account page",
//         isCompleted: false,
//       },
//       {
//         title: "Billing page",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "QA and test all major user journeys",
//     description:
//       "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
//     status: "todo",
//     isSelected: false,
//     index: 3,
//     subtasks: [
//       {
//         title: "Internal testing",
//         isCompleted: false,
//       },
//       {
//         title: "External testing",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "Build settings UI",
//     description: "",
//     status: "todo",
//     isSelected: false,
//     index: 2,
//     subtasks: [
//       {
//         title: "Account page",
//         isCompleted: false,
//       },
//       {
//         title: "Billing page",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "QA and test all major user journeys",
//     description:
//       "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
//     status: "todo",
//     isSelected: false,
//     index: 3,
//     subtasks: [
//       {
//         title: "Internal testing",
//         isCompleted: false,
//       },
//       {
//         title: "External testing",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "Build settings UI",
//     description: "",
//     status: "todo",
//     isSelected: false,
//     index: 2,
//     subtasks: [
//       {
//         title: "Account page",
//         isCompleted: false,
//       },
//       {
//         title: "Billing page",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "QA and test all major user journeys",
//     description:
//       "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
//     status: "todo",
//     isSelected: false,
//     index: 3,
//     subtasks: [
//       {
//         title: "Internal testing",
//         isCompleted: false,
//       },
//       {
//         title: "External testing",
//         isCompleted: false,
//       },
//     ],
//   },
// ];

export default function TodoColumn({ children, todoColumnArray }) {
  const [todoArray, setTodoColumn] = React.useState(todoColumnArray);

  const renderContextTodoColumn = React.useContext(BoardTaskRenderContext);

  renderContextTodoColumn.setStateFuncs.todoColumn = setTodoColumn;
  /**
   * another idea for mouse event have a variable keep track of how long the user is holding down left click
   * mousedown will start timer mouseup will check timer
   * mouseup does not fire when left mouse btn is held down and user drag item
   * **/
  // thinking of adding mouseup, keyup and touch to task btn container
  // for each column component
  // for mouseup algorithm we will have a variable that keep track of
  // drag event. when drag event variable is true we dont render view task
  // when drag event variable is false we render view task
  // in our drag event algorithm we will set drag event variable to true
  // when user drag task btn
  // keyup and touch will have similar algorithm
  // when keyup or touch fires on a task btn
  // first time we select that task for drag and drop
  // second time keyup or touch fires on the same task btn that was selected
  // render view task
  // also keep track of selected task btn position when task btn is placed
  // at a new position then we render view task modal
  console.log(todoArray), "todoArray";
  return (
    <React.Fragment>
      {todoArray && todoArray.length >= 0 && (
        <div
          id="todo-column-selector"
          data-columncontainerstyleattr=""
          className={TodoColumnStyles[`todo-quantity-task-container`]}
          // onMouseDown={(event) => {
          //   // get status and position of target that activate mousedown
          //   const btnClick = event.target.closest("BUTTON");
          //   if (btnClick) {
          //     console.log(event.target);
          //   }
          //   // const time = new Date().getMilliseconds();
          //   // localStorage.setItem(
          //   //   "timeUserPressedLeftClick",
          //   //   JSON.stringify(time)
          //   // );
          // }}
          // onMouseUp={(event) => {
          //   // get status and position of target that activate mouseup
          //   // when both equal each other render view task modal
          //   // because ondrag will only fire when user drag item
          //   console.log(event.target);
          //   const btnClick = event.target.closest("BUTTON");
          //   // if (btnClick) {
          //   // }
          //   // console.log(
          //   //   JSON.parse(localStorage.getItem("timeUserPressedLeftClick"))
          //   // );
          // }}
        >
          <ColumnTitle
            quantity={`${todoArray.length}`}
            assistiveText="Todo"
            status="todo"
          >
            Todo
          </ColumnTitle>
          {/* tasks */}
          <ul
            data-taskscontainerstyleattr
            className={TodoColumnStyles[`todo-tasks-container`]}
          >
            {todoArray.map(function buildTodoTask(obj, index) {
              console.log(obj);
              return (
                <li key={Math.random() * index}>
                  <TaskBtn
                    selected={obj.isSelected}
                    tab={obj.tabIndex}
                    position={index}
                    status={obj.status}
                    completed={`${obj.subtasks.reduce(
                      (buildingUp, currentValue) => {
                        console.log("buildingUp", buildingUp);
                        console.log("currentValue", currentValue);
                        console.log("this is todo column");
                        buildingUp = currentValue.isCompleted
                          ? buildingUp + 1
                          : buildingUp;
                        return buildingUp;
                      },
                      0
                    )}`}
                    total={`${obj.subtasks.length}`}
                  >
                    {obj.title}
                  </TaskBtn>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}

function originalAlgorithm() {
  {
    todoArray && todoArray.length >= 0 && (
      <div
        id="todo-column-selector"
        data-columncontainerstyleattr=""
        className={TodoColumnStyles[`todo-quantity-task-container`]}
        // onMouseDown={(event) => {
        //   // get status and position of target that activate mousedown
        //   const btnClick = event.target.closest("BUTTON");
        //   if (btnClick) {
        //     console.log(event.target);
        //   }
        //   // const time = new Date().getMilliseconds();
        //   // localStorage.setItem(
        //   //   "timeUserPressedLeftClick",
        //   //   JSON.stringify(time)
        //   // );
        // }}
        // onMouseUp={(event) => {
        //   // get status and position of target that activate mouseup
        //   // when both equal each other render view task modal
        //   // because ondrag will only fire when user drag item
        //   console.log(event.target);
        //   const btnClick = event.target.closest("BUTTON");
        //   // if (btnClick) {
        //   // }
        //   // console.log(
        //   //   JSON.parse(localStorage.getItem("timeUserPressedLeftClick"))
        //   // );
        // }}
      >
        <ColumnTitle
          quantity={`${todoArray.length}`}
          assistiveText="Todo"
          status="todo"
        >
          Todo
        </ColumnTitle>
        {/* tasks */}
        <ul
          data-taskscontainerstyleattr
          className={TodoColumnStyles[`todo-tasks-container`]}
        >
          {todoArray.map(function buildTodoTask(obj, index) {
            console.log(obj);
            return (
              <li key={Math.random() * index}>
                <TaskBtn
                  selected={obj.isSelected}
                  tab={obj.tabIndex}
                  position={index}
                  status={obj.status}
                  completed={`${obj.subtasks.reduce(
                    (buildingUp, currentValue) => {
                      console.log("buildingUp", buildingUp);
                      console.log("currentValue", currentValue);
                      console.log("this is todo column");
                      buildingUp = currentValue.isCompleted
                        ? buildingUp + 1
                        : buildingUp;
                      return buildingUp;
                    },
                    0
                  )}`}
                  total={`${obj.subtasks.length}`}
                >
                  {obj.title}
                </TaskBtn>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function anotherFunc() {
  {
    obj.isSelected ? (
      <button
        tabIndex={obj.tabIndex}
        id="drag-drop-selected"
        data-orderindex={index}
        data-typeofstatus={obj.status}
        className={TodoColumnStyles[`task-btn`]}
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
        <h3 className={TodoColumnStyles[`task-title`]}>{obj.title}</h3>
        <div className={TodoColumnStyles[`subtasks-icon-container`]}>
          <div className={TodoColumnStyles[`subtasks-container`]}>
            <span className={TodoColumnStyles[`subtasks-completed`]}>
              {`${obj.subtasks.reduce((buildingUp, currentValue) => {
                console.log("buildingUp", buildingUp);
                console.log("currentValue", currentValue);
                console.log("this is todo column");
                buildingUp = currentValue.isCompleted
                  ? buildingUp + 1
                  : buildingUp;
                return buildingUp;
              }, 0)}`}
            </span>
            <span>of</span>
            <span className={TodoColumnStyles[`subtasks-total`]}>
              {`${obj.subtasks.length}`}
            </span>
            <span>subtasks</span>
          </div>
          {/* open view icon */}
          <a
            id="view-icon-selector"
            role="button"
            tabIndex={obj.tabIndex}
            className={TodoColumnStyles[`open-view-icon-btn`]}
            aria-label="open view modal"
          >
            <VscOpenPreview />
          </a>
        </div>
      </button>
    ) : (
      <button
        tabIndex={obj.tabIndex}
        data-orderindex={index}
        data-typeofstatus={obj.status}
        className={TodoColumnStyles[`task-btn`]}
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
        <h3 className={TodoColumnStyles[`task-title`]}>{obj.title}</h3>
        <div className={TodoColumnStyles[`subtasks-icon-container`]}>
          <div className={TodoColumnStyles[`subtasks-container`]}>
            <span className={TodoColumnStyles[`subtasks-completed`]}>
              {`${obj.subtasks.reduce((buildingUp, currentValue) => {
                console.log("buildingUp", buildingUp);
                console.log("currentValue", currentValue);
                console.log("this is todo column");
                buildingUp = currentValue.isCompleted
                  ? buildingUp + 1
                  : buildingUp;
                return buildingUp;
              }, 0)}`}
            </span>
            <span>of</span>
            <span className={TodoColumnStyles[`subtasks-total`]}>
              {`${obj.subtasks.length}`}
            </span>
            <span>subtasks</span>
          </div>
          {/* open view icon */}
          <a
            tabIndex={obj.tabIndex}
            id="view-icon-selector"
            role="button"
            className={TodoColumnStyles[`open-view-icon-btn`]}
            aria-label="open view modal"
          >
            <VscOpenPreview />
          </a>
        </div>
      </button>
    );
  }
}
