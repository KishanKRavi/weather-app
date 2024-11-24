import TextField from '@mui/material/TextField';
import { useState } from 'react';


export default function Search({updateInfo}){
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '16bce9fe5446d0cba0b014525c622cc2';
    let [city, setCity] = useState("");
    let [error,setError] = useState(false);
    let getWeatherInfo =async()=>{
      try{
        let result =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let response = await result.json();
        console.log(response)
 
        let theResult = {
         city:city,
         feel:response.main.feels_like,
         humidity:response.main.humidity,
         temp: response.main.temp,
         tempMax: response.main.temp_max,
         tempMin: response.main.temp_min,
         weather:response.weather[0].description,
        }
        return theResult;
      } catch (err){
        throw err;
      }
    }

    let handlecity = (evt)=>{
        setCity(evt.target.value);
    }
    let submitForm = async(evt)=>{
        try{
            evt.preventDefault();
            console.log(city)
            let info =  await getWeatherInfo();
            updateInfo(info)
            setCity('')
        }catch(err){
            setError(true); 
            setTimeout(() => setError(false), 2000);
        }
    }
    
    
    return(
        <>
        <form onSubmit={submitForm}>
            <TextField required id="city" label="location" value={city} onChange={handlecity} variant="outlined" />
            &nbsp;<button style={{height:"3.5rem"}}>Search</button>
        </form>
        {error&& <p style={{color:"red"}}>Unable to find the weather Info of "{city}"</p>}
        </>
    )
}



