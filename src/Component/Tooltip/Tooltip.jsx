import React from 'react';
import './Tooltip.scss'
import { NavLink } from 'react-router-dom';
import srcInformation from "../../assets/information.svg"


const Tooltip = ({dataTooltip, src, name, src2}) => {
    return (
        <>  
            <div className='tooltip'>
                <img  className='tooltip-img' src={srcInformation} alt="" />
                <ul className='tooltip-list'>
                    {/* <div className='tooltip-list-wrapper'>
                        <p>{dataTooltip}</p>
                        {src ? <NavLink to={src}>ПОДРОБНЕЕ</NavLink>:""}
                    </div> */}
                    <p><span style={{color:'rgba(111, 80, 47, 1)', 'fontWeight': 700}}>{name}</span> {dataTooltip}</p>
                    
                    {src2 ? 
                    src2.map(el=>{
                        return(<NavLink to={`${el.src}`}>{el.text}</NavLink>)
                    })
                    :""}

                    {src ? 
                    src.map(el=>{
                        return(<NavLink to={`/${el.src}`}>{el.text}</NavLink>)
                    })
                    :""}
                    
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