import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import profileIcon from '../../assets/profile_icon.svg';

const Header = () => {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile');
    };

    return (
        <header className="header">
            <div className="header-left">
                <h1 onClick={() => navigate('/')}>Cash App</h1>
            </div>
            <div className="header-right">
                <img src={profileIcon} alt="Profile" className="profile-icon" onClick={handleProfileClick} />
            </div>
        </header>
    );
};

export default Header;
