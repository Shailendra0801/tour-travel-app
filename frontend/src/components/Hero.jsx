import "./Hero.css";
import Navbar from "./sections/Navbar";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <Navbar />
        <img alt="Hero" src={props.heroImg} />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
