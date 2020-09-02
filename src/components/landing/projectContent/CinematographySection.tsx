import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import ReactPlayer from 'react-player/youtube'

const useStyles = makeStyles((theme) => ({
  demoTechContent: {
    marginBottom: '1em',
    height: '500px'
  },
  container: {
    width: '80%',
    margin: '5em 0em 5em 0em',
  }
}));

function CinematographySectionSection() {
  const classes = useStyles();
  return (
    <Grid container justify='center'>
      <Grid item container className={classes.container}>
        <Grid className={classes.demoTechContent}
          item container
          direction='column' alignItems='center'
        >
          <ReactPlayer
            muted={true}
            height='100%'
            width='100%'
            controls={true}
            playing={false}
            //! turn controls on... perhaps have a vid be in youtube and just linking it...
            url={'https://www.youtube.com/watch?v=95u00GYoYbY'}
          />
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            description, github link
        </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CinematographySectionSection
