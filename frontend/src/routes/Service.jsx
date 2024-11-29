import Hero from "../components/Hero/Hero";
import Navbar from "../components/sections/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/sections/Footer";
import Trip from "../components/trip/Trip";
import DestinationService from "../components/destination/DestinationService";

function Service() {
  return (
    <>
      <Navbar />
       <Hero 
        cName="hero-mid" 
        heroImg={AboutImg}
        title="Tours"
        btnClass="hide" 
       />
      <DestinationService />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
