import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(
      `The current temperature in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}° F`
    );
  }
  let apiKey = `9ed9d5e913ce9b755219ba0aa51c7cc7`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Portland&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  let weatherData = {
    day: "Monday",
    date: "May 11, 2021",
    time: "1:00",
    amPm: "PM",
    city: "Portland",
    condition: "Clear",
    imgUrl:
      "https://github.com/barnhart0120/Vanilla-Weather-App/blob/main/Vanilla%20Weather%20App%20icons/Clear.png?raw=true",
    temp: 73,
    lowTemp: 48,
    highTemp: 75,
    humidity: 40,
    windSpeed: 8,
    windUnit: "mph",
  };

  return (
    <div className="Weather">
      <input
        type="search"
        className="search-bar"
        autoComplete="off"
        placeholder="Enter city name..."
      />
      <p className="day">{weatherData.day}</p>
      <p className="date">{weatherData.date}</p>
      <p className="time">
        {weatherData.time} {weatherData.amPm}
      </p>
      <hr className="horizontal-line" />
      <h1>{weatherData.city}</h1>
      <hr className="horizontal-line" />
      <h3>{weatherData.condition}</h3>
      <img
        src={weatherData.imgUrl}
        alt="{weatherData.condition}"
        className="weather-icon"
      />

      <div className="current-temperature">
        {weatherData.temp}° <span className="temp-unit">F</span>
      </div>

      <div className="current-weather-data">
        <ul>
          <li>
            low temp: {weatherData.lowTemp}° <span className="low-unit">F</span>
          </li>
          <li>
            high temp: {weatherData.highTemp}°{" "}
            <span className="high-unit">F</span>
          </li>
          <li>humidity: {weatherData.humidity}%</li>
          <li>
            wind: {weatherData.windSpeed} {weatherData.windUnit}
          </li>
        </ul>
      </div>
      <hr className="bottom-horizontal-line" />

      <div className="coded-by">
        <a
          href="https://github.com/barnhart0120/Vanilla-Weather-App"
          target="_blank"
          rel="noreferrer noopener"
          className="code-link"
        >
          open-source code
        </a>
        <br />
        Danielle Barnhart
        <br />
        2021
      </div>
    </div>
  );
}
