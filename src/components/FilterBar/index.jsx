import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import Style from "./index.module.css";

function FilterBar() {
  const { setProducts, temp, cats } = useContext(ProductContext);
  function handleFilter(e) {
    if (e.target.value === "ALL") {
      setProducts([...temp]);
    } else {
      let filteredItems = temp.filter((item) => {
        return item.category === e.target.value;
      });
      setProducts(filteredItems);
    }
  }

  return (
    <>
      <div className={Style.filterBox}>
        <button onClick={handleFilter} value="ALL" className={Style.filterBtns}>
          ALL
        </button>
        {cats.map((cat) => {
          return (
            <button
              value={cat}
              onClick={handleFilter}
              key={cat}
              className={Style.filterBtns}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default FilterBar;
