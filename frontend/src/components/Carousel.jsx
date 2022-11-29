import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const Carousel = ({ products, className }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 }
  }

  const items = products.map((product) => (
    <div className='flex w-full h-full px-2'>
      <Product product={product} sider={true} />
    </div>
  ))
  return (
    <div className={className}>
      <AliceCarousel
        mouseTracking
        infinite={true}
        autoHeight={true}
        autoPlayInterval={3000}
        animationDuration={800}
        autoPlayStrategy={'default'}
        items={items}
        autoPlay={true}
        responsive={responsive}
        controlsStrategy='alternate'
        disableButtonsControls={true}
      />
    </div>
  )
}

export default Carousel
