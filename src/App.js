import "./App.css";
import React from "react";

import Search from "./Search";
import WeatherToday from "./WeatherToday";
import Forecast from "./Forecast";

import bg from "./images/bg.jpg";

export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <Search />
        <WeatherToday defaultCity="Berlin" />
        <Forecast />
      </div>
    </div>
  );
}
