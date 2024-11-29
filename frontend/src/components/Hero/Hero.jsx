import "./Styles/Hero.css";
import TypingEffect from "./TypingAni";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Hero" src={props.heroImg} />

        {/* <div className="card"> */}
          <div className="hero-text">
            {/* <TypingEffect /> */}
            <h1 className="animated-text">{props.title}</h1>
            <p className="animated-text">{props.text}</p>
          </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Hero;
