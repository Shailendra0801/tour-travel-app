import Destination from "../components/destination/Destination";
import Footer from "../components/sections/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/sections/Navbar";
import Trip from "../components/trip/Trip";
import ImageSlider from "../components/Slider/ImageSlider";
import Features from "../components/Features/Features";

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/4.jpg';

import Img from '../assets/Hero.jpeg'

function Home() {

  const images = [
    img1,
    img2,
    img3,
    img3
  ];

  return (
    <>
       <Navbar />
       <Hero 
       cName="hero" 
       heroImg={Img}
       title="Your Journey Your Story"
       text="Choose Your Favourite Destination" 
       buttonText="Get Started"
       url="/"
       btnClass="show" 
       />
       <Features />
       <ImageSlider images={images} interval={6000} />
       <Destination />
       <Trip />
       <Footer />
    </>
  );
}

export default Home;
