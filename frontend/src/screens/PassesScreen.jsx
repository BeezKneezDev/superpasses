import React from 'react'
import axios from 'axios'
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
import AttractionSlider from './../components/AttractionSlider'
import LeadSection from '../components/LeadSection'

const Passes = () => {
  const ref = useRef(null)

  const { keyword } = useParams()
  const dispatch = useDispatch()

  const [activity, setActivity] = useState('')
  const [listActivities, setListActivities] = useState([])
  const [attraction, setAttraction] = useState('')
  // if (!attraction) {
  //   window.scrollTo(0, 0)
  // }
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

  console.log(listActivities)
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

  const activitiesList = [
    'adventure',
    'cultural experience',
    'sightseeing',
    'thermal',
    'scenic flights',
    'spa',
    'parks'
  ]
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
              <LeadSection
                content={
                  'Donec sodales sagittis magna. Cras non dolor. Suspendisse non nisl sit amet velit hendrerit rutrum. Praesent ac massa at ligula laoreet iaculis. Etiam rhoncus.'
                }
              />
              <Row className='px-10 mt-[-20px]'>
                <div className='flex m-auto pb-4'>
                  <Button
                    onClick={handleClick}
                    variant='primary'
                    className='mx-2'
                  >
                    All
                  </Button>

                  {activitiesList.map((activity) => (
                    <Button
                      onClick={handleClick}
                      value={activity}
                      variant='primary'
                      className='mx-2'
                    >
                      {activity}
                    </Button>
                  ))}
                </div>
              </Row>
              <Row>
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
