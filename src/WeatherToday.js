import "./App.css";
import "./WeatherToday.css";
import React from "react";

import rainy from "../src/images/rainy.svg";

export default function WeatherToday() {
  return (
    <div className="WeatherToday">
      <h1 className="city">BERLIN</h1>
      <p className="date">Sunday 1 January</p>

      <img
        src={rainy}
        alt="Weather Condition"
        width="210px"
        id="weatherConditionId"
      />

      <div className="temperature-today">
        <span className="temperature">28</span>°
        <span className="temperature-scale">
          <a href="/" rel="noreferrer" id="celsius-link">
            C
          </a>
          &nbsp;|&nbsp;
          <a href="/" rel="noreferrer" id="fahrenheit-link">
            F
          </a>
        </span>
      </div>
      <div className="weather-condition" id="descriptionId">
        Rainy
      </div>

      <div className="additional-information">
        <div>
          Real feel: <span id="realFeelId">29</span>°
        </div>
        <div>
          Humidity: <span id="humidityId">47</span>%
        </div>
        <div>
          Wind: <span id="windId">4</span> m/s
        </div>
      </div>
    </div>
  );
}
