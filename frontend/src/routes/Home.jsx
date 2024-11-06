// import Destination from "../components/destination/Destination";
// import Footer from "../components/sections/Footer";
// import Hero from "../components/Hero";
// import Navbar from "../components/sections/Navbar";
// import Trip from "../components/trip/Trip";

// function Home() {



//   return (
//     <>
//        <Navbar />
//        <Hero 
//        cName="hero" 
//        heroImg="https://media.istockphoto.com/id/177337487/photo/plane.jpg?s=612x612&w=0&k=20&c=q7ir3NaxrRSHrzfgQ7CM34ghShHA8PpQNC4Z4D6BNyI="
//        title="Your Journey Your Story"
//        text="Choose Your Favourite Destination" 
//        buttonText="Travel Plan"
//        url="/"
//        btnClass="show" 
//        />
//        <Destination />
//        <Trip />
//        <Footer />
//     </>
//   );
// }

// export default Home;



import Destination from "../components/destination/Destination";
import Footer from "../components/sections/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/sections/Navbar";
import Trip from "../components/trip/Trip";
import ImageSlider from "../components/Slider/ImageSlider";

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/4.jpg';


function Home() {

  const images = [
    img1,
    img2,
    img3,
    img3
  ];

  return (
    <>
       
       <Hero 
       cName="hero" 
       heroImg="https://media.istockphoto.com/id/177337487/photo/plane.jpg?s=612x612&w=0&k=20&c=q7ir3NaxrRSHrzfgQ7CM34ghShHA8PpQNC4Z4D6BNyI="
       title="Your Journey Your Story"
       text="Choose Your Favourite Destination" 
       buttonText="Travel Plan"
       url="/"
       btnClass="show" 
       />
       <ImageSlider images={images} interval={6000} />
       <Destination />
       <Trip />
       <Footer />
    </>
  );
}

export default Home;
