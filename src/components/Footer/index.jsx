import Style from "./index.module.css";
import FavoriteIcon from "../FavoriteIcon";
import { useContext } from "react";
import FavoriteContext from "../../context/FavoriteContext";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../HomeIcon";

function Footer() {
  const { favorites } = useContext(FavoriteContext);
  const navigate = useNavigate();

  return (
    <footer className={Style.footer}>
      <HomeIcon />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
      </svg>
      <FavoriteIcon
        onClick={() => navigate("/favorite")}
        hasLabel
        label={favorites.length}
      />
    </footer>
  );
}

export default Footer;
