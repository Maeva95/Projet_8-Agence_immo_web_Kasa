/* eslint-disable react/prop-types */
//import style from './Carousel.module.css';
import '../../../style.css'
import { useState } from 'react';
import chevronLeft from '../../assets/chevron_left.svg';
import chevronRight from '../../assets/chevron_right.svg';
import { PropTypes } from 'prop-types';

export default function Carousel ({id, pictures}) {

    const [pictureCurrent, setPictureCurrent] = useState(0);
    const slidesLength = pictures.length;
    const numberSlide = `${pictureCurrent + 1} / ${slidesLength}`

    function nextSlide() {
        setPictureCurrent(pictureCurrent === slidesLength - 1 ? 0 : pictureCurrent + 1);
    }

    function prevSlide() {
        setPictureCurrent(pictureCurrent === 0 ? slidesLength - 1 : pictureCurrent - 1);
    }

    
    return (
        <section key={id} className='carouselImage'>
            {slidesLength > 1 &&
            <>
                <img src={chevronLeft} alt="Image précédente" onClick={prevSlide} className='arrow arrow-left'/>
                <img src={chevronRight} alt="Image suivante" onClick={nextSlide} className='arrow arrow-right'/>
            </>
            }
            <>
            {pictures.map((slide, index) => {
                return (
                    <div key={index} className={pictureCurrent === index ? 'slideActive' : 'slide'}>
                        {index === pictureCurrent &&
                            <>
                                <img src={slide} alt='appartement' />
                                <span className='slideNumber'>{numberSlide}</span>
                            </>
                        }
                    </div>
                )})}
            </>
        </section>
    );
}

Carousel.propTypes = {
    length: PropTypes.node
}