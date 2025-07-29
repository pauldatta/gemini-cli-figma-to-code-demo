import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InviteEarn.css';

const InviteEarn = () => {
    const navigate = useNavigate();

    return (
        <section className="invite-earn">
            <h3>Invite & Earn</h3>
            <p>Invite your friends to Cash App and earn rewards</p>
            <button className="invite-btn" onClick={() => navigate('/invite')}>Invite Friends</button>
        </section>
    );
};

export default InviteEarn;
