import Search from "./SearchBox"
import Info from "./Inforamtion"
import './style.css'
import { useState } from "react"


export default function WeatherApp(){
    let[Wether , setWether] = useState({
        city: "Mumbai",
        temp: 30,
        Minimul_temp: 17,
        Maximum_temp: 36,
        Humidity: 30,
        FeelsLike: 24.8,
        Weather: "maze"
    })
   function updateinfo(newInfo){
    setWether(newInfo);
   }
    return(
        <>
        <div className="comp">
            <Search updateinfo={updateinfo}/>
            <Info Data={Wether}/>
        </div>
        </>
    )
}