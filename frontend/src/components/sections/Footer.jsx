import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const contactInfo = {
    email: "contact@yourwebsite.com",
    phone: "+1 234 567 890",
    address: "123 Your Street, City, Country",
  };


  const otherLinks = [
    { href: "/", text: "Terms of Services" },
    { href: "/", text: "Privacy Policy" },
  ];

  return (
    <div className="footer">
      <div className="bottom">
        <div className="FLEX">
          <h1 className="font-bold text-xl">SunRaj Tours and Travels</h1>
          <p>Embark on unforgettable journeys.</p>
        </div>
        
        <div>
          <h4>Contact Us</h4>
          <p>email: { contactInfo.email}</p>
          <p>Phone: {contactInfo.phone}</p>
          
        </div>
        <div>
        <h4>Follow Us</h4>
          <a href="https://www.facebook.com/yourpage" target="_blank">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
          <a href="https://www.twitter.com/yourpage" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
        </div>
        <div>
          <h4>Others</h4>
          <Link to='/terms'>Terms and Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;