import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios"; 




export default function WeatherForecast(props){
    let [loaded, setLoaded]=useState(false);
    let [forecast, setForecast]=useState(null);
    
 function handleResponse(response){
 setForecast (response.data.daily);
 setLoaded(true);
 }
 if (loaded){

    return( <div className="WeatherForecast">
    <div className="row">
        {forecast.map(function(daylyForecast,index){
            if (index>5){ return(<div className="col" >
            <WeatherForecastDay data={forecast [0]}/>
         </div>);
         }
        })}
    
    </div>
    </div>
);
   
 }
 else {   
    let apiKey="bb0df6985c2eab6a171d64a6bacbb4e1";
    let apiUrl= `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt={cnt}&appid=${apiKey}&units=metric`;
    let lon= props.coord.lon;
    let lat= props.coord.lat;

    axios.get(apiUrl).then(handleResponse);

    return null;

 }
}
