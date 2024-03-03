import { useContext, useRef } from "react";
import Style from "./index.module.css";
import ProductContext from "../../context/ProductContext";
import FilterBar from "../FilterBar";
import SearchBar from "../SearchBar";
import Header from "../Header";

function Products() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <Header />
      <SearchBar />
      <FilterBar />

      {products.map((product) => {
        return (
          <div key={product.id} className={Style.productsContainer}>
            <div className={Style.imgContainer}>
              <img
                src={product.image}
                alt={product.title}
                width="100%"
                height="100"
              />
            </div>
            <div style={{ width: "70%" }}>
              <h1 style={{ fontSize: "15px", fontWeight: "800" }}>
                {product.title}
              </h1>
              <h2 style={{ fontSize: "12px", color: "grey" }}>
                {product.category}
              </h2>
              <p>{product.price} $</p>
            </div>
          </div>
        );
      })}
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
