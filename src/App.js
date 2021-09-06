import { useState, useEffect } from 'react';
import './App.css';
import DailyInfo from './components/daily-info/DailyInfo';
import axios from 'axios';
import Search from './components/search/Search';
import Dailycondition from './components/daily-condition/Dailycondition';
import DayBanner from './components/daybanner/DayBanner';

function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios.get('https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=Namangan&days=7&aqi=yes&alerts=yes')
      .then(res => setData(res?.data))
  }

  useEffect(() => {
    fetchData();
  }, [])
  console.log(data)

  const image = "https://hdoboi.kiev.ua/images/05.Jun.2019-pejzazh-dorogi-v-gorah-4k.jpg";

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="app">
      <div className="app__wrapper">
        <div className="search_banner">
          <DailyInfo cityName={data?.location?.name} gradus={data?.current?.temp_c} />
          <Search />
          <Dailycondition humidity={data?.current?.humidity} airProssure={data?.current?.pressure_in} rain={data?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain} speed={data?.forecast?.forecastday?.[0]?.hour?.[0]?.wind_kph} />
        </div>
        <div className="days_banner">
          <DayBanner />
        </div>
      </div>
    </div>
  );
}

export default App;
