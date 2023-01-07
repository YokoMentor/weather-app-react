import "./App.css";
import "./WeatherToday.css";
import Search from "./Search";
import FormattedDate from "./FormattedDate";
import React, { useEffect, useState } from "react";
import axios from "axios";

import rainy from "../src/images/rainy.svg";
import stormy from "../src/images/stormy.svg";
import sunny from "../src/images/sunny.svg";
import cloudy from "../src/images/cloudy.svg";
import partly_cloudy from "../src/images/partly_cloudy.svg";
import snowy from "../src/images/snowy.svg";
import foggy from "../src/images/foggy.svg";

export default function WeatherToday(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    search();
  }, [units]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      units: response.data.main.temp,
      weatherIcon: displayForecastIcon(response.data.weather[0].icon),
      weatherCondition: response.data.weather[0].description,
      realFeel: response.data.main.feels_like,
      realFeelIcon: setRealFeelIcon(),
      humidity: response.data.main.humidity,
      wind: setWindIcon(response),
    });
  }

  function setRealFeelIcon() {
    if (units === "metric") {
      return "C";
    } else {
      return "F";
    }
  }

  function setWindIcon(response) {
    if (units === "metric") {
      return Math.round(response.data.wind.speed) + "m/s";
    } else {
      return Math.round(response.data.wind.speed) + "ft/s";
    }
  }

  function onSearchSubmit(event) {
    search();
  }

  function onSearchChange(event) {
    setCity(event.target.value);
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

  async function search() {
    console.log("searching");
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("metric");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("imperial");
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherToday">
        <Search submit={onSearchSubmit} change={onSearchChange} />
        <h1 className="city">{weatherData.city}</h1>
        <p className="date">
          <FormattedDate date={weatherData.date} />
        </p>

        <img src={weatherData.weatherIcon} alt="Weather Icon" width="210px" />

        <div className="temperature-today">
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>

          <span className="temperature-scale">
            <a href="/" id="celsius-link" onClick={convertToCelsius}>
              C°
            </a>
            &nbsp;|&nbsp;
            <a href="/" id="fahrenheit-link" onClick={convertToFahrenheit}>
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
            <span id="realFeelId">{Math.round(weatherData.realFeel)}</span>
            {weatherData.realFeelIcon}°
          </div>
          <div>
            Humidity: <span id="humidityId">{weatherData.humidity}</span>%
          </div>
          <div>
            Wind: <span id="windId">{weatherData.wind}</span>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
