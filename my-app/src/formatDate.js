import React from "react";

export default function formatDate(props){
    let days= ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
    let day = days[props.date.getDay()];
    let hours= props.date.getHpurs();
    if (hours <10 ){hours=`0${hours}`;}
    let minutes= prps.date.getMinutes();
    if (minutes <10 ){minutes=`0${minutes}`;}
    return (<div>{day}{hours}:{minutes}</div>);
} 