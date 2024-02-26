import { useEffect, useRef, useState } from "react";
import Style from "./index.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [temp, setTemp] = useState([]);
  const [cats, setCats] = useState([]);
  const serachRef = useRef(null);

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

  function handleChange() {
    const value = serachRef.current.value;
    const searchedProduct = temp.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setProducts(searchedProduct);
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
          onChange={handleChange}
        />
        <button style={{ backgroundColor: "purple", border: "none" }}>
          <i
            className="fa fa-search"
            style={{ fontSize: "30px", padding: "5px", color: "white" }}
          ></i>
        </button>
      </div>
      <div className={Style.filterBox}>
        {cats.map((cat) => {
          return (
            <button key={cat} className={Style.filterBtns}>
              {cat}
            </button>
          );
        })}
      </div>

      {products.map((product) => {
        return (
          <div key={product.id} className={Style.productsContainer}>
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

      <footer className={Style.footer}>
        <i
          className="fa fa-home"
          style={{ fontSize: "24px", fontWeight: "1000" }}
        ></i>
        <i
          className="fa fa-shopping-cart"
          style={{ fontSize: "24px", color: "grey" }}
        ></i>
        <i
          className="fa fa-archive"
          style={{ fontSize: "24px", color: "grey" }}
        ></i>
        <i
          className="fa fa-heart"
          style={{ fontSize: "24px", color: "grey" }}
        ></i>
      </footer>
    </div>
  );
}

export default Products;
