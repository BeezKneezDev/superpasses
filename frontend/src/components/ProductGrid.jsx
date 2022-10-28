import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
import Product from '../components/Product'

const ProductGrid = ({ products }) => {
  return (
    <div className='flex pb-20 product-grid'>
      {products.map((product) => (
        <div key={product._id} className='mb-10 w-1/4 mx-2'>
          <Product product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
