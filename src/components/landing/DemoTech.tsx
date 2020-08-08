import React, { useState } from 'react'
import { demoTechContent } from '../../assets/constants/staticData';
import TabNav from '../reusables/TabNav';
import ReactPlayer from 'react-player'
import TechIcon from './TechIcon';
import { useSpring, config, animated } from 'react-spring';

const DemoTech = ({ tabFixed, tabFixedTopOffset, sectionRef, tabTitle }) => {
  // const demoTechRef = useRef(null)
  // const [tabFixed, setTabFixed] = useState(false)
  // const tabFixedTopOffset = 48
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
    // delay: iconsBlur ? 0 : 0
  })

  const calcImgZoom = (index) => {
    if (demoTechContent.length === 3) {
      if (index === 0 || index === 2) {
        return 'zoomLvl2'
      } else return 'zoomLvl1'
    } else if (demoTechContent.length === 4) {
      if (index === 0 || index === 3) {
        return 'zoomLvl2'
      } else return 'zoomLvl1'
    } else return 'zoomLvl1'
  }

  const blurIcons = (boolean) => setIconsBlur(boolean)

  return (
    // <div style={{ height: '100vh' }}>
    <div id={tabTitle}>
      <TabNav
        className='demo-tech flex'
        tabBarClassName='customTabBar'
        tabClassName='customTab'
        sectionRef={sectionRef} tabTitle={tabTitle}
        tabFixed={tabFixed}
        tabFixedTopOffset={tabFixedTopOffset}
      >
        <animated.div
          style={toggleVidOpacity}
          className='video-player-container'>
          <ReactPlayer
            muted={true}
            height='50%'
            width='75%'
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
            playing={true}
            loop={true}
            url={demoTechContent[0].video} />
        </animated.div>
        <animated.div
          style={iconsBlurProps}
          className="technologies-icons-container">
          {demoTechContent.map((image, index) =>
            <TechIcon
              image={image}
              blurIcons={blurIcons}
              zoomLevelClassName={calcImgZoom(index)} />
          )}
        </animated.div>
      </TabNav>
      {/* </div> */}
    </div>
  )
}

export default DemoTech
