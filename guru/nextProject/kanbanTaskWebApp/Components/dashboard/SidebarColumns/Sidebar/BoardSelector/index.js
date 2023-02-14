import React from "react";
import BoardSelectorStyles from "./BoardSelector.module.css";

const testArr = [
  {
    name: "Platform Launch",
  },
  {
    name: "Marketing Plan",
  },
  {
    name: "Platform Launch",
  },
];

export default function BoardSelector({ children }) {
  // have attr data-boardindex
  // use boardindex to apply data-currentselectedboard "true"
  // when boardindex matches the index of item in array of property boards of currentuser obj
  /**
   * before calling statefunc, loop through boards array of currentuser
   * update property currentSelected to boolean false or true based on if
   * index of obj matches index of data-boardinex
   * re-render when the boardindex changes
   * **/
}
