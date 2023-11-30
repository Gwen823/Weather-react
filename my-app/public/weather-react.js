import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function WeatherReact() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState("false");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb0df6985c2eab6a171d64a6bacbb4e1&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />

      <button type="Submit"> Search </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature {Math.round(weather.temperature)} C</li>
          <li>Description:{weather.desciption}</li>
          <li> Humidity {weather.humidity}(%) </li>
          <li> Wind {Math.round(weather.wind)}(Km/h):</li>
          <li>
            {" "}
            <img src={weather.icon} alt="Weather Icon" />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
