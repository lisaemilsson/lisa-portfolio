import React from 'react'

const greeting = 'Hello! I’m Lisa. A UX/UI - designer based in Stockholm'

function LandingSection() {
  return (
      <div className="mt-10 sm:flex">
        <h1 className="my-4 text-6xl font-manrope font-light mt-40">{greeting}</h1>
            <img className=" object-cover my-16 w-64 h-96" src="/profile.jpg" alt="Lisa Emilson"/>
      </div>
  )
}

export default LandingSection
