import React from "react";
import WarningMsgStyles from "./WarningMessage.module.css";
import { tabThroughWarningMsgModal } from "../../../utils/sharedHelpers";
import { BoardTaskRenderContext } from "../Context/index";

export default function WarningMessage({ children }) {
  //   const strings = ["todo", "doing", "done"];
  const [initialWarningMsgValuesObj, setWarningMessage] = React.useState({
    renderWarningMessage: false,
    stringsArray: [],
  });

  const renderContextWarningMsg = React.useContext(BoardTaskRenderContext);

  renderContextWarningMsg.stateFuncsForModals.warningMsg = setWarningMessage;
  return (
    <React.Fragment>
      {initialWarningMsgValuesObj.renderWarningMessage && (
        <div
          tabIndex="-1"
          id="warning-message-modal"
          aria-modal="true"
          data-keepchanges="false"
          role="dialog"
          className={WarningMsgStyles[`warning-message-container`]}
          onKeyDown={tabThroughWarningMsgModal}
        >
          <h2 className={WarningMsgStyles[`warning-title`]}>Warning!!!</h2>
          <p>You decided to remove a status column with tasks in it.</p>
          <p>
            Clicking "
            <span className={WarningMsgStyles[`red-text`]}>Keep Changes</span> "
            will remove all tasks in the column listed below.
          </p>
          <ul>
            {initialWarningMsgValuesObj.stringsArray.map(function makeListitem(
              string,
              index
            ) {
              return <li key={Math.random() * index}>{`${string}`}</li>;
            })}
          </ul>
          <p>ARE YOU SURE YOU WANT TO CONTINUE WITH THIS ACTION?!</p>
          <div className={WarningMsgStyles[`warning-message-btns-container`]}>
            <button
              onClick={(event) => {
                // focus btn with id edit-board-modal-btn
                setTimeout(() => {
                  document.getElementById("edit-board-modal-btn").focus();
                }, 80);
                initialWarningMsgValuesObj.keepChanges({ setWarningMessage });
              }}
              data-warningbtn="delete"
              className={WarningMsgStyles[`keep-changes-btn`]}
            >
              Keep Changes
            </button>
            <button
              onClick={(event) => {
                /**
                 * user decide to go back to edit board modal
                 * **/
                // run setWarningMessage to not render warning message modal and focus btn with id create-board-save-changes-btn
                setTimeout(() => {
                  document
                    .getElementById("create-board-save-changes-btn")
                    .focus();
                }, 80);

                setWarningMessage((prevValues) => {
                  return {
                    ...prevValues,
                    renderWarningMessage: false,
                  };
                });
              }}
              data-warningbtn="cancel"
              className={WarningMsgStyles[`go-back-btn`]}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
