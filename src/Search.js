import React from "react";
import "./App.css";
import "./Search.css";

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
      </form>
    </div>
  );
}
