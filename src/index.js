import React from "react";
import ReactDOM from "react-dom";
import ChangeTextColorByTime from "./ChangeTextByTime";

const YourName = "Madhu Yetelly Moses";
const date = new Date();
const currentTime = date.getHours();
const year = date.getFullYear();

console.log(currentTime);

ReactDOM.render(
  <>
    <ChangeTextColorByTime />
    <p>Created by {YourName}</p>
    <p>Copyright {year} </p>
  </>,
  document.getElementById("root")
);
