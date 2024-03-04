import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "By Raj Soni"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "By React js learner"),
    React.createElement("h2", {}, "im h2 tag"),
  ]),
]);
console.log(parent);

// const heading = React.createElement(
//   "h1",
//,   { id: "heading", className: "avd" },
//   "Hello world from react!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
