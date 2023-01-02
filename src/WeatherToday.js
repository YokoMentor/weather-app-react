import "./App.css";
import "./WeatherToday.css";
import Search from "./Search";
import FormattedDate from "./FormattedDate";
import React, { useState } from "react";
import axios from "axios";

import rainy from "../src/images/rainy.svg";

export default function WeatherToday(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      weatherCondition: response.data.weather[0].description,
      realFeel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function onSearchSubmit(event) {
    search();
  }

  function onSearchChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherToday">
        <Search submit={onSearchSubmit} change={onSearchChange} />
        <h1 className="city">{weatherData.city}</h1>
        <p className="date">
          <FormattedDate date={weatherData.date} />
        </p>

        <img
          src={rainy}
          alt="Weather Condition"
          width="210px"
          id="weatherConditionId"
        />

        <div className="temperature-today">
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          °
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
          {weatherData.weatherCondition}
        </div>

        <div className="additional-information">
          <div>
            Real feel:{" "}
            <span id="realFeelId">{Math.round(weatherData.realFeel)}</span>C°
          </div>
          <div>
            Humidity: <span id="humidityId">{weatherData.humidity}</span>%
          </div>
          <div>
            Wind: <span id="windId">{Math.round(weatherData.wind)}</span> m/s
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
