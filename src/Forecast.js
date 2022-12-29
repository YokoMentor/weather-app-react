import "./App.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div>
        <div class="forecast-highlight">TUE</div>
        <img src="src/stormy.svg" alt="Sunny" style={{ maxWidth: "60px" }} />
        <div>
          <strong class="forecast-highlight">24°C</strong> 22°C
        </div>
      </div>
      <div>
        <div class="forecast-highlight">WED</div>
        <img src="src/rainy.svg" alt="Sunny" style={{ maxWidth: "60px" }} />
        <div>
          <strong class="forecast-highlight">23°C</strong> 24°C
        </div>
      </div>
      <div>
        <div class="forecast-highlight">THU</div>
        <img src="src/cloudy.svg" alt="Cloudy" style={{ maxWidth: "60px" }} />
        <div>
          <strong class="forecast-highlight">24°C</strong> 22°C
        </div>
      </div>
      <div>
        <div class="forecast-highlight">FRI</div>
        <img src="src/sunny.svg" alt="Cloudy" style={{ maxWidth: "60px" }} />
        <div>
          <strong class="forecast-highlight">25°C</strong> 23°C
        </div>
      </div>
      <div>
        <div class="forecast-highlight">SAT</div>
        <img src="src/sunny.svg" alt="Rainy" style={{ maxWidth: "60px" }} />
        <div>
          <strong class="forecast-highlight">27°C</strong> 25°C
        </div>
      </div>
      <div>
        <br />
        <a
          href="https://github.com/YokoMentor/weather-app-react"
          className="source-code"
          target="_blank"
          rel="noreferrer"
        >
          Github repository
        </a>
      </div>
    </div>
  );
}
