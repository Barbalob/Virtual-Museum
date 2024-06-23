import React, { useEffect, useRef, useState } from 'react';
import './CardImage.scss'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useLocation } from 'react-router-dom';

const CardImage = ({arrayImg}) => {
    const carousel = useRef(null);
    const handleClick =  ({target}) => {
        if(!document.fullscreenElement){
            target.requestFullscreen().catch((err)=>console.log(err))
        } else {
            document.exitFullscreen();
        }
    }
    const items = arrayImg.map(item => {
        return (
            <figcaption style={{'overflowX':'hidden'}} className='card-image'>
                    <img  onClick={handleClick} src={`${item.srcImg}` } alt="" />
                    <figure className='card-image-text'>{item.descriptionImg}</figure>
            </figcaption>
        )
    })



    return (
        <>
                {arrayImg.length === 0 ?  '' : 
                    arrayImg.length === 1 ? 
                    <div className='card-image-wrapper'>
                        <figcaption className='card-image'>
                            <img src={`${arrayImg[0].srcImg}`} alt="" />
                            <figure className='card-image-text'>{arrayImg[0].descriptionImg}</figure>
                        </figcaption>
                    </div>
                    : 
                    <AliceCarousel ref={carousel} autoHeight={true} lazyLoad={true} infinite  swipeDelta={50} keyboardNavigation  items={items} />
                    
                }
                
                {/* <AliceCarousel infinite swipeDelta={50} keyboardNavigation disableButtonsControls  items={items} /> */}
                {/* <figcaption className='card-image'>
                    <img src={`../../assets/CardImage/${srcImg}`} alt="" />
                    <figure className='card-image-text'>{descriptionImg}</figure>
                </figcaption> */}
        </>

    );
};

export default CardImage;