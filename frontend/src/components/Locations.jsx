import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Locations = () => {
  return (
    <>
      {/* location cards Rotorua */}
      <div className='flex h-[65vh] bg-seconary'>
        <div className='w-1/2 bg-center bg-cover flex card-zoom'>
          <div
            className='card-zoom-image'
            style={{
              backgroundImage: `url("/images/rotorua.jpg")`
            }}
          ></div>
        </div>

        <div className='w-1/2  text-white p-24 m-auto'>
          <div>
            <h2 className='primary-font text-white text-4xl'>
              THE CITY OF ROTORUA
            </h2>
            <p className='text-lg'>
              Rotorua, the&nbsp;
              <a href='https://superpasses.co.nz/location-information/'>
                hub of North Island tourism
              </a>
              , is an easy 2.5 hour drive south of Auckland. Well known for its
              geothermal activity with{' '}
              <a href='https://superpasses.co.nz/te-puia/'>violent geysers</a>,
              boiling mud pools,{' '}
              <a href='https://superpasses.co.nz/whakarewarewa-village/'>
                gentle hot springs
              </a>
              , steaming cliffs and volcanoes, Rotorua is a must see
              destination. Home to Maori culture, the welcome from the
              indigenous people will make you feel part of the city.
            </p>
            <div className='pt-10'>
              <Link
                to={'/rotorua'}
                className='text-base hover:no-underline uppercase bg-[#fff] hover:bg-black text-brand hover:text-white font-bold py-3 px-10 '
              >
                View Rotorua's Top Passes
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* location cards Taupo */}
      <div className='flex h-[65vh] bg-brand'>
        <div className='w-1/2  text-white p-24 m-auto'>
          <div>
            <h2 className='primary-font text-white text-4xl'>
              THE CITY OF TAUPO
            </h2>
            <p className='text-lg'>
              Taupo is approx. 1 hours drive south of Rotorua (Approx. 3.5 Hours
              from Auckland) and is distinguished by its lakefront setting and
              range of{' '}
              <a href='https://superpasses.co.nz/product-category/taupo/'>
                outdoor activities
              </a>{' '}
              from{' '}
              <a href='https://superpasses.co.nz/product/hukafalls-jet/'>
                jet-boating
              </a>
              ,{' '}
              <a href='https://superpasses.co.nz/product-category/taupo/sail-barbary/'>
                lake cruises
              </a>{' '}
              to{' '}
              <a href='https://superpasses.co.nz/product-category/taupo/taupo-tandem-skydive/'>
                skydiving
              </a>
              ! Taupo is surrounded by hot springs, towing volcanoes and the
              amazing landscape of the{' '}
              <a href='https://superpasses.co.nz/product/go-explore-nz-the-desert-road/'>
                Tongariro National Park
              </a>
              .
            </p>
            <div className='pt-10'>
              <Link
                to={'/taupo'}
                className='text-base hover:no-underline uppercase bg-[#fff] hover:bg-black text-brand hover:text-white font-bold py-3 px-10 '
              >
                View Taupo's Top Passes
              </Link>
            </div>
          </div>
        </div>
        <div className='w-1/2 bg-center bg-cover flex card-zoom'>
          <div
            className='card-zoom-image'
            style={{
              backgroundImage: `url("/images/taupo.jpg")`
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Locations
