import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const contactInfo = {
    email: "sunrajtoursandtravels@gmail.com",
    phone: "9927473488, 9759224111, 9012765558",
    address: "Bangali Colony, Sukhatal, Nainital Pin-263002",
  };

  return (
    <div className="footer">
      <div className="bottom">
        <div className="FLEX">
          <h1 className="font-bold text-xl">SunRaj Taxi Services</h1>
          <p>Embark on unforgettable journeys.</p>
          <h4>Address</h4>
          <p>{contactInfo.address}</p>
        </div>
        
        <div>
          <h4>Contact Us</h4>
          <p>email: { contactInfo.email}</p>
          <p>Phone: </p>
          <p>{contactInfo.phone}</p>
          
        </div>
        <div>
        <h4>Follow Us</h4>
          <a href="https://wa.me/9012765558" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram}/> Instagram
          </a>
        </div>
        <div>
          <h4>Others</h4>
          <Link to='/terms'>Terms and Conditions</Link>
          <Link to='/privacy'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;