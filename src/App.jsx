import { useContext, useState } from "react";
import Style from "./App.module.css";
import Products from "./components/Products";
import ProductContext from "./context/ProductContext";

function App() {
  const [isStarted, setIsStarted] = useState(true);

  return isStarted ? (
    <div className={Style.container}>
      <button className={Style.startBtn} onClick={() => setIsStarted(false)}>
        Get Started
      </button>
    </div>
  ) : (
    <ProductContext.Provider value={110}>
      <Products />
    </ProductContext.Provider>
  );
}

export default App;
