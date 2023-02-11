import React from "react";
// set context here
const styleObj = {
  display: "flex",
  gap: "10px",
};

export default function Dashboard({ children }) {
  const obj = {
    showTodo: false,
    showDoing: false,
    showDone: false,
  };
  const [stateValueObj, stateFunc] = React.useState(obj);

  return (
    <section>
      {/* logotitlebar */}
      {/* sidebarcolumns */}
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
    </section>
  );
}
