import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
// import FirstApp from "./FirstApp";
import "./index.css";

const divRoot = document.querySelector("#app");

ReactDOM.render(
  //   <FirstApp hi="Hello, I'm a bot" subtitle="Other subtitle" />,
  <CounterApp value={10} />,
  divRoot
);
// ReactDOM.render(<FirstApp />, divRoot); // return console error
