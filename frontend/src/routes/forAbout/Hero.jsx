import "./Hero.css";

function Hero(props) {
  return (
    <div className={props.cName}>
      <img className="mt-20" alt="Hero" src={props.heroImg} />

        <div className="hero-text">
          <h1 className="animated-text">{props.title}</h1>
          <p className="animated-text">{props.text}</p>
        </div>
    </div>
  );
}

export default Hero;