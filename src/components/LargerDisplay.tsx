import React from 'react'
import ScrollableTabsWrapper, { NavTabsWrapper } from './scrollable-tabs'
import Intro from './landing/Intro';
import DemoTech from './mobileComps/DemoTech';
import DemoProjects from './landing/DemoProjects';
import Contacts from './landing/Contacts';
import Profile from './mobileComps/Profile';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { rootT } from '../storeConfig';

function LargerDisplay() {
  const { portfolioContent } = useSelector((state: rootT) => state)

  return (
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
        tabColor='white'
        // uniqueTabTitle={'section1'} //~ remove
        anchor={portfolioContent.tabSectionTitles[0].tabTitle}
        bgImg={{ src: require('../assets/images/bgWhite.jpg'), alt: '' }}>
        <Intro />
      </NavTabsWrapper>
      <NavTabsWrapper
        tabColor='white'
        anchor={portfolioContent.tabSectionTitles[1].tabTitle}
        bgImg={{ src: require('../assets/images/bgWhite2.jpg'), alt: '' }}>
        <Container maxWidth='md' >
          <div style={{ height: '100vh' }}>
            <DemoTech />
          </div>
        </Container>
      </NavTabsWrapper>
      <NavTabsWrapper
        tabColor='white'
        anchor={portfolioContent.tabSectionTitles[2].tabTitle}
        bgImg={{ src: require('../assets/images//bgWhite3.jpg'), alt: '' }}>
        <div style={{ height: '100vh' }}> //! take in to account that mobile browsers don'tS vh & vw */
          <DemoProjects height='100vh' /> {/* //! make BioContacts seciton zIndex greater than this so that this component was under the component it's currently overlapping */}
        </div>
      </NavTabsWrapper>
      <NavTabsWrapper
        tabColor='white'
        anchor={portfolioContent.tabSectionTitles[3].tabTitle}
        bgImg={{ src: require('../assets/images/bgWhite4.jpg'), alt: '' }}>
        <Container maxWidth='md'>
          <Profile />
          <Contacts />
        </Container>
      </NavTabsWrapper>
    </ScrollableTabsWrapper>
  )
}

export default LargerDisplay
