import { useContext, useRef } from "react";
import Style from "./index.module.css";
import ProductContext from "../../context/ProductContext";
import Header from "../Header";

function Products() {
  const { products, setProducts, temp, cats } = useContext(ProductContext);
  const serachRef = useRef(null);

  function handleSearch() {
    const value = serachRef.current.value;
    const searchedProduct = temp.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setProducts(searchedProduct);
  }

  function handleFilter(e) {
    console.log(e.target.value);
    let filteredItems = temp.filter((item) => {
      return item.category === e.target?.value;
    });
    setProducts(filteredItems);
  }

  return (
    <div>
      <Header />
      <div className={Style.search}>
        <input
          type="text"
          style={{ width: "100%" }}
          ref={serachRef}
          onChange={handleSearch}
        />
        <button style={{ backgroundColor: "purple", border: "none" }}>
          <i className={`fa fa-search  ${Style.searchIcon}`}></i>
        </button>
      </div>
      <div className={Style.filterBox}>
        <button onClick={handleFilter} className={Style.filterBtns}>
          ALL
        </button>
        {cats.map((cat) => {
          return (
            <button
              value={cat}
              onClick={handleFilter}
              key={cat}
              className={Style.filterBtns}
            >
              {cat}
            </button>
          );
        })}
      </div>

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
