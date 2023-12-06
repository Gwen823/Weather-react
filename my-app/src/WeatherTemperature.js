import React, {useState} from "react";
   
export default WeatherTemperature(props){
const [unit,setUnit]= useState("celcius");
function showFahrenheit (event){
    event.preventDefault();
    setUnit("fahrenheit");
}
function showFahrenheit (event){
    event.preventDefault();
    setUnit("celcius");
}

function Fahrenheit (){
 return(props.celcius *9)/ 5 + 32;
}

if(unit === "celcius"){
 return (<div className="WeatherTemperature">
 <span className="temperature">Temperature {Math.round(props.celcius)}</span> 
 <span className="unit"> C | {""} <a href="/" onClick={showFahrenheit}> F <a/></span> | <span className="unit"></span>
 
 </div>
 );
} else {
    return (<div className="WeatherTemperature">
    <span className="temperature">Temperature {Math.round(props.Fahrenheit)}</span> 
    <span className="unit"> C  <a href="/" onClick={showCelcius}> {""} | F <a/></span> | <span className="unit"></span>
    </div>
    );
}

}