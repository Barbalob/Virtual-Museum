import React, { useState } from 'react';
import './SectionSelection.scss'
import {NavLink} from "react-router-dom";


const SectionSelection = ({data, head}) => {
    const [error, setError] = useState(data.listSections.ru.length !== data.listSections.gb.length)
    const arrayList = Array(data.listSections.ru.length).fill(0)


    return (
        <>
            {error ? 
            `Количество страниц в России${listSections.ru.length}, а в Британии${listSections.gb.length}`:
            <div className='section-selection'>
                <h3 className='section-selection-title'>Список разделов</h3>
                <ul className='section-selection-list'>
                    <li className='section-selection-list-item-main'>
                        <div className='wrapper-link wrapper-link-left'>
                            <p>Россия</p>
                        </div>
                        <img src="../../assets/gold.svg" alt="" />
                        <div className='wrapper-link'>
                            <p>Британия</p>
                        </div>
                    </li>
                    {arrayList.map((_, index)=>{
                        return (
                            <li key={index} className='section-selection-list-item'>
                                <div className='wrapper-link wrapper-link-left'>
                                    <NavLink to={`ru/${index}`}>{data.listSections.ru[index].title}</NavLink>
                                </div>
                                <div className='center-decore'>
                                    <div className='vert-line'></div>
                                    <img src="../../assets/Crown2.svg" alt="" />
                                    <div className='vert-line'></div>
                                </div>
                                <div className='wrapper-link'>
                                    <NavLink to={`gb/${index}`}>{data.listSections.gb[index].title}</NavLink>
                                </div>
                            </li>
                        )
                    })}
                </ul>   
            </div>
            }
            
        </>
    );
};

export default SectionSelection;