import React from 'react';
import './styles/main.sass'
import Landing from './pages/Landing';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styles/themeStyles';
// import { isMobileScreenDimensions } from './helperFuncs';

//* prevent zoom in on mobile devices
function App() {
  // console.log(theme.responsiveHeight.height);
  // const [mobileScreen, setMobileScreen] = useState(false)
  // const [desktopTheme, setDesktopTheme] = useState(theme)
  // const [mobileTheme, setMobileTheme] = useState(theme)
  // let mobileScreenRef = useRef(false)

  // useEffect(() => {
  //   theme.responsiveHeight.height = window.innerHeight
  //   setMobileTheme(theme)
  //   window.addEventListener('resize', changeHeight)
  //   return () => window.removeEventListener('resize', changeHeight)
  // }, [])

  // const changeHeight = () => {
  //   console.log(desktopTheme.responsiveHeight.height, 'desktopTheme',
  //     mobileTheme.responsiveHeight.height, 'mobileScreen');

  //   let isMobile = true
  //   if (window.innerWidth < 800) isMobile = true
  //   else isMobile = false
  //   if (isMobile && !mobileScreenRef.current) {
  //     mobileScreenRef.current = true
  //     setMobileScreen(true)
  //   } else if (!isMobile && mobileScreenRef.current) {
  //     mobileScreenRef.current = false
  //     setMobileScreen(false)
  //   }
  // }

  // const isMobileScreenDimensions = () => {
  //   if (window.innerWidth < 800) return true
  //   else return false
  // }


  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}



export default App;
