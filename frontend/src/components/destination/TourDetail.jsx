import React from "react";
import { Link } from "react-router-dom";
import "./TourDetail.css";

const TourDetail = ({ title, heading, locations, prices, imageUrl, description }) => {
  return (
    <div className="tourContainer w-full p-5 flex flex-col">
      <h1 className="text-xl font-bold p-5">{heading}</h1>
      <section className="m-8 text-sm md:text-base">
        {description}
      </section>
      <div className="w-full flex justify-center">
        <img src={`/image/${imageUrl}`} alt="Tour" className="responsive-image" />
      </div>

      <div className="tour-details mt-8">
        <div className="flex flex-col md:flex-row justify-evenly">

          <div className="tour-info w-full md:w-1/2 p-2">
            <h2 className="text-lg font-bold">Locations to Visit:</h2>
            <div>
              {locations.map((location, index) => (
                <span key={index} className="p-1 block">{location}</span>
              ))}
            </div>
          </div>

          <div className="tour-prices w-full md:w-1/2 p-2">
            <h2 className="text-lg font-bold">Prices:</h2>
            <ul>
              {Object.entries(prices).map(([vehicle, price], index) => (
                <li key={index} className="p-1">{vehicle} - {price}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link 
          className="bookButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0"
          to={`/booking/${title}`}>
          Book Tour
        </Link>
      </div>
    </div>
  );
};

export default TourDetail;