import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BillsRecharges.css';
import airtelIcon from '../../assets/airtel.svg';
import actFibernetIcon from '../../assets/act-fibernet.svg';
import mobileIcon from '../../assets/mobile.svg';
import broadbandIcon from '../../assets/broadband.svg';

const BillsRecharges = () => {
    const navigate = useNavigate();

    return (
        <section className="bills-recharges">
            <h3>Bills & Recharges</h3>
            <div className="bills-grid">
                <div className="bill-item" onClick={() => navigate('/bills-recharges')}>
                    <img src={airtelIcon} alt="Airtel" />
                    <span>Airtel Prepaid</span>
                </div>
                <div className="bill-item" onClick={() => navigate('/bills-recharges')}>
                    <img src={actFibernetIcon} alt="ACT Fibernet" />
                    <span>ACT Fibernet</span>
                </div>
                <div className="bill-item" onClick={() => navigate('/bills-recharges')}>
                    <img src={mobileIcon} alt="Mobile" />
                    <span>Mobile</span>
                </div>
                <div className="bill-item" onClick={() => navigate('/bills-recharges')}>
                    <img src={broadbandIcon} alt="Broadband" />
                    <span>Broadband</span>
                </div>
            </div>
        </section>
    );
};

export default BillsRecharges;
