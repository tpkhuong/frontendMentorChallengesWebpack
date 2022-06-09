// our entry
// import react,reactDom, css here
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.js";
// import "webpack-hot-middleware/client?reload=true";
// react 17
// ReactDOM.render(<App />, document.getElementById("app"));

// we installed react 18
const rootElement = ReactDOM.createRoot(document.getElementById("app"));

rootElement.render(<App />);

function note() {
  /**
   * worked
   * **/
  // function MakeCall(props) {
  //   console.log(props);
  //   return <div>Hello world!!!</div>;
  // }
  // export async function getStaticProps() {
  //   const response = await fetch(
  //     "http://worldtimeapi.org/api/timezone/America/New_York"
  //   );
  //   const data = await response.json();
  //   return {
  //     props: data,
  //   };
  // }
  // export default MakeCall;
}
