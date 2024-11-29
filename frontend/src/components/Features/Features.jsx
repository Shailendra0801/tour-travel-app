import "./Styles/Features.css";
import Card from "./Card/Card";
import Header from "./Header/Header";


function Features() {
    const cardsData = [
        {
          icon: '', // Replace icon
          title: 'Since 2004',
          description: 'With 20 years of experience, we offer tailored tours to explore the best tourist spots.',
        },
        {
          icon: 'calendar.svg', 
          title: 'Trusted Journeys',
          description: 'Your trusted tour and travel partner, offering unforgettable experiences to a growing, loyal clientele.',
        },
        {
          icon: 'document.svg', 
          title: '40+ Must-Visit Tourist Spots',
          description: 'Explore 40+ breathtaking tourist spots for unforgettable travel adventures.',
        },
      ];

      return (
        <div className="features">
            <div className="container">
                <Header />
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
      )
}

export default Features;

