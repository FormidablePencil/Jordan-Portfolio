import React from 'react'
import LandingContainer from '../reusables/LandingContainer'
import TabNav from '../reusables/TabNav'

function Intro({ tabFixed, tabFixedTopOffset, sectionRef, tabTitle }) {
  return (
    <TabNav
      tabTitle={tabTitle}
      className='intro flex'
      tabBarClassName='customTabBar'
      tabClassName='customTab'
      sectionRef={sectionRef}
      tabFixed={tabFixed}
      tabFixedTopOffset={tabFixedTopOffset}>
      <LandingContainer anchorId={tabTitle}>
        <p className='centered-paragraph'>Lorem ipsum dolor sit amet consectetur
        ipsum quae nulla, at porro volupta
        ipsum quae nulla, at porro voluptas, corrupti cumque?
      </p>
      </LandingContainer>
    </TabNav>
  )
}

export default Intro
