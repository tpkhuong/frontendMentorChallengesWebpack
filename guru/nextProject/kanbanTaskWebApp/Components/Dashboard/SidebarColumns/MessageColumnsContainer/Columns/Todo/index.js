import React from "react";
import TodoColumnStyles from "./Todo.module.css";
import ColumnTitle from "../ColumnTitle";
import TaskBtn from "../TaskBtn/index";

// hsl 193 75% 59%

const todoArray = [
  {
    title: "Build UI for onboarding flow",
    description: "",
    status: "todo",
    isSelected: false,
    index: 0,
    subtasks: [
      {
        title: "Sign up page",
        isCompleted: true,
      },
      {
        title: "Sign in page",
        isCompleted: false,
      },
      {
        title: "Welcome page",
        isCompleted: false,
      },
    ],
  },
  {
    title: "Build UI for search",
    description: "",
    status: "todo",
    isSelected: false,
    index: 1,
    subtasks: [
      {
        title: "Search page",
        isCompleted: false,
      },
    ],
  },
  {
    title: "Build settings UI",
    description: "",
    status: "todo",
    isSelected: false,
    index: 2,
    subtasks: [
      {
        title: "Account page",
        isCompleted: false,
      },
      {
        title: "Billing page",
        isCompleted: false,
      },
    ],
  },
  {
    title: "QA and test all major user journeys",
    description:
      "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
    status: "todo",
    isSelected: false,
    index: 3,
    subtasks: [
      {
        title: "Internal testing",
        isCompleted: false,
      },
      {
        title: "External testing",
        isCompleted: false,
      },
    ],
  },
  {
    title: "Build UI for onboarding flow",
    description: "",
    status: "todo",
    isSelected: false,
    index: 0,
    subtasks: [
      {
        title: "Sign up page",
        isCompleted: true,
      },
      {
        title: "Sign in page",
        isCompleted: false,
      },
      {
        title: "Welcome page",
        isCompleted: false,
      },
    ],
  },
  {
    title: "Build UI for search",
    description: "",
    status: "todo",
    isSelected: false,
    index: 1,
    subtasks: [
      {
        title: "Search page",
        isCompleted: false,
      },
    ],
  },
  {
    title: "Build settings UI",
    description: "",
    status: "todo",
    isSelected: false,
    index: 2,
    subtasks: [
      {
        title: "Account page",
        isCompleted: false,
      },
      {
        title: "Billing page",
        isCompleted: false,
      },
    ],
  },
  {
    title: "QA and test all major user journeys",
    description:
      "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
    status: "todo",
    isSelected: false,
    index: 3,
    subtasks: [
      {
        title: "Internal testing",
        isCompleted: false,
      },
      {
        title: "External testing",
        isCompleted: false,
      },
    ],
  },
  {
    title: "Build settings UI",
    description: "",
    status: "todo",
    isSelected: false,
    index: 2,
    subtasks: [
      {
        title: "Account page",
        isCompleted: false,
      },
      {
        title: "Billing page",
        isCompleted: false,
      },
    ],
  },
  {
    title: "QA and test all major user journeys",
    description:
      "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
    status: "todo",
    isSelected: false,
    index: 3,
    subtasks: [
      {
        title: "Internal testing",
        isCompleted: false,
      },
      {
        title: "External testing",
        isCompleted: false,
      },
    ],
  },
  {
    title: "Build settings UI",
    description: "",
    status: "todo",
    isSelected: false,
    index: 2,
    subtasks: [
      {
        title: "Account page",
        isCompleted: false,
      },
      {
        title: "Billing page",
        isCompleted: false,
      },
    ],
  },
  {
    title: "QA and test all major user journeys",
    description:
      "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
    status: "todo",
    isSelected: false,
    index: 3,
    subtasks: [
      {
        title: "Internal testing",
        isCompleted: false,
      },
      {
        title: "External testing",
        isCompleted: false,
      },
    ],
  },
];

export default function TodoColumn({ children, todoColumnArray }) {
  return (
    <React.Fragment>
      {todoColumnArray.length > 0 && (
        <div
          data-columncontainerstyleattr=""
          className={TodoColumnStyles[`todo-quantity-task-container`]}
        >
          <ColumnTitle
            quantity={`${todoColumnArray.length}`}
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
            {todoColumnArray.map(function buildTodoTask(obj, index) {
              return (
                <li key={Math.random() * index}>
                  <TaskBtn
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
