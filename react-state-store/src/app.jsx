import { useState, useEffect } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  // initiate counter at 0, setCounter let's me update counter
  const [counter, setCounter] = useState(0);
  const [evenCounter, setEvenCounter] = useState(0);
  // the dependency array
  useEffect(() => {
    console.log("I'm just a random log");
  }, [evenCounter]);

  const addOne = () => {
    if (counter % 2) {
      setEvenCounter(evenCounter + 1);
    }
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>counter:{counter}</h1>
      <h1>evencounter:{evenCounter}</h1>
      <button onClick={addOne}>Click Me to Add One</button>
    </>
  );
}
