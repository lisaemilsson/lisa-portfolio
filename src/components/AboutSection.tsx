import React from 'react'
import ContactForm from './ContactForm'
import Alert from './Alert'
function AboutSection() {
  return (
    <div className='my-16 grid grid-cols-1 md:grid-cols-2'>
      <div className='flex flex-col justify-center'>
        <h2 className='text-3xl font-semibold text-gray-700'>About me</h2>
        <p className='my-4 text-gray-400'>As a UX/UI Designer, I have had the opportunity to work with a wide range of clients on a variety of projects. My passion for design and user research has driven me to consistently deliver high-quality work that meets and exceeds my clients' expectations.</p>
      </div>
    </div>
  )
}

export default AboutSection