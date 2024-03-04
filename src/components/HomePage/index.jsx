import Style from "./index.module.css";
import FilterBar from "../FilterBar";
import SearchBar from "../SearchBar";
import Footer from "../Footer";
import Header from "../Header";
import ProductContainer from "../ProductContainer";
import FavoriteContext from "../../context/FavoriteContext";
import { useState } from "react";

function HomePage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <FilterBar />
      <ProductContainer />
      <Footer />
    </div>
  );
}

export default HomePage;
