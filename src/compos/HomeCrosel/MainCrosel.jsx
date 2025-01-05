import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {homeCarouselData} from './CroselData.jsx'
 

const MainCrosel = () => {
  
  const itm =  homeCarouselData.map((items)=> <img src={items.image} className='cursor-pointer' role='presentation' alt='ksk'/>)

  return (
    <AliceCarousel
        items={itm} 
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
    />)
  }
 export default MainCrosel;