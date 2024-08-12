import React, { useEffect, useState } from "react";
import axios from "axios";

import "./weather.css";

import city from "../../assests/img/city.png";
import { Card, Button, Form } from "react-bootstrap";
import { TempChange } from "./tempChangeModal";

export const Weather = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [sys, setSys] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [tempUnit, setTempUnit] = useState("Celsius"); // State for temperature unit

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=56a1b72457882c27f73c03f6543d0cf2`,
        )
        .then((res) => {
          setData(res.data);
          setSys(res.data.sys);
          setTemperature(res.data.main);
        });
    });
  }, []);

  const kelvintocelsius = (val) => (Number(val) - 273.15).toFixed(2);
  const kelvintofahrenheit = (val) => ((Number(val) - 273.15) * 9) / 5 + 32;

  const convertTemperature = (val) => {
    if (tempUnit === "Celsius") return kelvintocelsius(val);
    if (tempUnit === "Fahrenheit") return kelvintofahrenheit(val).toFixed(2);
    return Number(val).toFixed(2); // Kelvin
  };

  const handleTempUnitChange = (e) => {
    setTempUnit(e.target.value);
  };

  return (
    <div className="weather-container">
      <div className="weather-city">
        {data.name && (
          <div className="city-info">
            <img src={city} height="45" alt="City" className="city-icon" />
            <h1 className="city-name">{data.name}</h1>
          </div>
        )}
        {sys.sunrise && (
          <div className="date-time-info">
            <h2>Date: {new Date().toLocaleDateString()}</h2>
            <h2>Time: {new Date().toLocaleTimeString()}</h2>
          </div>
        )}
      </div>

      <Card className="temp-card">
        <Form className="temp-unit-form">
          <Form.Check
            type="radio"
            id="celsius"
            label="Celsius"
            value="Celsius"
            checked={tempUnit === "Celsius"}
            onChange={handleTempUnitChange}
          />
          <Form.Check
            type="radio"
            id="fahrenheit"
            label="Fahrenheit"
            value="Fahrenheit"
            checked={tempUnit === "Fahrenheit"}
            onChange={handleTempUnitChange}
          />
          <Form.Check
            type="radio"
            id="kelvin"
            label="Kelvin"
            value="Kelvin"
            checked={tempUnit === "Kelvin"}
            onChange={handleTempUnitChange}
          />
        </Form>

        <div className="temp-div">
          {temperature.temp && (
            <span>
              <strong>Temp: </strong>
              {convertTemperature(temperature.temp)} &#176;
              {tempUnit.charAt(0)}
            </span>
          )}
          <span>
            <strong>Max Temp: </strong>
            {convertTemperature(temperature.temp_min)} &#176;
            {tempUnit.charAt(0)}
          </span>
          <span>
            <strong>Min Temp: </strong>
            {convertTemperature(temperature.temp_max)} &#176;
            {tempUnit.charAt(0)}
          </span>
        </div>
      </Card>
      <TempChange show={show} setShow={setShow} />
    </div>
  );
};
