import React from 'react';
import './styles/main.sass'
import Landing from './pages/Landing';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styles/themeStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cms from './pages/Cms';
// import { isMobileScreenDimensions } from './helperFuncs';

//* prevent zoom in on mobile devices
//* add cover landing page that slides up away. Landing are often for the looks and tell user what's it about has a call to action.
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/cms'>
            <Cms />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}



export default App;
