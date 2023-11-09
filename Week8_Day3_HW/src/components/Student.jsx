import React from "react";
import Score from "./Score";

function Student({ studentObj }) {
  return (
    <div>
      <div>student name is : {studentObj.name}</div>
      <div>student bio is : {studentObj.bio}</div>
      <div>
        {/* {console.log(studentObj)} */}
        {studentObj.scores.map((score) => (
          <Score scoreOjt={score} key={studentObj.name} />
        ))}
      </div>
    </div>
  );
}

export default Student;
