import React from "react";
import Card from "./card";
import image1 from "../images/image1.jpg";
import image3 from "../images/image3.jpg";

const Features = () => {
  return (
    <div className="features">
      <Card image={image1} heading="Coffee" detail="this is details section" />
      <Card image={image3} heading="Coffee" detail="this is details section" />
      <Card image={image1} heading="Coffee" detail="this is details section" />
      <Card image={image3} heading="Coffee" detail="this is details section" />
      <Card image={image1} heading="Coffee" detail="this is details section" />
      <Card image={image3} heading="Coffee" detail="this is details section" />
    </div>
  );
};

export default Features;
