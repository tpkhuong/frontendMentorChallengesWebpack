import React from "react";
import DoneColumnStyles from "./Done.module.css";
import ColumnTitle from "../ColumnTitle";
import TaskBtn from "../TaskBtn";
import { BoardTaskRenderContext } from "../../../../Context/index";
// 155 68% 65%

const doneArray = [
  {
    title: "Conduct 5 wireframe tests",
    description:
      "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
    status: "done",
    isSelected: false,
    index: 0,
    subtasks: [
      {
        title: "Complete 5 wireframe prototype tests",
        isCompleted: true,
      },
    ],
  },
  {
    title: "Create wireframe prototype",
    description:
      "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
    status: "done",
    isSelected: false,
    index: 1,
    subtasks: [
      {
        title: "Create clickable wireframe prototype in Balsamiq",
        isCompleted: true,
      },
    ],
  },
  {
    title: "Review results of usability tests and iterate",
    description:
      "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
    status: "done",
    isSelected: false,
    index: 2,
    subtasks: [
      {
        title: "Meet to review notes from previous tests and plan changes",
        isCompleted: true,
      },
      {
        title: "Make changes to paper prototypes",
        isCompleted: true,
      },
      {
        title: "Conduct 5 usability tests",
        isCompleted: true,
      },
    ],
  },
  {
    title:
      "Create paper prototypes and conduct 10 usability tests with potential customers",
    description: "",
    status: "done",
    isSelected: false,
    index: 3,
    subtasks: [
      {
        title: "Create paper prototypes for version one",
        isCompleted: true,
      },
      {
        title: "Complete 10 usability tests",
        isCompleted: true,
      },
    ],
  },
  {
    title: "Market discovery",
    description:
      "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
    status: "done",
    isSelecte: false,
    index: 4,
    subtasks: [
      {
        title: "Interview 10 prospective customers",
        isCompleted: true,
      },
    ],
  },
  {
    title: "Competitor analysis",
    description: "",
    status: "done",
    isSelected: false,
    index: 5,
    subtasks: [
      {
        title: "Find direct and indirect competitors",
        isCompleted: true,
      },
      {
        title: "SWOT analysis for each competitor",
        isCompleted: true,
      },
    ],
  },
  {
    title: "Research the market",
    description:
      "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
    status: "done",
    isSelected: false,
    index: 6,
    subtasks: [
      {
        title: "Write up research analysis",
        isCompleted: true,
      },
      {
        title: "Calculate TAM",
        isCompleted: true,
      },
    ],
  },
];

export default function DoneColumn({ children, doneColumnArray }) {
  const [doneArray, setDoneColumn] = React.useState(doneColumnArray);

  const renderContextDoneColumn = React.useContext(BoardTaskRenderContext);

  renderContextDoneColumn.setStateFuncs.doneColumn = setDoneColumn;

  return (
    <React.Fragment>
      {doneArray && doneArray.length >= 0 && (
        <div
          id="done-column-selector"
          data-columncontainerstyleattr=""
          className={DoneColumnStyles[`done-quantity-task-container`]}
        >
          <ColumnTitle
            quantity={`${doneArray.length}`}
            assistiveText="done"
            status="done"
          >
            Done
          </ColumnTitle>
          {/* tasks */}
          <ul
            data-taskscontainerstyleattr
            className={DoneColumnStyles[`done-tasks-container`]}
          >
            {doneArray.map(function buildDoneTask(obj, index) {
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
