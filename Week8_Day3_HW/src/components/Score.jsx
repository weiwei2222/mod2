import React from "react";

function Score({ scoreOjt }) {
  return (
    <div>
      <div>Exam date is :{scoreOjt.date}</div>
      <div>Exam score is :{scoreOjt.score}</div>
    </div>
  );
}

export default Score;
