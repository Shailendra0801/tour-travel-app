import React from "react";
import { Link } from "react-router-dom";
import "./TourDetail.css";

const TourDetail = ({ title, heading, locations, prices, imageUrl, description }) => {
 
  return (
    <div className="tourContainer w-screen p-5 FLEX flex-col">
      <h1 className="text-xl font-bold">{heading}</h1>
      <section className="m-8">
        {description}
      </section>
      <div className="w-11/12 FLEX">
        <img src={`/image/${imageUrl}`} alt="Tour" />
      </div>

      <div className="tour-details">
        <div className="flex justify-evenly">

          <div className="tour-info w-11/12">
            <h2 className="text-lg font-bold">Locations to Visit:</h2>
            <div>
              {locations.map((location, index) => (
                <span key={index} className="p-3">{location}</span>
              ))}
            </div>
          </div>

          <div className="tour-prices">
            <h2>Prices:</h2>
            <ul>
            {Object.entries(prices).map(([vehicle, price], index) => (
              <li key={index}>{vehicle} - {price}</li>
            ))}

            </ul>
          </div>
        </div>
        <Link 
          className="bookButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          to={`/booking/${title}`}>
          Book Tour
        </Link>
      </div>
    
    </div>
  );
};

export default TourDetail;

