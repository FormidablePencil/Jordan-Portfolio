import React from 'react'

function LandingContainer({ children }) {
  return (
    <div className="container flex justify-center align-center"> {/* This could be modularized */}
      {children}
    </div>
  )
}

export default LandingContainer
