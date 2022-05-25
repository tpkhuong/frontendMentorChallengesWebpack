// our entry
// import react,reactDom, css here
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.js";
import "webpack-hot-middleware/client?reload=true";
// react 17
// ReactDOM.render(<App />, document.getElementById("app"));

// we installed react 18
const rootElement = ReactDOM.createRoot(document.getElementById("app"));

rootElement.render(<App />);
