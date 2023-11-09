import React from "react";

function ArrayExample() {
  const lessonArray = [
    {
      date: "09Nov2023",
      subject: "math",
      topic: "measurement",
      completed: false,
    },
    { date: "02Nov2023", subject: "math", topic: "ratios", completed: true },
    { date: "19Oct2023", subject: "math", topic: "genotypes", completed: true },
  ];

  return (
    <div>
      <div>Hello</div>
      <ul>
        {lessonArray.map((lesson) => {
          return (
            <li>
              <h2>date:{lesson.date}</h2>
              <h3>subject:{lesson.subject}</h3>
              <h4>topic:{lesson.topic}</h4>
              <h5>
                commpleted :
                {lesson.completed ? " is complete" : " is not complete"}
              </h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArrayExample;
