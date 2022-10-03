import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const navigate = useNavigate()

  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate(`/`)
    }
  }

  return (
    <div className='w-1/2 flex'>
      <Form onSubmit={submitHandler} className='d-flex ml-auto pr-[68px]'>
        <Form.Control
          type='text'
          name='q'
          className='block w-[510px] px-4 py-2 text-primary bg-white border rounded-full focus:outline-none focus:ring focus:ring-opacity-40'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products...'
        ></Form.Control>
        <button
          type='submit'
          className='px-4 text-white bg-brand hover:bg-seconary rounded-full '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </Form>
    </div>
  )
}

export default SearchBox
