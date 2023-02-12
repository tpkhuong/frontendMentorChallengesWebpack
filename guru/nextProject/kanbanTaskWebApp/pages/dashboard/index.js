import React from "react";
import { BoardTaskRenderContext } from "../../Components/dashboard/Context";
import DashboardStyles from "../../styles/Dashboard.module.css";
import LogoTitleBar from "../../Components/dashboard/LogoTitleBar";

// set context here

export default function Dashboard({ children }) {
  const memoizedStateValueAndFunc = React.useMemo(() => {
    return {
      // boards
      boards: {
        name: "hello",
      },
      // tasks
      tasks: {
        name: "world",
      },
      theme: "light",
    };
  }, []);
  return (
    <section
      id="color-theme"
      data-apptheme="light"
      className={DashboardStyles[`dashboard`]}
    >
      <BoardTaskRenderContext.Provider value={memoizedStateValueAndFunc}>
        {/* logotitlebar */}
        <LogoTitleBar />
        {/* sidebarcolumns */}
      </BoardTaskRenderContext.Provider>
    </section>
  );
}

function notes() {
  const styleObj = {
    display: "flex",
    gap: "10px",
  };

  const obj = {
    showTodo: false,
    showDoing: false,
    showDone: false,
  };
  const [stateValueObj, stateFunc] = React.useState(obj);

  return (
    <React.Fragment>
      <div>
        <div>
          <h2>kanban</h2>
          <div></div>
        </div>
        <div></div>
      </div>
      <button
        onClick={(event) => {
          const objFromStorage = JSON.parse(localStorage.getItem("testing"));

          stateFunc((preValues) => {
            return {
              ...preValues,
              showTodo: true,
              showDoing: true,
              showDone: true,
            };
          });
        }}
      >
        click me
      </button>
      <div style={styleObj}>
        {stateValueObj.showTodo ? <span>this is todo</span> : null}
        {stateValueObj.showDoing ? <span>this is doing</span> : null}
        {stateValueObj.showDone ? <span>this is done</span> : null}
      </div>
    </React.Fragment>
  );
}
