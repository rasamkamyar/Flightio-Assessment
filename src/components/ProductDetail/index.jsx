import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Style from "./index.module.css";
import { useContext } from "react";
import FavoriteContext from "../../context/FavoriteContext";

function ProductDetail() {
  const { id } = useParams();
  const product = useFetch(`https://fakestoreapi.com/products/${id}`);
  const { favorites, dispatch } = useContext(FavoriteContext);
  const isFavorite = favorites.find((item) => item.id === product.id);

  function handleClick() {
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
    <div className={Style.container}>
      <h1 className={Style.text}>{product.title}</h1>
      <div className={Style.imageContainer}>
        <img
          src={product.image}
          style={{ width: "110px" }}
          alt={product.title}
        />
        <h2 className={Style.text}>Price: ${product.price}</h2>
      </div>
      <button
        onClick={handleClick}
        className={isFavorite ? Style.addBtn : Style.removeBtn}
      >
        {!isFavorite ? "ADD TO BASKET" : "REMOVE FROM BASKET"}
      </button>
      <h3 className={Style.desc}>{product.description}</h3>
      <p className={Style.text}>{`Rate: ${product.rating?.rate} From : 5`}</p>
    </div>
  );
}

export default ProductDetail;
