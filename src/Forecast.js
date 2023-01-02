import "./App.css";
import "./Forecast.css";
import React from "react";

import stormy from "../src/images/stormy.svg";
import sunny from "../src/images/sunny.svg";
import cloudy from "../src/images/cloudy.svg";
import rainy from "../src/images/rainy.svg";

export default function Forecast() {
  return (
    <div>
      <div className="Forecast">
        <div>
          <div className="forecast-highlight">TUE</div>
          <img
            src={stormy}
            alt="Stormy"
            id="weatherConditionId"
            style={{ maxWidth: "60px" }}
          />
          <div>
            <strong className="forecast-highlight">24°C</strong> 22°C
          </div>
        </div>
        <div>
          <div className="forecast-highlight">WED</div>
          <img
            src={sunny}
            alt="Sunny"
            id="weatherConditionId"
            style={{ maxWidth: "60px" }}
          />
          <div>
            <strong className="forecast-highlight">23°C</strong> 24°C
          </div>
        </div>
        <div>
          <div className="forecast-highlight">THU</div>
          <img
            src={cloudy}
            alt="Cloudy"
            id="weatherConditionId"
            style={{ maxWidth: "60px" }}
          />
          <div>
            <strong className="forecast-highlight">24°C</strong> 22°C
          </div>
        </div>
        <div>
          <div className="forecast-highlight">FRI</div>
          <img
            src={cloudy}
            alt="Cloudy"
            id="weatherConditionId"
            style={{ maxWidth: "60px" }}
          />
          <div>
            <strong className="forecast-highlight">25°C</strong> 23°C
          </div>
        </div>
        <div>
          <div className="forecast-highlight">SAT</div>
          <img
            src={rainy}
            alt="Rainy"
            id="weatherConditionId"
            style={{ maxWidth: "60px" }}
          />
          <div>
            <strong className="forecast-highlight">27°C</strong> 25°C
          </div>
        </div>
        <br />
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
