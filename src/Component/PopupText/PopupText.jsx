import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './PopupText.scss'

const PopupText = ({mainDescription}) => {
    const [show, setShow] = useState(false)
    const { ref, inView, entry } = useInView({
        threshold: 0.3,
        delay :100,
        triggerOnce: true
      });
    
    return (
        <div>
            <ul ref={ref} className="popup-description-list">
                {mainDescription.map((item,index)=>{
                    return (
                            <li key={index} className="popup-description-list-item">
                                <div className="popup-description-list-item-wrapper">
                                    <p className={`popup-description-list-item-wrapper-text ${inView ? 'showText':''}`}>{item.decsription}</p>
                                    <img src={`${item.srcImg}`} alt="" className="popup-description-list-item-wrapper-img" />
                                </div>
                            </li>
                        )
                })}       
            </ul>
        </div>
        
    );
};

export default PopupText;