import { useContext } from "react";
import FavoriteContext from "../../context/FavoriteContext";
import Product from "../Product";
import Style from "./index.module.css";

function FavoriteProducts() {
  const { favorites } = useContext(FavoriteContext);
  return (
    <>
      <h1 className={Style.title}>Favorite Products</h1>
      <div className={Style.container}>
        {favorites.length > 0 ? (
          favorites.map((item) => {
            return <Product key={item.id} product={item} />;
          })
        ) : (
          <h2 className={Style.EmptyPageText}>There is no favorite item .</h2>
        )}
      </div>
    </>
  );
}

export default FavoriteProducts;
