import React from "react";
import CloseModalStyles from "./CloseModalBtn.module.css";
import { fadeOutEditBoardModal } from "../../../utils/sharedHelpers";

export default function CloseModalBtn({
  children,
  renderStateObjKey,
  focusClickedElement,
  hideModalFunc,
  isEditBoardModal,
}) {
  return (
    <button
      type="button"
      data-firstitem="true"
      className={CloseModalStyles[`close-btn`]}
      aria-label={children}
      onClick={(event) => {
        console.log(isEditBoardModal, "isEditBoardModal");
        if (isEditBoardModal) {
          // focus add task btn
          document.getElementById(`${focusClickedElement}`).focus();

          fadeOutEditBoardModal({
            modalStateFunc: hideModalFunc,
            element: document.getElementById("board-modal-selector"),
            fadeAttr: "data-showboardmodal",
            stateProperty: "renderBoardModal",
          });
          return;
        }
        // focus add task btn
        document.getElementById(`${focusClickedElement}`).focus();

        // hide task modal

        // if (isTaskModal) {
        //   hideModalFunc(false);
        //   return;
        // }

        // hide board mdoal
        hideModalFunc((prevValues) => {
          return {
            ...prevValues,
            [renderStateObjKey]: false,
          };
        });
      }}
    >
      <svg
        className={CloseModalStyles[`close-btn-icon`]}
        width="15"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#828FA3" fillRule="evenodd">
          <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
          <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
        </g>
      </svg>
    </button>
  );
}
