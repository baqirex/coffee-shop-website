import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="dbx">
        <h1 className="bx"></h1>
      </div>
      <ul>
        <li>
          <a className="cool-link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="cool-link" href="#">
            Coffee
          </a>
        </li>
        <li>
          <a className="cool-link" href="#">
            About
          </a>
        </li>
        <li>
          <a className="cool-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
