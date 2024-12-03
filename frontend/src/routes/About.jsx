import Hero from "../routes/forAbout/Hero";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import AboutUs from "../components/sections/About";

function About() {
  return (
    <>
       <Navbar />
       <Hero />
       <AboutUs />
       <Footer />
    </>
  );
}

export default About;
