import React from "react";

function Analysis({ analysis }) {
  return (
    <div className="analysis">
      this is Analysis
      {analysis.map((analysisNum) => (
        <p>{analysisNum}</p>
      ))}
    </div>
  );
}

export default Analysis;
