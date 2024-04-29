import React from 'react';
import './Tooltip.scss'
import { NavLink } from 'react-router-dom';

const Tooltip = ({dataTooltip, text, src}) => {
    return (
        <> 
            <span className='tooltip-text'>{text}</span>
            <div className='tooltip'>
                <img  className='tooltip-img' src="../../assets/information.svg" alt="" />
                <ul className='tooltip-list'>
                    {/* <div className='tooltip-list-wrapper'>
                        <p>{dataTooltip}</p>
                        {src ? <NavLink to={src}>ПОДРОБНЕЕ</NavLink>:""}
                    </div> */}
                    <p>{dataTooltip}</p>
                    {src ? <NavLink to={src}>ПОДРОБНЕЕ</NavLink>:""}
                </ul>
            </div>  
            {/* <span className='tooltip-text'>{text}</span>  
            <span className='tooltip' data-tooltip={dataTooltip}>
                <img  className='tooltip-img' src="../../assets/information.svg" alt="" />
            </span>  */}
        </>
    );
};

export default Tooltip;