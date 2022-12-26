import "./App.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="city-form">
        <input
          type="text"
          placeholder="Search"
          id="city-input"
          autocomplete="off"
        />
        <a href="/" id="locationId">
          <i class="fa-sharp fa-solid fa-location-dot location"></i>
        </a>
      </form>
    </div>
  );
}
