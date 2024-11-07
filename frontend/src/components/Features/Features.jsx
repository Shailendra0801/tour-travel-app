import "./Styles/Features.css";
import Card from "./Card/Card";
import Header from "./Header/Header";

function Features() {
    const cardsData = [
        {
          icon: 'coffee.svg', // Replace icon
          title: 'Pro ad constituto',
          description: 'Ne usu illud albucius abhorreant, partiendo scriptorem mel ne.',
        },
        {
          icon: 'calendar.svg', 
          title: 'Eam commodo',
          description: 'Fuisset intellegat delicatissimi ex mea. Cu probo integre ne.',
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

