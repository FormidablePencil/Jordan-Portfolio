import React from 'react'
import LandingContainer from '../reusables/LandingContainer'
import { profile } from '../../assets/constants/staticData'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Bio({tabFixed, tabFixedTopOffset, secitonRef}) {
  const imgFilterStyle = {
    height: profile.height,
    width: profile.width,
    background: profile.filter
  }

  return (
    <div className="bio flex">
      <LandingContainer>
        <div className="flex flex-1 justify-evenly align-center">
          <p className='bio-paragraph'>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries
            but also the leap into electronic
            </p>
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
      </LandingContainer>
    </div>
  )
}

export default Bio
