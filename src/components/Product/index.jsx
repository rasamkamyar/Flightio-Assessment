import { useContext, useReducer, useState } from "react";
import Style from "./index.module.css";
import FavoritePage from "../FavoritePage";
import FavoriteContext from "../../context/FavoriteContext";

function Product({ product }) {
  const { favorites, dispatch } = useContext(FavoriteContext);
  const isFavorite = favorites.find((item) => item.id === product.id);

  function handleFavoriteFn() {
    if (isFavorite) {
      dispatch({
        type: "REMOVE_ITEM",
        payload: product,
      });
    } else {
      dispatch({
        type: "ADD_ITEM",
        payload: product,
      });
    }
  }

  return (
    <div className={Style.product}>
      <div className={Style.imgContainer}>
        <img
          src={product.image}
          alt={product.title}
          width="100%"
          height="100"
        />
      </div>
      <div style={{ width: "70%" }}>
        <h1 style={{ fontSize: "14px", fontWeight: "800" }}>{product.title}</h1>
        <h2 style={{ fontSize: "12px", color: "grey" }}>{product.category}</h2>
        <div className={Style.priceContainer}>
          <p>Price: {product.price} $</p>
          <FavoritePage
            onClick={handleFavoriteFn}
            fill={isFavorite ? "red" : "currentColor"}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
