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
import LeadSection from '../components/LeadSection'
import Carousel from './../components/Carousel'

const Taupo = () => {
  const dispatch = useDispatch()

  window.scrollTo(0, 0)

  const productsList = useSelector((state) => state.productsList)
  const { loading, error, products } = productsList

  useEffect(() => {
    dispatch(listProducts('', '', '', 'taupo'))
  }, [dispatch])

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

          <div>
            <LeadSection content='Taupo is approx. 1 hours drive south of Rotorua (Approx. 3.5 Hours from Auckland) and is distinguished by its lakefront setting and range of outdoor activities from jet-boating, lake cruises to skydiving! Taupo is surrounded by hot springs, towing volcanoes and the amazing landscape of the Tongariro National Park.' />
          </div>

          <Carousel products={products} />

          <div className='text-center pt-20 pb-40'>
            <Link
              to={'/passes'}
              className=' hover:no-underline text-base uppercase bg-brand hover:bg-seconary text-white font-bold py-3 px-10 '
            >
              View All Passes
            </Link>
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d99684.68787495389!2d176.00312666009683!3d-38.6685011657966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smap%20of%20tourist%20attractions%20taupo!5e0!3m2!1sen!2snz!4v1666302576600!5m2!1sen!2snz'
            width={1900}
            height={600}
            style={{ border: 0 }}
            loading='lazy'
            allowfullscreen=''
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </>
      )}
    </>
  )
}

export default Taupo
