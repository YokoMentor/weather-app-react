import "./App.css";
import axios from "axios";
import WeatherToday from "./WeatherToday";
import Forecast from "./Forecast";
import React, { useEffect, useState } from "react";

import bg from "./images/bg.jpg";
import Search from "./Search";

export default function App() {
  const [city, setCity] = useState("Berlin");
  const [units, setUnits] = useState("metric");
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    search(units);
  }, [units]); // eslint-disable-line react-hooks/exhaustive-deps

  function onSearchSubmit(event) {
    search(units);
  }

  function onSearchChange(event) {
    setCity(event.target.value);
  }

  function onChangeUnit(customUnits) {
    setUnits(customUnits);
  }

  async function search(customUnits) {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${customUnits}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      units: response.data.main.temp,
      weatherIcon: response.data.weather[0].icon,
      weatherCondition: response.data.weather[0].description,
      realFeel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });

    getForecast(response.data.coord.lat, response.data.coord.lon, units);
  }

  function getForecast(latitude, longitude, units) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleForecastResponse);
  }

  function handleForecastResponse(response) {
    const forecastData = [];

    response.data.daily.forEach((element, index) => {
      if (index < 6 && index > 0) {
        const day = {
          date: element.dt,
          temperature: element.temp.day,
          units: units,
          icon: element.weather[0].icon,
          temperatureMin: element.temp.min,
          temperatureMax: element.temp.max,
        };
        forecastData.push(day);
      }
    });
    setForecast(forecastData);
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <Search submit={onSearchSubmit} change={onSearchChange} />
        <WeatherToday
          weatherData={weatherData}
          changeUnits={onChangeUnit}
          defaultCity="Berlin"
        />
        <Forecast forecastData={forecast} />
      </div>
    </div>
  );
}
