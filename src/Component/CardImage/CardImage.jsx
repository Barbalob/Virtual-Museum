import React from 'react';
import './CardImage.scss'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const CardImage = ({arrayImg}) => {
    const items = arrayImg.map(item => {
        return (
            <figcaption style={{'overflowX':'hidden'}} className='card-image'>
                    <img src={`${item.srcImg}`} alt="" />
                    <figure className='card-image-text'>{item.descriptionImg}</figure>
            </figcaption>
        )
    })
    const handleDragStart = (e) => e.preventDefault();
    // const items = [
    //     <figcaption className='card-image'>
    //                 <img src={`../../assets/CardImage/${srcImg}`} alt="" />
    //                 <figure className='card-image-text'>{descriptionImg}</figure>
    //     </figcaption>,
    // ];

    return (
        <>
                <AliceCarousel infinite swipeDelta={50} keyboardNavigation disableButtonsControls  items={items} />
                {/* <figcaption className='card-image'>
                    <img src={`../../assets/CardImage/${srcImg}`} alt="" />
                    <figure className='card-image-text'>{descriptionImg}</figure>
                </figcaption> */}
        </>

    );
};

export default CardImage;