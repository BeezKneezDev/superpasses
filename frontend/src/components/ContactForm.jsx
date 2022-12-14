import React from 'react'

const ContactForm = () => {
  return (
    <div className='p-10'>
      <form class='w-full'>
        <div class='flex flex-wrap -mx-3 mb-3'>
          <div class='w-full md:w-1/2 px-3 '>
            <label
              class='block uppercase tracking-wide text-white text-xs font-bold mb-2'
              for='grid-first-name'
            >
              First Name
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500  py-3 px-4 leading-tight focus:outline-none focus:bg-white'
              id='grid-first-name'
              type='text'
              placeholder='Jane'
            />
            {/* <p class='text-white text-xs italic'>Please fill out this field.</p> */}
          </div>
          <div class='w-full md:w-1/2 px-3'>
            <label
              class='block uppercase tracking-wide text-white text-xs font-bold'
              for='grid-last-name'
            >
              Last Name
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-last-name'
              type='text'
              placeholder='Doe'
            />
          </div>
        </div>
        <div class='flex flex-wrap -mx-3'>
          <div class='w-full px-3'>
            <label
              class='block uppercase tracking-wide text-white text-xs font-bold mb-2'
              for='grid-password'
            >
              E-mail
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='email'
              type='email'
            />
            {/* <p class='text-white text-xs italic'>
              Some tips - as long as needed
            </p> */}
          </div>
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3'>
            <label
              class='block uppercase tracking-wide text-white text-xs font-bold mb-2'
              for='grid-password'
            >
              Message
            </label>
            <textarea
              class=' no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
              id='message'
            ></textarea>
            {/* <p class='text-white text-xs italic'>
              Re-size can be disabled by set by resize-none / resize-y /
              resize-x / resize
            </p> */}
          </div>
        </div>
        <div class='md:flex md:items-center'>
          <div class='md:w-1/3'>
            <button
              class='hover:no-underline text-base uppercase bg-white hover:bg-seconary text-brand font-bold py-3 px-10'
              type='button'
            >
              Send
            </button>
          </div>
          <div class='md:w-2/3'></div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
