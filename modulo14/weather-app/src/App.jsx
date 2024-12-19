import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';

const currentWeatherData =  {
  location: 'São Paulo',
  temperature: 13,
};

const forecastData = [
  {date: '18/12', minTemp: 18, maxTemp: 28},
  {date: '19/12', minTemp: 19, maxTemp: 28},
  {date: '20/12', minTemp: 20, maxTemp: 28},
  {date: '21/12', minTemp: 21, maxTemp: 24},
  {date: '22/12', minTemp: 18, maxTemp: 28},
  {date: '23/12', minTemp: 19, maxTemp: 28},
  {date: '24/12', minTemp: 28, maxTemp: 29},
  {date: '25/12', minTemp: 23, maxTemp: 32},
]
  



const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <div style={{padding: '20px', maxWidth: '800px', margin: '0 auto'}}>
    <CurrentWeather 
    location = {currentWeatherData.location}
    temperature={currentWeatherData.temperature}/>
    <WeatherForecast forecast={forecastData} />
    </div>
  </ThemeProvider>
);

export default App;
