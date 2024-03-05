import { useContext, useRef } from "react";
import Style from "./index.module.css";
import ProductContext from "../../context/ProductContext";

function SearchBar() {
  const { setProducts, temp } = useContext(ProductContext);
  const serachRef = useRef(null);

  function handleSearch() {
    const value = serachRef.current.value;
    const searchedProduct = temp.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setProducts(searchedProduct);
  }

  return (
    <div className={Style.search}>
      <input
        type="text"
        style={{ width: "100%" }}
        ref={serachRef}
        onChange={handleSearch}
      />
      <button style={{ backgroundColor: "purple", border: "none" }}>
        <i
          className={`fa fa-search  ${Style.searchIcon}`}
        ></i>
      </button>
    </div>
  );
}

export default SearchBar;
