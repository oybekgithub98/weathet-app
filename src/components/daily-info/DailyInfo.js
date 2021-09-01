import React from 'react';
import { TiWeatherPartlySunny, TiLocationOutline } from 'react-icons/ti';
import './DailyInfo.css'

const DailyInfo = ({cityName, gradus}) => {
    return (
        <div className="dailyinfo">
            <div className="dailyinfo__icon">
                <TiWeatherPartlySunny style={{fontSize: "60px"}} className="sunny" />
            </div>
            <div className="dailyinfo__overall">
                <h3>Fog</h3>
                <p>{cityName} City</p>
            </div>
            <div className="dailyinfo__main">
                <h2>{gradus}<span>°C</span></h2>
                
                <div className="dailyinfo__main__item">
                    <span>location</span>
                    <TiLocationOutline className="location_icon" />
                </div>
            </div>
        </div>
    )
}

export default DailyInfo;
