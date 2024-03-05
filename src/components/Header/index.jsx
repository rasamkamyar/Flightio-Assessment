import Style from "./index.module.css";

function Header() {
  return (
    <header className={Style.header}>
      <div className={Style.top}>
        <i className="fa fa-bars" style={{ fontSize: "35px" }}></i>
        <div className={Style.imageProfile}></div>
      </div>
    </header>
  );
}

export default Header;
