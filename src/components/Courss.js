import React from "react";

function Courss({ img, text, isAvilable }) {
  isAvilable === true ? text = "This course is Available" : text = "This course is unAvailable";
  return (
    <div className="course">
      <img src={img}></img>
      <p> {text} </p>
    </div>
  );
}

export default Courss;
