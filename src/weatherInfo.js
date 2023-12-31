import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature  from "./WeatherTemperature";

export default function WeatherInfo(props) {

return( 

 <div className="WeatherInfo">
<h1 > {props.data.city} </h1>
<ul>
    <li>
       <FormatDate date={props.data.date}/>
    </li>
    <img src={props.data.icon} alt="Weather Icon" />
    <li>{props.data.description}</li>
</ul>
<div className="row mt-3">
<div className="col-6">
<div className="row">
    <div className="clearfix"> 
<img src="{props.data.iconUrl}"
 alt="{props.data.description}"
  className="float-left"
  />
<div className="float-left">
    <WeatherTemperature celcius={props.data.temperature}/>
</div>
</div>
</div>
<div className="col-6">
<ul>

      <li className="text-capitalized">Description:{props.data.desciption}</li>
      <li> Humidity {props.data.humidity}(%) </li>
      <li> Wind {Math.round(props.data.wind)}(Km/h):</li>
    </ul>
    </div>
</div>
</div>
</div>
  );
  }