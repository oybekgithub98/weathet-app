import { useState, useEffect, useCallback } from 'react';
import './App.css';
import DailyInfo from './components/daily-info/DailyInfo';
import axios from 'axios';
import Search from './components/search/Search';
import Dailycondition from './components/daily-condition/Dailycondition';
import DayBanner from './components/daybanner/DayBanner';
import { useStateValue } from './StateProvider';

function App() {
  const [searchValue] = useStateValue()
  const [data, setData] = useState([]);
  const fetchData = useCallback(
    () => {axios.get(`https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${searchValue.searchValue === "" ? "Namangan" : searchValue.searchValue}&days=7&aqi=yes&alerts=yes`)
                .then(res => setData(res?.data))
              },
    [searchValue.searchValue],
  )

  useEffect(() => {
    fetchData();
  }, [searchValue, fetchData])
  console.log(data);
  

  const image = "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="app">
      <div className="app__wrapper">
        <div className="search_banner">
          <DailyInfo cityName={data?.location?.name} gradus={data?.current?.temp_c} />
          <Search />
          <Dailycondition humidity={data?.current?.humidity} airProssure={data?.current?.pressure_in} rain={data?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain} speed={data?.forecast?.forecastday?.[0]?.hour?.[0]?.wind_kph} />
        </div>
        <div className="days_banner">
          <DayBanner forecas={data?.forecast?.forecastday} current={data?.current} />
        </div>
      </div>
    </div>
  );
}

export default App;
