import React from "react";
import FormatDate from "./FormatDate";
import FormatDate from "./FormatDate";

export default function weatherInfo(props) {

return( 

 <div className="weatherInfo">
<h1 > {props.data.city} </h1>
<ul>
    <li>
       <formatDate date={props.data.date}/>
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
<span className="temperature">Temperature {Math.round(weather.temperature)}</span> 
<span className="unit">C</span>
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