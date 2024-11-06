import Hero from "../components/Hero";
import Navbar from "../components/sections/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/sections/Footer";
import Trip from "../components/trip/Trip";

function Service() {
  return (
    <>
      <Navbar />
       <Hero 
        cName="hero-mid" 
        heroImg={AboutImg}
        title="Service"
        btnClass="hide" 
       />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
