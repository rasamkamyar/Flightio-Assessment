import Style from "./index.module.css";

function About() {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>ABOUT</h1>
      <p className={Style.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint
        quaerat, quis eveniet officiis porro alias cum, at ullam obcaecati ipsa
        eaque tempore? Rerum deserunt, ipsa illo, minus suscipit quas quisquam
        earum deleniti et a laudantium cupiditate quasi vel pariatur odio,
        adipisci numquam! Minima repellat ea corrupti quasi accusamus quisquam!
      </p>
    </div>
  );
}

export default About;
