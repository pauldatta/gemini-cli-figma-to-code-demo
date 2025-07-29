import React from 'react';
import './Cashtellations.css';

const Cashtellations = () => {
    const handleGenerateClick = () => {
        alert('Generating your personalized money habit analysis!');
    };

    return (
        <section className="cashtellations">
            <h2>Ca$htellations</h2>
            <p>Your personalized money habit analysis</p>
            <button className="generate-btn" onClick={handleGenerateClick}>Generate</button>
        </section>
    );
};

export default Cashtellations;
