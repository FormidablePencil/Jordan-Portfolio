import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { images } from '../../assets/constants/staticData';
import LandingContainer from '../reusables/LandingContainer';
import TabNav from '../reusables/TabNav';

const DemoTech = ({ tabFixed, tabFixedTopOffset, secitonRef }) => {
  // const demoTechRef = useRef(null)
  // const [tabFixed, setTabFixed] = useState(false)
  // const tabFixedTopOffset = 48

  const calcImgZoom = (index) => {
    if (images.length === 3) {
      if (index === 0 || index === 2) {
        return 'zoomLvl2'
      } else return 'zoomLvl1'
    } else if (images.length === 4) {
      if (index === 0 || index === 3) {
        return 'zoomLvl2'
      } else return 'zoomLvl1'
    } else return 'zoomLvl1'
  }

  return (
    <TabNav
      tabBarClassName='customTabBar'
      tabClassName='customTab'
      className='demo-tech flex'
      secitonRef={secitonRef}
      tabFixed={tabFixed}
      tabFixedTopOffset={tabFixedTopOffset}
    >
      <LandingContainer>
        {images.map((image, index) =>
          <LazyLoadImage
            className={calcImgZoom(index)}
            alt={image.title}
            src={image.src}
            height={image.height}
            effect='blur'
            width={image.width} />
        )}
      </LandingContainer>
    </TabNav>
  )
}

export default DemoTech
