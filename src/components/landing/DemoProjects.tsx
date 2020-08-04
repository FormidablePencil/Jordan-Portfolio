import React from 'react'
import LandingContainer from '../reusables/LandingContainer'
import TabNav from '../reusables/TabNav'

function DemoProjects({ tabFixed, tabFixedTopOffset, secitonRef }) {
  return (
    <TabNav
      className="demo-projects flex"
      tabBarClassName='customTabBar'
      tabClassName='customTab'
      secitonRef={secitonRef}
      tabFixed={tabFixed}
      tabFixedTopOffset={tabFixedTopOffset}
    >
      <LandingContainer>
        <p>demo projects</p>
      </LandingContainer>
    </TabNav>
  )
}

export default DemoProjects
