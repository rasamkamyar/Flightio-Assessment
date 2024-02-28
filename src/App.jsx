import { useContext, useEffect, useState } from "react";
import Products from "./components/Products";
import ProductContext from "./context/ProductContext";
import StartPage from "./components/StartPage";

function App() {
  const [isFirstStart, setIsFirstStart] = useState(
    localStorage.getItem("isFirstStart") || "true"
  );

  const [products, setProducts] = useState([]);
  const [temp, setTemp] = useState([]);
  const [cats, setCats] = useState([]);

  function isFirstStartSetter() {
    localStorage.setItem("isFirstStart", "false");
    setIsFirstStart(localStorage.getItem("isFirstStart"));
  }

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

  return isFirstStart === "true" ? (
    <StartPage onClick={isFirstStartSetter} />
  ) : (
    <ProductContext.Provider
      value={{ products, setProducts, temp, setTemp, cats, setCats }}
    >
      <Products />
    </ProductContext.Provider>
  );
}

export default App;
