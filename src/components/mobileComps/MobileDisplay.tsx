import React, { useState } from 'react'
import MobileHome from './MobileHome';
import { withStyles, Box, Modal } from '@material-ui/core';
import { theme } from '../../styles/themeStyles';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import TechPage from './TechPage-mobile';
import ProjectsPage from './ProjectsPage-mobile';
import Navigator from './Navigator';
import { GridScreenHeight } from '../../styles/customMaterialUiComp';
import LandingScreenMobile from './LandingScreenMobile';
import BottomNav from './layouts/BottomNav';
import { ExampleComponent } from 'parallax-effect';

const MobileBg = withStyles({
  root: {
    backgroundColor: 'white',
    height: theme.responsiveHeight.height,
  }
})(Box);

function MobileDisplay() {
  const [navModalOpen, setNavModalOpen] = useState(false)

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
            <div className='mobileContactsScreen'>
              <MobileHome />
              <BottomNav />
            </div>
          </Route>
          <Route path='/tech-mobile'>
            <div className='mobileContactsScreen'>
              <TechPage />
              <BottomNav />
            </div>
          </Route>
          {/* <Route path='/contacts-mobile'>
            <div className='mobileContactsScreen'>
              <ContactPage />
              <BottomNav />
            </div>
          </Route> */}
          <Route path='/projects-mobile'>
            <div className='mobileContactsScreen'>
              <ProjectsPage />
              <BottomNav />
            </div>
          </Route>
        </Switch>
      </Router>
    </MobileBg >
  )
}

export default MobileDisplay
