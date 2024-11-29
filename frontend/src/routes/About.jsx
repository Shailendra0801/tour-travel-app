import Hero from "../components/Hero/Hero";
import Navbar from "../components/sections/Navbar";
import AboutImg from "../assets/Hero.jpeg";
import Footer from "../components/sections/Footer";
import AboutUs from "../components/sections/About";

function About() {
  return (
    <>
       <Navbar />
       <Hero 
       cName="hero-mid" 
       heroImg={AboutImg}
       title="About"
       btnClass="hide" 
       />
       <AboutUs />
       <Footer />
    </>
  );
}

export default About;
