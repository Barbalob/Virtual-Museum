import React from 'react';
import './Tooltip.scss'
import { NavLink } from 'react-router-dom';
import srcInformation from "../../assets/information.svg"


const Tooltip = ({dataTooltip, text, src, name}) => {
    return (
        <> 
            <span className='tooltip-text'>{text}</span>
            <div className='tooltip'>
                <img  className='tooltip-img' src={srcInformation} alt="" />
                <ul className='tooltip-list'>
                    {/* <div className='tooltip-list-wrapper'>
                        <p>{dataTooltip}</p>
                        {src ? <NavLink to={src}>ПОДРОБНЕЕ</NavLink>:""}
                    </div> */}
                    <p><span style={{color:'red'}}>{name} </span> - {dataTooltip}</p>
                    {src ? <NavLink to={`/${src}`}>ПОДРОБНЕЕ</NavLink>:""}
                </ul>
            </div>  
            {/* <span className='tooltip-text'>{text}</span>  
            <span className='tooltip' data-tooltip={dataTooltip}>
                <img  className='tooltip-img' src={srcInformation} alt="" />
            </span>  */}
        </>
    );
};

export default Tooltip;