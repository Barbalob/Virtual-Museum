import React from 'react';
import './CardDescription.scss'
import {NavLink,useLocation} from "react-router-dom";
import srcGold from "../../assets/gold.svg"
import srcArrow from "../../assets/arrow.svg"

const CardDescription = ({type, description}) => {
    const mainColor = type==='ru'?  'rgba(220, 206, 191, 1)' : 'rgba(255, 255, 255, 1)' 
    const location = useLocation();
    const headPath = location.pathname.split('/');
    return (
        <div className='card-description'>
            <img src={srcGold} style={{"display": "block", "margin":'0 auto'}} alt="" className="decor"/>
            <div className='card-description-wrapper' style={{"background": mainColor}}>
                <NavLink className='arrow-decor-left' to={`/${headPath[1]}/${headPath[2] === 'ru' ? 'gb' : 'ru'}/${headPath[3]}`}>
                </NavLink>
                <div className="card-description-wrapper-text">{description}</div>
                <NavLink className='arrow-decor-right' to={`/${headPath[1]}/${headPath[2] === 'ru' ? 'gb' : 'ru'}/${headPath[3]}`}>
                </NavLink>
            </div>
            <img src={srcGold} style={{"display": "block", "margin":'0 auto'}} alt="" className="decor"/>
        </div>
    );
};

export default CardDescription; 