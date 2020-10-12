import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import TechIcon from '../reusables/TechIcon';
import { useSpring, config, animated } from 'react-spring';
import { withStyles, Grid, makeStyles } from '@material-ui/core';
import { GridScreenHeight } from '../../styles/customMaterialUiComp';
import { useSelector } from 'react-redux';
import { rootT } from '../../storeConfig';

const DemoTech = () => {
  const classes = useStyles();
  const techStack = useSelector((state: rootT) => state.portfolioContent.tech)
  const slowFadeInVidAnim = { mass: 10, tension: 200, friction: 102 }
  const [iconHoveringOver, setIconHoveringOver] = useState(0)
  const [iconsBlur, setIconsBlur] = useState(false)
  const iconsBlurProps = useSpring({
    opacity: iconsBlur ? .3 : 1,
    config: config.molasses,
    delay: iconsBlur ? 1000 : 0
  })
  const toggleVidOpacity = useSpring({
    opacity: iconsBlur ? 1 : 0,
    config: iconsBlur ? slowFadeInVidAnim : config.slow,
  })

  const calcImgZoom = (index): { scale, marginLeft, marginRight } => {
    let scale = 'scale(1.3)'
    let marginLeft = '1em'
    let marginRight = '1em'
    if (techStack.length === 3) {
      if (index === 0 || index === 2) {
        scale = 'scale(1)'
        marginLeft = '.3em'
        marginRight = '.3em'
      }
    } else if (techStack.length === 4) {
      if (index === 0 || index === 3) {
        scale = 'scale(1)'
        marginLeft = '.3em'
        marginRight = '.3em'
      }
    }
    return { scale, marginLeft, marginRight }
  }

  const blurIcons = (boolean) => setIconsBlur(boolean)

  return (
    <GridScreenHeight container>
      <GridRelative item>
        <animated.div className={classes.vidContainer} style={toggleVidOpacity}>
          <ReactPlayer
            muted={true}
            height='100%'
            width='100%'
            playing={true}
            loop={true}
            url={techStack[iconHoveringOver].video} />
        </animated.div>
        <animated.div className={classes.iconContainer} style={iconsBlurProps}>
          {techStack.map((techProps, index) =>
            <TechIcon
              key={index}
              setIconHoveringOver={setIconHoveringOver}
              techProps={techProps}
              blurIcons={blurIcons}
              indexProps={calcImgZoom(index)}
              index={index}
            />
          )}
        </animated.div>
      </GridRelative>
    </GridScreenHeight>
  )
}

export default DemoTech

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: 'flex', flexDirection: 'row', position: 'absolute',
  },
  vidContainer: {
    width: '100%', height: '100%'
  }
}));

const GridRelative = withStyles({
  root: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw',
  }
})(Grid);