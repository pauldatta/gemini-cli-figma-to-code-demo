import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageMoney.css';
import creditCardIcon from '../../assets/credit-card.svg';
import loansIcon from '../../assets/loans.svg';
import cibilIcon from '../../assets/cibil.svg';
import historyIcon from '../../assets/history.svg';
import accountBalanceIcon from '../../assets/account-balance.svg';

const ManageMoney = () => {
    const navigate = useNavigate();

    return (
        <section className="manage-money">
            <h3>Manage Your Money</h3>
            <div className="bills-grid">
                <div className="bill-item" onClick={() => navigate('/credit-cards')}>
                    <img src={creditCardIcon} alt="Credit Cards" />
                    <span>Credit Cards</span>
                </div>
                <div className="bill-item" onClick={() => navigate('/loans')}>
                    <img src={loansIcon} alt="Loans" />
                    <span>Loans</span>
                </div>
                <div className="bill-item" onClick={() => navigate('/cibil')}>
                    <img src={cibilIcon} alt="CIBIL" />
                    <span>Check CIBIL Score</span>
                </div>
                <div className="bill-item" onClick={() => navigate('/history')}>
                    <img src={historyIcon} alt="History" />
                    <span>Transaction History</span>
                </div>
                <div className="bill-item" onClick={() => navigate('/balance')}>
                    <img src={accountBalanceIcon} alt="Balance" />
                    <span>Account Balance</span>
                </div>
            </div>
        </section>
    );
};

export default ManageMoney;
