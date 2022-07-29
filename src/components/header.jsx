import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="head-content">
        <h1 className="heading">Everything is beautiful with cooffee !</h1>
      </div>
      <div className="tagline">
        <p>Coffee that fuels your dreams.</p>
      </div>
      <button className="cool-button">More Taste</button>
    </div>
  );
};

export default Header;
