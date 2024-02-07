import Search from "./components/search/search";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import CurrentWeatherDetails from "./components/current-weather-details/currentWeatherDetails";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

// Comments
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  // console.log(currentWeather);
  // console.log(forecast);

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar_item'>
          <img src='images/walogo.png' alt='weatherlogo' className='logo' />
          <p>Weather App</p>
        </div>

        <Search onSearchChange={handleOnSearchChange} className='' />
      </div>
      {currentWeather && <CurrentWeather data={currentWeather} />}

      <div className='content'>
        <div className='contents_1'>
          {currentWeather && <CurrentWeatherDetails data={currentWeather} />}
        </div>
        <div className='contents_2'>
          {forecast && <Forecast data={forecast} />}
        </div>
      </div>
    </div>
  );
}

export default App;
