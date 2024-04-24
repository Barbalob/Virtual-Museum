import React from 'react';
import './Tooltip.scss'

const Tooltip = ({dataTooltip, text}) => {
    return (
        <span className='tooltip' data-tooltip={dataTooltip}>
            <span className='tooltip-text'>{text}</span>  
            <img  className='tooltip-img' src="../../assets/information.svg" alt="" />
        </span> 
    );
};

export default Tooltip;