import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Form, Button } from 'react-bootstrap'
import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { product_update_reset } from '../reducers/productReducers/productUpdateSlice'

import { Editor } from '@tinymce/tinymce-react'

const ProductEditScreen = () => {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { slug } = useParams()

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [adultPrice, setAdultPrice] = useState(0)
  const [childPrice, setChildPrice] = useState(0)
  const [superpass, setSuperpass] = useState(false)
  const [summary, setSummary] = useState('')
  const [location, setLocation] = useState('')
  const [activity, setActivity] = useState('')
  const [attraction, setattraction] = useState('')
  const [description, setDescription] = useState('')

  const [uploading, setUploading] = useState(false)

  const productDetail = useSelector((state) => state.productDetail)
  const { product, loading, error } = productDetail

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    success: successUpdate,
    loading: loadingUpdate,
    error: errorUpdate
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch(product_update_reset())
      navigate(`/admin/products`)
    } else {
      if (!product.name || product.slug !== slug) {
        dispatch(listProductDetails(slug))
      } else {
        setName(product.name)
        setImage(product.image)
        setDescription(product.description)

        setAdultPrice(product.adultPrice)
        setChildPrice(product.childPrice)
        setSuperpass(product.superpass)
        setActivity(product.activity)
        setSummary(product.summary)
        setLocation(product.location)
        setattraction(product.attraction)
      }
    }
  }, [dispatch, navigate, product, slug, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      const { data } = await axios.post('/api/upload', formData, config)
      setImage(data)
      setUploading(false)
    } catch (error) {
      console.log(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: product._id,
        name,
        image,
        adultPrice,
        childPrice,
        superpass,
        summary,
        location,
        activity,
        attraction,
        description
      })
    )
  }

  return (
    <>
      <div className='pt-20'>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <div className='container flex  pb-20'>
              <div className=' w-1/2'>
                <button
                  className='btn bg-brand text-white my-3'
                  onClick={() => navigate(-1)}
                >
                  Go back
                </button>

                <Form className='pt-3' onSubmit={submitHandler}>
                  <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='name'
                      placeholder='Enter name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='image'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter image url'
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    ></Form.Control>
                    <Form.Control
                      id='image-file'
                      type='file'
                      label='Choose File'
                      onChange={uploadFileHandler}
                      custom='true'
                    ></Form.Control>
                    {uploading && <Loader />}
                  </Form.Group>
                  <Form.Group controlId='location'>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter location'
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='activity'>
                    <Form.Label>Activity</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter activity'
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='summary'>
                    <Form.Label>Summary</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter summary'
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <div className='pt-4'>Description</div>
                  <div className='pb-4'>
                    <Editor
                      textareaName='description'
                      value={description}
                      onEditorChange={(newText) => setDescription(newText)}
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          'advlist autolink lists link image charmap print preview anchor',
                          'searchreplace visualblocks code fullscreen',
                          'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                          'undo redo | formatselect | ' +
                          'bold italic backcolor | alignleft aligncenter ' +
                          'alignright alignjustify | bullist numlist outdent indent | ' +
                          'removeformat | help',
                        content_style:
                          'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                      }}
                    />
                  </div>
                  <Form.Group className='hidden' controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={3}
                      placeholder='Enter description'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='adultPrice'>
                    <Form.Label>Adult Price</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Enter Adult Price'
                      value={adultPrice}
                      onChange={(e) => setAdultPrice(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='childPrice'>
                    <Form.Label>Child Price</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Enter Child Price'
                      value={childPrice}
                      onChange={(e) => setChildPrice(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Button type='submit' className='mt-3' variant='primary'>
                    Update
                  </Button>
                </Form>
              </div>
              <div
                className=' w-1/2 bg-center bg-cover mx-20 my-10'
                style={{
                  backgroundImage: `url(${product.image})`
                }}
              ></div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default ProductEditScreen
