import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const TabNav = ({ children,
  className, tabClassName, tabBarClassName,
  tabFixed, tabFixedTopOffset, sectionRef, tabTitle }) => {

  return (
    <div ref={sectionRef} className={className}>
      <div
        style={{
          position: tabFixed ? 'fixed' : 'absolute',
          top: tabFixed ? `${tabFixedTopOffset}px` : '0px',
        }}
        className='customTabBar'>
        <div className="container">
          <div className={`customTab`}>
            <AnchorLink className='anchorLink' href={`#${tabTitle}`}>{tabTitle}</AnchorLink>
          </div>
        </div>
      </div>
      {children}
    </div >
  )
}

export default TabNav
