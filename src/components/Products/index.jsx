import { useContext, useRef } from "react";
import Style from "./index.module.css";
import ProductContext from "../../context/ProductContext";

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
    const selectedFilter = e.target.textContent;
    let filteredItems = temp.filter(
      (product) => product.category === selectedFilter
    );
    setProducts(filteredItems);
    filteredItems = [];
  }

  return (
    <div>
      <header className={Style.header}>
        <i className="fa fa-bars" style={{ fontSize: "44px" }}></i>
        <div className={Style.imageProfile}></div>
      </header>
      <div className={Style.title}>
        <h2 style={{ color: "grey", margin: "0", fontSize: "15px" }}>
          Welcome, Flightio
        </h2>
        <h1 style={{ margin: "10px 0", fontSize: "25px" }}>
          Bring Designer Lamps This Diwali
        </h1>
      </div>
      <div className={Style.serach}>
        <input
          type="text"
          style={{ width: "80%" }}
          ref={serachRef}
          onChange={handleSearch}
        />
        <button style={{ backgroundColor: "purple", border: "none" }}>
          <i className={`fa fa-search  ${Style.searchIcon}`}></i>
        </button>
      </div>
      <div className={Style.filterBox}>
        {cats.map((cat) => {
          return (
            <button
              onClick={(e) => handleFilter(e)}
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
