import React from "react";
import "./currentWeatherDetails.css";

const CurrentWeatherDetails = ({ data }) => {
  return (
    <div>
      <span className='title'>Details</span>
      <div className='weatherDetails'>
        <div className='parameter-row'>
          <div></div>
          <p className='parameter-label'>Feels Like</p>
          <p className='parameter-value'>{data.main.feels_like}˚C</p>
        </div>
        <div className='parameter-row'>
          <p className='parameter-label'>Wind</p>
          <p className='parameter-value'>{data.wind.speed} m/s</p>
        </div>
        <div className='parameter-row'>
          <p className='parameter-label'>Humdity</p>
          <p className='parameter-value'>{data.main.humidity}%</p>
        </div>
        <div className='parameter-row'>
          <p className='parameter-label'>Pressure</p>
          <p className='parameter-value'>{data.main.pressure}hPa</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;
