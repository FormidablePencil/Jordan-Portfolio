import React from 'react'
import Navbar from '../Navbar'

function LandingContainer({ children }) {
  return (
    <>
      <Navbar />
      <div className="container flex justify-center align-center"> {/* This could be modularized */}
        {children}
      </div>
    </>
  )
}

export default LandingContainer
