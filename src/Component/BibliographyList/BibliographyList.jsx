import React from 'react';
import './BibliographyList.scss'
import {NavLink, useLocation} from "react-router-dom";
import srcGold from "../../assets/gold.svg"
import srcArrow from "../../assets/arrow.svg"


const BibliographyList = ({BibliographyList}) => {
    const location = useLocation();
    const headPath = location.pathname.split('/');
    return (
        <>
            <ul className='bibliography-list'>
                <NavLink className='arrow-decor-left' to={`/${headPath[1]}/${headPath[2]=='ru' ? 'gb': 'ru'}`}>
                </NavLink>
                
                {BibliographyList.map((item, index)=>{
                    return <li key={index} className='bibliography-list-item'>{item}</li>
                })}

                <NavLink className='arrow-decor-right' to={`/${headPath[1]}/${headPath[2]=='ru' ? 'gb': 'ru'}`}></NavLink>
                 <img src={srcGold} style={{"display": "block", "margin":'0 auto', 'paddingBottom':'30px'}} alt="" className="decor"/>
            </ul>
        </>
    );
};

export default BibliographyList;