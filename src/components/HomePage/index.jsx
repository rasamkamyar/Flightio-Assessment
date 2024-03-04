import Style from "./index.module.css";
import FilterBar from "../FilterBar";
import SearchBar from "../SearchBar";
import Footer from "../Footer";
import Header from "../Header";
import ProductContainer from "../ProductContainer";
import FavoriteContext from "../../context/FavoriteContext";
import { useState } from "react";

function HomePage() {
  const [favorites, setFavorites] = useState([]);
  return (
    <div>
      <Header />
      <SearchBar />
      <FilterBar />
      <FavoriteContext.Provider value={{ favorites, setFavorites }}>
        <ProductContainer />
        <Footer />
      </FavoriteContext.Provider>
    </div>
  );
}

export default HomePage;
