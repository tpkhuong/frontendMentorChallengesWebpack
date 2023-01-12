import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./Components/App/App";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<App />);

// function App({ children, ...props }) {
//   return (
//     <React.Fragment>
//       <h1>Hello React!!</h1>
//     </React.Fragment>
//   );
// }

// if (module.hot) {
//   module.hot.accept();
// }

// if (module.hot) {
//   module.hot.dispose(() => {
//     document.body.innerHTML = "";
//   });
//   module.hot.accept();
// }
