import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { profile } from '../../constants/staticData';

function Bio() {
  const imgFilterStyle = {
    height: profile.height,
    width: profile.width,
    background: profile.filter
  }

  return (
    <div className="bio-container">
      {/* <div className="bio-paragraph-container"> */}
      <p className='bio-paragraph'>
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries
        but also the leap into electronic
            </p>
      {/* </div> */}
      <div
        className="profile-image-container">
        <LazyLoadImage
          style={{ objectPosition: profile.objectPosition }}
          className='profile-image'
          alt='profile'
          src={profile.src}
          height={profile.height}
          effect='blur'
          width={profile.width} />
        <div
          style={imgFilterStyle}
          className="img-filter" />
      </div>
    </div>
  )
}

export default Bio
