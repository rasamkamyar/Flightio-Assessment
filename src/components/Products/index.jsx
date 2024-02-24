import Style from "./index.module.css";

function Products() {
  return (
    <div>
      <header className={Style.header}>
        <i className="fa fa-bars" style={{ fontSize: "44px" }}></i>
        <div className={Style.imageProfile}></div>
      </header>
      <div className={Style.title}>
        <h2 style={{ color: "grey", margin: "0", fontSize: "15px" }}>
          Welcome, Flightio
        </h2>
        <h1 style={{ margin: "10px 0", fontSize: "25px" }}>
          Bring Designer Lamps This Diwali
        </h1>
      </div>
      <div className={Style.serach}>
        <input type="text" style={{ width: "80%" }} />
        <button style={{ backgroundColor: "purple", border: "none" }}>
          <i
            className="fa fa-search"
            style={{ fontSize: "30px", padding: "5px", color: "white" }}
          ></i>
        </button>
      </div>
      <div className={Style.filterBox}>
        <button className={Style.filterBtns}>MEN</button>
        <button className={Style.filterBtns}>WOMEN</button>
        <button className={Style.filterBtns}>JEWELRY</button>
      </div>
    </div>
  );
}

export default Products;
