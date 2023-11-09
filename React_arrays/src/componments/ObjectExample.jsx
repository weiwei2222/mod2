import React from "react";

function ObjectExample(props) {
  const residence = {
    address: "123 Main St",
    city: "Columbus, OH",
    owner: "John Smith",
    type: "house",
  };

  //   const objectKeys = Object.keys(residence);
  //   console.log(objectKeys);
  //   objectKeys.map((key, index) => {
  //     console.log(key);
  //     console.log(index);
  //     console.log(residence[key]);
  //   });

  return Object.keys(residence).map((key, index) => {
    return (
      <h2>
        {key}:{residence[key]}
      </h2>
    );
  });
}

export default ObjectExample;
