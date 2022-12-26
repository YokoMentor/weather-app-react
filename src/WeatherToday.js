import "./App.css";
import Rainy from "../src/rainy.svg";

export default function WeatherToday() {
  return (
    <div className="WeatherToday">
      <h1>BERLIN</h1>
      <p class="date"></p>

      <img
        src={Rainy}
        alt="Weather Condition"
        width="160px"
        id="weatherConditionId"
      />

      <div class="temperature-today">
        <span class="temperature">28</span>°
        <span class="temperature-scale">
          <a href="/" id="celsius-link">
            C
          </a>
          &nbsp;|&nbsp;
          <a href="/" id="fahrenheit-link">
            F
          </a>
        </span>
      </div>
      <div class="weather-condition" id="descriptionId">
        Rainy
      </div>

      <div class="additional-information">
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
