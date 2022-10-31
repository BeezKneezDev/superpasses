import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Link } from 'react-router-dom'

const LogoSlider = ({ attractions }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 }
  }

  const items = attractions.map((attraction) => (
    <Link
      to={`/attraction/${attraction.slug}`}
      className='w-full h-50 bg-contain bg-no-repeat bg-center block'
      style={{
        backgroundImage: `url(${attraction.logo})`
      }}
    ></Link>
  ))

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
