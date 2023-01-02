import "./App.css";
import React from "react";
import WeatherToday from "./WeatherToday";
import Forecast from "./Forecast";

import bg from "./images/bg.jpg";

export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <WeatherToday defaultCity="Berlin" />
        <Forecast />
      </div>
    </div>
  );
}
