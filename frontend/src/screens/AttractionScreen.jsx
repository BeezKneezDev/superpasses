import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductsByAttraction } from '../actions/productActions'
import Meta from '../components/Meta'
import { listAttractions } from '../actions/attractionActions'
import Hero from '../components/Hero'

import AttractionSlider from '../components/AttractionSlider'
import LeadSection from './../components/LeadSection'
import ProductGrid from './../components/ProductGrid'

const AttractionScreen = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const [attraction, setAttraction] = useState('')
  window.scrollTo(0, 0)

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
  const { loading, error, products, details } = productsList

  useEffect(() => {
    dispatch(listProductsByAttraction(slug))
    dispatch(listAttractions())
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
          <Hero image={details.hero} />

          <LeadSection content={details.description} />

          <div className='px-10'>
            <ProductGrid products={products} />
          </div>

          <div className='text-center pt-10  pb-32 w-full'>
            <Link
              to={'/passes'}
              className=' hover:no-underline text-base uppercase bg-brand hover:bg-seconary text-white font-bold py-3 px-10 '
            >
              View All Passes
            </Link>
          </div>

          <iframe
            src={details.map}
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
