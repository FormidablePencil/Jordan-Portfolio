import { withStyles, Grid } from "@material-ui/core";
import { theme } from "./themeStyles";

export const GridScreenHeight = withStyles({
  root: { ...theme.responsiveHeight, },
})(Grid);


export const GridFlex = withStyles({
  root: { flex: 1 }
})(Grid);