import { useEffect } from "react";
import Style from "./index.module.css";
import { json } from "react-router-dom";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCats(json));
  }, []);

  // console.log(products);
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
        <input type="text" style={{ width: "80%" }} />
        <button style={{ backgroundColor: "purple", border: "none" }}>
          <i
            className="fa fa-search"
            style={{ fontSize: "30px", padding: "5px", color: "white" }}
          ></i>
        </button>
      </div>
      <div className={Style.filterBox}>
        {cats.map((cat) => {
          return <button className={Style.filterBtns}>{cat}</button>;
        })}
      </div>

      {products.map((product) => {
        return (
          <div className={Style.productsContainer}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "30%",
                paddingLeft: "8px",
              }}
            >
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
    </div>
  );
}

export default Products;
