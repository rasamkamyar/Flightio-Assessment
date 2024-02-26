import { useState } from "react";
import Style from "./App.module.css";
import Products from "./components/Products";

function App() {
  const [isStarted, setIsStarted] = useState(true);

  return isStarted ? (
    <div className={Style.container}>
      <button className={Style.startBtn} onClick={() => setIsStarted(false)}>
        Get Started
      </button>
    </div>
  ) : (
    <Products />
  );
}

export default App;
