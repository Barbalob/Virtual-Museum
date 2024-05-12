import React from 'react';
import './Ticket.scss'
import srcTicketDecor from "../../assets/ticket-decor.png"
import srcTicketDecor2 from "../../assets/ticket-decor2.png"


const Ticket = ({type, description, srcImg}) => {
    const mainColor = type==='ru'?  'rgba(220, 206, 191, 1)' : 'rgba(255, 255, 255, 1)' 
    const bg = type==='ru' ? `url(${srcTicketDecor})`:`url(${srcTicketDecor2})`
    return (
        <div className='ticket' style={{'backgroundImage': bg,"backgroundColor": mainColor  }}>
            <figcaption className='ticket-figcaption'>
                <img className='ticket-figcaption-img' src={srcImg} alt="" /> 
                {/* <figure className='ticket-figcaption-text'>{description}</figure> */}
            </figcaption>
            {/* <div className='ticket-decore'>
                <p className='ticket-decore-date'>02</p>
                <div className="ticket-line"></div>
                <p className='ticket-decore-date'>04</p>
                <p className='ticket-decore-year'>2024</p> 
            </div> */}
            <div className='ticket-title'>ЭПОХА ПЕРЕМЕН</div>
        </div>
    );
};

export default Ticket;