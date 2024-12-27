// import "./Hero.css";

// function Hero(props) {
//   return (
//     <div className={props.cName}>
//       <img className="mt-20" alt="Hero" src={props.heroImg} />

//         <div className="hero-text">
//           <h1 className="animated-text">{props.title}</h1>
//           <p className="animated-text">{props.text}</p>
//         </div>
//     </div>
//   );
// }

// export default Hero;


import "./HeroAbout.css";
import AboutImg from "../forAbout/malik.jpg";

function Hero() {
  return (
    <div className="containerAbout">
      <div className="text-container">
        <p className="quoteText">
          "We SunRaj Taxi Services will always be there to make your journey the 
          most beautiful. We value your safety and time and will also value your 
          pleasant journey. Come let's go on this exceptional travel experience 
          and enjoy the beauty and culture of each destination with SunRaj Taxi Services."
          <br />
          <br />
          <span className="font-extrabold text-3xl">-Mr. Nishant Balmiki</span>
          </p>
      </div>
      <div className="image-container FLEX">
        <img className="image" src={AboutImg} alt="Image description" />
      </div>
    </div>
  );
}

export default Hero