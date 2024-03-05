import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import ProductContext from "./context/ProductContext";
import StartPage from "./components/StartPage";
import useFetch from "./hooks/useFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import FavoriteProducts from "./components/FavoriteProducts";

function App() {
  const [isFirstStart, setIsFirstStart] = useState(
    localStorage.getItem("isFirstStart") || "true"
  );
  const [products, setProducts] = useState([]);
  const [temp, setTemp] = useState([]);
  const [cats, setCats] = useState([]);
  const product = useFetch("https://fakestoreapi.com/products");
  const category = useFetch("https://fakestoreapi.com/products/categories");

  function isFirstStartSetter() {
    localStorage.setItem("isFirstStart", "false");
    setIsFirstStart(localStorage.getItem("isFirstStart"));
  }

  useEffect(() => {
    setProducts(product);
    setTemp(product);

    setCats(category);
  }, [product, category]);

  return isFirstStart === "true" ? (
    <StartPage onClick={isFirstStartSetter} />
  ) : (
    <ProductContext.Provider
      value={{ products, setProducts, temp, setTemp, cats, setCats }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorite" element={<FavoriteProducts />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
