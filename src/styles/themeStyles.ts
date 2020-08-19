import { createMuiTheme, ThemeOptions } from "@material-ui/core";
import { isMobileScreenDimensions } from "../helperFuncs";
import { blueGrey } from "@material-ui/core/colors";

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    responsiveHeight?: {
      height?: React.CSSProperties['height']
    }
  }
  interface ThemeOptions {
    responsiveHeight?: {
      height?: React.CSSProperties['height']

    }
  }
}

export const theme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: 'Roboto-Slab-reg'
    }
  },
  palette: {
    text: {
      primary: '#525252',
      secondary: blueGrey[900],
    }
  },
  responsiveHeight: {
    height: isMobileScreenDimensions() ? window.innerHeight : 'calc(100vh - 74px)',
  },
})