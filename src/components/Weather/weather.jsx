import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import "./weather.css";
export const Weather = () => {
  const [data, setData] = useState([]);
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
          console.log({ res });
          setData(res.data);
        });
    });
  }, []);

  return (
    <>
      <div className="weather">
        {/* {console.log({data})} */}
        <div className="weather-city">
          <div>
            <h1>{data.name}</h1>
          </div>
          <div>
            <h2>{data.name}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
