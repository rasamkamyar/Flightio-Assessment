import { useContext } from "react";
import FavoriteContext from "../../context/FavoriteContext";
import Product from "../Product";
import Style from "./index.module.css";
import Layout from "../Layout";

function FavoriteProducts() {
  const { favorites, dispatch } = useContext(FavoriteContext);
  return (
    <>
      <h1 className={Style.title}>Favorite Products</h1>
      <div className={Style.container}>
        {favorites.length > 0 ? (
          favorites.map((item) => {
            return <Product key={item} product={item} />;
          })
        ) : (
          <h2 className={Style.EmptyPageText}>There is no favorite item .</h2>
        )}
      </div>
    </>
  );
}

export default FavoriteProducts;
