import React from 'react'
import '../../../styles/5-modules/parallax.sass'

function ParallaxEffect() {
  const img = 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg'

  return (
    <div className="base-wrapper">
      <div className="parallax-container">
        <div>
          <img className="background__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/dotted-background.png" />
          <img className="middle__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/stars.png" />
          <img className="foreground__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/polygons.png" />
        </div>
      </div>
    </div>
  )
}

export default ParallaxEffect
