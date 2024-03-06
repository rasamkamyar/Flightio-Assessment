import { useState } from "react";
import Style from "./index.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [hideMenu, setHideMenu] = useState(false);
  return (
    <header className={Style.header}>
      <div className={Style.top}>
        <div>
          <i
            className="fa fa-bars"
            style={{ fontSize: "35px" }}
            onClick={() => setHideMenu(!hideMenu)}
          ></i>
          <ul className={hideMenu ? Style.menuBar : Style.hide}>
            <Link to={"/"}>PRODUCTS</Link>
            <Link to={"/about"}>ABOUT</Link>
            <Link to={"/contact"}>CONTACT US</Link>
          </ul>
        </div>
        <div className={Style.imageProfile}></div>
      </div>
    </header>
  );
}

export default Header;
