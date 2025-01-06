import React from 'react'
import HomeSectionCards from './HomeSectionCards'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { transformWithEsbuild } from 'vite';
// import { PickersCalendarHeader } from '@mui/x-date-pickers/PickersCalendarHeader';
function HomeSectionCrosel() {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(items => <HomeSectionCards></HomeSectionCards>)

    return (
        <div className='relative px-4 lg:px-8'>
            <div className='relative p-5 border'>
                <AliceCarousel
                    items={items}
                    autoPlay={false}
                    autoPlayInterval={3000}
                    infinite
                    responsive={responsive}
                    disableDostsControls
                />
                <button variant='contained' className='z-50' style={{ position: 'absolute', top: '8rem', right: '3rem', transform: 'translateX(50%) rotate(90deg)' }}>
                    <KeyboardArrowLeftIcon style={{transform:'rotate(90deg)', color:'black'}}/>
                     
                </button>
            </div>
        </div>
    )
}

export default HomeSectionCrosel

