import React from 'react';
import './Dailycondition.css';
import { WiHumidity } from 'react-icons/wi';
import { TiWeatherShower } from 'react-icons/ti';
import { FiCloudRain } from 'react-icons/fi';

const Dailycondition = ({humidity, airProssure, rain, speed}) => {
    return (
        <div className="dailycondition">
            <div className="dailycondition_section">
                <div className="dailycondition_icon">
                    <WiHumidity className="humidity_icon" style={{fontSize: "35px"}} />
                </div>
                <div className="dailycondition_text">
                    <p>Humidity</p>
                    <h4>{humidity} %</h4>
                </div>
            </div>
            <div className="dailycondition_section">
                <div className="prossure_icon">
                    <TiWeatherShower className="tiWeatherShower_icon"  style={{fontSize: "30px"}} />
                </div>
                <div className="prossure_text">
                    <p>Air prossure</p>
                    <h4>{airProssure}</h4>
                </div>
            </div>
            <div className="dailycondition_section">
                <div className="change_icon">
                    <FiCloudRain style={{fontSize: "25px"}} />
                </div>
                <div className="change_text">
                    <p>Chance of Rain</p>
                    <h4>{rain}</h4>
                </div>
            </div>
            <div className="dailycondition_section">
                <div className="windSpeed_icon">
                    <FiCloudRain className="fiCloudRain_icon" style={{fontSize: "25px"}} />
                </div>
                <div className="windSpeed_text">
                    <p>Wind speed</p>
                    <h4>{speed}</h4>
                </div>
            </div>
        </div>
    )
}

export default Dailycondition