import React from "react";

const TourDetail = ({ title, locations, prices, imageUrl, description }) => {
  return (
    <div className="tourContainer w-screen p-5 FLEX flex-col">
      <h1 className="text-xl font-bold">{title}</h1>
      <section className="m-8">
        {description}
      </section>
      <div className="w-11/12 FLEX">
        <img src={`/image/${imageUrl}`} alt="Tour" />
      </div>

      <div className="tour-details">
        <div className="tour-info w-11/12">s
          <h2 className="text-lg font-bold">Locations to Visit:</h2>
          <div>
            {locations.map((location, index) => (
              <span key={index} className="p-3">{location}</span>
            ))}
          </div>
        </div>

        <div className="tour-prices mt-5">
          <h2>Prices:</h2>
          <ul>
          {Object.entries(prices).map(([vehicle, price], index) => (
            <li key={index}>{vehicle} - {price}</li>
          ))}

          </ul>
        </div>
      </div>
    
    </div>
  );
};

export default TourDetail;

