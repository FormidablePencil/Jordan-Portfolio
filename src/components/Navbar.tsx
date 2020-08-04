import React from 'react'

function Navbar() {
  return (
    <div className='navbar flex'>
      <div className="container flex align-center justify-center">
        <div className="navTabs flex-1 flex">
          <div className="bgColor">
            <button className="navbar-tab horizontal-margins"><p>Home</p></button>
          </div>
          <div className="bgColor">
            <button className="navbar-tab horizontal-margins"><p>Technologies</p></button>
          </div>
          <div className="bgColor">
            <button className="navbar-tab horizontal-margins"><p>Projects</p></button>
          </div>
          <div className="bgColor">
            <button className="navbar-tab horizontal-margins"><p>Bio</p></button>
          </div>
          <div className="bgColor">
            <button className="navbar-tab horizontal-margins"><p>Contacts</p></button>
          </div>
        </div>
        <div className="navLinks flex justify-end">
          <button className="action-btn horizontal-margins"><p>Resume</p></button>
          <button className="navbar-tab horizontal-margins"><p>Project Library</p></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
