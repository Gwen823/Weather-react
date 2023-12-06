import React, { useState } from "react";
import formatDate from "./formatDate";
import axios from "axios";
import "./Weather.css";

export default function WeatherReact() {
   
    const[watherData,setWeatherData]=useState({ready:false});

}
function handleResponse(response){
    setWeather({
        ready: true,
        city: response.data.main,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      };
    setLoaded(true);
}

  if (weatherData.ready) {
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
    <h1>{weatherData.city} </h1>
    <ul>
        <li>
           <formatDate date={weatherDate.date}/>
        </li>
        <img src={weatherData.icon} alt="Weather Icon" />
        <li>{weatherData.description}</li>
    </ul>
<div className="row">
<div className="col-6">
    <div className="row">
        <div className="clearfix"> 
<img src="" alt="" className="float-left"/>
<div className="float-left">
    <span className="temperature">Temperature {Math.round(weather.temperature)} C </span> 
    <span className="unit"> <span/>
    <div/>

<div className="col-6">
<ul>

          <li className="text-capitalized">Description:{weatherData.desciption}</li>
          <li> Humidity {weatherData.humidity}(%) </li>
          <li> Wind {Math.round(weatherData.wind)}(Km/h):</li>
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
    const apiKey="bb0df6985c2eab6a171d64a6bacbb4e1";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return"loading..."
  }
}
