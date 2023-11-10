import React from "react";
import Score from "./Score";

function Student({ studentObj }) {
  return (
    <div>
      <h3>student name is : {studentObj.name}</h3>
      <div>student bio is : {studentObj.bio}</div>
      <div>
        {/* {console.log(studentObj)} */}
        {studentObj.scores.map((score, index) => (
          <Score scoreOjt={score} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Student;
