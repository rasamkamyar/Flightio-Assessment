import { useContext, useRef } from "react";
import Style from "./index.module.css";
import ProductContext from "../../context/ProductContext";
import FilterBar from "../FilterBar";
import SearchBar from "../SearchBar";
import Header from "../Header";
import ProductContainer from "../ProductContainer";

function Products() {

  return (
    <div>
      <Header />
      <SearchBar />
      <FilterBar />
      <ProductContainer />
      <footer className={Style.footer}>
        <i className={`fa fa-home ${Style.footerIcons}`}></i>
        <i className={`fa fa-shopping-cart ${Style.footerIcons}`}></i>
        <i className={`fa fa-archive ${Style.footerIcons}`}></i>
        <i className={`fa fa-heart ${Style.footerIcons}`}></i>
      </footer>
    </div>
  );
}

export default Products;
