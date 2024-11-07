import React from "react";
import "./Destination.css";
import { Link } from "react-router-dom";

const DestinationData = (props) => {
  return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>

      <Link className="image" to={`/details/${props.name}`}>
        <img alt="img" src={props.img1} />
        <img alt="img" src={props.img2} />
      </Link>
    </div>
  );
};

export default DestinationData;
