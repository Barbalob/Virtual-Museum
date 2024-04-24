import React from 'react';
import './CardDescription.scss'
import {NavLink,useLocation} from "react-router-dom";


const CardDescription = ({type, description}) => {
    const mainColor = type==='ru'?  'rgba(220, 206, 191, 1)' : 'rgba(255, 255, 255, 1)' 
    const location = useLocation();
    const headPath = location.pathname.split('/');
    console.log(headPath);
    return (
        <div className='card-description'>
            <img src="../../assets/gold.svg" style={{"display": "block", "margin":'0 auto'}} alt="" className="decor"/>
            <div className='card-description-wrapper' style={{"background": mainColor}}>
                <NavLink to={`/${headPath[1]}/${headPath[2] === 'ru' ? 'gb' : 'ru'}/${headPath[3]}`}>
                    <img style={{'position':"absolute", "top": "50%", 'left': '-70px'}} src="../../assets/arrow.svg" alt="" />
                </NavLink>
                <div className="card-description-wrapper-text">{description}</div>
                <NavLink to={`/${headPath[1]}/${headPath[2] === 'ru' ? 'gb' : 'ru'}/${headPath[3]}`}>
                    <img style={{'position':"absolute","top": "50%", 'right': '-70px',  "transform":'rotate(180deg)'}} src="../../assets/arrow.svg" alt="" />
                </NavLink>
            </div>
            <img src="../../assets/gold.svg" style={{"display": "block", "margin":'0 auto'}} alt="" className="decor"/>
        </div>
    );
};

export default CardDescription; 