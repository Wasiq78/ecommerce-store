import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='mt-20'>
        <div className="bg-black py-16">
            <div className='flex gap-6 container text-white justify-center flex-wrap'>
                <Link to="/" className='whitespace-nowrap'>About</Link>
                <Link to="/" className='whitespace-nowrap'>Store Locator</Link>
                <Link to="/" className='whitespace-nowrap'>FAQs</Link>
                <Link to="/" className='whitespace-nowrap'>News</Link>
                <Link to="/" className='whitespace-nowrap'>Careers</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer