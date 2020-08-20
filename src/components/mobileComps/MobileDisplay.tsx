import React, { useState } from 'react'
import MobileHome from './MobileHome';
import { withStyles, Box, makeStyles, Grid, Modal } from '@material-ui/core';
import { theme } from '../../styles/themeStyles';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import TechPage from './TechPage-mobile';
import ProjectsPage from './ProjectsPage-mobile';
import ContactPage from './ContactPage-mobile';
import { Menu, HomeSharp } from '@material-ui/icons';
import Navigator from './Navigator';
import { GridScreenHeight } from '../../styles/customMaterialUiComp';
import LandingScreenMobile from './LandingScreenMobile';

const MobileBg = withStyles({
  root: {
    backgroundColor: 'white',
    height: theme.responsiveHeight.height,
  }
})(Box);

const useStyles = makeStyles((theme) => ({
  navBtnsContainer: {
    position: 'fixed',
    top: 10,
    padding: '0 1em'
  },
  btnDimension: {
    width: 50,
    height: 50,
  },
}));

function MobileDisplay() {
  const classes = useStyles();
  const [navModalOpen, setNavModalOpen] = useState(false)
  //* there's unnessesary scroll that needs to be removed by making content layout fit

  const NavigationButtons = () =>
    <Grid container justify='space-between' className={classes.navBtnsContainer}>
      <Link to='/'>
        <HomeSharp className={classes.btnDimension} color='primary' />
      </Link>
      {!navModalOpen &&
        <Menu onClick={() => setNavModalOpen(true)} className={classes.btnDimension} color='primary' />
      }
    </Grid>


  return (
    <MobileBg>
      <LandingScreenMobile />
      <Router>
        <Modal onClick={() => setNavModalOpen(false)} open={navModalOpen}>
          <GridScreenHeight container direction='column' justify='center'>
            <Navigator />
          </GridScreenHeight>
        </Modal>
        <Switch>
          <Route exact path='/'>
            <MobileHome />
          </Route>
          <Route path='/tech-mobile'>
            <NavigationButtons />
            <TechPage />
          </Route>
          <Route path='/contacts-mobile'>
            <NavigationButtons />
            <ContactPage />
          </Route>
          <Route path='/projects-mobile'>
            <NavigationButtons />
            <ProjectsPage />
          </Route>
        </Switch>
      </Router>
    </MobileBg >
  )
}

export default MobileDisplay
