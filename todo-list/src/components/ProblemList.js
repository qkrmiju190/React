import React from "react";
import Problem from "./Problem";

const ProblemList = ({ problems }) => {
  const problemList = problems.map((problem, i) => {
    return (
      <Problem key={i} title={problem.title} selections={problem.selections} />
    );
  });
  return <div>{problemList}</div>;
};

export default ProblemList;

// map -> i : index
