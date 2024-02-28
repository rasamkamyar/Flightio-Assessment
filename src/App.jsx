import { useContext, useEffect, useState } from "react";
import Style from "./App.module.css";
import Products from "./components/Products";
import ProductContext from "./context/ProductContext";

function App() {
  const [isStarted, setIsStarted] = useState(true);
  const [products, setProducts] = useState([]);
  const [temp, setTemp] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setTemp(json);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCats(json));
  }, []);

  return isStarted ? (
    <div className={Style.container}>
      {/* <button className={Style.startBtn} onClick={() => setIsStarted(false)}>
        Get Started
      </button> */}
    </div>
  ) : (
    <ProductContext.Provider
      value={{ products, setProducts, temp, setTemp, cats, setCats }}
    >
      <Products />
    </ProductContext.Provider>
  );
}

export default App;
