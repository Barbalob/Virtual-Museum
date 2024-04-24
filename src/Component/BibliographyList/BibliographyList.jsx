import React from 'react';
import './BibliographyList.scss'
import {NavLink, useLocation} from "react-router-dom";


const BibliographyList = ({BibliographyList}) => {
    const location = useLocation();
    const headPath = location.pathname.split('/');
    return (
        <>
            <ul className='bibliography-list'>
                <NavLink to={`/${headPath[1]}/${headPath[2]=='ru' ? 'gb': 'ru'}`}><img style={{'position':"absolute", "top": "50%", 'left': '-150px'}} src="../../assets/arrow.svg" alt="" /></NavLink>
                
                {BibliographyList.map((item, index)=>{
                    return <li key={index} className='bibliography-list-item'>{item}</li>
                })}

                <NavLink to={`/${headPath[1]}/${headPath[2]=='ru' ? 'gb': 'ru'}`}><img style={{'position':"absolute","top": "50%", 'right': '-150px',  "transform":'rotate(180deg)'}} src="../../assets/arrow.svg" alt="" /></NavLink>
            </ul>
            <img src="../../assets/gold.svg" style={{"display": "block", "margin":'0 auto', 'paddingBottom':'30px'}} alt="" className="decor"/>
        </>
    );
};

export default BibliographyList;