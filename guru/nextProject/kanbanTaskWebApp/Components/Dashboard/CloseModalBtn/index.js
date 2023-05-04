import React from "react";
import CloseModalStyles from "./CloseModalBtn.module.css";
import {
  fadeOutEditDeleteBoardModal,
  fadeInEditDeleteBtnModal,
  fadeOutEditTaskFadeInViewTask,
} from "../../../utils/sharedHelpers";

export default function CloseModalBtn({
  children,
  renderStateObjKey,
  focusClickedElement,
  hideModalFunc,
  isEditBoardModal,
  isEditTaskModal,
}) {
  return (
    <button
      type="button"
      data-firstitem="true"
      className={CloseModalStyles[`close-btn`]}
      aria-label={children}
      onClick={(event) => {
        if (isEditBoardModal) {
          // focus add task btn
          document.getElementById(`${focusClickedElement}`).focus();

          fadeOutEditDeleteBoardModal({
            modalStateFunc: hideModalFunc,
            element: document.getElementById("board-modal-selector"),
            fadeAttr: "data-showboardmodal",
            stateProperty: "renderBoardModal",
          });

          fadeInEditDeleteBtnModal(
            document.getElementById("launch-edit-delete-modal-btn")
          );
          return;
        }
        // close btn of edit task modal
        if (isEditTaskModal) {
          fadeOutEditTaskFadeInViewTask(hideModalFunc);
          // fade edit task modal
          // document.getElementById("edit-task-modal-selector");
          // document
          //   .getElementById("edit-task-modal-selector")
          //   .getAttribute("data-fadeedittaskmodal") == "true"
          //   ? document
          //       .getElementById("edit-task-modal-selector")
          //       .setAttribute("data-fadeedittaskmodal", "false")
          //   : null;
          // // change display of view task modal to another value besides none
          // document
          //   .getElementById("view-task-modal-selector")
          //   .getAttribute("data-hideviewtask") == "true"
          //   ? document
          //       .getElementById("view-task-modal-selector")
          //       .setAttribute("data-hideviewtask", "false")
          //   : null;
          // // unrender edit task modal
          // setTimeout(() => {
          //   // edit task modal
          //   hideModalFunc((prevValues) => {
          //     return {
          //       renderTaskModal: false,
          //       id: "",
          //       refocusElementTaskModal: "",
          //       modalTitle: "",
          //       titleInput: "",
          //       statusInput: "",
          //       descriptionInput: "",
          //       subtasksArray: [
          //         { placeholder: "", text: "", isEmptyAttr: "" },
          //         { placeholder: "", text: "", isEmptyAttr: "" },
          //       ],
          //     };
          //   });
          //   // show view task modal
          //   document
          //     .getElementById("view-task-modal-selector")
          //     .getAttribute("data-fadeoutviewtask") == "true"
          //     ? document
          //         .getElementById("view-task-modal-selector")
          //         .setAttribute("data-fadeoutviewtask", "false")
          //     : null;
          //   // focus delete task btn
          //   document.getElementById("edit-task-btn-selector").focus();
          // }, 800);

          return;
        }
        // focus element that opened modal
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
