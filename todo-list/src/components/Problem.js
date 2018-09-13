import React from "react";
import "./Problem.css";

const Problem = ({ title, selections }) => {
  const selectionList = selections.map((selection, i) => {
    return (
      <div className="selection" key={i}>
        <input className="checkBox" type="checkbox" />
        {i + 1}
        번: <span>{selection.title}</span>
      </div>
    );
  });
  return (
    <div className="problemWrapper">
      <div className="problem">
        <div className="title">{title}</div>
        <div>{selectionList}</div>
      </div>
    </div>
  );
};

export default Problem;
