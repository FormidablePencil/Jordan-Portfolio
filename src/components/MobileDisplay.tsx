import React from 'react'
import MobileHome from './mobileComps/MobileHome';
import { withStyles, Box } from '@material-ui/core';
import { theme } from '../styles/themeStyles';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import TechPage from './mobileComps/TechPage-mobile';
import ProjectsPage from './mobileComps/ProjectsPage-mobile';
import ContactPage from './mobileComps/ContactPage-mobile';
import MenuIcon from '@material-ui/icons/Menu';

const MobileBg = withStyles({
  root: {
    backgroundColor: 'white',
    height: theme.responsiveHeight.height,
  }
})(Box);


// const MenuIconFixed = styled(MenuIcon)`

// `;

// const useStyles = makeStyles((theme) => ({ //* styled components can be replaced with this... animated.div withked with it

//   hey: {
//     // bott
//   }
// }));

const MenuIconFixed = withStyles({
  root: {
    position: 'fixed',
    top: 10,
    right: 20,
    width: 50,
    height: 50,
  }
})(MenuIcon);


function MobileDisplay() {
  //* there's unnessesary scroll that needs to be removed by making content layout fit

  return (
    <MobileBg>
      <MenuIconFixed color='primary' />
      <Router>
        <Switch>
          <Route exact path='/'>
            <MobileHome />
          </Route>
          <Route path='/tech-mobile'>
            <TechPage />
          </Route>
          <Route path='/contacts-mobile'>
            <ContactPage />
          </Route>
          <Route path='/projects-mobile'>
            <ProjectsPage />
          </Route>
        </Switch>
      </Router>
    </MobileBg >
  )
}

export default MobileDisplay
