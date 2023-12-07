import React from "react";
import "./WeatherForecast.css";
import axios from "axios"; 




export default function WeatherForecast(){
 function handleResponse(response){

 }
  
    let apiKey="bb0df6985c2eab6a171d64a6bacbb4e1";
    let apiUrl= `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt={cnt}&appid=${apiKey}&units=metric`;
    let lon= props.coord.lon;
    let lat= props.coord.lat;

    axios.get(apiUrl).then(handleResponse);
return( <div className="WeatherForecast">
    <div className="row">
    <div className="col" >
        <div className="WeatherForecastDay">Thu</div>
    <img src={props.data.icon} size={32} alt="Weather Icon" />
    <div className="WeatherForecastTemperatures">
        <span className="WeatherForecastTemperature-max" ></span>
        <span className="WeatherForecastTemperature-min"></span>  
    </div>
    </div>
    </div>
    </div>
);

}
