import React from "react";
import "./Destination.css";
import { Link } from "react-router-dom";

const DestinationData = (props) => {

  return (
    <div className={props.className} >
      <Link className="des-text" to={`/details/${props.name}`}>
        <h1 className="headingg">{props.heading}</h1>
        <p className="p-3">{props.text}</p>
      </Link>

      <Link className="image" to={`/details/${props.name}`}>
        <img alt="img" src={props.img1} />
        <img alt="img" src={props.img2} />
      </Link>
    </div>
  );
};

export default DestinationData;


