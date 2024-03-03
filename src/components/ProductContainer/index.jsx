import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import Style from "./index.module.css";
import FavoritePage from "../FavoritePage";

function ProductContainer() {
  const { products, temp } = useContext(ProductContext);

  return (
    <>
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
              <h1 style={{ fontSize: "14px", fontWeight: "800" }}>
                {product.title}
              </h1>
              <h2 style={{ fontSize: "12px", color: "grey" }}>
                {product.category}
              </h2>
              <div className={Style.priceContainer}>
                <p>Price: {product.price} $</p>
                <FavoritePage />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductContainer;
