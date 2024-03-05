import Style from "./index.module.css";
// import image from "./public/"

function Header() {
  return (
    <header className={Style.header}>
      <div className={Style.top}>
        <i className="fa fa-bars" style={{ fontSize: "44px" }}></i>
        <div className={Style.imageProfile}></div>
      </div>
    </header>
  );
}

export default Header;
