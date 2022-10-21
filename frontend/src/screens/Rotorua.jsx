import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Meta from '../components/Meta'
import Hero from '../components/Hero'
import LeadSection from '../components/LeadSection'
import Carousel from './../components/Carousel'
import { Link } from 'react-router-dom'

const Rotorua = () => {
  const dispatch = useDispatch()

  window.scrollTo(0, 0)

  const productsList = useSelector((state) => state.productsList)
  const { loading, error, products } = productsList

  useEffect(() => {
    dispatch(listProducts('', '', '', 'rotorua'))
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
            <LeadSection content='Rotorua, the hub of North Island tourism, is an easy 2.5 hour drive south of Auckland. Well known for its geothermal activity with violent geysers, boiling mud pools, gentle hot springs, steaming cliffs and volcanoes, Rotorua is a must see destination. Home to Maori culture, the welcome from the indigenous people will make you feel part of the city.' />
          </div>

          <div className='pb-20'>
            <Carousel products={products} />
          </div>

          <div className='text-center pt-0 pb-20'>
            <Link
              to={'/passes'}
              className=' hover:no-underline text-base uppercase bg-brand hover:bg-seconary text-white font-bold py-3 px-10 '
            >
              View All Passes
            </Link>
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d50217.25386694886!2d176.20026650737816!3d-38.1267424621238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smap%20of%20tourist%20attractions%20rotorua!5e0!3m2!1sen!2snz!4v1666302469524!5m2!1sen!2snz'
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

export default Rotorua
