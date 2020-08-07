import React, { useState } from 'react'
import { animated, useSpring, config } from 'react-spring'
import { LazyLoadImage } from 'react-lazy-load-image-component';


function TechIcon({ zoomLevelClassName, image, blurIcons }) {
  const [mouseOverIcon, setMouseOverIcon] = useState(false)
  const iconScaleProps = useSpring({ transform: mouseOverIcon ? 'scale(1.2)' : 'scale(1)', config: config.gentle })

  const onMouseEnter = () => {
    setMouseOverIcon(true)
    blurIcons(true)
  }

  const onMouseLeave = () => {
    setMouseOverIcon(false)
    blurIcons(false)
  }

  return (
    <animated.div
      onMouseEnter={() => onMouseEnter()}
      style={iconScaleProps}
      onMouseLeave={() => onMouseLeave()}>
      <LazyLoadImage
        className={`tech-icon ${zoomLevelClassName}`}
        alt={image.title}
        src={image.src}
        height={image.height}
        effect='blur'
        width={image.width} />
    </animated.div>
  )
}

export default TechIcon
