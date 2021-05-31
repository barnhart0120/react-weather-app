import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(
      `The current temperature in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}° F`
    );
  }
  let apiKey = `9ed9d5e913ce9b755219ba0aa51c7cc7`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return <h2>Weather component</h2>;
}
