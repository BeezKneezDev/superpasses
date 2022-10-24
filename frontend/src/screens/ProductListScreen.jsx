import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import FormContainer from '../components/FormContainer'
import {
  listProducts,
  deleteProduct,
  createProduct
} from '../actions/productActions'
import { product_create_reset } from '../reducers/productReducers/productCreateSlice'

const ProductListScreen = () => {
  const pageNumber = useParams().pageNumber || 1
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productList = useSelector((state) => state.productList)
  const { products, loading, error } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const {
    success: successDelete,
    loading: loadingDelete,
    error: errorDelete
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    success: successCreate,
    loading: loadingCreate,
    error: errorCreate,
    product: createdProduct
  } = productCreate

  useEffect(() => {
    dispatch(product_create_reset())

    if (!userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/product/${createdProduct.slug}/edit`)
    } else {
      dispatch(listProducts())
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    pageNumber,
    successDelete,
    successCreate,
    createdProduct
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  return (
    <div className='container py-20'>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-end'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus' /> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>NAME</th>
              <th>LOCATION</th>
              <th>ATTRACTIONS</th>
              <th>ACTIVITY</th>
              <th>SUPERPASS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className='max-w-xs'>
                  <Link to={`/product/${product.slug}`}>{product.name}</Link>
                </td>
                <td className=' capitalize'>{product.location}</td>
                <td className=' capitalize max-w-xs'>
                  {product.attraction.map((attraction) => `${attraction} `)}
                </td>
                <td className=' capitalize'>{product.activity}</td>
                <td>{product.superpass ? 'yes' : 'no'}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product.slug}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit' />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className='fas fa-trash' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        /* <Paginate pages={pages} page={page} isAdmin={true}></Paginate> */
      )}
    </div>
  )
}

export default ProductListScreen
