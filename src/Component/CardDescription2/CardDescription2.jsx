import React from 'react';
import './CardDescription2.scss'

const CardDescription = ({type, description}) => {
    const mainColor = type==='ru'? 'rgba(255, 255, 255, 1)' : 'rgba(220, 206, 191, 1)'
    return (
        <div className='card2-description'>
            <div className='card2-description-wrapper' style={{"background": mainColor}}>
                <div className="card2-description-wrapper-text">{description}</div>
            </div>
        </div>
    );
};

export default CardDescription; 