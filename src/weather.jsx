import { useState } from "react"
import Info from "./infoBox.jsx"
import Search from "./searchbox"

export default function Weather(){

    let [weatherInfo, setWeatherInfo] = useState({
        city:"bengaluru",
        feel:12.2,
        humidity:45,
        temp: 23,
        tempMax: 23,
        tempMin:21,
        weather:"mist"
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }


    return (
        <>
            <h1>Weather Info App</h1>
            <p><i>get the info according to the location</i></p>
            <br /><br />
            <Search updateInfo={updateInfo}/>
            <Info data={weatherInfo}/>

        </>
    )
}