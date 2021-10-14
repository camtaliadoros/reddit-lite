import './Search.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import searchIcon from '../../resources/search.svg';
import exitIcon from '../../resources/exit.svg';
import { loadPosts } from '../../features/posts/postsSlice';

export default function Search() {
    const [term, setTerm] = useState('');
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();

    const handleChange = e => {
        setTerm(e.currentTarget.value);
        setActive(true);
    }


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(loadPosts(term));
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
            <button className="search-button filter" onClick={handleSubmit}><img className="toolbar-icon search" src={searchIcon} alt="search"/></button>
        </form>
    );
}