import React from 'react';
import './Placeholder.css';

const Placeholder = ({ screenName }) => {
    return (
        <div className="placeholder-container">
            <h1>{screenName}</h1>
            <p>This is a placeholder for the {screenName} screen.</p>
        </div>
    );
};

export default Placeholder;
