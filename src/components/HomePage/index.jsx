import Style from "./index.module.css";
import FilterBar from "../FilterBar";
import SearchBar from "../SearchBar";
import Footer from "../Footer";
import Header from "../Header";
import ProductContainer from "../ProductContainer";
import FavoriteContext from "../../context/FavoriteContext";
import { useReducer, useState } from "react";
import FavoriteReducer from "../../reducers/FavoriteReducer";

function HomePage() {
  const [favorites, dispatch] = useReducer(FavoriteReducer, []);

  return (
    <div>
      <Header />
      <SearchBar />
      <FilterBar />
      <FavoriteContext.Provider value={{ favorites, dispatch }}>
        <ProductContainer />
        <Footer />
      </FavoriteContext.Provider>
    </div>
  );
}

export default HomePage;
