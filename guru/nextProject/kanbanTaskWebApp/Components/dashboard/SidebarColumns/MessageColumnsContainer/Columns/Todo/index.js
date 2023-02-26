import React from "react";
import TodoColumnStyles from "./Todo.module.css";

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
];

export default function TodoColumn({ children }) {
  return (
    <div className={TodoColumnStyles[`todo-quantity-task-container`]}>
      <div>
        {/* circle */}
        <span className={TodoColumnStyles[`circle`]}></span>
        {/* title */}
        <h3 aria-label="to do">TODO</h3>
        {/* quantity */}
        <span>({`${todoArray.length}`})</span>
      </div>
      {/* tasks */}
      <ul className={TodoColumnStyles[`todo-tasks-container`]}>
        {todoArray.map(function buildTodoTask(obj, index) {
          return (
            <li key={Math.random() * index}>
              <button>
                <h3 className={TodoColumnStyles[`task-title`]}></h3>
                <div>
                  <span
                    className={TodoColumnStyles[`subtasks-completed`]}
                  ></span>
                  <span>of</span>
                  <span className={TodoColumnStyles[`total`]}></span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// make column title and single task component
