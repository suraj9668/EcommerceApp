import React from 'react'
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
function HomeSectionCards() {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
          <img className='object-cover object-top w-full h-full' src="https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/r/i/q/xl-no-sports-101-noorhub-original-imah32r7ub7gkbyc.jpeg?q=70&crop=false" alt="aaaa" />

        </div>
        <div className='p-4'>
          <h3 className='text-lg font-medium text-grey-900'>notifier</h3>
          <p className='mt-2 text-sm text-grey-500'>Men solid pure cotton shirt</p>
        </div>
    </div>
  )
}

export default HomeSectionCards