import React from "react";
import { BoardTaskRenderContext } from "../../Components/dashboard/Context";
import DashboardStyles from "../../styles/Dashboard.module.css";
import LogoTitleBar from "../../Components/dashboard/LogoTitleBar";
import SidebarColumns from "../../Components/dashboard/SidebarColumns";

// set context here

export default function Dashboard({ children }) {
  const memoizedStateValueAndFunc = React.useMemo(() => {
    return {
      // setStateFuncs
      setStateFuncs: {},
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

  React.useEffect(() => {
    saveDateToLocalStorage();
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
        <SidebarColumns />
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

function saveDateToLocalStorage() {
  const data = {
    boards: [
      {
        title: "Platform Launch",
        user: "coolperson@gmail.com",
        columns: {
          todo: [],
          doing: [],
          done: [],
        },
        index: 0,
        selected: true,
      },
      {
        title: "Marketing Plan",
        user: "coolperson@gmail.com",
        columns: {
          todo: [],
          doing: [],
          done: [],
        },
        index: 1,
        selected: false,
      },
      {
        title: "Roadmap",
        user: "coolperson@gmail.com",
        columns: {
          todo: [],
          doing: [],
          done: [],
        },
        index: 2,
        selected: false,
      },
    ],
  };

  !localStorage.getItem("currentUser")
    ? localStorage.setItem("currentUser", JSON.stringify(data))
    : null;
}
