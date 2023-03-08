import React from "react";
import ColumnsStyles from "./Columns.module.css";
import TodoColumn from "./Todo";
import DoingColumn from "./Doing";
import DoneColumn from "./Done";

export default function Columns({ children, columnsObjData }) {
  return (
    <section
      className={ColumnsStyles[`column-container`]}
      aria-labelledby="status-column-title"
    >
      <h2 className="visually-hidden" id="status-column-title">
        Status Columns
      </h2>
      <TodoColumn />
      <DoingColumn />
      <DoneColumn />
    </section>
  );
}
