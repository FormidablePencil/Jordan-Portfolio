import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { tabTitles } from '../constants/staticData';


export const getNavTabPosition = (index) => {
  if (index === 0) return 100
  else return 50 * index * 3 + 44
}

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-inner-container">
        <div className="navTabs">
          {tabTitles.map((title, index) =>
            index !== 0 &&
            <AnchorLink
              key={title}
              className='navbar-btn' style={{ left: getNavTabPosition(index) }} href={`#${title}`}>{title}</AnchorLink>
          )}
        </div>
        <div className="additional-nav-tabs">
          <a href='/' className='navbar-btn portfolio-btn' style={{ right: '50px' }}>Porfolio</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
