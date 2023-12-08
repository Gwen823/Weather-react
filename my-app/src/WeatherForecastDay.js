import React from "react";

export default WeatherForecastDay(props){

function maxTemperature(){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
}
function minTemperature(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
}
 function day(){
    let date= new Date(props.data.dt*100);
    let day= date.getDay();
    let days= ["Sun","Mon","Tue","Wed","Thru","Fri","Sat"]
    return days[day];
 }

 return (
    <div>
    <div className="WeatherForecastDay">{day()}</div>
    <img src={props.data.icon} size={32} alt="Weather Icon" />
    <div className="WeatherForecastTemperatures">
        <span className="WeatherForecastTemperature-max" >{maxTemperature}</span>
        <span className="WeatherForecastTemperature-min">{minTemperature}</span>  
    </div>
    </div>
    );

}