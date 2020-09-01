import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, withStyles, Box, Grid, makeStyles, Container } from '@material-ui/core';
import ContentSectionImages from './projectContent/ContentSectionImages';
import CinematographySection from './projectContent/CinematographySection';
import TechSection from './projectContent/TechSection';

const SectionBox = withStyles({
  root: {
    display: 'flex',
  }
})(Box);


const useStyles = makeStyles((theme) => ({
  tabsContainer: {
    position: 'sticky',
    marginTop: '-5px',
    top: '3.8em',
    bakgroundColor: 'orange',
    height: '3em',
    width: '100%',
    zIndex: 10,
    backgroundColor: 'grey'
  },
  container: {
    backgroundColor: '#E3E3E3',
  }
}));

function DemoProjects({ height }) {
  const classes = useStyles();
  const [index, setIndex] = useState({ index: 0 });

  const handleChange = (index, value) => setIndex({ index: value })
  const handleChangeIndex = (index) => setIndex({ index })

  const heightMinusSomeMargin = `calc(${height} - 20px)` //20px is the tab line
  const heightMinusSomeMarginTExper = `calc((${height} - 20px)/ 2)` //20px is the tab line

  return (
    <Grid item container direction='column'>
      <div className={classes.tabsContainer} >
        <Tabs value={index} onChange={handleChange}>
          <Tab className='tab1' label="tab1 photoshop" />
          <Tab className='tab2' label="tab2 cinematography" />
          <Tab className='tab3' label="tab3 technologies" />
        </Tabs>
      </div>
      <Grid item>
        <SwipeableViews index={index.index} onChangeIndex={handleChangeIndex}>
          <SectionBox justifyContent='center' alignItems='center'>
            <Container
              className={classes.container}
              style={{ height: heightMinusSomeMarginTExper }}
            >
              <ContentSectionImages />
            </Container>
          </SectionBox>
          <SectionBox justifyContent='center' alignItems='center' >
            <Container
              className={classes.container}
              style={{ height: heightMinusSomeMargin }}>
              <CinematographySection />
            </Container>
          </SectionBox>
          <SectionBox justifyContent='center' alignItems='center' >
            <Container
              className={classes.container}
              style={{ height: heightMinusSomeMargin }}
            >
              <TechSection />
            </Container>
          </SectionBox>
        </SwipeableViews>
      </Grid>
    </Grid >
  )
}

export default DemoProjects
