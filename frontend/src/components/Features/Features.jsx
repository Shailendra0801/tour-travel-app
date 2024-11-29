import "./Styles/Features.css";
import Card from "./Card/Card";
import Header from "./Header/Header";

function Features() {
    const cardsData = [
        {
          icon: 'coffee.svg', // Replace icon
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
          title: 'Reformidans eis',
          description: 'Facet patrio causae ei sed. Vix ex quidam detraxit, vis ad nostro laoreet.',
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

