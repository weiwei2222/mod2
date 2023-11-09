import React from "react";

function Score({ scoreOjt }) {
  return (
    <div>
      <div>student date is :{scoreOjt.date}</div>
      <div>student score is :{scoreOjt.score}</div>
    </div>
  );
}

export default Score;
