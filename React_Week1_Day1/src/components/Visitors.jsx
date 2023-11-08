import React from "react";

function Visitors(props) {
  return (
    <div className="visitors">
      this is Visitors.
      <p>{props.visitors}</p>
      <div className="chart">test</div>
    </div>
  );
}

export default Visitors;
