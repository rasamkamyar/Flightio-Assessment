import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import Style from "./index.module.css";
import Product from "../Product";

function ProductContainer() {
  const { products } = useContext(ProductContext);

  return (
    <>
      <div className={Style.productContainer}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default ProductContainer;
