import "./Styles/Features.css";
import Card from "./Card/Card";

function Features() {
  const cardsData = [
    {
      icon: 'image/destinations.png', // Replace icon
      title: 'Since 2004',
      description: 'With 20 years of experience, we offer tailored tours to explore the best tourist spots.',
    },
    {
      icon: 'image/exp.png', // Replace icon
      title: 'Trusted Journeys',
      description: 'Your trusted tour and travel partner, offering unforgettable experiences to a growing, loyal clientele.',
    },
    {
      icon: 'image/trust.png', // Replace icon
      title: '40+ Must-Visit Tourist Spots',
      description: 'Explore 40+ breathtaking tourist spots for unforgettable travel adventures.',
    },
  ];

  return (
    <div className="features">
      <div className="container">
        <div className="h2-container">
            <h2 className="text-xl">
            A team offering seamless planning and booking for memorable travel experiences.
            </h2><br />
            Our team specializes in seamless planning and hassle-free booking to create unforgettable travel experiences. With personalized options and user-friendly services, we make your journey truly memorable.
        </div>

        {cardsData.map((card, index) => (
            <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default Features;

