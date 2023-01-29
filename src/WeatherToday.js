import React, { useEffect, useState } from "react";
import "./App.css";
import "./WeatherToday.css";
import FormattedDate from "./FormattedDate";

import rainy from "../src/images/rainy.svg";
import stormy from "../src/images/stormy.svg";
import sunny from "../src/images/sunny.svg";
import cloudy from "../src/images/cloudy.svg";
import partly_cloudy from "../src/images/partly_cloudy.svg";
import snowy from "../src/images/snowy.svg";
import foggy from "../src/images/foggy.svg";

export default function WeatherToday(props) {
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    props.changeUnits(units);
  }, [units]); // eslint-disable-line react-hooks/exhaustive-deps

  function setRealFeelIcon() {
    if (units === "metric") {
      return "C";
    } else {
      return "F";
    }
  }

  function setWindIcon(response) {
    if (units === "metric") {
      return Math.round(response) + "m/s";
    } else {
      return Math.round(response) + "ft/s";
    }
  }

  function displayForecastIcon(response) {
    switch (response) {
      case "01n":
        return sunny;
      case "01d":
        return sunny;
      case "02d":
        return partly_cloudy;
      case "02n":
        return partly_cloudy;
      case "03d":
        return cloudy;
      case "03n":
        return cloudy;
      case "04d":
        return cloudy;
      case "09d":
        return rainy;
      case "09n":
        return rainy;
      case "10d":
        return rainy;
      case "10n":
        return rainy;
      case "11d":
        return stormy;
      case "11n":
        return stormy;
      case "13d":
        return snowy;
      case "13n":
        return snowy;
      case "50d":
        return foggy;
      case "50n":
        return foggy;
      default:
        return rainy;
    }
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("metric");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("imperial");
  }

  if (props.weatherData.ready) {
    return (
      <div className="WeatherToday">
        <h1 className="city">{props.weatherData.city}</h1>
        <p className="date">
          <FormattedDate date={props.weatherData.date} />
        </p>

        <img
          src={displayForecastIcon(props.weatherData.weatherIcon)}
          alt="Weather Icon"
          width="210px"
        />

        <div className="temperature-today">
          <span className="temperature">
            {Math.round(props.weatherData.temperature)}
          </span>

          <span className="temperature-scale">
            <a href="/" id="celsius-link" onClick={convertToCelsius}>
              °C
            </a>
            &nbsp;|&nbsp;
            <a href="/" id="fahrenheit-link" onClick={convertToFahrenheit}>
              F
            </a>
          </span>
        </div>
        <div className="weather-condition" id="descriptionId">
          {props.weatherData.weatherCondition}
        </div>

        <div className="additional-information">
          <div>
            Real feel:{" "}
            <span id="realFeelId">
              {Math.round(props.weatherData.realFeel)}
            </span>
            °{setRealFeelIcon()}
          </div>
          <div>
            Humidity: <span id="humidityId">{props.weatherData.humidity}</span>%
          </div>
          <div>
            Wind: <span id="windId">{setWindIcon(props.weatherData.wind)}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading";
  }
}
