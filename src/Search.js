import "./App.css";
import "./Search.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <FontAwesomeIcon className="fa-sharp fa-solid fa-location-dot location" />
      </form>
    </div>
  );
}
