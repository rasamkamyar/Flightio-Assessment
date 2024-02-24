import { useState } from "react";
import Style from "./App.module.css";
import { Link, Route, Routes } from "react-router-dom";
import StartPage from "./components/Products";
import Products from "./components/Products";

function App() {
  const [isStarted, setIsStarted] = useState(true);

  function handleClick() {
    setIsStarted(false);
  }

  return isStarted ? (
    <div className={Style.container}>
      <button
        style={{
          position: "fixed",
          top: "85%",
          left: "14%",
          borderRadius: "10px",
          fontSize: "30px",
          padding: "20px 70px",
        }}
        onClick={handleClick}
      >
        Get Started
      </button>
    </div>
  ) : (
    <Products />
  );
}

export default App;
