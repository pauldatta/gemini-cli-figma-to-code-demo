import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';
import searchIcon from '../../assets/search.svg';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?q=${searchTerm}`);
    };

    return (
        <form onSubmit={handleSearchSubmit}>
            <div className="search-bar">
                <img src={searchIcon} alt="Search" className="search-icon" />
                <input
                    type="text"
                    placeholder="Search contacts"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
        </form>
    );
};

export default SearchBar;
