import React from "react";
import BoardSelectorStyles from "./BoardSelector.module.css";
import { useMediaQuery } from "../../../../../utils/sharedHelpers";

const testObj = {
  clickedIndex: null,
  testArr: [
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

export default function BoardSelector({ children }) {
  const isTabletSizeOrLarger = useMediaQuery("min", 768);

  const [initialValuesObj, setBoardSelector] = React.useState(testObj);

  // have attr data-boardindex
  // use boardindex to apply data-currentselectedboard "true"
  // when boardindex matches the index of item in array of property boards of currentuser obj
  /**
   * before calling statefunc, loop through boards array of currentuser
   * update property currentSelected to boolean false or true based on if
   * index of obj matches index of data-boardindex
   * re-render when the boardindex changes
   * **/
  return (
    <div className={BoardSelectorStyles[`boards-selector-container`]}>
      {/* number of boards */}
      <span className={BoardSelectorStyles[`boards-quantity`]}>
        <span>ALL BOARDS</span>
        <span>({initialValuesObj.testArr.length})</span>
      </span>
      {/* buttons container */}
      <div className={BoardSelectorStyles[`board-selector-btns-container`]}>
        {/* board selector btn */}
        <ul
          onClick={(event) => {
            const clickedBoardBtn = event.target.closest("BUTTON");
            const copiedArr = [...initialValuesObj.testArr];

            if (clickedBoardBtn) {
              const boardIndex = Number(
                clickedBoardBtn.getAttribute("data-boardindex")
              );

              copiedArr.forEach(function changeCurrentSelected(obj, index) {
                if (index == boardIndex) {
                  obj.selected = true;
                } else {
                  obj.selected = false;
                }
              });

              setBoardSelector((prev) => {
                return {
                  clickedIndex: boardIndex,
                  testArr: [].concat(copiedArr),
                };
              });
            }
          }}
          className={BoardSelectorStyles[`ul-container-of-btns`]}
        >
          {initialValuesObj.testArr.map(function createBoardBtn(item, index) {
            return (
              <li key={Math.random() * index}>
                <button
                  className={BoardSelectorStyles[`board-selector-btn`]}
                  data-boardindex={`${index}`}
                  data-currentselected={`${item.selected}`}
                  onKeyDown={
                    !isTabletSizeOrLarger && index == 0
                      ? (event) => {
                          console.log(event);
                          if (event.shiftKey && event.code == "Tab") {
                            document.getElementById("mobile-title-btn").focus();
                            event.preventDefault();
                            return;
                          }
                        }
                      : null
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                      fill="#828FA3"
                    />
                  </svg>
                  <span>{item.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {/* create new board */}
        {isTabletSizeOrLarger ? (
          <button className={BoardSelectorStyles[`create-new-board-btn`]}>
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                fill="#828FA3"
              />
            </svg>
            <span>
              <span aria-hidden="true">+</span>
              <span>Create New Board</span>
            </span>
          </button>
        ) : (
          <button
            id="mobile-tab-selector"
            className={BoardSelectorStyles[`create-new-board-btn`]}
            onKeyDown={(event) => {
              const mobileMenuContainer = document.getElementById(
                "sidebar-mobile-selector"
              );

              if (
                mobileMenuContainer.getAttribute("data-show-mobile-menu") ==
                "true"
              ) {
                // tab focus
                const currentUser = JSON.parse(
                  localStorage.getItem("currentUser")
                );
                const currentBoards = currentUser.boards;

                // shift tab
                if (event.shiftKey && event.code == "Tab") {
                  if (currentBoards.length == 0) {
                    document.getElementById("mobile-title-btn").focus();
                    event.preventDefault();
                    return;
                  }
                }
              }
            }}
          >
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                fill="#828FA3"
              />
            </svg>
            <span>
              <span aria-hidden="true">+</span>
              <span>Create New Board</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
