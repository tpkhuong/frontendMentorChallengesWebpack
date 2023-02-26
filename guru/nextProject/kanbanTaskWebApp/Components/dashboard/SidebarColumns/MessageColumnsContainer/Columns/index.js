import React from "react";
import ColumnsStyles from "./Columns.module.css";

export default function Columns({ children }) {
  return (
    <section aria-labelledby="status-column-title">
      <h2 className="visually-hidden" id="status-column-title">
        Status Columns
      </h2>
    </section>
  );
}
