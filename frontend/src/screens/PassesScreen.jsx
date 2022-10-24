import React from 'react'
import { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Container } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Meta from '../components/Meta'
import Card from '../components/Card'
import { listAttractions } from './../actions/attractionActions'
import Hero from '../components/Hero'
import Locations from './../components/Locations'
import LogoSlider from './../components/LogoSlider'

const Passes = () => {
  const ref = useRef(null)

  const { keyword } = useParams()
  const dispatch = useDispatch()

  const [activity, setActivity] = useState('')
  const [attraction, setAttraction] = useState('')
  if (!attraction) {
    window.scrollTo(0, 0)
  }
  const attractionsList = useSelector((state) => state.attractionsList)
  const {
    loading: loadingAttractions,
    error: errorAttractions,
    attractions
  } = attractionsList

  const productsList = useSelector((state) => state.productsList)
  const { loading, error, products } = productsList

  useEffect(() => {
    dispatch(listProducts(keyword, attraction))
    dispatch(listAttractions(activity))
  }, [dispatch, keyword, activity, attraction])

  const handleClick = (e) => {
    e.preventDefault(e)
    setActivity(e.target.value)
    //console.log(e.target.value)
  }

  const filterByAttraction = (e) => {
    e.preventDefault(e)
    setAttraction(e.target.value)
    setTimeout('', 600)
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    console.log(e.target.value)
  }
  return (
    <>
      <Meta />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Hero />

          {keyword ? (
            <>
              <div className='px-20 py-10'>
                <Link
                  to='/passes'
                  className='text-base uppercase bg-brand hover:bg-seconary text-white font-bold py-3 px-10 '
                >
                  Go back
                </Link>
              </div>
            </>
          ) : (
            <>
              <Row className='px-10 pt-20'>
                <div className='flex m-auto pb-2'>
                  <Button
                    onClick={handleClick}
                    variant='primary'
                    className='mx-2'
                  >
                    All
                  </Button>
                  <Button
                    onClick={handleClick}
                    value='adventure'
                    variant='primary'
                    className='mx-2'
                  >
                    Adventure
                  </Button>
                  <Button
                    onClick={handleClick}
                    value='scenic flights'
                    variant='primary'
                    className='mx-2'
                  >
                    Scenic Flights
                  </Button>
                  <Button
                    onClick={handleClick}
                    value='cultural experience'
                    variant='primary'
                    className='mx-2'
                  >
                    Cultural Experience
                  </Button>
                </div>
              </Row>
              <Row className='px-10 pb-40'>
                {attractions.map((attraction) => (
                  <Col
                    key={attraction._id}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    className='my-2'
                  >
                    <Card
                      attraction={attraction}
                      filterByAttraction={filterByAttraction}
                    />
                  </Col>
                ))}
              </Row>
            </>
          )}

          <div id='passes' ref={ref} className='m-auto px-20'>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </div>

          <div className='pt-40'>
            <Locations />
          </div>
          <div className='footer-slider pt-20'>
            <LogoSlider />
          </div>
        </>
      )}
    </>
  )
}

export default Passes
