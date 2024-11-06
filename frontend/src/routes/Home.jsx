import Destination from "../components/destination/Destination";
import Footer from "../components/sections/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/sections/Navbar";
import Trip from "../components/trip/Trip";
import Img from '../assets/Hero.jpeg'

function Home() {
  return (
    <>
       <Navbar />
       <Hero 
       cName="hero" 
       heroImg={Img}
       title="Your Journey Your Story"
       text="Choose Your Favourite Destination" 
       buttonText="Travel Plan"
       url="/"
       btnClass="show" 
       />
       <Destination />
       <Trip />
       <Footer />
    </>
  );
}

export default Home;
