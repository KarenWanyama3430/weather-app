import React from 'react'
import './WeatherApp.css'
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import search_icon from "../Assets/search.png"

const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='search'></input>
        <div className='search_icon'>
          <img src={search_icon} alt='' />

        </div>

      </div>
      <div className='weather-image'>
        <img src={cloud_icon} alt=''/>
      </div>
      <div className='weather-temp'>24c</div>
      <div className='weather-location'>Kenya</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} alt='' className='icon'/>
          <div className='humidity-percent'>64%</div>
          <div className='text'>Humidity</div>
          </div>

          <div className='element'>
          <img src={wind_icon} alt='' className='icon'/>
          <div className='humidity-percent'>17km/hr</div>
          <div className='text'>Windspeed</div>
          </div>
      </div>

    </div>
  )
}

export default WeatherApp
