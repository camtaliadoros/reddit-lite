import './Search.css';
import React, { useState } from 'react';
import searchIcon from '../../resources/search.svg';
import exitIcon from '../../resources/exit.svg';

export default function Search() {
    const [term, setTerm] = useState('');
    const [isActive, setActive] = useState(false);

    const handleChange = e => {
        setTerm(e.currentTarget.value);
        setActive(true);
    }


    const handleSubmit = e => {
        e.preventDefault();
        // Dispatch search term to store to filter posts 
    }

    const handleClear = e => {
        setTerm('');
        setActive(false);
        // Dispatch - return to home
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                id="search"
                value={term}
                onChange={handleChange}
                placeholder="Search"
            />
            <button className={`clear-button" ${isActive ? "visible" : "invisible"} filter`} onClick={handleClear}><img className="toolbar-icon clear" src={exitIcon} alt="clear-search"/></button>
            <button className={`search-button ${isActive ? "invisible" : "visible"} filter`} onClick={handleSubmit}><img className="toolbar-icon search" src={searchIcon} alt="search"/></button>
        </form>
    );
}