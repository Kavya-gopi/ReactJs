import { useState } from 'react'

import './App.css'
//Images import 

import searchIcon from './assets/search.png';
import clearIcon from './assets/clear.png';
import cloudIcon from './assets/cloud.png';
import drizzleIcon from './assets/drizzle.png';
import rainIcon from './assets/rain.png';
import snowIcon from './assets/snow.png';
import windIcon from './assets/wind.png';
import humidityIcon from './assets/humidity.png';

const WeatherDetails=({icon,temp,city,country,lat,log,wind,humidity})=>{
  return(
    <>
    <div className='details'>
    <div className='image'>
      <img src={icon} className='image-icon-weather' alt='image-weather'/>
    </div>
    <div className='temp'>{temp}°C</div>
    <div className='city'>{city}</div>
    <div className='country'>{country}</div>
    <div className='coordinates'>
      <div >
      <span className='lati'>Lattitude</span>
      <span>{lat}</span>
      </div>
      <div >
      <span className='logi'>Longitude</span>
      <span>{log}</span>
      </div>
    </div>
    <div className='footer'>
      <div className='element'>
         <img src={humidityIcon} className='humidityIcon' alt='humidity-icon'/>
         <div className='data'>
          <div  className='humidity-percent'>{humidity} %</div>
          <div className='text-data'>Humidity</div>
         </div>
         
      </div>
      <div className='element'>
         <img src={windIcon} className='windIcon' alt='wind-icon'/>
         <div className='data'>
          <div  className='wind-percent'>{wind} km/hr</div>
          <div className='text-datas'>Wind Speed</div>
         </div>
         
         
      </div>
    </div>
    </div>
    </>
  )
}

function App() {
   const [icon,setIcon] = useState(snowIcon);
   const [temp,setTemp] = useState(0);
   const [city,setCity] = useState('Chennai');
   const [country,setCountry] = useState('IN');
   const [lat,setLat] = useState(0);
   const [log,setLog] = useState(0);
   const [humidity,setHumidity] = useState(0);
   const [wind,setWind] = useState(0);
   const [text,setText] = useState('Chennai');
   const [cityNotFound,setCityNotFound] = useState(false);
   const [loading,setLoading] = useState(false);
   const apikey = 'b536644be34cf90952942ec683af5d4f';

   const weatherIconMap ={
    "01d":clearIcon,
    "01n":clearIcon,
    "02d":cloudIcon,
    "02n":cloudIcon,
    "03d":drizzleIcon,
    "03n":drizzleIcon,
    "04n":drizzleIcon,
    "04d":drizzleIcon,
    "09d":rainIcon,
    "09n":rainIcon,
    "10d":rainIcon,
    "10n":rainIcon,
    "13d":snowIcon,
    "13n":snowIcon
   }

   async function search(){
    setLoading(true);
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}&units=Metric`;
    try{
      let response = await fetch(url);
      let data = await response.json();
      if(data.cod==="404"){
        console.error("City not Found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
       setIcon(weatherIconMap[weatherIconCode] || clearIcon);
       setCityNotFound(false);

    }catch(error){
      console.error("An error Occured",error);
    }
    finally{
       setLoading(false);
    }
   }

   
   const handleCity=(e)=>{
     setText(e.target.value);
   }

   const handleKeyDown=(e)=>{
     if(e.key==='Enter'){
      search();
     }
   }

  return (
    <>
      <div className='app-container'>
        <div className='input-field'>
          <input type='text' placeholder='Search City' className='search'
           onChange={handleCity} 
           value={text}
           onKeyDown={handleKeyDown}/>
          <img src={searchIcon} alt='searchimg' className='search-img' onClick={()=>search()}/>
        </div>
        <WeatherDetails icon={icon} temp={temp} city={city} country={country}
          lat={lat} log={log} wind={wind} humidity={humidity}/>
      </div>
     </>
  )
}

export default App
