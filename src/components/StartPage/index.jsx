import Style from "./index.module.css";

function StartPage({ onClick }) {
  return (
    <div className={Style.container}>
      <button className={Style.startBtn} onClick={onClick}>
        Get Started
      </button>
    </div>
  );
}

export default StartPage;
