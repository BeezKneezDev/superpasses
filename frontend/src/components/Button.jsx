import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ className, text, to = '/passes' }) => {
  return (
    <div className={className}>
      <Link
        to={to}
        className=' hover:no-underline text-base uppercase bg-brand hover:bg-seconary text-white font-bold py-3 px-10 '
      >
        {text}
      </Link>
    </div>
  )
}

export default Button
