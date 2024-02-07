import "./current-weather.css";
import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div
      className='weather'
      style={{
        backgroundImage: `url("images/${data.weather[0].icon}.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='top'>
        <div>
          <p className='city'>{data.city}</p>
          <p className='weather-description'>{data.weather[0].description}</p>
        </div>

        <img
          alt='weather'
          className='weather-icon'
          src={`icons2/${data.weather[0].icon}.png`}
          style={{
            width: "50px",
            height: "auto",
            marginTop: "10px",
          }}
        />
      </div>
      <div className='bottom'>
        <p className='temperature'>{Math.round(data.main.temp)}˚C</p>
        <div className='details'></div>
      </div>
    </div>
  );
};

export default CurrentWeather;
