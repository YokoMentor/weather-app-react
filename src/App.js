import "./App.css";

import Search from "./Search";
import WeatherToday from "./WeatherToday";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <WeatherToday />
        <Forecast />
      </div>
    </div>
  );
}
