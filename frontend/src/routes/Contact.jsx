import Hero from "../components/Hero/Hero";
import Navbar from "../components/sections/Navbar";
import AboutImg from "../assets/Hero.jpeg";
import Footer from "../components/sections/Footer";
import ContactForm from "../components/ContactUs/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
       <Hero 
       cName="hero-mid" 
       heroImg={AboutImg}
       title="Contact Us"
       btnClass="hide" 
       />
       <ContactForm />
       <Footer />
    </>
  );
}

export default Contact;
