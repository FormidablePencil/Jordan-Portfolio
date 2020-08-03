import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { images } from '../../assets/constants/staticData';
import Navbar from '../Navbar';

function DemoTech() {

  const calcImgZoom = (index) => {
    if (images.length === 3) {
      if (index === 0 || index === 2) {
        return 'zoomLvl2'
      } else return 'zoomLvl1'
    } else if (images.length === 4) {
      if (index === 0 || index === 3) { //Make a function
        return 'zoomLvl2'
      } else return 'zoomLvl1'
    } else return 'zoomLvl1'
  }

  return (
    <div className="demo-tech flex">
      <Navbar />
      <div className="container flex justify-evenly align-center">
        {images.map((image, index) =>
          <LazyLoadImage
            className={calcImgZoom(index)}
            alt={image.title}
            src={image.src}
            height={image.height}
            effect='blur'
            width={image.width} />
        )}
      </div>
    </div>
  )
}

export default DemoTech
