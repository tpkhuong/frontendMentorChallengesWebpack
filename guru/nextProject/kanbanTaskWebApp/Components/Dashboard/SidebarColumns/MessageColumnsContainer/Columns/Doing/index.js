import React from "react";
import DoingColumnStyles from "./Doing.module.css";
import ColumnTitle from "../ColumnTitle";
import TaskBtn from "../TaskBtn";
import { BoardTaskRenderContext } from "../../../../Context/index";

// hsl 248 83% 70%

// const doingArray = [
//   {
//     title: "Design settings and search pages",
//     description: "",
//     status: "doing",
//     isSelected: false,
//     index: 0,
//     subtasks: [
//       {
//         title: "Settings - Account page",
//         isCompleted: true,
//       },
//       {
//         title: "Settings - Billing page",
//         isCompleted: true,
//       },
//       {
//         title: "Search page",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "Add account management endpoints",
//     description: "",
//     status: "doing",
//     isSelected: false,
//     index: 1,
//     subtasks: [
//       {
//         title: "Upgrade plan",
//         isCompleted: true,
//       },
//       {
//         title: "Cancel plan",
//         isCompleted: true,
//       },
//       {
//         title: "Update payment method",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "Design onboarding flow",
//     description: "",
//     status: "doing",
//     isSelected: false,
//     index: 2,
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
//     title: "Add search enpoints",
//     description: "",
//     status: "doing",
//     isSelected: false,
//     index: 3,
//     subtasks: [
//       {
//         title: "Add search endpoint",
//         isCompleted: true,
//       },
//       {
//         title: "Define search filters",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title: "Add authentication endpoints",
//     description: "",
//     status: "doing",
//     isSelected: false,
//     index: 4,
//     subtasks: [
//       {
//         title: "Define user model",
//         isCompleted: true,
//       },
//       {
//         title: "Add auth endpoints",
//         isCompleted: false,
//       },
//     ],
//   },
//   {
//     title:
//       "Research pricing points of various competitors and trial different business models",
//     description:
//       "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
//     status: "doing",
//     isSelected: false,
//     index: 5,
//     subtasks: [
//       {
//         title: "Research competitor pricing and business models",
//         isCompleted: true,
//       },
//       {
//         title: "Outline a business model that works for our solution",
//         isCompleted: false,
//       },
//       {
//         title:
//           "Talk to potential customers about our proposed solution and ask for fair price expectancy",
//         isCompleted: false,
//       },
//     ],
//   },
// ];

export default function DoingColumn({ children, doingColumnArray }) {
  const [doingArray, setDoingColumn] = React.useState(doingColumnArray);

  const renderContextDoingColumn = React.useContext(BoardTaskRenderContext);

  renderContextDoingColumn.setStateFuncs.doingColumn = setDoingColumn;

  return (
    <React.Fragment>
      {doingArray && doingArray.length >= 0 && (
        <div
          id="doing-column-selector"
          data-columncontainerstyleattr=""
          className={DoingColumnStyles[`doing-quantity-task-container`]}
        >
          <ColumnTitle
            quantity={`${doingArray.length}`}
            assistiveText="doing"
            status="doing"
          >
            Doing
          </ColumnTitle>
          {/* tasks */}
          <ul
            data-taskscontainerstyleattr
            className={DoingColumnStyles[`doing-tasks-container`]}
          >
            {doingArray.map(function buildDoingTask(obj, index) {
              return (
                <li key={Math.random() * index}>
                  <TaskBtn
                    selected={obj.isSelected}
                    tab={obj.tabIndex}
                    position={index}
                    status={obj.status}
                    completed={`${obj.subtasks.reduce(
                      (buildingUp, currentValue) => {
                        return currentValue.isCompleted
                          ? buildingUp + 1
                          : buildingUp;
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
