import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

import "./weather.css";

import city from "../../assests/img/city.png";
export const Weather = () => {
  const [data, setData] = useState([]);
  const [sys, setSys] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // setlong(position.coords.longitude);
      // setlat(position.coords.latitude);
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=56a1b72457882c27f73c03f6543d0cf2`
        )
        .then((res) => {
          // console.log({ res });
          setData(res.data);
          setSys(res.data.sys);
        });
    });
  }, []);

  const timeConvert = (currentTimestamp, check) => {
    currentTimestamp = Date.now();
    let date;
    if (check == "date") {
      date = new Intl.DateTimeFormat("en-IN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(currentTimestamp);
    } else {
      date = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(currentTimestamp);
    }

    return date;
  };

  return (
    <>
      <div className="weather">
        {/* {console.log({data})} */}
        <div className="weather-city">
          <div style={{ display: "flex" }}>
            <img src={city} height="45" alt="" />
            <h1>{data.name}</h1>
          </div>
          <div>
            <h2>Date ➡️ {timeConvert(sys.sunrise, "date")}</h2>
            <h2>Time ➡️ {timeConvert(sys.sunrise)}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
