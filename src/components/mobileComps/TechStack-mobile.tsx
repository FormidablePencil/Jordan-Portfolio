import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import TechIcon from '../reusables/TechIcon';
import { GridFlex } from '../../styles/customMaterialUiComp';
import { calcIconZoomAndMargin } from '../../helperFuncs';
import { useSelector } from 'react-redux';
import { rootT } from '../../storeConfig';


const useStyles = makeStyles((theme) => ({
  titleGridHeight: {
    height: '5em'
  }
}));

function TechStack() {
  const classes = useStyles();
  const {tech} = useSelector((state: rootT) => state.portfolioContent)
  const blurIcons = () => { }

  return (
    <GridFlex container direction='column' justify='flex-start' wrap='nowrap'>
      <Grid className={classes.titleGridHeight} container item justify='center'>
        <Typography variant='h3' color='textPrimary'>Tech Stack</Typography>
      </Grid>
      <Grid item container direction='row' justify='center'>
        {tech.map((item, index) =>
          <TechIcon
            zoomOff={true}
            key={index}
            techProps={item}
            blurIcons={blurIcons}
            index={index}
            indexProps={calcIconZoomAndMargin(index)}
          />
        )}
      </Grid>
    </GridFlex>
  )
}

export default TechStack
