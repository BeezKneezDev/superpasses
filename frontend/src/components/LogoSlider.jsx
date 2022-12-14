import { useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { listAttractions } from './../actions/attractionActions'

const LogoSlider = ({ className }) => {
  const dispatch = useDispatch()
  const attractionsList = useSelector((state) => state.attractionsList)
  const { attractions } = attractionsList

  useEffect(() => {
    dispatch(listAttractions())
  }, [dispatch])

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
    <div className={className}>
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
    </div>
  )
}

export default LogoSlider
