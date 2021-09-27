import React from 'react';
import './DayBanner.css';

const DayBanner = ({forecas, current}) => {
    return (
        <div className="dayBanner">
            {
                forecas?.map(day => 
                    <div className="card">
                        <p>{day.day.maxtemp_c}</p>
                        <h4>{current?.temp_c}<span>°C</span></h4>
                        <h5>Feels like {current?.feelslike_c}<span>°C</span></h5>
                    </div>
                )
            }
        </div>
    )
}

export default DayBanner
