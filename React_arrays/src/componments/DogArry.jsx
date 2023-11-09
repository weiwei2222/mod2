import React from "react";

function DogArry() {
  const dogs = [
    { name: "Sparky", age: 5 },
    { name: "Spot", age: 5 },
    { name: "Ralph", age: 5 },
    { name: "Fido", age: 5 },
  ];

  const dogJSX = dogs.map((dog) => {
    // we return JSX for each dog in the array which we store in the dog variable, essentially we are looping over dog of dogs
    return (
      <div>
        <h1>{dog.name}</h1>
        <h2>{dog.age}</h2>
      </div>
    );
  });

  // the component returns JSX that uses the dogJSX array
  return <div>{dogJSX}</div>;
}

export default DogArry;
