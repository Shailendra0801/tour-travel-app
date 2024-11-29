import './Styles/Card.css'; 

const Card = ({ icon, title, description }) => {
  console.log(icon);
  return (
    <div className="card">
    
      <div className="icon-container FLEX">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;