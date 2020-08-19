import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, withStyles, Box } from '@material-ui/core';
import ContentSect1 from './projectContent/ContentSect1';
import ContentSect2 from './projectContent/ContentSect2';
import ContentSect3 from './projectContent/ContentSect3';

const SectionBox = withStyles({
  root: {
    display: 'flex',
  }
})(Box);

function DemoProjects() {
  const [index, setIndex] = useState({ index: 0 });

  const handleChange = (index, value) => setIndex({ index: value })
  const handleChangeIndex = (index) => setIndex({ index })


  return (
    <>
      <div>
        <Tabs className='tabs-container' value={index} onChange={handleChange}>
          <Tab className='tab1' label="tab1" />
          <Tab className='tab2' label="tab2" />
          <Tab className='tab3' label="tab3" />
        </Tabs>
        <SwipeableViews index={index.index} onChangeIndex={handleChangeIndex}>
          <SectionBox justifyContent='center' alignItems='center' >
            <ContentSect1 />
          </SectionBox>
          <SectionBox justifyContent='center' alignItems='center' >
            <ContentSect2 />
          </SectionBox>
          <SectionBox justifyContent='center' alignItems='center' >
            <ContentSect3 />
          </SectionBox>
        </SwipeableViews>
      </div>
    </>
  )
}

export default DemoProjects
