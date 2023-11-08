import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Reviews from "./components/Reviews";
import Rating from "./components/Rating";
import Analysis from "./components/Analysis";
import Visitors from "./components/Visitors";
import "./style.css";

function App() {
  return (
    <div className="grid-container">
      <Dashboard />
      <Reviews reviews="1,281" />
      <Rating rating="4.6" />
      <Analysis analysis="960" />
      <Visitors visitors="821" />
    </div>
  );
}

export default App;
