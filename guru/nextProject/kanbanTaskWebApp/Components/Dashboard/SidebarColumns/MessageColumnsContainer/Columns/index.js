import React from "react";
import ColumnsStyles from "./Columns.module.css";
import { BoardTaskRenderContext } from "../../../Context/index";
import TodoColumn from "./Todo";
import DoingColumn from "./Doing";
import DoneColumn from "./Done";

export default function Columns({ children, columnsObjData }) {
  const renderContextColumnsComponent = React.useContext(
    BoardTaskRenderContext
  );
  console.log(columnsObjData, "columnsObjData");
  const [initialColumnsValueObj, setStatusColumn] =
    React.useState(columnsObjData);

  renderContextColumnsComponent.setStateFuncs.columnsContainer =
    setStatusColumn;

  console.log(initialColumnsValueObj, "initialColumnsValueObj");
  return (
    <section
      id="columns-container-selector"
      className={ColumnsStyles[`column-container`]}
      aria-labelledby="status-column-title"
    >
      <h2 className="visually-hidden" id="status-column-title">
        Status Columns
      </h2>
      {!!initialColumnsValueObj.todo && (
        <TodoColumn todoColumnArray={initialColumnsValueObj.todo} />
      )}
      {!!initialColumnsValueObj.doing && (
        <DoingColumn doingColumnArray={initialColumnsValueObj.doing} />
      )}
      {!!initialColumnsValueObj.done && (
        <DoneColumn doneColumnArray={initialColumnsValueObj.done} />
      )}
      {/* <TodoColumn />
      <DoingColumn />
      <DoneColumn /> */}
    </section>
  );
}
