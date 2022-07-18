import React from "react";

function outerFunc(str) {
  const obj = {
    counter: 0,
  };
  return function innerComponent({ children, ...props }) {
    console.log(children);
    return (
      <React.Fragment>
        <button
          onClick={(event) => {
            obj.counter += 1;
            console.log(obj.counter);
            console.log(str);
          }}
        >
          increment
        </button>
        <button
          onClick={(event) => {
            obj.counter -= 1;
            console.log(obj.counter);
            console.log(str);
          }}
        >
          decrement
        </button>
      </React.Fragment>
    );
  };
}

const ButtonComponent = outerFunc("hello react!");

export default ButtonComponent;
