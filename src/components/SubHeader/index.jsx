import Style from "./index.module.css"


function SubHeader() {
  return (
    <div className={Style.title}>
      <h2 style={{ color: "grey", margin: "0", fontSize: "15px" }}>
        Welcome, Flightio
      </h2>
      <h1 style={{ margin: "15px 0", fontSize: "25px" }}>
        Bring Designer Lamps This Diwali
      </h1>
    </div>
  );
}

export default SubHeader;
