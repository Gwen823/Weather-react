import React, { useState } from "react";
import formatDate from "./formatDate";
import axios from "axios";
import "./Weather.css";

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
                <div className="Weather">  
<form>
    <div className="row"> 
    <div className="col-9">
    <input type="search" placeholder="Enter a city" className="form-contol"/>  
    </div>
    <div className="col-3">
<input type="submit" value="search" className="btn btn-primary"/> 
</div>
</div>
</form>


    <h1>New York </h1>
    <ul>
        <li>
           <formatDate date={weatherDate.date}/>
        </li>
        <img src={weather.icon} alt="Weather Icon" />
        <li>sunny</li>
    </ul>
<div className="row">
<div className="col-6">
    <div className="row">
        <div className="clearfix"> 
<img src="" alt="" className="float-left"/>
<div className="float-left">
    <span className="temperature">Temperature {Math.round(weather.temperature)} C<span/>
    <span className="unit"><span/>
    <div/>

<div className="col-6">
<ul>
    
          <li>Description:{weather.desciption}</li>
          <li> Humidity {weather.humidity}(%) </li>
          <li> Wind {Math.round(weather.wind)}(Km/h):</li>
          <li>
    
            
          </li>
        </ul>
<div/>
</div>
      </div>
      <div/>
</div>
</div>
</div>
      </div>
    );
  } else {
    return form;
  }
}
