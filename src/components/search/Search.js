import React from 'react';
import './Search.css';
import { BiSearchAlt2 } from 'react-icons/bi';

const Search = () => {

    return (
        <div className="search">
            <div className="search_int">
                <div className="form">
                    <input type="text" placeholder="joylashuvingizni kiriting" />
                </div>
                <BiSearchAlt2 className="search_icon" />
            </div>
        </div>
    )
}

export default Search
