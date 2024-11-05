import Destination from "../components/destination/Destination";
import Footer from "../components/sections/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/sections/Navbar";
import Trip from "../components/trip/Trip";

function Home() {
  return (
    <>
       <Navbar />
       <Hero 
       cName="hero" 
       heroImg="https://media.istockphoto.com/id/177337487/photo/plane.jpg?s=612x612&w=0&k=20&c=q7ir3NaxrRSHrzfgQ7CM34ghShHA8PpQNC4Z4D6BNyI="
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
