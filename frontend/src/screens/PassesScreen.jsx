import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRef, useEffect, useState, useMemo } from 'react'
import Meta from '../components/Meta'
import Hero from '../components/Hero'

import Carousel from './../components/Carousel'
import Locations from './../components/Locations'
import LogoSlider from './../components/LogoSlider'
import LeadSection from '../components/LeadSection'
import { listSuperPasses } from '../actions/productActions'
import FilteredAttractions from './../components/FilteredAttractions'

const Passes = () => {
  const superpassesList = useSelector((state) => state.superpassesList)
  const { products } = superpassesList

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listSuperPasses())
  }, [dispatch])

  return (
    <>
      <Meta />
      <Hero />
      <LeadSection
        content={
          'Donec sodales sagittis magna. Cras non dolor. Suspendisse non nisl sit amet velit hendrerit rutrum. Praesent ac massa at ligula laoreet iaculis. Etiam rhoncus.'
        }
      />

      <div className='-mt-24'>
        <Carousel products={products} />
      </div>

      <FilteredAttractions />

      <div className='pt-40'>
        <Locations />
      </div>

      <div className='footer-slider pt-20'>
        <LogoSlider />
      </div>
    </>
  )
}

export default Passes
