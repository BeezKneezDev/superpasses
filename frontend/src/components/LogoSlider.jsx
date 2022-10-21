import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const LogoSlider = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 }
  }

  const items = [
    <div
      className='w-full h-50 bg-contain bg-no-repeat bg-center'
      style={{
        backgroundImage: `url("/images/logos/skyline-logo.png")`
      }}
    ></div>,
    <div
      className='w-full h-50 bg-contain bg-no-repeat  bg-center'
      style={{
        backgroundImage: `url("/images/logos/zorb-logo.png")`
      }}
    ></div>,
    <div
      className='w-full h-50 bg-contain bg-no-repeat  bg-center'
      style={{
        backgroundImage: `url("/images/logos/volcanic-air-logo.png")`
      }}
    ></div>,
    <div
      className='w-full h-50 bg-contain bg-no-repeat  bg-center'
      style={{
        backgroundImage: `url("/images/logos/download.png")`
      }}
    ></div>
  ]
  return (
    <AliceCarousel
      mouseTracking
      infinite={true}
      autoHeight={true}
      autoPlayInterval={3000}
      animationDuration={800}
      autoPlayStrategy={'none'}
      items={items}
      autoPlay={true}
      responsive={responsive}
      controlsStrategy='alternate'
      disableButtonsControls={true}
      disableDotsControls={true}
    />
  )
}

export default LogoSlider
