import React from "react";
import "./navbar.css";
import umbrella from "../../assests/img/umbrella.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left-navbar">
          <Link to="/">
            <img className="img" width={80} src={umbrella} alt="" />
          </Link>
        </div>
        <div className="right-navbar">
          <Link to="/weather">
            <h3>Weather</h3>
          </Link>

          <Link to="/city">
            <h3>City</h3>
          </Link>
          <Link to="setting">
            <h3>Setting</h3>
          </Link>
        </div>
      </div>
    </>
  );
};
