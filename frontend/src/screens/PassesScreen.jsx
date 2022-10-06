import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Meta from '../components/Meta'
import Card from '../components/Card'
import { listAttractions } from './../actions/attractionActions'
import Hero from '../components/Hero'

const Passes = () => {
  const ref = useRef(null)

  const { keyword } = useParams()
  const dispatch = useDispatch()
  const pageNumber = useParams().pageNumber || 1

  const [activity, setActivity] = useState('')
  const [attraction, setAttraction] = useState('')

  const attractionsList = useSelector((state) => state.attractionsList)
  const {
    loading: loadingAttractions,
    error: errorAttractions,
    attractions
  } = attractionsList

  const productsList = useSelector((state) => state.productsList)
  const { loading, error, products, page, pages } = productsList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, attraction))
    dispatch(listAttractions(activity))
  }, [dispatch, keyword, pageNumber, activity, attraction])

  const handleClick = (e) => {
    e.preventDefault(e)
    setActivity(e.target.value)
    //console.log(e.target.value)
  }

  const filterByAttraction = (e) => {
    e.preventDefault(e)
    setAttraction(e.target.value)
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    //console.log(e.target.value)
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
          <Row className='px-10 pt-20'>
            <div className='flex m-auto pb-2'>
              <Button onClick={handleClick} variant='primary' className='mx-2'>
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

          <div ref={ref} className='m-auto px-20'>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </>
  )
}

export default Passes
