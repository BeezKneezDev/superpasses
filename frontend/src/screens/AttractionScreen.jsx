import React from 'react'
import axios from 'axios'
import { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Container } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Product from '../components/Product'
import {
  listProducts,
  listProductsByAttraction
} from '../actions/productActions'
import Meta from '../components/Meta'
import Card from '../components/Card'
import { listAttractions } from '../actions/attractionActions'
import Hero from '../components/Hero'
import Locations from '../components/Locations'
import LogoSlider from '../components/LogoSlider'
import AttractionSlider from '../components/AttractionSlider'
import LeadSection from './../components/LeadSection'

const AttractionScreen = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const [attraction, setAttraction] = useState('')

  const attractionsList = useSelector((state) => state.attractionsList)
  const {
    loading: loadingAttractions,
    error: errorAttractions,
    attractions
  } = attractionsList

  const filterByAttraction = (e) => {
    e.preventDefault(e)
    setAttraction(e.target.value)
    setTimeout('', 600)
    console.log(e.target.value)
  }

  const productsList = useSelector((state) => state.productsByAttractionList)
  const { loading, error, products } = productsList

  console.log(slug)

  useEffect(() => {
    dispatch(listProductsByAttraction(slug))
    dispatch(listAttractions())
    //window.scrollTo(0, 0)
  }, [dispatch, slug])

  return (
    <>
      <Meta />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Hero
            image={
              'https://www.canopytours.co.nz/wp-content/uploads/2018/07/gift-ideas-canopy-tours.jpg'
            }
          />

          <LeadSection
            content={
              'Phasellus a est. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Phasellus consectetuer vestibulum elit. Proin magna. Vivamus elementum semper nisi.'
            }
          />

          <Row className='pb-20 -mt-10'>
            {products.map((product) => (
              <Col
                key={product._id}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className='mb-10'
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz'
            width={1900}
            height={600}
            style={{ border: 0 }}
            loading='lazy'
            allowfullscreen=''
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>

          <div className='activity-slider py-20'>
            <AttractionSlider
              attractions={attractions}
              filterByAttraction={filterByAttraction}
            />
          </div>
        </>
      )}
    </>
  )
}

export default AttractionScreen
