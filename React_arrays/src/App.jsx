import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DogArry from "./componments/DogArry";
import ObjectExample from "./componments/ObjectExample";
import UseRef from "./componments/UseRef";
import ArrayExample from "./componments/ArrayExample";

function App() {
  return (
    <>
      <ArrayExample />
      <DogArry />
      <ObjectExample />
      <UseRef />
    </>
  );
}

export default App;
