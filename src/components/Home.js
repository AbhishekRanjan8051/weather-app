import React from "react";
import "./home.css";
// import { Card } from "react-bootstrap";
// import umbrella from "../assests/img/umbrella.png";
import { Navbar } from "./Navbar/Navbar";
export const Home = () => {
  
 

  return (
    <>
      <div className="home">
        <Navbar />
        {/* <div className="firstCard">
          <Card>
            <img className="img" width={500} src={umbrella} alt="" />
          </Card>
        </div>
        <div className="secondCard">
          <Card>
            <img
              width={200}
              style={{ background: "transparent" }}
              src={umbrella}
              alt=""
            />
          </Card>
        </div> */}
      </div>
    </>
  );
};
