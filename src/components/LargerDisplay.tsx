import React from 'react'
import ScrollableTabsWrapper, { NavTabsWrapper } from './scrollable-tabs'
import Intro from './landing/Intro';
import DemoTech from './mobileComps/DemoTech';
import Contacts from './landing/Contacts';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { rootT } from '../storeConfig';
import { CrystalParallax } from 'parallax-effect-crystals';
import { navbarColor } from '../styles/themeStyles';

export const tabSectionTitles = [
  { tabTitle: 'Home' },
  { tabTitle: 'Tech' },
  { tabTitle: 'Projects' },
  { tabTitle: 'contacts' },
]

function LargerDisplay() {
  const { rawCrystalData } = useSelector((state: rootT) => state)

  return (
    <>
      <ScrollableTabsWrapper
      navbarColor={navbarColor}
        heightOfTabs={35}
        tabSectionTitles={[
          tabSectionTitles[0].tabTitle,
          tabSectionTitles[1].tabTitle,
          tabSectionTitles[2].tabTitle,
          tabSectionTitles[3].tabTitle,
        ]}
      >
        <NavTabsWrapper
          // uniqueTabTitle={'section1'} //~ remove
          anchor={tabSectionTitles[0].tabTitle}
          bgImg={{ src: require('../assets/images/bgSect1.jpg'), alt: '' }}>
          <Intro />
        </NavTabsWrapper>
        <NavTabsWrapper
          anchor={tabSectionTitles[1].tabTitle}
          bgImg={{ src: require('../assets/images/bgSect2.jpg'), alt: '' }}>
          <Container>
            <div style={{ height: '100vh', paddingTop: 15 }}>
              <DemoTech />
            </div>
          </Container>
        </NavTabsWrapper>
        <NavTabsWrapper
          anchor={tabSectionTitles[2].tabTitle}
          bgImg={{ src: require('../assets/images//bgSect3.jpg'), alt: '' }}
        >

          <div>
            <CrystalParallax
              withGui={false}
              pulledRawCrystalData={rawCrystalData} />
            {/* <DemoProjects height='100vh' /> */}
            {/* //! make BioContacts seciton zIndex greater than this so that this component was under the component it's currently overlapping */}

          </div>

        </NavTabsWrapper>
        <NavTabsWrapper
          anchor={tabSectionTitles[3].tabTitle}
          bgImg={{ src: require('../assets/images/bgSect3.jpg'), alt: '' }}>
          <Container maxWidth='md' style={{ overflowY: 'scroll' }}>
            <Contacts />
          </Container>
        </NavTabsWrapper>
      </ScrollableTabsWrapper>
    </>
  )
}

export default LargerDisplay


// {/* <span>Photo by <a href="https://unsplash.com/@jmckinven?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">James McKinven</a> on <a href="https://unsplash.com/s/photos/video-edit?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */ }
// {/* <span>Photo by <a href="https://unsplash.com/@paramir?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ehud Neuhaus</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */ }