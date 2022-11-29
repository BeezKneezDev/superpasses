import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useRef, useEffect, useState, useMemo } from 'react'
import Card from '../components/Card'

const FilteredAttractions = () => {
  const dispatch = useDispatch()

  const [selectedActivity, setSelectedActivity] = useState()
  const [attractionList, setAttractionList] = useState([])

  useEffect(() => {
    const fetchAttractions = async () => {
      const response = await fetch('http://localhost:3000/api/attractions')
      const attractionData = await response.json()
      setAttractionList(attractionData)
    }
    fetchAttractions()
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
      {' '}
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
  )
}

export default FilteredAttractions
