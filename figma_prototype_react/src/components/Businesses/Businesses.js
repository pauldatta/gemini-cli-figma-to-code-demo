import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Businesses.css';
import bescomIcon from '../../assets/bescom.svg';
import burgerKingIcon from '../../assets/burger-king.svg';
import deliverooIcon from '../../assets/deliveroo.svg';

const Businesses = () => {
    const navigate = useNavigate();

    const handleBusinessClick = (business) => {
        navigate(`/pay/${business}`);
    };

    return (
        <section className="businesses">
            <h3>Businesses</h3>
            <div className="bills-grid">
                <div className="bill-item" onClick={() => handleBusinessClick('Bescom')}>
                    <img src={bescomIcon} alt="Bescom" />
                    <span>Bescom</span>
                </div>
                <div className="bill-item" onClick={() => handleBusinessClick('Burger-King')}>
                    <img src={burgerKingIcon} alt="Burger King" />
                    <span>Burger King</span>
                </div>
                <div className="bill-item" onClick={() => handleBusinessClick('Deliveroo')}>
                    <img src={deliverooIcon} alt="Deliveroo" />
                    <span>Deliveroo</span>
                </div>
            </div>
        </section>
    );
};

export default Businesses;
