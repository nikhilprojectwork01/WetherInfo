import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import './style.css';
import { useState } from 'react';
import { dark } from '@mui/material/styles/createPalette';
export default function Search({updateinfo}){
    let[city , setcity] = useState("")
    let[err , seterr] = useState(false)
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "1a26b58ab4a5a3fb7c9f2f1f828ac632";
    function trackchange(event){
        setcity(event.target.value );
    }
        let getWeatherInfo = async ()=>{
            try{
            let Data = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let Jsdata =await Data.json();
            let result = {
                City : city ,
                temp : Jsdata.main.temp ,
                Minimul_temp:Jsdata.main.temp_min ,
                Maximum_temp :Jsdata.main.temp_max,
                Humidity:Jsdata.main.humidity ,
                FeelsLike:Jsdata.main.feels_like ,
                Weather:Jsdata.weather[0].description
            }
            console.log(result)
            return result;
        }catch(err){
        throw err;
    }
    }



    

    let  handleSublit = async(event)=>{
        try{
            event.preventDefault();
        console.log("forom submitted")
        console.log(city);
        let newInfo = await getWeatherInfo();
        updateinfo(newInfo);
        setcity("")
        }
        catch(err){
            seterr(true);
        }

    }

    return(
        <div className='divs'>
        <h1>Weather Application </h1>
        <form onSubmit={handleSublit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={trackchange}/>
        <br/>
        <br/>
        <Button variant="contained" endIcon={<SendIcon />} type="submit" color="success" onClick={getWeatherInfo} id="btn">
        Search
      </Button>
      {err && <p style={{color:"red"}}>No Such Place Exist</p>}
        </form>
        </div>
    )
}