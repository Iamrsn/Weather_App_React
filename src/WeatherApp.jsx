import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
export default function WeatherApp() {
    const[weatherinfo,setwatherinfo]=useState({
        city:"Delhi",
        temp:24.84,
        tempmax:11.23,
        humidity:22.02,
        weather:"haze"
    })

    let updateinfo=(information)=>{
        setwatherinfo(information);
    }
  return (
    <div style={{textAlign:"center"}}>
      <h3>Weather App</h3>
      <SearchBox updateinfo={updateinfo}/>
      <InfoBox info={weatherinfo}/>
    </div>
  );
}
