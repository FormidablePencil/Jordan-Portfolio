import React from 'react';
import './styles/main.sass'
import Landing from './pages/Landing';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styles/themeStyles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './storeConfig';
// import { isMobileScreenDimensions } from './helperFuncs';
import { CrystalParallaxProvider } from 'parallax-effect-crystals';
import 'parallax-effect-crystals/dist/index.css';


//* prevent zoom in on mobile devices
//* add cover landing page that slides up away. Landing are often for the looks and tell user what's it about has a call to action.
function App() {
  const store = configureStore()

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CrystalParallaxProvider>
          <BrowserRouter>
            <Landing />
          </BrowserRouter>
        </CrystalParallaxProvider>
      </ThemeProvider>
    </Provider>
  );
}



export default App;
