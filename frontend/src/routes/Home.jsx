import Destination from "../components/destination/Destination";
import Footer from "../components/sections/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/sections/Navbar";
import Trip from "../components/trip/Trip";
import ImageSlider from "../components/Slider/ImageSlider";
import Features from "../components/Features/Features";

import img1 from '../assets/Nainadevi.jpeg';
import img2 from '../assets/Chauli_ki_Jal.jpeg';
import img3 from '../assets/khuruptal.jpeg';
import Img4 from '../assets/topView.jpeg'

import HomeImage from '../assets/Hero.jpeg'

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
       heroImg={HomeImage}
      title="SunRaj Tour and Travels"
       text="EMBARK ON UNFORGETTABLE JOURNEYS" 
       buttonText="Get Started"
       url="/"
       btnClass="hide" 
       />
       <Features />
       <ImageSlider images={images} interval={2000} />
       <Destination />
       <Trip />
       <Footer />
    </>
  );
}

export default Home;
