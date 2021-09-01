import React from 'react';
import './Search.css';
import { BiSearchAlt2 } from 'react-icons/bi';

const Search = () => {

    // const [query, setQuery] = useState("");
    // const [weather, setWeather] = useState({});
  
    // const search = (e) => {
    //   if(e.key === 'Enter') {
    //     const data = await fetchData(query);
    //     setWeather(data);
    //     setQuery();
    //     console.log(data)
    //   }
    // }

    return (
        <div className="search">
            <div className="search_int">
                <form className="form">
                    <input type="text" placeholder="joylashuvingizni kiriting" />
                </form>
                <BiSearchAlt2 className="search_icon" />
            </div>
        </div>
    )
}

export default Search
