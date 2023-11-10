import React from "react";
import Score from "./Score";

function Student({ studentObj }) {
  return (
    <div>
      <h3>student name is : {studentObj.name}111</h3>
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
