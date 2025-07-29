import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import homeIcon from '../../assets/home.svg';
import moneyIcon from '../../assets/money.svg';
import youIcon from '../../assets/you.svg';

const Footer = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const navigate = useNavigate();

    const handleNavClick = (tab, path) => {
        setActiveTab(tab);
        navigate(path);
    };

    return (
        <footer className="footer">
            <nav className="bottom-nav">
                <a
                    href="#"
                    className={`nav-item ${activeTab === 'Home' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Home', '/')}
                >
                    <img src={homeIcon} alt="Home" />
                    <span>Home</span>
                </a>
                <a
                    href="#"
                    className={`nav-item ${activeTab === 'Money' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Money', '/money')}
                >
                    <img src={moneyIcon} alt="Money" />
                    <span>Money</span>
                </a>
                <a
                    href="#"
                    className={`nav-item ${activeTab === 'You' ? 'active' : ''}`}
                    onClick={() => handleNavClick('You', '/you')}
                >
                    <img src={youIcon} alt="You" />
                    <span>You</span>
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
