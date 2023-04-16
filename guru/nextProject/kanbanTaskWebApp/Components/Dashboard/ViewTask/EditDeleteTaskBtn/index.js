import React from "react";
import EditDeleteTaskStyles from "./EditDeleteTaskBtn.module.css";

export default function EditDeleteTaskBtnAndModal({ children }) {
  return (
    <React.Fragment>
      <button>
        {/* edit delete task modal */}
        <div
          role="dialog"
          aria-modal="true"
          className={EditDeleteTaskStyles[`edit-delete-task-btns-container`]}
        >
          <button type="button"></button>
          <button type="button"></button>
        </div>
      </button>
    </React.Fragment>
  );
}
