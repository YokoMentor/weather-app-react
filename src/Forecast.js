import "./App.css";
import "./Forecast.css";
import React from "react";

import rainy from "../src/images/rainy.svg";
import stormy from "../src/images/stormy.svg";
import sunny from "../src/images/sunny.svg";
import cloudy from "../src/images/cloudy.svg";
import partly_cloudy from "../src/images/partly_cloudy.svg";
import snowy from "../src/images/snowy.svg";
import foggy from "../src/images/foggy.svg";

export default function Forecast(props) {
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
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

  function setRealFeelIcon(units) {
    if (units === "metric") {
      return "C";
    } else {
      return "F";
    }
  }

  return (
    <div>
      <div className="Forecast">
        {props.forecastData.map((forecast) => (
          <div>
            <div className="forecast-highlight">{formatDay(forecast.date)}</div>
            <img
              src={displayForecastIcon(forecast.icon)}
              alt="Stormy"
              id="weatherConditionId"
              style={{ maxWidth: "60px" }}
            />
            <div>
              <strong className="forecast-highlight">
                {Math.round(forecast.temperatureMax)}°
                {setRealFeelIcon(forecast.units)}
              </strong>{" "}
              {Math.round(forecast.temperatureMin)}°
              {setRealFeelIcon(forecast.units)}
            </div>
          </div>
        ))}
      </div>

      <div>
        <a
          href="https://github.com/YokoMentor/weather-app-react"
          className="source-code"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        &nbsp;<span className="source-code">by Maarja</span>
      </div>
    </div>
  );
}
