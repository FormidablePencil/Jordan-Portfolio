import React, { useState } from 'react'
import { animated, useSpring, config } from 'react-spring'
import { LazyLoadImage } from 'react-lazy-load-image-component';


function TechIcon({ indexProps, image, blurIcons, zoomOff }:
  { indexProps, image, blurIcons, zoomOff?: boolean, }) {
  const { scale, marginLeft, marginRight } = indexProps
  const [mouseOverIcon, setMouseOverIcon] = useState(false)
  const iconScaleProps = useSpring({
    to: mouseOverIcon ? {
      transform: 'scale(1.3)'
    } : {
        transform: scale
      },
    from: {
      transform: scale
    },
    config: config.gentle
  })

  const onMouseEnter = () => {
    if (zoomOff) return
    setMouseOverIcon(true)
    blurIcons(true)
  }

  const onMouseLeave = () => {
    if (zoomOff) return
    setMouseOverIcon(false)
    blurIcons(false)
  }

  return (
    <div
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
      style={{ marginLeft, marginRight }}
    >
      <animated.div
        style={{ ...iconScaleProps }}
      >
        <LazyLoadImage
          // className={`tech-icon ${zoomLevelClassName}`}
          alt={image.title}
          src={image.src}
          height={80}
          width={80}
          effect='blur'
        />
      </animated.div>
    </div>
  )
}

export default TechIcon
