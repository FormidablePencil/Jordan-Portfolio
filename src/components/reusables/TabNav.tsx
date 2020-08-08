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
            {/* <div id={tabTitle} style={{ height: '100vh' }}>
              <div style={{ position: tabFixed ? "fixed" : 'absolute', zIndex: 0, height: '100vh', width: '100vw', display: 'flex' }}> */}
            <AnchorLink className='anchorLink' href={`#${tabTitle}`}>{tabTitle}</AnchorLink>

            {/* </div>
            </div> */}
          </div>
      {children}
        </div>
      </div>
    </div>
  )
}

export default TabNav
