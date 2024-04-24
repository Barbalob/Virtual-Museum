import React from 'react';
import './Ticket.scss'
const Ticket = ({type, description, srcImg}) => {
    const mainColor = type==='ru'?  'rgba(220, 206, 191, 1)' : 'rgba(255, 255, 255, 1)' 
    return (
        <div className='ticket' style={{"backgroundColor": mainColor}}>
            <figcaption className='ticket-figcaption'>
                <img className='ticket-figcaption-img' src={"../../assets/ticketImg/" + srcImg} alt="" /> 
                <figure className='ticket-figcaption-text'>{description}</figure>
            </figcaption>
            <div className='ticket-decore'>
                <p className='ticket-decore-date'>02</p>
                <div className="ticket-line"></div>
                <p className='ticket-decore-date'>04</p>
                <p className='ticket-decore-year'>2024</p> 
            </div>
            <div className='ticket-title'>ЭПОХА ПЕРЕМЕН</div>
        </div>
    );
};

export default Ticket;