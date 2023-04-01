import React, { useEffect, useState } from "react";
import axios from "axios";

import "./weather.css";

import city from "../../assests/img/city.png";
import { Card, Button } from "react-bootstrap";
import { TempChange } from "./tempChangeModal";
export const Weather = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [sys, setSys] = useState([]);
  const [temperature, setTemperature] = useState([]);
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
          setSys(res.data.sys);
          setTemperature(res.data.main);
        });
    });
  }, []);

  const kelvintocelius = (val) => {
    const calcius = (Number(val) - 273.15).toFixed(2);
    return calcius;
  };

  const timeConvert = (currentTimestamp, check) => {
    currentTimestamp = Date.now();
    let date;
    if (check === "date") {
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

  const handleDegreeChange = () => {
    console.log("hello");
    setShow(true);
  };
  return (
    <>
      <div className="weather">
        {/* {console.log({data})} */}
        <div className="weather-city">
          <div style={{ display: "flex" }}>
            {data.name && (
              <>
                <img src={city} height="45" alt="" />
                <h1>{data.name}</h1>
              </>
            )}
          </div>
          <div>
            {sys.sunrise && (
              <>
                <h2>Date ➡️ {timeConvert(sys.sunrise, "date")}</h2>
                <h2>Time ➡️ {timeConvert(sys.sunrise)}</h2>
              </>
            )}
          </div>
        </div>
        <div>
          <Card className="temp-card">
            <div className="temp-change">
              <Button
                onClick={() => {
                  handleDegreeChange();
                }}
              >
                Change Temp Unit
              </Button>
            </div>
            <div className="temp-div">
              {temperature.temp && (
                <span>
                  <strong>Temp. :-</strong>
                  {kelvintocelius(temperature.temp)} &#8451;
                </span>
              )}

              <span>
                <strong>Max. Temp. :-</strong>
                {kelvintocelius(temperature.temp_min)} &#8451;
              </span>
              <span>
                <strong>Min. Temp. :-</strong>
                {kelvintocelius(temperature.temp_max)} &#8451;
              </span>
            </div>
          </Card>
        </div>
        <TempChange show={show} setShow={setShow} />
      </div>
    </>
  );
};
