import React from 'react'
import ScrollableTabsWrapper, { NavTabsWrapper } from './scrollable-tabs'
import Intro from './landing/Intro';
import DemoTech from './mobileComps/DemoTech';
import Contacts from './landing/Contacts';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { rootT } from '../storeConfig';
import { ExampleComponent, CrystalParallaxEffectGui } from 'parallax-effect';

function LargerDisplay() {
  const { portfolioContent } = useSelector((state: rootT) => state)

  return (
    <>
      <ScrollableTabsWrapper
        heightOfTabs={35}
        tabSectionTitles={[
          portfolioContent.tabSectionTitles[0].tabTitle,
          portfolioContent.tabSectionTitles[1].tabTitle,
          portfolioContent.tabSectionTitles[2].tabTitle,
          portfolioContent.tabSectionTitles[3].tabTitle,
        ]}
      >
        <NavTabsWrapper
          // uniqueTabTitle={'section1'} //~ remove
          anchor={portfolioContent.tabSectionTitles[0].tabTitle}
          bgImg={{ src: require('../assets/images/bgSect1.jpg'), alt: '' }}>
          <Intro />
        </NavTabsWrapper>
        <NavTabsWrapper
          anchor={portfolioContent.tabSectionTitles[1].tabTitle}
          bgImg={{ src: require('../assets/images/bgSect2.jpg'), alt: '' }}>
          <Container>
            <div style={{ height: '100vh', paddingTop: 15 }}>
              <DemoTech />
            </div>
          </Container>
        </NavTabsWrapper>
        <NavTabsWrapper
          anchor={portfolioContent.tabSectionTitles[2].tabTitle}
          bgImg={{ src: require('../assets/images//bgSect3.jpg'), alt: '' }}
        >
          <div style={{ height: '100vh' }}> //! take in to account that mobile browsers don'tS vh & vw */
          {/* <DemoProjects height='100vh' /> */}
            {/* //! make BioContacts seciton zIndex greater than this so that this component was under the component it's currently overlapping */}
          </div>
        </NavTabsWrapper>
        <NavTabsWrapper
          anchor={portfolioContent.tabSectionTitles[3].tabTitle}
          bgImg={{ src: require('../assets/images/bgSect3.jpg'), alt: '' }}

        >
          <Container maxWidth='md'>
            <Contacts />
            <CrystalParallaxEffectGui />
          </Container>
        </NavTabsWrapper>
      </ScrollableTabsWrapper>
    </>
  )
}

export default LargerDisplay


// {/* <span>Photo by <a href="https://unsplash.com/@jmckinven?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">James McKinven</a> on <a href="https://unsplash.com/s/photos/video-edit?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */ }
// {/* <span>Photo by <a href="https://unsplash.com/@paramir?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ehud Neuhaus</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */ }