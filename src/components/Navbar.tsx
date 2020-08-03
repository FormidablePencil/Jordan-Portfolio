import React from 'react'

function Navbar() {
  return (
    <div className='navbar flex'>
      <div className="container flex align-center justify-center">
        <div className="navTabs flex-1">
          <button className="btn-standard">Home</button>
          <button className="btn-standard">Technologies</button>
          <button className="btn-standard">Projects</button>
          <button className="btn-standard">Bio</button>
          <button className="btn-standard">Contacts</button>
        </div>
        <div className="navLinks flex justify-end">
          <button className="resume-btn">Resume</button>
          <button className="btn-standard">Project Library</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
