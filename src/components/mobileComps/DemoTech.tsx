import React, { useState } from 'react'
import { demoTechContent } from '../../constants/staticData';
import ReactPlayer from 'react-player'
import TechIcon from '../reusables/TechIcon';
import { useSpring, config, animated } from 'react-spring';
import { withStyles, Grid } from '@material-ui/core';
import { GridScreenHeight } from '../../styles/customMaterialUiComp';
import styled from 'styled-components';

const DemoTech = () => {
  const slowFadeInVidAnim = { mass: 10, tension: 200, friction: 102 }
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
    if (demoTechContent.length === 3) {
      if (index === 0 || index === 2) {
        scale = 'scale(1)'
        marginLeft = '.3em'
        marginRight = '.3em'
      }
    } else if (demoTechContent.length === 4) {
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
        <VidContainer style={toggleVidOpacity}>
          <ReactPlayer
            muted={true}
            height='100%'
            width='100%'
            playing={true}
            loop={true}
            url={demoTechContent[0].video} />
        </VidContainer>
        <IconContainer style={iconsBlurProps}>
          {demoTechContent.map((image, index) =>
            <TechIcon
              image={image}
              blurIcons={blurIcons}
              indexProps={calcImgZoom(index)} />
          )}
        </IconContainer>
        {/* </animated.div> */}
      </GridRelative>
    </GridScreenHeight>
  )
}

export default DemoTech

const VidContainer = styled(animated.div)``
const IconContainer = styled(animated.div)`
  display: flex; flex-direction: row; position: absolute;
`
const GridRelative = withStyles({
  root: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw',
  }
})(Grid);