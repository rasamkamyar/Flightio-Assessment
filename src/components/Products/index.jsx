import Style from "./index.module.css";

function Products() {
  return (
    <div>
      <header className={Style.header}>
        <i className="fa fa-bars" style={{ fontSize: "44px" }}></i>
        <div className={Style.imageProfile}></div>
      </header>
    </div>
  );
}

export default Products;
