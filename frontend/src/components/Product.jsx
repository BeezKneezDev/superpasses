import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product, slider = false }) => {
  return (
    <div className='my-3 shadow w-full flex flex-col pb-3 mx-3 card-zoom h-full'>
      <Link
        to={`/product/${product.slug}`}
        className=' hover:no-underline contents h-full '
      >
        <div
          className=' min-h-[320px] card-zoom-image'
          style={{
            backgroundImage: `url(${product.image})`
          }}
        ></div>

        <div className='px-3 h-full flex flex-col relative z-10 bg-white'>
          <h3 className='pb-0'>
            <strong className='primary-font text-base leading-4  text-brand'>
              {product.name}
            </strong>
          </h3>

          <div className='flex items-center mt-auto'>
            <div className=' basis-1/2'>
              <Button className='hover:bg-brand'>View Pass</Button>
            </div>
            <div className=' basis-1/2 text-right'>
              <span className='text-[12px]  text-seconary font-bold'>From</span>
              <div className=' primary-font text-brand text-xl '>
                $
                {product.childPrice == 0
                  ? product.adultPrice
                  : product.childPrice}{' '}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product
