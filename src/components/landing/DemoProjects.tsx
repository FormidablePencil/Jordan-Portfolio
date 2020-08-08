import React, { useState } from 'react'
import TabNav from '../reusables/TabNav'
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab } from '@material-ui/core';


function DemoProjects({ tabFixed, tabFixedTopOffset, sectionRef, tabTitle }) {
  const [index, setIndex] = useState({ index: 0 });


  const handleChange = (index, value) => {
    setIndex({ index: value });
  };

  const handleChangeIndex = (index) => {
    setIndex({ index });
  };


  return (
    <TabNav
      className="demo-projects flex"
      tabBarClassName='customTabBar'
      tabClassName='customTab'
      sectionRef={sectionRef} tabTitle={tabTitle}
      tabFixed={tabFixed}
      tabFixedTopOffset={tabFixedTopOffset}
    >
      <div className='demo-proj-container'>
        <Tabs id={tabTitle} className='tabs-container' value={index} onChange={handleChange}>
          <Tab className='tab1' label="tab1" />
          <Tab className='tab2' label="tab2" />
          <Tab className='tab3' label="tab3" />
        </Tabs>
        <SwipeableViews className='content-section-container' index={index.index} onChangeIndex={handleChangeIndex}>
          <div className='sect1'>slide n°1</div>
          <div className='sect2'>slide n°2</div>
          <div className='sect3'>slide n°3</div>
        </SwipeableViews>
      </div>
    </TabNav>
  )
}

export default DemoProjects
