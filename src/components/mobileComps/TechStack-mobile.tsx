import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import TechIcon from '../reusables/TechIcon';
import { demoTechContent } from '../../constants/staticData';
import { GridFlex } from '../../styles/customMaterialUiComp';
import { calcIconZoomAndMargin } from '../../helperFuncs';


const useStyles = makeStyles((theme) => ({
  titleGridHeight: {
    height: '5em'
  }
}));

function TechStack() {
  const classes = useStyles();
  //tech icons, creative icons or images.
  //colorful folder icon
  //icon of colorful person


  const blurIcons = () => { }

  return (
    <GridFlex container direction='column' justify='flex-start' wrap='nowrap'>
      <Grid className={classes.titleGridHeight} container item justify='center'>
        <Typography variant='h3' color='textPrimary'>Tech Stack</Typography>
      </Grid>
      <Grid item container direction='row' justify='center'>
        {demoTechContent.map((iconsProps, index) =>
          <TechIcon
            zoomOff={true}
            key={index}
            image={iconsProps}
            blurIcons={blurIcons}
            indexProps={calcIconZoomAndMargin(index)}
          />
        )}
      </Grid>
    </GridFlex>
  )
}

export default TechStack
