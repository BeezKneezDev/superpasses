import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <div
          className=' h-80 bg-center bg-cover'
          style={{
            backgroundImage: `url(${product.image})`
          }}
        ></div>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='h3'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text>
          <span className='text-[12px]  text-brand'>From</span>
          <div>${product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
