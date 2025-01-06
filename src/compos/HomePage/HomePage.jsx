import React from 'react'
 import MainCrosel from '../HomeCrosel/MainCrosel.jsx'
 import HomeSectionCrosel from '../HomeSecCard/HomeSectionCrosel.jsx'
function HomePage() {
  return (
    <div>
        <MainCrosel></MainCrosel> 
        <div>
          <HomeSectionCrosel></HomeSectionCrosel>
        </div>
    </div>
  )
}

export default HomePage