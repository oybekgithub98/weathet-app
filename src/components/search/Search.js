import React, { useState } from 'react';
import './Search.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useStateValue } from '../../StateProvider';

const Search = () => {
    const [searchValue, dispatch] = useStateValue();
    const [search, setSearch] = useState('');
    const findPlace = (e) => {
        setSearch("");
        dispatch({
            type: "SEARCH",
            searchValue: search
        })
        e.preventDefault();
    }
    console.log(searchValue)

    return (
        <div className="search">
            <div className="search_int">
                <form className="form" onSubmit={findPlace}>
                    <input className="int" type="text" placeholder="joylashuvingizni kiriting" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </form>
                <BiSearchAlt2 className="search_icon" />
            </div>
        </div>
    )
}

export default Search
