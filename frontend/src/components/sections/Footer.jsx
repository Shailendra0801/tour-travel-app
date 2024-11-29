import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    { href: "/", iconClass: "fa-brands fa-facebook-square" },
    { href: "/", iconClass: "fa-brands fa-instagram-square" },
    { href: "/", iconClass: "fa-brands fa-behance-square" },
    { href: "/", iconClass: "fa-brands fa-twitter-square" },
  ];

  const contactInfo = {
    email: "contact@yourwebsite.com",
    phone: "+1 234 567 890",
    address: "123 Your Street, City, Country",
  };

  const followLinks = [
    { href: "https://www.facebook.com/yourpage", iconClass: "fab fa-facebook" },
    { href: "https://www.twitter.com/yourpage", iconClass: "fab fa-twitter" },
    { href: "https://www.instagram.com/yourpage", iconClass: "fab fa-instagram" },
  ];

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
          <p>Email: {contactInfo.email}</p>
          <p>Phone: {contactInfo.phone}</p>
          
        </div>
        <div>
        <h4>Follow Us</h4>
          {/* {followLinks.map(({ href, iconClass }, index) => (
            <a key={index} href={href} target="_blank" rel="noopener noreferrer">
              <i className={iconClass}></i>
            </a>
          ))} */}
          <a href="https://www.facebook.com/yourpage" target="_blank"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com/yourpage" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/yourpage" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>
        <div>
          <h4>Others</h4>
          {otherLinks.map(({ href, text }, index) => (
            <a key={index} href={href}>{text}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;