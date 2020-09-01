import React from 'react'
import { makeStyles } from '@material-ui/core'
import ParallaxEffect from './ParallaxEffect';

function ContentSectionImages() {
  const classes = useStyles();
  return (
    <ParallaxEffect />
  )
}

export default ContentSectionImages


const useStyles = makeStyles((theme) => ({ //% parrallax will be acheived purely with css perspective property.
  wrapper: {
    // backgroundColor: 'orange',
    height: '100vh',
    width: '500px',
    overflowX: 'hidden', // perhaps neccessary prop
    overflowY: 'auto', // perhaps neccessary prop
    perspective: '1px', // creates a depth dimension
    position: 'relative',
  },
  parallax: {

  },
  shard: {
  }
}));