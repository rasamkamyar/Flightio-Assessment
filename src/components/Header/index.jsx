import Style from "./index.module.css";

function Header() {
  return (
    <header className={Style.header}>
      <div className={Style.top}>
        <i className="fa fa-bars" style={{ fontSize: "44px" }}></i>
        <div className={Style.imageProfile}></div>
      </div>
      <div className={Style.title}>
        <h2 style={{ color: "grey", margin: "0", fontSize: "15px" }}>
          Welcome, Flightio
        </h2>
        <h1 style={{ margin: "15px 0", fontSize: "25px" }}>
          Bring Designer Lamps This Diwali
        </h1>
      </div>
    </header>
  );
}

export default Header;
