import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Row, Col, Button, Container } from 'react-bootstrap'
import Card from '../components/Card'

const AttractionSlider = ({ attractions, filterByAttraction }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 }
  }

  const strAscending = [...attractions].sort(() => Math.random() - 0.5)

  const items = strAscending.map((attraction) => (
    <Col key={attraction._id} sm={12} md={6} lg={4} xl={3} className='my-2'>
      <Card attraction={attraction} filterByAttraction={filterByAttraction} />
    </Col>
  ))
  return (
    <AliceCarousel
      mouseTracking
      infinite={true}
      autoHeight={true}
      autoPlayInterval={3000}
      animationDuration={800}
      items={items}
      autoPlay={true}
      responsive={responsive}
      controlsStrategy='alternate'
      disableButtonsControls={true}
    />
  )
}

export default AttractionSlider
