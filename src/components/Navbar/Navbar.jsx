import React from "react";
import "./navbar.css";
import umbrella from "../../assests/img/umbrella.png";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left-navbar">
          <img className="img" width={80} src={umbrella} alt="" />
        </div>
        <div className="right-navbar">
          <button>
            <h3>Weather</h3>
          </button>
          <button>
            <h3>Cities</h3>
          </button>
          <button>
            <h3>Setting</h3>
          </button>
        </div>
      </div>
    </>
  );
};
