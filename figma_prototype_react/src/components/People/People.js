import React from 'react';
import { useNavigate } from 'react-router-dom';
import './People.css';
import ethanImg from '../../assets/ethan.png';
import sophiaImg from '../../assets/sophia.png';
import liamImg from '../../assets/liam.png';
import oliviaImg from '../../assets/olivia.png';
import noahImg from '../../assets/noah.png';

const People = () => {
    const navigate = useNavigate();

    const handlePersonClick = (name) => {
        navigate(`/transaction/${name}`);
    };

    return (
        <section className="people">
            <h3>People</h3>
            <div className="people-list">
                <div className="person" onClick={() => handlePersonClick('Ethan')}>
                    <img src={ethanImg} alt="Ethan" />
                    <span>Ethan</span>
                </div>
                <div className="person" onClick={() => handlePersonClick('Sophia')}>
                    <img src={sophiaImg} alt="Sophia" />
                    <span>Sophia</span>
                </div>
                <div className="person" onClick={() => handlePersonClick('Liam')}>
                    <img src={liamImg} alt="Liam" />
                    <span>Liam</span>
                </div>
                <div className="person" onClick={() => handlePersonClick('Olivia')}>
                    <img src={oliviaImg} alt="Olivia" />
                    <span>Olivia</span>
                </div>
                <div className="person" onClick={() => handlePersonClick('Noah')}>
                    <img src={noahImg} alt="Noah" />
                    <span>Noah</span>
                </div>
            </div>
        </section>
    );
};

export default People;
