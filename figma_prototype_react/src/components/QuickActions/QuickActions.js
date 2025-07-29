import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuickActions.css';

const QuickActions = () => {
    const navigate = useNavigate();

    return (
        <section className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="actions-grid">
                <button className="action-btn" onClick={() => navigate('/scan-qr')}>Scan QR Code</button>
                <button className="action-btn" onClick={() => navigate('/send-money')}>Send Money</button>
                <button className="action-btn" onClick={() => navigate('/bank-transfer')}>Bank Transfer</button>
                <button className="action-btn" onClick={() => navigate('/bills-recharges')}>Bills/Recharges</button>
            </div>
        </section>
    );
};

export default QuickActions;
