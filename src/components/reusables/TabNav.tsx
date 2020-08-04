import React from 'react'

const TabNav = ({ children,
  className, tabClassName, tabBarClassName,
  tabFixed, tabFixedTopOffset, secitonRef }) => {

  return (
    <div ref={secitonRef} className={className}>
      <div
        style={{
          position: tabFixed ? 'fixed' : 'absolute',
          top: tabFixed ? `${tabFixedTopOffset}px` : '0px',
        }}
        className={`tab-section ${tabBarClassName}`}>
        <div className="container">
          <div
            className={`tab ${tabClassName}`} />
        </div>
      </div>
      {children}
    </div >
  )
}

export default TabNav
