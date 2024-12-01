import Hero from "../routes/forAbout/Hero";
import Navbar from "../components/sections/Navbar";
import AboutImg from "../assets/malik2.png";
import Footer from "../components/sections/Footer";
import AboutUs from "../components/sections/About";

function About() {
  return (
    <>
       <Navbar />
       <Hero 
       cName="hero-mid" 
       heroImg={AboutImg}
      //  title="About"
       btnClass="hide" 
       />
       <AboutUs />
       <Footer />
    </>
  );
}

export default About;
