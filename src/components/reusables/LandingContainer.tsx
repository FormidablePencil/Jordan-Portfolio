import React from 'react'

function LandingContainer({ children, anchorId }: { children, anchorId?: string }) {
  return (
    <div id={anchorId} className="container flex justify-center align-center"> {/* This could be modularized */}
      {children}
    </div>
  )
}

export default LandingContainer
