import "./App.css";
import "./Search.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.submit(event);
  }

  function handleChange(event) {
    props.change(event);
  }

  return (
    <div className="Search">
      <form id="city-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          id="city-input"
          autocomplete="off"
          onChange={handleChange}
        />
        <FontAwesomeIcon className="fa-sharp fa-solid fa-location-dot location" />
      </form>
    </div>
  );
}
