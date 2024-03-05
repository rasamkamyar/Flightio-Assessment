import { useContext } from "react";
import FavoriteContext from "../../context/FavoriteContext";
import Product from "../Product";

function FavoriteProducts() {
  const { favorites, dispatch } = useContext(FavoriteContext);
  console.log(favorites);

  return (
    <>
      <h1>hiii</h1>
      {favorites.map((item) => {
        return <Product key={item} product={item}/>;
      })}
    </>
  );
}

export default FavoriteProducts;
