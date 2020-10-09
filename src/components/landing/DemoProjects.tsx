import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, withStyles, Box, Grid, makeStyles, Container } from '@material-ui/core';
import ContentSectionImages from './projectContent/ContentSectionImages';
import CinematographySection from './projectContent/CinematographySection';
import TechSection from './projectContent/TechSection';
import { barColor, theme } from '../../styles/themeStyles';
import darken from '@bit/styled-components.polished.color.darken';


const SectionBox = withStyles({
  root: {
    display: 'flex',
  }
})(Box);


const useStyles = makeStyles((theme) => ({
  tabsContainer: {
    position: 'sticky',
    marginTop: '-12px',
    top: '3.2em',
    bakgroundColor: 'orange',
    height: '3em',
    width: '100%',
    zIndex: 10,
    backgroundColor: darken(2 * .02, barColor),
  },
  container: {
    backgroundColor: 'black',
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
          <Tab className='tab1'
            style={{
              color: index.index === 0 ? 'white'
                : theme.palette.text.secondary
            }} label="tabbb1 photoshop" />
          <Tab className='tab2'
            style={{
              color: index.index === 1 ? 'white'
                : theme.palette.text.secondary
            }}
            label="tab2 cinematography" />
          <Tab className='tab3'
            style={{
              color: index.index === 2 ? 'white'
                : theme.palette.text.secondary
            }}
            label="tab3 technologies" />
        </Tabs>
      </div>
      <Grid item>
        <SwipeableViews index={index.index} onChangeIndex={handleChangeIndex}>

          <SectionBox justifyContent='center' alignItems='center'>
            <Container
              disableGutters
              className={classes.container}
              style={{ height: heightMinusSomeMargin }}
            >
              <ContentSectionImages />
            </Container>
          </SectionBox>

          <SectionBox justifyContent='center' alignItems='center' >
            <Container
              className={classes.container}
              style={{ height: heightMinusSomeMargin }}
            >
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
