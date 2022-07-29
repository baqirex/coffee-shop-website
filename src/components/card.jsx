import React from "react";

const Card = ({ image, heading, detail }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} height="300px" width="250px" />
      </div>
      <div className="card-heading">
        <h1>{heading}</h1>
      </div>
      <div className="card-detail">
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default Card;
