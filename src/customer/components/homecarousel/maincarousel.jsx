import React from 'react';
import { maincarouseldata } from './maincarousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const maincarousel = () => {
    const items = maincarouseldata.map( (intem) => <img className='cursor-pointer' role = 'presentation' src={item.image} alt="" )

  return (
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonControls
        autoplay
        autoplayInterval  = {1000}
        infinite
    />
  );
};

export default maincarousel   