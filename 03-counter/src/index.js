import React from "react";
import ReactDOM from "react-dom";
import FirstApp from "./FirstApp";
import "./index.css";

const divRoot = document.querySelector("#app");

ReactDOM.render(<FirstApp hi="Hello, I'm a bot" />, divRoot);
// ReactDOM.render(<FirstApp />, divRoot); // return console error
