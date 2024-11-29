import React, { useState } from "react";
import descriptions from "./data"; // Import the data
import "./infoCard.css"; // Ensure the CSS below is saved in this file.

const Desc = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openCard = (id) => {
    setSelectedCard(descriptions.find((desc) => desc.id === id));
  };

  const closeCard = () => {
    setSelectedCard(null);
  };

  return (
    <div className={`app-container ${selectedCard ? "blur" : ""}`}>
      {descriptions.map((site) => (
        <h1
          key={site.id}
          className="heading"
          onClick={() => openCard(site.id)}
        >
          {site.title}
        </h1>
      ))}

      {selectedCard && (
        <div className="card-overlay">
          <div className="card">
            <button className="close-btn" onClick={closeCard}>
              ✖
            </button>
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="card-image"
            />
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Desc;
