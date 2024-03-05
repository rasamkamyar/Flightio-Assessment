import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Style from "./index.module.css";

function ProductDetail() {
  const { id } = useParams();
  const product = useFetch(`https://fakestoreapi.com/products/${id}`);
  return (
    <div className={Style.container}>
      <h1 className={Style.text}>{product.title}</h1>
      <img src={product.image} style={{ width: "110px" }} alt={product.title} />
      <h2 className={Style.text}>Price: ${product.price}</h2>
      <h3 className={Style.desc}>{product.description}</h3>
      <p className={Style.text}>{`Rate: ${product.rating?.rate} From : 5`}</p>
    </div>
  );
}

export default ProductDetail;
