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
      fontFamily: 'Roboto-Slab-reg',
      color: '#D9D9D9',
    },
    body2: {
      fontSize: '1.3em',
    }
  },
  palette: {
    text: {
      primary: '#171717',
      secondary: '#B8DDCE',
    }
  },
  responsiveHeight: {
    height: isMobileScreenDimensions() ? window.innerHeight : 'calc(100vh - 74px)',
  },
})

export const barColor = '#2E3D45'