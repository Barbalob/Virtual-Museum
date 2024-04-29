import React from 'react';
import './TitleCard.scss'
import {NavLink} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import srcArrowRightUp from "../../assets/arrow-right-up.svg"

const TitleCard = ({title, page}) => {
    const location = useLocation();
    const headPath = location.pathname.split('/');
    let href = '/'
    switch (page) {
        case 'Main':
            break;
        case 'Page1':
            href = `/${headPath[1]}`
            break;
        case 'Page2':   
            href = `/${headPath[1]}/${headPath[2]}/${headPath[3]}`
            break;
        default:
            href='/'
      }
    return (
        <div className='card-title'>
            <h2 className='card-title-h2'>{title}</h2>
            <NavLink to={`${href}`} className='card-title-btn'><img src={srcArrowRightUp} alt="arrow" /></NavLink>
        </div>
    );
};

export default TitleCard;