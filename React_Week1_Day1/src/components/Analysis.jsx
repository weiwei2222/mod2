import React from "react";

function Analysis({ analysis }) {
  return (
    <div className="analysis">
      this is Analysis
      {analysis.map((analysisNum, index) => (
        <p key={index}>{analysisNum}</p>
      ))}
    </div>
  );
}

export default Analysis;
