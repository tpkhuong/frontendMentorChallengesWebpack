import React from "react";
import BoardModalStyles from "./BoardModal.module.css";

function BoardComponent() {
  return function innerComponent({ children }) {};
}

function BoardColumnComponent() {
  // pass in the column obj of current board into this (board column component)
  // loop through and check the value of each property
  // make an obj with properties of todo, doing and done
  // the value of these properties in the copied obj will be boolean true or false
  // based on whether the value of the original obj passed is an array or null
  // then for edit board modal check values in original column obj of current board
  // warn user if they are about to delete a column with tasks in it
  // use value of copied obj to render the column btns
  return function innerComponent({ children }) {};
}

function makeObj(obj) {
  const copiedObj = Object.entries(obj).reduce(function objForBoardColumn(
    buildingUp,
    currentValue
  ) {
    const [key, value] = currentValue;
    if (Array.isArray(value)) {
      buildingUp[key] = true;
      return buildingUp;
    }

    if (!Array.isArray(value)) {
      buildingUp[key] = false;
      return buildingUp;
    }
  },
  {});

  return copiedObj;
}
