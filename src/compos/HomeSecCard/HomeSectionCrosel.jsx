import React from 'react'

function HomeSectionCard() {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };
    const items = [1, 1, 1, 1, 1, 1, 1].map(items => <HomeSectionCard></HomeSectionCard>)

    return (
        <div className='relative px-4 lg:px-8'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={itm}
                    disableButtonsControls
                    // autoPlay={false}
                    // autoPlayInterval={3000}
                    infinite
                    responsive={responsive}
                />
            </div>
        </div>
    )
}

export default HomeSectionCard