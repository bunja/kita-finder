import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./welcome";

console.log("hi!");
// checking if user logged in
let elem;
if (location.pathname == "/welcome") {
    elem = <Welcome />;
}

ReactDOM.render(elem, document.querySelector("main"));
