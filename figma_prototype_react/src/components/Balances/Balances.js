import React from 'react';
import './Balances.css';
import upiLiteIcon from '../../assets/upi-lite.svg';
import upiIdIcon from '../../assets/upi-id.svg';

const Balances = () => {
    return (
        <section className="balances">
            <div className="balance-card">
                <img src={upiLiteIcon} alt="UPI Lite" className="balance-icon" />
                <div className="balance-info">
                    <span className="balance-amount">₹ 0</span>
                    <span className="balance-label">UPI Lite balance</span>
                </div>
            </div>
            <div className="balance-card">
                <img src={upiIdIcon} alt="UPI ID" className="balance-icon" />
                <div className="balance-info">
                    <span className="balance-amount">user@cashapp</span>
                    <span className="balance-label">UPI ID</span>
                </div>
            </div>
        </section>
    );
};

export default Balances;
