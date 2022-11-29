import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useRef, useEffect, useState, useMemo } from 'react'
import { listAttractions } from './../actions/attractionActions'
import Meta from '../components/Meta'
import Card from '../components/Card'
import Hero from '../components/Hero'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Carousel from './../components/Carousel'
import Locations from './../components/Locations'
import LogoSlider from './../components/LogoSlider'
import LeadSection from '../components/LeadSection'
import { listSuperPasses } from '../actions/productActions'

const Passes = () => {
  const ref = useRef(null)

  // superpasses
  const superpassesList = useSelector((state) => state.superpassesList)
  const { products } = superpassesList

  const { keyword } = useParams()
  const dispatch = useDispatch()

  const [selectedActivity, setSelectedActivity] = useState()
  const [attractionList, setAttractionList] = useState([])

  // This is used for logo only
  const attractionsList = useSelector((state) => state.attractionsList)
  const { loading, error } = attractionsList

  useEffect(() => {
    const fetchAttractions = async () => {
      const response = await fetch('http://localhost:3000/api/attractions')
      const attractionData = await response.json()
      setAttractionList(attractionData)
    }
    fetchAttractions()
    dispatch(listSuperPasses())
  }, [dispatch])

  const handleCategoryChange = (e) => {
    e.preventDefault(e)
    setSelectedActivity(e.target.value)
  }

  function getFilteredList() {
    if (!selectedActivity) {
      return attractionList
    }
    return attractionList.filter((item) => item.activity === selectedActivity)
  }

  var filteredList = useMemo(getFilteredList, [
    selectedActivity,
    attractionList
  ])

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

              <div className='-mt-24'>
                <Carousel products={products} />
              </div>

              <Row className='px-10 mt-20'>
                <div className='flex m-auto pb-4'>
                  <Button
                    onClick={handleCategoryChange}
                    variant='primary'
                    className='mx-2'
                  >
                    All
                  </Button>

                  {activitiesList.map((activity) => (
                    <Button
                      onClick={handleCategoryChange}
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
                {filteredList.map((attraction) => (
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
                      filterByAttraction={handleCategoryChange}
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
            <LogoSlider attractions={attractionList} />
          </div>
        </>
      )}
    </>
  )
}

export default Passes
