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
  };

  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-9">
              <div className="container-fluid">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    autoComplete="off"
                    placeholder="Enter city name..."
                    aria-label="Search"
                  />
                  <div className="col-1"></div>
                </form>
              </div>
            </div>
          </div>
          <p className="day">{weatherData.day}</p>
          <p className="date">{weatherData.date}</p>
          <div className="current-time">
            <p className="time">{weatherData.time}</p>
            <p className="am-pm">{weatherData.amPm}</p>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <hr />
            </div>
            <div className="col-4"></div>
          </div>

          <h1>{weatherData.city}</h1>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <hr />
            </div>
            <div className="col-4"></div>
          </div>
          <h3>{weatherData.condition}</h3>

          <img
            src={weatherData.imgUrl}
            alt="{weatherData.condition}"
            className="weather-icon"
          />

          <div className="row h-100 current-weather-data">
            <div className="col-3"></div>
            <div className="col-sm-4 my-auto">
              <span className="temperature">
                <span>{weatherData.temp}</span>°{" "}
                <span className="temp-unit">F</span>
              </span>
            </div>

            <div className="col-sm-3 my-auto weather-details">
              low temp: <span>{weatherData.lowTemp}</span>°
              <span className="low-unit">F</span>
              <br />
              high temp: <span>{weatherData.highTemp}</span>°
              <span className="high-unit">F</span>
              <br />
              humidity: <span>{weatherData.humidity}</span>%<br />
              wind: <span>{weatherData.windSpeed}</span>
              <span className="wind-unit"> mph</span>
            </div>
            <div className="col-2"></div>
          </div>

          <div className="row forecast-line">
            <div className="col-2"></div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2"></div>
          </div>

          <div></div>
        </div>
      </div>

      <p className="coded-by">
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
      </p>
    </div>
  );
}
